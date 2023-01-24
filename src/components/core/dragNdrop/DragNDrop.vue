<template>
  <div>
    <div
      :class="$style.root"
    >
      <div :class="$style.label">
        {{ t("drag.product-images") }}
      </div>
      <div
        :class="{
          [$style.dropzone]: true,
          [$style.dropzoneActive]: isActive,
        }"
        @dragenter.prevent="toggleActive"
        @dragover.prevent
        @dragleave.prevent="toggleActive"
        @drop.prevent="drop"
      >
        <div :class="$style.uploadWrap">
          <Upload :class="$style.uploadPic" />
          <input
            :class="$style.fileUpload"
            type="file"
            @change="uploadFile"
          >
        </div>
        <div :class="$style.textWrapper">
          <div :class="$style.text">
            {{ t("drag.drag-n-drop") }}
          </div>
          <Button
            :class="$style.button"
            variant="primary-minimalistic"
          >
            {{ t("drag.browse") }}
          </Button>
          <div :class="$style.text">
            {{ t("drag.upload") }}
          </div>
        </div>
      </div>
      <div :class="$style.pictures">
        <div
          v-for="(pic, index) in localValue"
          :key="index"
          :class="$style.picture"
        >
          <img
            v-if="pic"
            :class="$style.image"
            :src="pic"
            alt=""
          >
          <div
            :class="$style.deletePic"
          >
            <div
              :class="$style.bin"
              @click="removeImg(index)"
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div :class="$style.pictureFrames">
          <div
            v-for="frame in frames"
            :key="frame"
            :class="$style.pictureFrame"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Upload from '@/components/core/icon/assets/upload.svg';
import Button from '@/components/core/button/Button.vue';
import DeleteIcon from '@/components/core/icon/assets/delete.svg';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  modelValue: [],
}>();

const emit = defineEmits([
  'update:modelValue',
  'close',
]);

const localValue = computed({
  get: () => props.modelValue,
  set: (value: any) => emit('update:modelValue', value),
});
const { t } = useI18n();
const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
const file = ref('');
const imgSrc = ref('');
const drop = (e: any) => {
  if (localValue.value.length < 5) {
    file.value = e.target.files[0];
    isActive.value = false;
    imgSrc.value = URL.createObjectURL(file.value);
    localValue.value.push(imgSrc.value);
  } else {
    isActive.value = false;
  }
};
const uploadFile = (e: any) => {
  if (localValue.value.length < 5) {
    file.value = e.target.files[0];
    isActive.value = false;
    imgSrc.value = URL.createObjectURL(file.value);
    localValue.value.push(imgSrc.value);
  } else {
    isActive.value = false;
  }
};
const frames = [1, 2, 3, 4, 5];
const removeImg = (id: any) => {
  localValue.value.splice(id, 1);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: auto;
}

.label {
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}

.dropzone {
  margin-top: rem(10px);
  width: 100%;
  height: rem(100px);
  border: rem(1px) dashed rgb(var(--color-body-dark));
  background-color: rgb(var(--color-background));
  border-radius: rem(12px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.uploadWrap {
  width: rem(30px);
  height: rem(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
}

.fileUpload {
  opacity: 0;
  position: absolute;
  width: rem(30px);
  z-index: 4;
  cursor: wait;
}

.uploadPic {
  width: rem(20px);
  height: rem(20px);
  position: absolute;
}

.dropzoneText {
  display: flex;
}

.dropzoneActive {
  border: rem(1px) solid rgb(var(--color-heading));
}

.textWrapper {
  display: flex;
  align-items: center;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
  margin-top: rem(5px);
}

.text {
}

.button {
  padding-left: rem(7px);
  padding-right: rem(7px);
  margin-top: rem(2px);
}

.pictures {
  width: 105%;
  height: rem(74px);
  margin-top: rem(18px);
  display: flex;
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
}

.picture {
  width: rem(74px);
  height: rem(74px);
  border-radius: rem(10px);
  border: rem(1px) solid rgb(var(--color-border));
  background-color: rgb(var(--color-background));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-right: 15px;
}

.deletePic {
  width: rem(74px);
  height: rem(74px);
  border-radius: rem(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  z-index: 3;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    background-color: rgb(var(--color-hover-background));
    transition: 0.3s;
  }
}

.bin {
  width: rem(32px);
  height: rem(32px);
  border-radius: rem(7px);
  background-color: rgb(var(--color-overlay-light));
  display: flex;
  justify-content: center;
  align-items: center;
}

.pictureFrames {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding-right: rem(22px);
  z-index: 1;
}

.pictureFrame {
  width: rem(74px);
  height: rem(74px);
  border-radius: rem(10px);
  border: rem(1px) solid rgb(var(--color-border));
  background-color: rgb(var(--color-background));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
</style>
