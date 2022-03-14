import { get } from '@/api/httpTransport';

export const checkNumber = (phoneNumber: number) => get(`/subs-info/sim-info/${phoneNumber}`);
