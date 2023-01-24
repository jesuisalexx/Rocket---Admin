import { defineStore } from 'pinia';
import {
  nextTick,
  reactive,
  ref,
  watch,
} from 'vue';
import { adaptiveVariableTypes, displaySizes } from '@/types/adaptive';

export const useAdaptiveStore = defineStore('adaptive', () => {
  const sizing = [
    [displaySizes.MOBILE, 480],
    [displaySizes.TABLET, 768],
  ];

  const variableTypes = reactive({
    isMobileOrTighter: {
      type: adaptiveVariableTypes.TIGHTER,
      name: displaySizes.MOBILE,
    },
    isMobileOrWider: {
      type: adaptiveVariableTypes.WIDER,
      name: displaySizes.MOBILE,
    },
    isTabletOrTighter: {
      type: adaptiveVariableTypes.TIGHTER,
      name: displaySizes.TABLET,
    },
    isTabletOrWider: {
      type: adaptiveVariableTypes.WIDER,
      name: displaySizes.TABLET,
    },
  });
  const variableValues = reactive<Record<string, keyof typeof variableTypes>>({
    ...Object.entries(variableTypes).reduce((
      acc,
      [variableName],
    ) => ({
      ...acc,
      [variableName]: false,
    }), {}),
  });

  const currentWidth = ref<number>(0);
  const setCurrentWidth = () => {
    currentWidth.value = window.innerWidth;
  };
  window.addEventListener('resize', setCurrentWidth);
  window.addEventListener('orientationchange', setCurrentWidth);

  const point = ref<string>(displaySizes.DESKTOP);
  const setAdaptiveData = (currentWidth: number) => {
    const size = sizing.find((size) => size[1] > currentWidth);
    // @ts-ignore
    point.value = size?.[0] || displaySizes.DESKTOP;

    Object.entries(variableTypes).forEach(([variableName, variableData]) => {
      const width = sizing.find((size) => size[0] === variableData.name)?.[1];
      if (variableData.type === adaptiveVariableTypes.TIGHTER) {
        if (!width) return;
        // @ts-ignore
        variableValues[variableName] = currentWidth <= width;
      }
      if (variableData.type === adaptiveVariableTypes.WIDER) {
        if (!width) return;
        // @ts-ignore
        variableValues[variableName] = currentWidth > width;
      }
    });
  };
  watch(currentWidth, setAdaptiveData);
  nextTick(() => {
    setAdaptiveData(window.innerWidth);
  });

  return {
    point,
    variables: variableValues,
  };
});
