import ImageKit from 'imagekit'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    imagekit: ImageKit
  }
}
