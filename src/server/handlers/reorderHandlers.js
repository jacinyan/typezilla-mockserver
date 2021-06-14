import { rest } from 'msw'
import { swimlaneDB, taskDB } from '../db/rest'

const apiUrl = process.env.REACT_APP_API_URL
export const reorderHandlers = [
  rest.post(`${apiUrl}/swimlanes/reorder`, async (req, res, ctx) => {
    const { fromId, referenceId, type } = req.body
    await swimlaneDB.reorder({ fromId, referenceId, type })
    return res(ctx.json({}))
  }),
  rest.post(`${apiUrl}/tasks/reorder`, async (req, res, ctx) => {
    const {
      type,
      fromId: fromTaskId,
      referenceId,
      fromSwimlaneId,
      toSwimlaneId
    } = req.body
    if (fromSwimlaneId !== toSwimlaneId) {
      await taskDB.update(fromTaskId, { swimlaneId: toSwimlaneId })
    }
    taskDB.reorder({ type, fromId: fromTaskId, referenceId })
    return res(ctx.json({}))
  })
]
