import { type StaticImageData } from 'next/image'

export interface Client {
  project: string
  image: string | StaticImageData
  name: string
  url: string
  description: string
  tags: string[]
}
