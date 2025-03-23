import { InvalidArgumentsException } from '@adonisjs/core/exceptions'
import { ImageKitConfig } from './types.js'

export function defineConfig(config: ImageKitConfig): ImageKitConfig {
  if (!config.publicKey) {
    throw new InvalidArgumentsException('The "publicKey" is required')
  }
  if (!config.privateKey) {
    throw new InvalidArgumentsException('The "privateKey" is required')
  }
  if (!config.urlEndpoint) {
    throw new InvalidArgumentsException('The "urlEndpoint" is required')
  }

  if (typeof config.publicKey !== 'string') {
    throw new InvalidArgumentsException('The "publicKey" must be a string')
  }

  if (typeof config.privateKey !== 'string') {
    throw new InvalidArgumentsException('The "privateKey" must be a string')
  }
  if (typeof config.urlEndpoint !== 'string') {
    throw new InvalidArgumentsException('The "urlEndpoint" must be a string')
  }

  return {
    publicKey: config.publicKey,
    privateKey: config.privateKey,
    urlEndpoint: config.urlEndpoint,
  }
}
