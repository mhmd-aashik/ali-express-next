import { StaticImageData } from "next/image";

export interface Category {
  id: number;
  name: string;
  ads: number;
  image: StaticImageData;
}
