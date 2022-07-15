import { post } from '@/api/transport';
import { SignInDto, SignUpDto, ResetPasswordDto } from '@/api/dto/auth';

export const signIn = (signInDto: SignInDto) => post('/auth/sign-in', signInDto);
export const signUp = (signUpDto: SignUpDto) => post('/auth/sign-up', signUpDto);
export const ResetPassword = (ResetPasswordDto: ResetPasswordDto) => post('/auth/reset-password', ResetPasswordDto);
