import { useProductsStorage } from '@/stores/products';
import { ref } from 'vue';
import { ProductsListDto } from '@/api/dto/products';

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
  const records = ref([]);
  const total = ref(0);
  const isLoading = ref(false);
  const fetchProducts = async () => {
    isLoading.value = true;
    const { data } = await getProductsList(model.value);
    records.value = data.list.map(
      (record: any) => ({ ...record, id: record._id }),
    );
    total.value = data.total;
    isLoading.value = false;
    return {
      data,
    };
  };

  return {
    fetchProducts,
    records,
    total,
    model,
    isLoading,
  };
};
