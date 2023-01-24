<template>
  <div :class="$style.root">
    <paginate
      :page-count="pages"
      :prev-link-class="$style.prev"
      :next-link-class="$style.next"
      :page-link-class="$style.page"
      :active-class="$style.active"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'className'"
      :class="$style.pagination"
    />
  </div>
</template>

<script lang="ts" setup>
import Paginate from 'vuejs-paginate-next';
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  pages: any
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pagination {
  display: flex;
}
.prev {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background: rgb(var(--color-overlay-light));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-body-dark));
  margin-right: rem(5px);
}
.next {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background: rgba(0, 144, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-primary-accent));
  margin-left: rem(5px);
}
.page {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-heading));
  font-size: rem(15px);
  font-weight: 400;
}
.active {
  border-radius: rem(10px);
  width: rem(34px);
  height: rem(34px);
  background: rgb(var(--color-primary-accent));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-heading));
  font-size: rem(15px);
  font-weight: 400;
}
</style>
