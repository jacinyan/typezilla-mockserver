import * as initialData from '../db/data/initialData'
import {
  epicDB,
  swimlaneDB,
  projectDB,
  tagDB,
  taskDB,
  taskTypeDB,
  userDB
} from '../db/rest'

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
}

const pickId = (item) => item.id

export const bootstrap = (id) => {
  taskTypeDB.push(assignId(id, initialData.taskTypes))
  projectDB.push(assignId(id, initialData.projects))
  tagDB.push(assignId(id, initialData.tags))
  swimlaneDB.push(assignId(id, initialData.swimlanes))
  epicDB.push(assignId(id, initialData.epics))
  taskDB.push(assignId(id, initialData.tasks))
  userDB.push(assignId(id, initialData.users))

  const userIds = userDB.queryByOwnerId(id).map(pickId)
  const projectIds = projectDB.queryByOwnerId(id).map(pickId)
  const swimlaneIds = swimlaneDB.queryByOwnerId(id).map(pickId)
  const epicIds = epicDB.queryByOwnerId(id).map(pickId)
  const tagIds = tagDB.queryByOwnerId(id).map(pickId)
  const typeIds = taskTypeDB.queryByOwnerId(id).map(pickId)

  // projectIds.forEach(projectId => {
  //   swimlaneDB.push(assignId(id, initialData.swimlanes, { projectId }));
  // });
  // projectIds.forEach(projectId => {
  //   taskDB.push(assignId(id, initialData.tasks, { projectId }));
  // });

  projectDB.queryByOwnerId(id).forEach((project) =>
    projectDB.update(project.id, {
      projectLeadId: userIds.random()
    })
  )
  swimlaneDB.queryByOwnerId(id).forEach((swimlane) => {
    swimlaneDB.update(swimlane.id, {
      projectId: projectIds.random()
    })
  })
  epicDB.queryByOwnerId(id).forEach((epic) => {
    epicDB.update(epic.id, {
      projectId: projectIds[0]
    })
  })
  taskDB.queryByOwnerId(id).forEach((task) =>
    taskDB.update(task.id, {
      tags: [tagIds.random()],
      reporterId: userIds.random(),
      assigneeId: userIds.random(),
      projectId: projectIds.random(),
      epicId: epicIds.random(),
      swimlaneId: swimlaneIds.random(),
      typeId: typeIds.random()
    })
  )
}

const assignId = (userId, list, other) => {
  return list.map((item) => ({ ...item, ownerId: userId, ...other }))
}
