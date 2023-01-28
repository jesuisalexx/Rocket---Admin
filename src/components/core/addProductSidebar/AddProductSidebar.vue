<template>
  <Modal v-click-outside="close">
    <Form
      v-model="model"
      :validation-schema="validationSchema"
    >
      <div :class="$style.root">
        <div :class="$style.heading">
          {{ t("add-product.add-product") }}
        </div>
        <div :class="$style.productName">
          <FormInput
            :is-loading="isLoading"
            :label="t('add-product.product-name')"
            :placeholder="t('add-product.placeholder')"
            name="name"
          />
        </div>
        <div :class="$style.editor">
          <Editor
            :model-value="editor"
            name="description"
          />
        </div>
        <div :class="$style.select">
          <FormInput
            :is-loading="isLoading"
            :placeholder="t('add-product.category')"
            label="Category"
            name="category"
          />
        </div>
        <div :class="$style.priceWrap">
          <div :class="$style.price">
            <FormInput
              :is-loading="isLoading"
              :label="t('add-product.price')"
              icon-before="dollar"
              name="price"
              type="number"
            />
          </div>
        </div>
        <div :class="$style.dragNdrop">
          <DragNDrop
            :model-value="model.images"
          />
        </div>
        <div :class="$style.tags">
          <FormInput
            :is-loading="isLoading"
            :label="t('add-product.code')"
            name="code"
          />
        </div>
        <div :class="$style.buttons">
          <Button
            type="submit"
            variant="primary"
            @click="submit"
          >
            {{ t("add-product.save") }}
          </Button>
          <Button
            :class="$style.cancelButton"
            variant="secondary"
            @click="close"
          >
            {{ t("add-product.cancel") }}
          </Button>
        </div>
      </div>
    </Form>
  </Modal>
</template>

<script lang="ts" setup>
import FormInput from '@/components/core/formInput/FormInput.vue';
import Form from '@/components/core/form/Form.vue';
import Editor from '@/components/core/editor/Editor.vue';
import DragNDrop from '@/components/core/dragNdrop/DragNDrop.vue';
import Button from '@/components/core/button/Button.vue';
import { useI18n } from 'vue-i18n';
import { defineEmits, ref } from 'vue';
import { useCreateProduct } from '@/hooks/useCreateProduct';
import Modal from '@/components/core/modal/Modal.vue';

const { t } = useI18n();

const {
  submit,
  validationSchema,
  model,
  isLoading,
} = useCreateProduct();

const emit = defineEmits([
  'close',
]);
const close = () => {
  emit('close');
};
const editor = ref('description');
const categories = [
  {
    value: 'Phone',
  },
  {
    value: 'Laptop',
  },
  {
    value: 'Tv',
  },
  {
    value: 'Console',
  },
  {
    value: 'Other',
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
  width: 100%;
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
