export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  params?: {
    display?: string,
    battery?: string,
    camera?: string,
    memory?: string
  }
}
