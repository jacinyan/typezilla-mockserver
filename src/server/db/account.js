import { sanitizeUser, validateUserForm, hash, ServerError } from '../utils'

const usersKey = '__typezilla_users__'

let users = {}

const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users))
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey) || ''))

try {
  load()
} catch (error) {
  persist()
}

export function validateUser(id) {
  load()
  if (!users[id]) {
    const error = new ServerError(`No user with the id "${id}"`)
    error.status = 404
    throw error
  }
}

const authenticate = ({ name, password }) => {
  validateUserForm({ name, password })
  const id = +hash(name)
  const user = users[id] || {}
  if (user.passwordHash === hash(password)) {
    return { ...sanitizeUser(user), token: btoa(user.id + '') }
  }
  const error = new ServerError('Invalid name or password')
  error.status = 400
  throw error
}

async function read(id) {
  validateUser(id)
  return sanitizeUser(users[id])
}

async function update(id, updates) {
  validateUser(id)
  Object.assign(users[id], updates)
  persist()
  return read(id)
}

// this would be called `delete` except that's a reserved word in JS :-(
async function remove(id) {
  validateUser(id)
  delete users[id]
  persist()
}

async function reset() {
  users = {}
  persist()
}

async function create({ name, password }) {
  validateUserForm({ name, password })
  const id = +hash(name)
  const passwordHash = hash(password)
  if (users[id]) {
    const error = new ServerError(`Username "${name}" exists`)
    error.status = 400
    throw error
  }
  users[id] = { id, name, passwordHash }
  persist()
  return read(id)
}

export { authenticate, create, read, update, remove, reset }
