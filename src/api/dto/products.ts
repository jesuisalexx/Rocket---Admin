export type ProductsListDto = {
  page: number,
  perPage: number,
  sortField: string,
  sortDirection: string,
  status: string,
  category: string,
}
export type ProductCreateDto = {
  code: string,
  name: string,
  description: string,
  category: string,
  images: [],
  specifications: object,
  status: string,
  price: number,
}
export type ProductUpdateDto = {
  code: string,
  name: string,
  description: string,
  images: [],
  specifications: object,
  status: string,
  price: number,
}
export type ProductCategoryCreateDto = {
  name: string,
  slug: string,
  specifications: [],
}
export type ProductCategoryUpdateDto = {
  name: string,
  slug: string,
  specifications: [],
}
