import ImageKit from 'imagekit'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    imagekit: ImageKit
  }
}

export interface ImageKitConfig {
  publicKey: string
  privateKey: string
  urlEndpoint: string
}
