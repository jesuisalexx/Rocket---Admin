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
  </div>
</template>

<script lang="ts" setup>
import Field from '@/components/core/field/Field.vue';
import Select from '@/components/core/select/Select.vue';
import Editor from '@/components/core/editor/Editor.vue';
</script>

<style lang="scss" module>
.root {
  width: 490px;
  height: 100vh;
  background: rgb(var(--color-surface));
  padding: 30px;
}
.heading {
  font-size: 28px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.productName {
  width: 100%;
  margin-top: 25px;
}
.editor {
  width: 100%;
  height: 220px;
  margin-top: 25px;
  background: none;
}
.select {
  margin-top: 25px;
}
.priceWrap {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.price {
  width: 47%;
}
.discount {
  width: 47%;
}
</style>
