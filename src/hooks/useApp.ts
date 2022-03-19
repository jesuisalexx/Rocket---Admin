import { onMounted } from 'vue';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';

export const useApp = () => {
  const sessionStore = useSessionStore();
  const profileStore = useProfileStore();

  onMounted(() => {
    if (sessionStore.token) {
      profileStore.getProfile();
    }
  });
};
