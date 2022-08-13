import * as S from './styles'

export function Form() {
  return (
    <S.FormContainer>
      <S.SignUpContainer>
        <form action="#" id="form1">
          <h2>Sign Up</h2>
          <input type="text" placeholder="User" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </S.SignUpContainer>

      <S.SignInContainer>
        <form action="#">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your passwaord?</a>
          <button>Sign In</button>
        </form>
      </S.SignInContainer>

      <S.OverlayContainer>
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button>Sing In</button>
          </div>

          <div className="overlay__panel overlay--right">
            <button>Sing Up</button>
          </div>
        </div>
      </S.OverlayContainer>
    </S.FormContainer>
  )
}
