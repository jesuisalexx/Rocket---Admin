import {
  computed, nextTick, onMounted, Ref, ref, watch,
} from 'vue';
import { replaceAt } from '@/utils/string';

export const useMask = (
  input: Ref<HTMLInputElement | null>,
  mask: string,
) => {
  const localValue = ref(mask);

  const computedValue = computed(() => localValue.value);

  const allowedSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const setCursor = (position: number) => {
    input.value?.setSelectionRange(position, position);
  };

  const setCursorToLastNumber = () => {
    let lastNumberIndex = computedValue.value.search(/(\d)(?!.*\d)/);
    if (lastNumberIndex > 0) {
      lastNumberIndex += 1;
      setCursor(lastNumberIndex);
      return;
    }
    setCursor(1);
  };

  const onKeyDown = async (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const currentCursorPosition = input.value?.selectionStart || 0;
      const isCursorAtEnd = currentCursorPosition === mask.length;

      let deleteIndex;

      const deletablePosition = (currentCursorPosition - 1);
      if (isCursorAtEnd) {
        deleteIndex = localValue.value.search(/(\d)(?!.*\d)/);
      } else if (mask[deletablePosition] !== '#') {
        deleteIndex = localValue.value.search(/(\d)(?!.*\d)/);
      } else {
        deleteIndex = deletablePosition;
      }

      if (mask[deleteIndex] !== '#') {
        return;
      }

      localValue.value = replaceAt(localValue.value, deleteIndex, '#');
      await nextTick();
      setCursor(deleteIndex);
      return;
    }

    const slotIndex: number = localValue.value.indexOf('#');
    if (slotIndex === -1) return;
    if (!allowedSymbols.includes(e.key)) return;

    localValue.value = replaceAt(localValue.value, slotIndex, e.key);
    await nextTick();
    setCursorToLastNumber();
  };

  onMounted(() => {
    input.value?.addEventListener('keydown', onKeyDown);
    input.value?.addEventListener('focus', async () => {
      await nextTick();
      const lastSlot = localValue.value.indexOf('#');
      if (lastSlot === -1) return;

      setTimeout(() => {
        setCursor(lastSlot);
      });

      setCursor(lastSlot);
    });
  });

  return computedValue;
};
