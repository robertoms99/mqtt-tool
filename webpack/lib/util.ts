import { existsSync, realpathSync } from 'fs'
import path from 'path'
import { MODULE_EXTENSIONS } from '../settings/contants'

const resolvePath = (filePath: string) => {
  const appDirectory = realpathSync(process.cwd())
  return path.resolve(appDirectory, filePath)
}

export const resolveEntryFilePath = (relativePath: string) => {
  return (
    MODULE_EXTENSIONS.find((extension) =>
      existsSync(resolvePath(`${relativePath}.${extension}`))
    ) ?? resolvePath(`${relativePath}.js`)
  )
}

export const infoColor = (message: string) => {
  return `\u001b[1m\u001b[34m${message}\u001b[39m\u001b[22m`
}
