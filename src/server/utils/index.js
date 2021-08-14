// error handler
export class ServerError extends Error {
  status = 200
}

// auth
export const validateUserForm = ({ name, password }) => {
  if (!name) {
    const error = new ServerError('A name is required')
    error.status = 400
    throw error
  }
  if (!password) {
    const error = new ServerError('A password is required')
    error.status = 400
    throw error
  }
}

export function hash(str) {
  let hash = 5381
  let i = str.length

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return String(hash >>> 0)
}

export function sanitizeUser(user) {
  const { passwordHash, ...rest } = user
  return rest
}

// db
export function required(key) {
  const error = new ServerError(`${key} is required`)
  error.status = 400
  throw error
}

export const search = (list, query) => {
  if (!query) {
    return list
  }
  return list.filter((item) => {
    return Object.keys(query).every((queryKey) => {
      const queryValue = query[queryKey]
      if (queryKey === 'name') {
        return item.name.includes(queryValue)
      }

      if (Array.isArray(queryValue)) {
        return queryValue.find((value) => value === item[queryKey])
      } else {
        if (queryValue === undefined || queryValue === '') {
          return true
        }
        return item[queryKey] === queryValue
      }
    })
  })
}

export const insertBefore = (list, from, to) => {
  const toItem = list[to]
  const removedItem = list.splice(from, 1)[0]
  const toIndex = list.indexOf(toItem)
  list.splice(toIndex, 0, removedItem)
  return list
}

export const insertAfter = (list, from, to) => {
  const toItem = list[to]
  const removedItem = list.splice(from, 1)[0]
  const toIndex = list.indexOf(toItem)
  list.splice(toIndex + 1, 0, removedItem)
  return list
}
