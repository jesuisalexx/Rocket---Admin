import { post } from '@/api';
import { ImageUploadDto } from '@/api/dto/images';

export const imageUpload = (imageUploadDto: ImageUploadDto) => post('/image', imageUploadDto);
