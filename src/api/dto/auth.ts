export type SignInDto = {
  email: string,
  password: string,
  remember: boolean,
}

export type SignUpDto = {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
}

export type ChangePasswordDto = {
  oldPassword: string,
  newPassword: string,
}

export type ProfileUpdateDto = {
  firstName: string,
  lastName: string,
  username: string,
  phone: string,
  job: string,
}
