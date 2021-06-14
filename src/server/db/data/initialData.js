export const taskTypes = [
  {
    name: 'task'
  },
  {
    name: 'bug'
  }
]

export const tags = [
  {
    name: 'Open'
  },
  {
    name: 'In Progress'
  },
  {
    name: 'Closed'
  }
]

export const epics = [
  {
    name: 'Drivers Equipment Development',
    start: new Date('2021-1-10').getTime(),
    end: new Date('2021-02-11').getTime()
  },
  {
    name: 'Maps & Navigation Development',
    start: new Date('2021-02-12').getTime(),
    end: new Date('2021-03-14').getTime()
  },
  {
    name: 'Purchase Order Development',
    start: new Date('2021-03-08').getTime(),
    end: new Date('2021-04-09').getTime()
  }
]

export const swimlanes = [
  {
    name: 'To Do'
  },
  {
    name: 'In Progress'
  },
  {
    name: 'Done'
  }
]

export const users = [
  {
    name: 'Hewitt McGowan',
    team: 'Delivery'
  },
  {
    name: 'Ed Grylls ',
    team: 'Group Buying'
  },
  {
    name: 'Flora Cheng',
    team: 'Headquarters'
  },
  {
    name: 'Jane Wang',
    team: 'Service Gateway'
  }
]

export const projects = [
  {
    name: 'Delivery Management System',
    projectLeadId: 1,
    team: 'Delivery',
    createdAt: 1609253542213
  }
]

export const tasks = [
  {
    name: 'Drivers Registration Development',
    tags: [1, 2],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: 'Complete the task ASAP'
  },
  {
    name: 'Drivers Authentication Development',
    tags: [2],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: 'With JWT'
  },
  {
    name: 'Unit Tests',
    tags: [1],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Optimisation',
    tags: [1],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Authorisation',
    tags: [1],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'UI Development',
    tags: [1],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Self Testing',
    tags: [1],
    reporterId: 1,
    assigneeId: 2,
    epicId: 1,
    swimlaneId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  }
]
