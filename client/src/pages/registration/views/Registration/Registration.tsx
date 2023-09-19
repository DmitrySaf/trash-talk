import { useState, type FormEvent } from 'react'
import axios from 'axios'

import { MaskedInput } from '../../components/MaskedInput'
import backgroundImage from './assets/background.jpeg'

import * as Styled from './styled'

interface FormState {
  phoneNumber: string
}

const COUNTRY_NUMBER = '+7'

export function Registration() {
  const [formState, setFormState] = useState<FormState>({ phoneNumber: '' })
  const [error, setError] = useState<string | undefined>()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const onlyDigitsNumber = formState.phoneNumber.replace(/(?!\d)./g, '')

    if (onlyDigitsNumber.length !== 10) {
      setError('Invalid phone number')

      return
    }

    const formattedPhoneNumber = `${COUNTRY_NUMBER}${onlyDigitsNumber}`
    axios.post('http://localhost:5000/api/auth/phone', { phoneNumber: formattedPhoneNumber })
  }

  return (
    <Styled.Registration>
      <Styled.Background src={backgroundImage} />
      <Styled.BackgroundBlur />
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Header>Sign in to Storm</Styled.Header>
        <MaskedInput
          label="Phone number"
          countryNumber={COUNTRY_NUMBER}
          error={error}
          onChange={(value) => setFormState({ phoneNumber: value })}
        />
        <Styled.Button>
          <span>стать козлом</span>
        </Styled.Button>
      </Styled.Form>
    </Styled.Registration>
  )
}
