import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/Input'
import { usernameValidation } from '@/shared/validation/shared'
import { object } from 'yup'

import * as Styled from './styled'

export interface FormState {
  username: string
}

interface Props {
  loading: boolean
  submit: (formState: FormState) => void
}

const schema = object({
  username: usernameValidation()
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
      <Input
        {...register('username')}
        label="username"
        placeholder="Enter username"
        error={errors.username?.message}
      />
      {/* <MaskedInput
        {...register('phoneNumber')}
        label="Phone number"
        countryNumber={COUNTRY_NUMBER}
        error={errors.phoneNumber?.message}
      /> */}
      <Styled.Button type="submit" disabled={loading}>
        {loading ? <span>0</span> : <span>стать козлом</span>}
      </Styled.Button>
    </Styled.Form>
  )
}
