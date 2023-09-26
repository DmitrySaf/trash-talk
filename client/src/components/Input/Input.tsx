import { forwardRef } from 'react'
import { type UseFormRegister } from 'react-hook-form'

import * as Styled from './styled'

interface Props {
  label: string
  placeholder: string
  error: string | undefined
}

export const Input = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<any>>>(
  function Input({ onChange, onBlur, name, label, placeholder, error }, ref) {
    return (
      <Styled.InputWrapper>
        <label>
          <Styled.InputLabel>{label}</Styled.InputLabel>
          <Styled.Input
            name={name}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            $error={!!error}
          />
        </label>
        <Styled.InputDescription>{error}</Styled.InputDescription>
      </Styled.InputWrapper>
    )
  }
)
