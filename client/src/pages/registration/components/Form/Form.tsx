import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MaskedInput } from '../../components/MaskedInput'
import { COUNTRY_NUMBER } from '@/features/users'
import { phoneNumberValidation } from '@/shared/validation'
import { object } from 'yup'

import * as Styled from './styled'

export interface FormState {
  phoneNumber: string
}

interface Props {
  loading: boolean
  submit: (formState: FormState) => void
}

const schema = object({
  phoneNumber: phoneNumberValidation()
})

export function Form({ loading, submit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit(data: any) {
    submit(data)
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Header>Sign in to Storm</Styled.Header>
      <MaskedInput
        {...register('phoneNumber')}
        label="Phone number"
        countryNumber={COUNTRY_NUMBER}
        error={errors.phoneNumber?.message}
      />
      <Styled.Button type="submit" disabled={loading}>
        {loading ? <span>0</span> : <span>стать козлом</span>}
      </Styled.Button>
    </Styled.Form>
  )
}
