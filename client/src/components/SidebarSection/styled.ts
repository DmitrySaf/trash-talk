import styled from 'styled-components'

type SidebarSectionProps = {
  scrollable?: boolean
}

export const SidebarSection = styled.div<SidebarSectionProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ scrollable }) => scrollable && 'overflow: scroll'}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.grayDark};
`

export const AddIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
