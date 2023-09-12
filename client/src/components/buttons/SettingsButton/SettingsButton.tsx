import settingsIcon from './assets/settings.svg'

import * as Styled from './styled'

export function SettingsButton() {
  return (
    <Styled.SettingsButton>
      <Styled.SettingsButtonIcon src={settingsIcon} alt="settings" />
    </Styled.SettingsButton>
  )
}
