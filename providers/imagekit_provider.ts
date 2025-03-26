import type { ApplicationService } from '@adonisjs/core/types'
import { ImageKitOptions } from 'imagekit/dist/libs/interfaces/index.js'
import ImageKit from 'imagekit'

export default class ImageKitProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    const config = this.app.config.get<ImageKitOptions>('imagekit')
    const imagekit = new ImageKit(config)
    this.app.container.singleton('imagekit', () => imagekit)
  }
}
