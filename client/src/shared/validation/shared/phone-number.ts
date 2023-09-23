import { string } from 'yup'

const PHONE_NUMBER_REGEX = /\d{3}\s{1}\d{3}\s{1}\d{2}\s{1}\d{2}/

export const phoneNumberValidation = () => {
  return string().matches(PHONE_NUMBER_REGEX, 'number is not valid')
}
