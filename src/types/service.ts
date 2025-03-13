import { type StaticImageData } from "next/image";

export interface Service {
  image: StaticImageData;
  title: string;
  description: string;
  categories?: string[];
}
