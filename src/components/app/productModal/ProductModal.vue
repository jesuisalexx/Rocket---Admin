<template>
  <div>
    <Modal v-click-outside="close">
      <ProductsModalContainer>
        <div :class="$style.root">
          <PhotoGallery />
          <div :class="$style.modalInfo">
            <div :class="$style.heading">
              {{ name.data.name }}
            </div>
            <div :class="$style.number">
              {{ t('productsModal.number') }}
              {{ name.data.number }}
            </div>
            <div :class="$style.description">
              A new dual‑camera system captures more of what you <br>
              see and love. The fastest chip ever in a smartphone and <br>
              all‑day battery life let you do more and charge less. And <br>
              the highest‑quality video in a smartphone, so your <br>
              memories look better than ever.
            </div>
            <div :class="$style.priceWrap">
              <div>
                <div :class="$style.quantity">
                  {{ t('productsModal.quantity') }}
                </div>
                <CounterInput :class="$style.counter" />
              </div>
              <div :class="$style.price">
                {{ name.data.price }}
              </div>
            </div>
            <div :class="$style.buttons">
              <div :class="$style.cartAddBtn">
                <Button variant="primary-extended">
                  {{ t('productsModal.add-to-cart') }}
                </Button>
              </div>
              <div :class="$style.favAddBtn">
                <Button
                  variant="primary-orange"
                >
                  <Like :class="$style.likeIcon" />
                </Button>
              </div>
            </div>
            <div :class="$style.specificationsWrap">
              <div :class="$style.specHeading">
                {{ t('productsModal.specifications') }}
              </div>
              <div
                v-for="spec in specifications"
                :key="spec"
                :class="$style.specWrap"
              >
                <div :class="$style.specName">
                  {{ spec.name }}
                </div>
                <div :class="$style.specVal">
                  {{ spec.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductsModalContainer>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Modal from '@/components/core/modal/Modal.vue';
import ProductsModalContainer from '@/containers/productsModalContainer/ProductsModalContainer.vue';
import PhotoGallery from '@/components/core/photoGallery/PhotoGallery.vue';
import CounterInput from '@/components/core/counterInput/CounterInput.vue';
import Button from '@/components/core/button/Button.vue';
import Like from '@/components/core/icon/assets/like.svg';
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  name: {}
}>();

const emit = defineEmits(['close']);
const close = (e: Event) => {
  emit('close', e);
};

const specifications = [
  {
    name: 'Display',
    value: '6.1‑inch',
  },
  {
    name: 'Chip',
    value: 'A13 Bionic chip',
  },
  {
    name: 'Camera',
    value: 'Dual 12MP Ultra Wide',
  },
  {
    name: 'OS',
    value: 'iOS 13',
  },
  {
    name: 'Capacity',
    value: '64GB',
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(1024px);
  height: rem(756px);
  color: white;
  padding: rem(30px) rem(60px);
  display: flex;
}
.modalInfo {
  margin-left: rem(72px);
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.number {
  margin-top: rem(10px);
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}
.description {
  margin-top: rem(20px);
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-light));
}
.priceWrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: rem(35px);
}
.quantity {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}
.counter {
  margin-top: rem(10px);
}
.price {
  font-size: rem(24px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
.likeIcon {
  width: rem(16px);
  height: rem(16px);
  padding-top: rem(5px);
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: rem(25px);
}
.cartAddBtn {
  width: 75%;
}
.specificationsWrap {
  margin-top: rem(30px);
}
.specHeading {
  font-size: rem(15px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
  margin-bottom: rem(10px);
}
.specWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: rem(1px)solid rgb(var(--color-border));
  width: 100%;
  height: rem(50px);
}
.specName {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}
.specVal {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
</style>
