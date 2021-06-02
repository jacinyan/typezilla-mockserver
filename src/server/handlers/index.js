import { userHandlers } from './accountHandlers'
import { getRestHandlers } from './restHandlers'
import { match } from 'node-match-path'
import { epicDB, kanbanDB, projectDB, tagDB, taskDB, userDB } from '../db/rest'
import { reorderHandlers } from './reorderHandlers'

function ls(key, defaultVal) {
  const lsVal = window.localStorage.getItem(key)
  let val
  if (lsVal) {
    val = Number(lsVal)
  }
  return Number.isFinite(val) ? val : defaultVal
}

const sleep = (t = ls('__typezilla_min_request_time__', 200)) =>
  new Promise((resolve) => setTimeout(resolve, t))

export const handlers = [
  ...userHandlers,
  ...getRestHandlers('projects', projectDB),
  ...getRestHandlers('epics', epicDB),
  ...getRestHandlers('tasks', taskDB),
  ...getRestHandlers('kanbans', kanbanDB),
  ...getRestHandlers('persons', userDB),
  ...getRestHandlers('taskTypes', taskDB),
  ...getRestHandlers('tags', tagDB),
  ...getRestHandlers('users', userDB),
  ...reorderHandlers
].map((handler) => {
  return {
    ...handler,
    async resolver(req, res, ctx) {
      try {
        if (shouldFail(req)) {
          throw new Error('Request failure (for testing purposes).')
        }
        const result = await handler.resolver(req, res, ctx)
        return result
      } catch (error) {
        const status = error.status || 500
        return res(
          ctx.status(status),
          ctx.json({ status, message: error.message || 'Unknown Error' })
        )
      } finally {
        await sleep()
      }
    }
  }
})

function shouldFail(req) {
  if (JSON.stringify(req.body)?.includes('FAIL')) return true
  if (req.url.searchParams.toString()?.includes('FAIL')) return true
  if (process.env.NODE_ENV === 'test') return false
  const failureRate = Number(
    window.localStorage.getItem('__typezilla_failure_rate__') || 0
  )
  if (Math.random() < failureRate) return true
  if (requestMatchesFailConfig(req)) return true

  return false
}

function requestMatchesFailConfig(req) {
  function configMatches({ requestMethod, urlMatch }) {
    return (
      (requestMethod === 'ALL' || req.method === requestMethod) &&
      match(urlMatch, req.url.pathname).matches
    )
  }
  try {
    const failConfig = JSON.parse(
      window.localStorage.getItem('__typezilla_request_fail_config__') || '[]'
    )
    if (failConfig.some(configMatches)) return true
  } catch (error) {
    window.localStorage.removeItem('__typezilla_request_fail_config__')
  }
  return false
}
