<template>
  <div :class="$style.root">
    <div :class="$style.mainPic" />
    <div :class="$style.smallPics">
      <div
        v-for="pic in pictures"
        :key="pic"
        :class="$style.smallPic"
      >
<<<<<<< HEAD
        <img
          :src="pic"
          alt=""
        >
=======
>>>>>>> d16a9bf58825136f5c26c8b878b116d80ced4fa1
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pictures: []
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.mainPic {
  width: rem(400px);
  height: rem(556px);
  background-color: #000;
}
<<<<<<< HEAD

=======
>>>>>>> d16a9bf58825136f5c26c8b878b116d80ced4fa1
.smallPics {
  margin-top: rem(16px);
  max-width: rem(400px);
  height: rem(100px);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
<<<<<<< HEAD

=======
>>>>>>> d16a9bf58825136f5c26c8b878b116d80ced4fa1
.smallPic {
  width: rem(90px);
  height: rem(100px);
  background-color: white;
}
</style>
