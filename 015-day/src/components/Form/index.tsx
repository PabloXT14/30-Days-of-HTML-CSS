import * as S from './styles'
import {
  IoMdLock,
  IoMdArrowBack,
  IoMdBookmark,
  IoMdSettings,
  IoMdSearch,
} from 'react-icons/io'

export function Form() {
  return (
    <S.FormContainer>
      <S.Segment>
        <h1>Sign In</h1>
      </S.Segment>

      <S.InputField>
        <input type="text" placeholder="Email Address" />
      </S.InputField>

      <S.InputField>
        <input type="password" placeholder="Password" />
      </S.InputField>

      <S.CustomButton buttonType="tertiary">
        <IoMdLock />
        Log In
      </S.CustomButton>

      <S.Segment>
        <S.CustomButton buttonType="secondary">
          <IoMdArrowBack />
        </S.CustomButton>

        <S.CustomButton buttonType="secondary">
          <IoMdBookmark />
        </S.CustomButton>

        <S.CustomButton buttonType="secondary">
          <IoMdSettings />
        </S.CustomButton>
      </S.Segment>

      <S.InputGroup>
        <S.InputField>
          <input type="text" placeholder="Email Address" />
        </S.InputField>
        <S.CustomButton buttonType="secondary">
          <IoMdSearch />
        </S.CustomButton>
      </S.InputGroup>
    </S.FormContainer>
  )
}
