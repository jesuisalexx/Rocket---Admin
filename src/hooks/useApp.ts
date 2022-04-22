import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';
import { useTitleStore } from '@/stores/title';

export const useApp = () => {
  const route = useRoute();

  useTitleStore();
  const sessionStore = useSessionStore();
  const profileStore = useProfileStore();

  watch(route, () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  onMounted(() => {
    if (sessionStore.token) {
      profileStore.getProfile();
    }
  });
};
