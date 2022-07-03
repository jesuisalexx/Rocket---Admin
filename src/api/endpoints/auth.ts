import { post } from '@/api/transport';
import { SignInDto } from '@/api/dto/auth';

export const signIn = (signInDto: SignInDto) => post('/auth/sign-in', signInDto);
