import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Registration = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
`

export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 1;
`

export const Form = styled.form`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Header = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 130%;
  color: white;

  &::after {
    content: 'ebem kozlov';
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 130%;
    color: white;
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const InputLabel = styled.label`
  width: 100%;
  height: 100%;
  color: white;
  font-weight: 400;
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  border: 1px solid white;
  border-radius: 16px;
  margin: 4px 0;
`

export const InputCountryNumber = styled.div`
  padding: 16px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border-right: 1px solid white;
`

export const Input = styled(InputMask)`
  padding: 16px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  &:focus {
    outline: none;
  }
`

export const InputDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: white;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 18px;
  border: none;
  background: none;
  cursor: pointer;

  & > span {
    position: relative;
    z-index: 100;
    font-size: 17px;
    font-weight: 500;
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    overflow: hidden;
    border-radius: 16px;
    z-index: 99;
  }
`
