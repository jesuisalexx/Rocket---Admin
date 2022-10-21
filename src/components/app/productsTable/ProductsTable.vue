<template>
  <div :class="$style.root">
    <Card>
      <div :class="$style.fieldWrap">
        <Input
          icon-before="search"
          icon-after="filter"
          :class="$style.field"
        />
        <Button
          variant="secondary"
          icon-after="arrowDown3"
        >
          {{ t('products.actions') }}
        </Button>
      </div>
      <div :class="$style.table">
        <Table
          v-if="switchTableValue === 'list'"
          v-model:selectedRecords="selectedRecords"
          :columns="columns"
          :records="records"
          :selectable="true"
          :type="switchTableValue"
        >
          <template #column(select)="{ isSelected }">
            <Checkbox
              :model-value="isSelected"
              :class="$style.checkbox"
            />
          </template>
          <template #column(name) />
          <template #column(number) />
          <template #column(category) />
          <template #column(date) />
          <template #column(price) />
          <template #column(status) />
          <template #options>
            <More :class="$style.moreBtn" />
          </template>
          <template
            #cell(select)="{ isSelected, record }"
          >
            <Checkbox
              :model-value="isSelected"
              :class="$style.checkbox"
              @click="toggleSelect(record.id)"
            />
          </template>
          <template
            #cell(name)="{ record }"
          >
            <div
              :class="$style.recordLightText"
              @click="showProductModal(record)"
            >
              {{ record.name }}
            </div>
          </template>
          <template
            #cell(number)="{ record }"
          >
            <div :class="$style.recordDarkText">
              {{ record.code }}
            </div>
          </template>
          <template
            #cell(category)="{ record }"
          >
            <div :class="$style.recordLightText">
              {{ record.category }}
            </div>
          </template>
          <template
            #cell(date)="{ record }"
          >
            <div :class="$style.recordDarkText">
              {{ record.createDate }}
            </div>
          </template>
          <template
            #cell(price)="{ record }"
          >
            <div :class="$style.recordLightText">
              {{ record.price }}$
            </div>
          </template>
          <template
            #cell(status)="{ record }"
          >
            <Badge
              :variant="statusMap[record.status]"
            >
              {{ record.status }}
            </Badge>
          </template>
        </Table>
        <Table
          v-else-if="switchTableValue === 'grid'"
          v-model:selectedRecords="selectedRecords"
          :columns="columns"
          :records="records"
          :selectable="true"
          :type="switchTableValue"
        >
          <template
            #record="{ record, isSelected }"
          >
            <div
              :class="$style.gridRecordPicWrap"
            >
              <div :class="$style.badgeWrap">
                <Badge :variant="statusMap[record.status]">
                  {{ record.status }}
                </Badge>
                <div
                  :class="$style.gridCheckWrap"
                  @click="toggleSelect(record.id)"
                >
                  <div
                    v-if="!isSelected"
                    :class="$style.gridCheck"
                  />
                  <Check v-else />
                </div>
              </div>
            </div>
            <div
              :class="$style.gridRecordData"
              @click="showProductModal(record)"
            >
              <div
                :class="$style.recordName"
              >
                {{ record.name }}
              </div>
              <div :class="$style.recordFlexDataWrap">
                <div :class="$style.recordFlexData">
                  {{ record.createDate }}
                </div>
                <div :class="$style.recordFlexData">
                  {{ record.category }}
                </div>
                <div :class="$style.recordFlexData">
                  {{ record.price }}$
                </div>
              </div>
            </div>
          </template>
        </Table>
      </div>
      <div :class="$style.pagination">
        <PaginationBlock :pages="1" />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Table from '@/components/core/table/Table.vue';
import Input from '@/components/core/input/Input.vue';
import Card from '@/components/core/card/Card.vue';
import Check from '@/components/core/icon/assets/checked.svg';
import Badge from '@/components/core/badge/Badge.vue';
import Button from '@/components/core/button/Button.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import More from '@/components/core/icon/assets/more.svg';
import { computed, ref } from 'vue';
import PaginationBlock from '@/components/core/paginationBlock/PaginationBlock.vue';
import { modalType } from '@/types/modal';
import { useModalStore } from '@/stores/modals';
import { useI18n } from 'vue-i18n';
import { useProducts } from '@/hooks/useProducts';
import { useProductsStorage } from '@/stores/products';

const productsStorage = useProductsStorage();

const { fetchProducts, records } = useProducts();

fetchProducts();
const switchTableValue = computed(() => productsStorage.localSwitchValue);
const { t } = useI18n();
const statusMap = {
  active: 'success',
  disabled: 'warning',
};
const columns = [
  {
    label: '',
    size: 0.5,
    value: 'select',
    sortable: false,
    selectable: true,
  },
  {
    label: 'product name',
    size: 3.5,
    value: 'name',
    sortable: true,
  },
  {
    label: 'product no.',
    size: 2.5,
    value: 'number',
    sortable: true,
  },
  {
    label: 'category',
    size: 2.5,
    value: 'category',
    sortable: true,
  },
  {
    label: 'date',
    size: 2,
    value: 'date',
    sortable: true,
  },
  {
    label: 'price',
    size: 1.4,
    value: 'price',
    sortable: true,
  },
  {
    label: 'status',
    size: 1.4,
    value: 'status',
    sortable: true,
  },
];

const selectedRecords = ref(['']);
const toggleSelect = (id: any) => {
  if (selectedRecords.value.includes(id)) {
    selectedRecords.value = selectedRecords.value.filter(
      (currentId) => currentId !== id,
    );
  } else {
    selectedRecords.value.push(id);
  }
};

const modalsStore = useModalStore();

const showProductModal = (product: any) => modalsStore.showModal(
  { type: modalType.PRODUCT, payload: { product } },
);

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  padding-top: rem(25px);
  font-family: 'Poppins', sans-serif;
}

.fieldWrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.field {
  width: 89%;
}

.table {
  margin-top: rem(33px);
}

.pagination {
  width: 100%;
  height: rem(35px);
  display: flex;
  justify-content: center;
  margin-top: rem(30px);
}
.moreBtn {
  position: absolute;
  top: rem(18px);
  right: 0;
  cursor: pointer;
}

.recordLightText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}

.recordDarkText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}

.columnArrow {
  display: flex;
  align-items: center;
}
.gridRecordPicWrap {
  position: relative;
  height: rem(267px);
  border-bottom: rem(1px) solid rgb(var(--color-border));
  padding: rem(16px);
}
.gridCheck {
  width: rem(16px);
  height: rem(16px);
  border-radius: 50%;
  border: rem(1px) solid grey;
}
.gridRecordData {
  width: 100%;
  padding: rem(16px);
}
.badgeWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}
.gridCheckWrap {
  width: rem(16px);
  height: rem(16px);
  z-index: 5;
}
.recordFlexDataWrap {
  display: flex;
  justify-content: space-between;
}
.recordFlexData {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
  font-weight: 400;
  margin-top: rem(25px);
}
.recordName {
  width: 100%;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
</style>
