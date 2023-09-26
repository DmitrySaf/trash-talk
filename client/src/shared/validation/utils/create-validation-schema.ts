import { object } from 'yup'

export function createValidationSchema(obj: Record<any, any>): any {
  return object(obj)
}
