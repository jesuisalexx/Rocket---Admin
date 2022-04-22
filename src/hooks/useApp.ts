import { onMounted } from 'vue';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';
import { useTitleStore } from '@/stores/title';

export const useApp = () => {
  useTitleStore();
  const sessionStore = useSessionStore();
  const profileStore = useProfileStore();

  onMounted(() => {
    if (sessionStore.token) {
      profileStore.getProfile();
    }
  });
};
