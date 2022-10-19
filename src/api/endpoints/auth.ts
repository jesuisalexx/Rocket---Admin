import { post, patch, get } from '@/api/transport';
import {
  SignInDto, SignUpDto, ChangePasswordDto, ProfileUpdateDto, ProductsListDto,
} from '@/api/dto/auth';

export const signIn = (signInDto: SignInDto) => post('/auth/sign-in', signInDto);

export const signUp = (signUpDto: SignUpDto) => post('/auth/sign-up', signUpDto);

export const changePassword = (changePasswordDto: ChangePasswordDto) => patch('/me/password', changePasswordDto);

export const profileUpdate = (profileUpdateDto: ProfileUpdateDto) => patch('/me', profileUpdateDto);

export const profileData = () => get('/me');

export const productsList = (productsListDto: ProductsListDto) => get('/product/list', productsListDto);
