import { useState } from 'react'
import axios from 'axios'

import backgroundImage from './assets/background.jpeg'

import * as Styled from './styled'

function handleSubmit(phoneNumber: string) {
  axios.post('http://localhost:5000/api/registration', { phoneNumber })
}

export function Registration() {
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <Styled.Registration>
      <Styled.Background src={backgroundImage} />
      <Styled.BackgroundBlur />
      <Styled.Form onSubmit={() => handleSubmit(phoneNumber)}>
        <Styled.Header>Sign in to Storm</Styled.Header>
        <Styled.InputWrapper>
          <Styled.InputLabel>
            <span>Phone number</span>
            <Styled.InputGrid>
              <Styled.InputCountryNumber>+7</Styled.InputCountryNumber>
              <Styled.Input
                value={phoneNumber}
                onChange={({ target: { value } }) => setPhoneNumber(value)}
                mask="999 999 99 99"
                maskChar="&ndash;"
                alwaysShowMask
              />
            </Styled.InputGrid>
          </Styled.InputLabel>
          <Styled.InputDescription>this is pidor</Styled.InputDescription>
        </Styled.InputWrapper>
        <Styled.Button>
          <span>стать козлом</span>
        </Styled.Button>
      </Styled.Form>
    </Styled.Registration>
  )
}
