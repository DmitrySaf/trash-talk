import styled from 'styled-components'

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
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  &::after {
    content: 'ebem kozlov';
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights.main};
    color: ${({ theme }) => theme.colors.white};
  }
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
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
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

  &:hover,
  &:focus {
    &::before {
      outline: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`
