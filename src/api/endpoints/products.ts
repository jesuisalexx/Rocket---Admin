import {
  ProductCategoryCreateDto,
  ProductCategoryUpdateDto,
  ProductCreateDto,
  ProductsListDto,
  ProductUpdateDto,
} from '@/api/dto/products';
import {
  del, get, patch, post,
} from '@/api';

export const productsList = (productsListDto: ProductsListDto) => get('/product/list', productsListDto);
export const productCreate = (productCreateDto: ProductCreateDto) => post('/product', productCreateDto);
export const getProductById = (id: string) => get(`/product/${id}`);
export const updateProduct = (productUpdateDto: ProductUpdateDto, id: string) => patch(`/product/${id}`, productUpdateDto);
export const deleteProduct = (id: string) => del(`/product/${id}`);
export const productCategories = () => get('/product-category/all');
export const getProductCategoryById = (id: string) => get(`/product-category/${id}`);
export const deleteProductCategory = (id: string) => del(`/product-category/${id}`);
export const createProductCategory = (productCategoryCreateDto: ProductCategoryCreateDto) => post('/product-category', productCategoryCreateDto);
export const updateProductCategory = (productCategoryUpdateDto: ProductCategoryUpdateDto, id: string) => patch(`/product-category/${id}`, productCategoryUpdateDto);
