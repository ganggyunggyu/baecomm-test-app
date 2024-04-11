import { atom } from 'recoil';
import { T } from '.';

export const productState = atom({
  key: 'productState',
  default: {},
});
export const productsState = atom<T.Product[]>({
  key: 'productsState',
  default: [],
});
export const searchProductsState = atom<T.Product[]>({
  key: 'searchProductsState',
  default: [],
});

export const totalState = atom<number>({
  key: 'totalState',
  default: 0,
});
