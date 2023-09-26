import { string } from 'yup'

const USERNAME_REGEX = /^[a-zA-Z0-9]+$/

export const usernameValidation = () => {
  return string().matches(USERNAME_REGEX, 'username is not valid')
}
