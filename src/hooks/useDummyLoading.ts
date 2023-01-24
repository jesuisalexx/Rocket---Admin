import anime from 'animejs';

import { getRandomByRange } from '@/utils/number';
import { ref, watch, Ref } from 'vue';

export const useDummyLoading = (
  progress: Ref<number>,
  isLoading: Ref<boolean>,
) => {
  const loadingAnimation = ref<Record<any, any> | null>(null);
  const animate = (
    to: number,
    duration: number,
    callback = () => {},
  ) => {
    loadingAnimation.value = anime({
      targets: progress,
      value: to,
      easing: 'easeOutInExpo',
      duration,
      complete: callback,
    });
  };

  const enableDummyLoading = (
    from: number,
    to: number,
    pointsCountRange: [number, number],
  ) => {
    const pointsCount = Math.floor(getRandomByRange(...pointsCountRange));
    const loadingPoints = [
      from,
      ...Array(pointsCount)
        .fill(0)
        .map(() => Math.floor(Math.random() * to))
        .sort((a, b) => a - b),
      to,
    ];

    let activePoint = 0;
    const moveToPoint = () => {
      const currentPoint = loadingPoints[activePoint];
      const previousPoint = loadingPoints[activePoint - 1] || 0;

      const duration = (currentPoint - previousPoint) * 100
          + getRandomByRange(-500, 500);

      const animationCallBack = () => {
        if (isLoading.value && activePoint === (loadingPoints.length - 1)) {
          const unwatch = watch(isLoading, () => {
            animate(
              100,
              300,
            );
            unwatch();
          });
          return;
        }
        if (!isLoading.value) {
          animate(
            100,
            300,
          );
          return;
        }
        if (activePoint < (loadingPoints.length - 1)) {
          loadingAnimation.value?.remove();
          activePoint += 1;
          moveToPoint();
        }
      };
      animate(
        currentPoint,
        duration,
        animationCallBack,
      );
    };
    moveToPoint();
  };

  return {
    enableDummyLoading,
  };
};
