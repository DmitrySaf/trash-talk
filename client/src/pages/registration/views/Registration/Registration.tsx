import { useUsersActions } from '@/features/users'
import { Form, type FormState } from '../../components/Form'
import { formatPhoneNumberForPayload } from '@/features/users'
import backgroundImage from './assets/background.jpeg'
import * as Styled from './styled'

export function Registration() {
  const { creatingUser, createUser } = useUsersActions()

  async function handleSubmit(form: FormState) {
    const formattedPhoneNumber = formatPhoneNumberForPayload(form.phoneNumber)
    const payload = { phoneNumber: formattedPhoneNumber }

    await createUser(payload)
  }

  return (
    <Styled.Registration>
      <Styled.Background src={backgroundImage} />
      <Styled.BackgroundBlur />
      <Form loading={creatingUser} submit={handleSubmit} />
    </Styled.Registration>
  )
}
