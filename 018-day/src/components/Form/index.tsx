import { FormEvent, useState } from 'react'
import * as S from './styles'

export function Form() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(true)

  function handleSubmitForms(event: FormEvent) {
    event.preventDefault()
  }

  function handleSignIn() {
    setIsRightPanelActive(false)
  }

  function handleSignUp() {
    setIsRightPanelActive(true)
  }

  return (
    <S.FormContainer>
      <S.SignUpContainer isRightPanelActive={isRightPanelActive}>
        <form action="#" id="form1" onSubmit={handleSubmitForms}>
          <S.FormTitle>Sign Up</S.FormTitle>
          <input type="text" placeholder="User" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <S.CustomButton>Sign Up</S.CustomButton>
        </form>
      </S.SignUpContainer>

      <S.SignInContainer isRightPanelActive={isRightPanelActive}>
        <form action="#" id="form2" onSubmit={handleSubmitForms}>
          <S.FormTitle>Sign In</S.FormTitle>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <S.Link href="#">Forgot your passwaord?</S.Link>
          <S.CustomButton>Sign In</S.CustomButton>
        </form>
      </S.SignInContainer>

      <S.OverlayContainer isRightPanelActive={isRightPanelActive}>
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <S.CustomButton onClick={handleSignIn}>Sing In</S.CustomButton>
          </div>

          <div className="overlay__panel overlay--right">
            <S.CustomButton onClick={handleSignUp}>Sing Up</S.CustomButton>
          </div>
        </div>
      </S.OverlayContainer>
    </S.FormContainer>
  )
}
