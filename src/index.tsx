import { startServer } from './server'
import { DevTool } from './devtool'

export const loadServer = (callback: () => void) => {
  startServer()
  if (callback) {
    callback()
  }
}

export const DevTools = DevTool
