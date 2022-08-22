<template>
  <div :class="$style.root">
    <div :class="$style.mainPic"></div>
    <div :class="$style.smallPics">
      <div :class="$style.smallPic">
      </div>
      <div :class="$style.smallPic">
      </div>
      <div :class="$style.smallPic">
      </div>
      <div :class="$style.smallPicLast">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.mainPic {
  width: rem(400px);
  height: rem(556px);
  background: #000;
}
.smallPics {
  margin-top: rem(16px);
  max-width: rem(400px);
  height: rem(100px);
  background: #000;
  display: flex;
  overflow: hidden;
}
.smallPic {
  width: rem(200px);
  height: rem(100px);
  background: white;
  margin-right: rem(16px);
}
.smallPicLast {
  width: rem(100px);
  height: rem(100px);
  background: white;
}
</style>
