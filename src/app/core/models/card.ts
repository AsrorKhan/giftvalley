
export interface ICard {
  type?: string;
  title: string;
  imgUrl: string;
  isExist: boolean;
  oldPrice?: number | string;
  price: number;
}
