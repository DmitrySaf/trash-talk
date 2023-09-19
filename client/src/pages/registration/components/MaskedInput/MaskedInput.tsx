import { useState, type ChangeEvent } from 'react'

import * as Styled from './styled'

interface Props {
  label: string
  countryNumber: string
  error?: string
  onChange: (value: string) => void
}

export function MaskedInput({ label, countryNumber, error, onChange }: Props) {
  const [value, setValue] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value: newValue } = event.target

    setValue(newValue)
    onChange(newValue)
  }

  return (
    <Styled.InputWrapper>
      <label>
        <Styled.InputLabel>{label}</Styled.InputLabel>
        <Styled.InputGrid error={Boolean(error)}>
          <Styled.InputCountryNumber error={Boolean(error)}>
            {countryNumber}
          </Styled.InputCountryNumber>
          <Styled.Input
            value={value}
            onChange={handleChange}
            mask="999 999 99 99"
            maskChar="&ndash;"
            alwaysShowMask
          />
        </Styled.InputGrid>
      </label>
      {error !== undefined && <Styled.InputDescription>{error}</Styled.InputDescription>}
    </Styled.InputWrapper>
  )
}
