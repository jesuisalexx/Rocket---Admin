<template>
  <div
    :class="{
      'modal-layer__wrapper': true,
      'modal-layer__wrapper--active': isActiveModals
    }"
  >
    <div
      :class="{
        'modal-layer': true,
        'modal-layer--active': isActiveModals,
      }"
    >
      <component
        :is="displayModal.component"
        v-if="isActiveModals"
        v-bind="displayModal.payload"
        class="modal-layer__modal"
        @close="closeModal(displayModal.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '@/stores/modals';
import { Modal, modalType } from '@/types/modal';
import ConfirmModal from '@/components/app/confirmModal/ConfirmModal.vue';

const modalsStore = useModalStore();

const modalsMap = {
  [modalType.CONFIRM]: ConfirmModal,
};

const modals = computed(() => modalsStore.list.map((modal) => ({
  ...modal,
  component: modalsMap[modal.type],
})));
const isActiveModals = computed(() => !!modals.value.length);

const displayModal = computed(() => modals.value?.[modals.value.length - 1] || null);

const closeModal = (modalId: Modal['id']) => {
  modalsStore.removeModal(modalId);
};
</script>

<style lang="scss" src="./modalLayer.scss" />
