import Hammer from 'hammerjs';
import { touchDirection } from '@/types/touch';

export const useTouchEvents = (element: HTMLElement, options?: Record<any, any>) => {
  const hammer = new Hammer(element, options);

  const useSwipe = (direction: touchDirection, callback: (event: Record<any, any>) => void) => {
    hammer.on('swipe', callback);
    hammer.get('swipe').set({ direction });
  };

  const usePan = (direction: touchDirection, callback: (event: Record<any, any>) => void) => {
    hammer.on('pan', callback);
    hammer.get('pan').set({ direction });
  };

  return {
    useSwipe,
    usePan,
  };
};
