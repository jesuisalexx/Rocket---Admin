<template>
  <div :class="$style.root">
    <div :class="$style.heading">
      Add Product
    </div>
    <div :class="$style.productName">
      <Field label="Product Name" />
    </div>
    <div :class="$style.editor">
      <Editor />
    </div>
    <div :class="$style.select">
      <Select label="Category" />
    </div>
    <div :class="$style.priceWrap">
      <div :class="$style.price">
        <Field
          label="Price"
          icon-before="dollar"
        />
      </div>
      <div :class="$style.discount">
        <Field
          label="Discount"
          icon-before="discount"
        />
      </div>
    </div>
    <div :class="$style.dragNdrop">
      <DragNDrop />
    </div>
    <div :class="$style.tags">
      <Tags />
    </div>
    <div :class="$style.buttons">
      <Button variant="primary">
        Save
      </Button>
      <Button
        :class="$style.cancelButton"
        variant="secondary"
      >
        Cancel
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Field from '@/components/core/field/Field.vue';
import Select from '@/components/core/select/Select.vue';
import Editor from '@/components/core/editor/Editor.vue';
import DragNDrop from '@/components/core/dragNdrop/DragNDrop.vue';
import Tags from '@/components/core/tags/Tags.vue';
import Button from '@/components/core/button/Button.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(490px);
  height: 100vh;
  background: rgb(var(--color-surface));
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
