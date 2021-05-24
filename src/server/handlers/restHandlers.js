import { rest } from 'msw'
import { ServerError } from '../utils'
import { getUser } from './accountHandlers'

const apiUrl = process.env.REACT_APP_API_URL

const convertIds = (object) => {
  const result = {}
  Object.keys(object).forEach((key) => {
    // If 'id' is included, convert it to number
    result[key] = key.includes('Id') ? Number(object[key]) : object[key]
  })
  return result
}

export const getRestHandlers = (endpoint, db) => {
  return [
    // query list
    rest.get(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      const user = await getUser(req)
      const params = req.url.searchParams
      const queryResult = db.queryByOwnerId(user.id, Object.fromEntries(params))
      return res(ctx.json(queryResult))
    }),
    // query detail
    rest.get(`${apiUrl}/${endpoint}/:id`, async (req, res, ctx) => {
      const { id } = req.params
      const item = db.detail(id)
      return res(ctx.json(item))
    }),
    // put item
    rest.patch(`${apiUrl}/${endpoint}/:id`, async (req, res, ctx) => {
      const { id } = convertIds(req.params)
      const updates = req.body
      const updatedItem = db.update(id, updates)
      return res(ctx.json(updatedItem))
    }),

    // remove item
    rest.delete(`${apiUrl}/${endpoint}/:id`, async (req, res, ctx) => {
      const { id } = req.params
      db.remove(id)
      return res(ctx.json({ success: true }))
    }),

    // create item
    rest.post(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      const user = await getUser(req)
      const targetAddItem = Object.assign(req.body, { ownerId: user.id })

      const nameExist = !!db
        .queryByOwnerId(user.id)
        .find((item) => item.name === targetAddItem.name)
      if (nameExist) {
        const error = new ServerError('The name already exists')
        error.status = 400
        throw error
      }

      const detail = await db.create(convertIds(targetAddItem))
      return res(ctx.json(detail))
    })
  ]
}
