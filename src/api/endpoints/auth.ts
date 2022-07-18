import { post, patch } from '@/api/transport';
import { SignInDto, SignUpDto, ChangePasswordDto } from '@/api/dto/auth';

export const signIn = (signInDto: SignInDto) => post('/auth/sign-in', signInDto);

export const signUp = (signUpDto: SignUpDto) => post('/auth/sign-up', signUpDto);

export const changePassword = (changePasswordDto: ChangePasswordDto) => patch('/me/password', changePasswordDto);
