<template>
  <div :class="$style.root">
    <div :class="$style.heading">
      {{ t('add-product.add-product') }}
    </div>
    <div :class="$style.productName">
      <Input
        :label="t('add-product.product-name')"
        :placeholder="t('add-product.placeholder')"
      />
    </div>
    <div :class="$style.editor">
      <Editor />
    </div>
    <div :class="$style.select">
      <Select
        label="Category"
        :options="categories"
      />
    </div>
    <div :class="$style.priceWrap">
      <div :class="$style.price">
        <Input
          :label="t('add-product.price')"
          icon-before="dollar"
        />
      </div>
      <div :class="$style.discount">
        <Input
          :label="t('add-product.discount')"
          icon-before="discount"
        />
      </div>
    </div>
    <div :class="$style.dragNdrop">
      <DragNDrop />
    </div>
    <div :class="$style.tags">
      <Tags :label="t('add-product.tags')" />
    </div>
    <div :class="$style.buttons">
      <Button variant="primary">
        {{ t('add-product.save') }}
      </Button>
      <Button
        :class="$style.cancelButton"
        variant="secondary"
        @click="close"
      >
        {{ t('add-product.cancel') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from '@/components/core/input/Input.vue';
import Select from '@/components/core/select/Select.vue';
import Editor from '@/components/core/editor/Editor.vue';
import DragNDrop from '@/components/core/dragNdrop/DragNDrop.vue';
import Tags from '@/components/core/tags/Tags.vue';
import Button from '@/components/core/button/Button.vue';
import { useI18n } from 'vue-i18n';
import { defineEmits } from 'vue';

const { t } = useI18n();

const emit = defineEmits([
  'close',
]);
const close = () => {
  emit('close');
};

const categories = [
  {
    val: 'Phone',
  },
  {
    val: 'Laptop',
  },
  {
    val: 'Tv',
  },
  {
    val: 'Console',
  },
  {
    val: 'Other',
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(490px);
  height: 100vh;
  background-color: rgb(var(--color-surface));
  padding: rem(30px);
  position: fixed;
  top: 0;
  right: 0;
}
.heading {
  font-size: rem(28px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.productName {
  width: 100%;
  margin-top: rem(25px);
}
.editor {
  width: 100%;
  height: rem(160px);
  margin-top: rem(25px);
  background: none;
}
.select {
  margin-top: rem(25px);
  z-index: 6;
}
.priceWrap {
  margin-top: rem(25px);
  display: flex;
  justify-content: space-between;
}
.price {
  width: 47%;
}
.discount {
  width: 47%;
}
.dragNdrop {
  width: 100%;
  margin-top: rem(25px);
}
.tags {
  margin-top: rem(25px);
}
.buttons {
  display: flex;
  margin-top: rem(20px);
}
.cancelButton {
  margin-left: rem(17px);
}
</style>
