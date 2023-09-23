import { forwardRef } from 'react'
import { type UseFormRegister } from 'react-hook-form'

import * as Styled from './styled'

interface Props {
  label: string
  countryNumber: string
  error: string | undefined
}

export const MaskedInput = forwardRef<HTMLElement, Props & ReturnType<UseFormRegister<any>>>(
  function MaskedInput({ onChange, onBlur, name, label, countryNumber, error }, ref) {
    return (
      <Styled.InputWrapper>
        <label>
          <Styled.InputLabel>{label}</Styled.InputLabel>
          <Styled.InputGrid error={!!error}>
            <Styled.InputCountryNumber error={!!error}>{countryNumber}</Styled.InputCountryNumber>
            <Styled.Input
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              mask="999 999 99 99"
              maskChar="&ndash;"
              alwaysShowMask
            />
          </Styled.InputGrid>
        </label>
        {<Styled.InputDescription>{error}</Styled.InputDescription>}
      </Styled.InputWrapper>
    )
  }
)
