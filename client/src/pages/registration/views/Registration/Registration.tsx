import { useUsersActions } from '@/features/users'
import { Form, type FormState } from '../../components/Form'
import { BackgroundImageWithBlur } from '@/components/BackgroundImageWithBlur'
import backgroundImage from './assets/background.jpeg'
import * as Styled from './styled'

export function Registration() {
  const { creatingUser, createUser } = useUsersActions()

  async function handleSubmit(form: FormState) {
    const { username } = form
    const payload = { username }

    await createUser(payload)
  }

  return (
    <>
      <BackgroundImageWithBlur image={backgroundImage} />
      <Styled.Registration>
        <Form loading={creatingUser} submit={handleSubmit} />
      </Styled.Registration>
    </>
  )
}
