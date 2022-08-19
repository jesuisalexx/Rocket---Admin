<template>
  <div>
    <Modal>
      <ProductsModalContainer>
        <div :class="$style.root">
          <PhotoGallery />
        </div>
      </ProductsModalContainer>
    </Modal>
  </div>
</template>

<script lang="ts" setup>

import Modal from '@/components/core/modal/Modal.vue';
import ProductsModalContainer from '@/containers/productsModalContainer/ProductsModalContainer.vue';
import PhotoGallery from '@/components/core/photoGallery/PhotoGallery.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(1024px);
  height: rem(756px);
  color: white;
  padding: rem(30px) rem(60px);
}
</style>
