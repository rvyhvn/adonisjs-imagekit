import type { ApplicationService } from '@adonisjs/core/types'
import { ImageKitConfig } from '../src/types.js'
import ImageKit from 'imagekit'

export default class ImageKitProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    const config = this.app.config.get<ImageKitConfig>('imagekit')
    const imagekit = new ImageKit(config)
    this.app.container.singleton('imagekit', () => imagekit)
  }
}
