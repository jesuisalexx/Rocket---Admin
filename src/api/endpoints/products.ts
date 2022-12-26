import { ProductsListDto } from '@/api/dto/products';
import { get } from '@/api';

export const productsList = (productsListDto: ProductsListDto) => get('/product/list', productsListDto);
