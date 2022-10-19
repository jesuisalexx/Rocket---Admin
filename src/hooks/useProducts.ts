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
  const records = ref<any>([]);
  const fetchProducts = async () => {
    await getProductsList;
    const { data } = await getProductsList(model.value);
    records.value = data.list.map(
      (record: any) => ({ ...record, id: record._id }),
    );
    console.log(records.value);
    return {
      data,
    };
  };

  return {
    fetchProducts,
    records,
  };
};
