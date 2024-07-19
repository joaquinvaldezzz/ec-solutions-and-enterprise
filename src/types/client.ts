import { type StaticImageData } from 'next/image'

export interface Client {
  date?: string
  image: string | StaticImageData
  name: string
  url: string
  description: string
  tags: string[]
}
