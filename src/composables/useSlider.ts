import {
  ref,
  watch,
  computed,
  onMounted,
  Ref,
} from 'vue';
import { useTouchEvents } from '@/hooks/useTouchEvents';
import { touchDirection } from '@/types/touch';

export const useSlider = (
  slides: Array<Record<any, any>>,
  timerInterval: number,
  slideRef: Ref,
  isInfinite = true,
  transition = 150,
) => {
  const activeSlideIndex = ref(0);
  const activeSlide = computed(() => slides[activeSlideIndex.value]);
  const isBusy = ref(false);
  const makeBusy = () => {
    isBusy.value = true;
  };
  const makeFree = () => {
    isBusy.value = false;
  };

  const showNext = () => {
    if (isBusy.value) return;
    // eslint-disable-next-line
    turnOffAutoPlay();
    const isLastSlide = activeSlideIndex.value === (slides.length - 1);

    if (!isLastSlide) {
      activeSlideIndex.value += 1;
    } else if (isInfinite) {
      activeSlideIndex.value = 0;
    } else {
      return;
    }
    // eslint-disable-next-line
    if (isAutoPlay.value) {
      // eslint-disable-next-line
      turnOnAutoPlay();
    }
    makeBusy();
  };

  const showPrev = () => {
    if (isBusy.value) return;
    // eslint-disable-next-line
    turnOffAutoPlay();

    const isFirstSlide = activeSlideIndex.value === 0;

    if (!isFirstSlide) {
      activeSlideIndex.value -= 1;
    } else if (isInfinite) {
      activeSlideIndex.value = slides.length - 1;
    } else {
      return;
    }

    // eslint-disable-next-line
    if (isAutoPlay.value) {
      // eslint-disable-next-line
      turnOnAutoPlay();
    }
    makeBusy();
  };

  const isAutoPlay = ref(false);
  const enableAutoPlay = () => {
    isAutoPlay.value = true;
  };
  const disableAutoPlay = () => {
    isAutoPlay.value = false;
  };

  const timerId = ref<number | undefined>(undefined);
  const turnOnAutoPlay = () => {
    if (timerId.value) return;
    timerId.value = setInterval(showNext, timerInterval);
  };
  const turnOffAutoPlay = () => {
    clearInterval(timerId.value);
    timerId.value = undefined;
  };

  const slideShift = ref(0);
  const isSwiping = ref(false);
  watch(isSwiping, (val) => {
    if (!isAutoPlay.value) return;
    if (val) {
      turnOffAutoPlay();
    } else {
      turnOnAutoPlay();
    }
  });
  const computedSlideStyles = ref({
    transform: 'translateX(0px)',
    transition: 'none',
  });
  const setSlideStyle = () => {
    computedSlideStyles.value = {
      transform: `translateX(${slideShift.value}px)`,
      transition: isSwiping.value ? 'none' : `${transition}ms transform`,
    };
  };
  watch([slideShift, isSwiping], setSlideStyle);

  const isBlockSwiping = ref(false);
  onMounted(() => {
    const { usePan } = useTouchEvents(slideRef.value);
    usePan(touchDirection.HORIZONTAL, (e) => {
      if (e.isFinal) {
        slideShift.value = 0;
        isSwiping.value = false;
        isBlockSwiping.value = false;
        if (e.deltaX >= 0) {
          showPrev();
          makeFree();
        }
        if (e.deltaX < 0) {
          showNext();
          makeFree();
        }
        return;
      }
      slideShift.value = e.deltaX / 2.5;
      if (
        (e.additionalEvent === 'panleft' || e.additionalEvent === 'panright')
          && Math.abs(e.deltaX) > 100
      ) {
        isSwiping.value = true;
      }
    });
  });

  return {
    activeSlideIndex,
    activeSlide,
    isBusy,
    makeBusy,
    makeFree,
    showNext,
    showPrev,
    enableAutoPlay,
    disableAutoPlay,
    turnOnAutoPlay,
    turnOffAutoPlay,
    slideShift,
    isSwiping,
    computedSlideStyles,
  };
};
