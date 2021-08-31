
export interface ICard { 
  isNew?: boolean;
  isDiscount?: boolean;
  isPopular?: boolean;
  title: string;
  imgUrl: string;
  isExist: boolean;
  oldPrice?: number | string;
  price: number;
}
