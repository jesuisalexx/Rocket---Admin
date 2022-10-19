import { useProductsStorage } from '@/stores/products';
import { ref } from 'vue';
import { ProductsListDto } from '@/api/dto/auth';

export const useProducts = () => {
  const model = ref<ProductsListDto>({
    page: 1,
    perPage: 10,
    sortField: 'name',
    sortDirection: 'asc',
    status: 'active',
    category: '',
  });
  const {
    getProductsList,
  } = useProductsStorage();
  const products = ref([]);
  const fetchProducts = async () => {
    await getProductsList;
    const { data } = await getProductsList(model.value);
    products.value = data.list;
    console.log(products.value);
    return {
      data,
    };
  };

  return {
    fetchProducts,
    records: products,
  };
};
