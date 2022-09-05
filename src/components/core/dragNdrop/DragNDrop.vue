<template>
  <div>
    <div
      :class="$style.root"
    >
      <div :class="$style.label">
        Product Images
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
            ref="imgInp"
            type="file"
            :class="$style.fileUpload"
            @change="uploadFile"
          >
        </div>
        <div :class="$style.textWrap">
          <div :class="$style.text">
            Drag and Drop or
          </div>
          <Button
            :class="$style.button"
            variant="primary-minimalistic"
          >
            Browse
          </Button>
          <div :class="$style.text">
            to upload
          </div>
        </div>
      </div>
      <div :class="$style.pictures">
        <div :class="$style.picture">
          <img
            v-if="imgSrc"
            ref="img"
            :src="imgSrc"
            alt=""
          >
        </div>
        <div :class="$style.picture" />
        <div :class="$style.picture" />
        <div :class="$style.picture" />
        <div :class="$style.picture" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Upload from '@/components/core/icon/assets/upload.svg';
import Button from '@/components/core/button/Button.vue';
import { ref } from 'vue';

const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
const file = ref('');
const imgInp = ref(null);
const imgSrc = ref('');
const drop = (e: any) => {
  file.value = e.dataTransfer.files[0];
  isActive.value = false;
  imgSrc.value = URL.createObjectURL(file.value);
};
const uploadFile = (e: any) => {
  file.value = e.target.files[0];
  isActive.value = false;
  imgSrc.value = URL.createObjectURL(file.value);
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
  border: rem(1px)dashed rgb(var(--color-body-dark));
  background: rgb(var(--color-background));
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
  cursor: pointer;
  overflow: hidden;
}
.fileUpload {
  opacity: 0;
  width: rem(30px);
}
.uploadPic {
  width: rem(20px);
  height: rem(20px);
  position: absolute;
  cursor: pointer;
}
.dropzoneText {
  display: flex;
}
.dropzoneActive {
  border: rem(1px)solid rgb(var(--color-heading));
}
.textWrap {
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
  width: 100%;
  height: rem(74px);
  margin-top: rem(18px);
  display: flex;
  justify-content: space-between;
}
.picture {
  width: rem(74px);
  height: rem(74px);
  border-radius: rem(10px);
  border: rem(1px)solid rgb(var(--color-border));
  background: rgb(var(--color-background));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
