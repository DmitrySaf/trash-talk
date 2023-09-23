import { COUNTRY_NUMBER } from './constants'

export function formatPhoneNumberForPayload(phoneNumber: string): string {
  const onlyDigitsNumber = phoneNumber.replace(/(?!\d)./g, '')

  return `${COUNTRY_NUMBER}${onlyDigitsNumber}`
}
