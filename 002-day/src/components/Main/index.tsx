import { MainContainer, SignInContainer, SignUpContainer, SwitchContainer } from './styles';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export function Main() {
  return (
    <MainContainer>
      <SignUpContainer>
        <form action="">
          <h2 className='title'>Create Account</h2>
          <div className="form__icons">
            <FaFacebookF size={30} />
            <FaLinkedinIn size={30} />
            <FaTwitter size={30} />
          </div>

          <span className="form__span">or use email for registration</span>
          <input className='form__input' type="text" placeholder='Name' />
          <input className='form__input' type="email" placeholder='Email' />
          <input className='form__input' type="password" placeholder='Password' />

        <button className="btn__submit" type='submit'>
          Sign Up
        </button>
        </form>
      </SignUpContainer>

      <SignInContainer>
        <form action="">
          <h2 className="title">Sign in to Website</h2>
          <div className="form__icons">
            <FaFacebookF size={24} />
            <FaLinkedinIn size={24} />
            <FaTwitter size={24} />
          </div>

          <span className="form__span">or use your email account</span>
          <input className='form__input' type="email" placeholder='Email' />
          <input className='form__input' type="password" placeholder='Password' />
          <a className='form__link' href="#">
            Forgot your password?
          </a>

          <button className="btn__submit" type='submit'>
            Sign In
          </button>
        </form>
      </SignInContainer>

      <SwitchContainer>
        <div className="switch__circle"></div>
        <div className="switch_circle switch__circle--t"></div>
        <div className="switch__container">
          <h2 className="title">Welcome Back!</h2>
          <p className="description">
            To Keep connected with us please login with your personal info
          </p>
          <button className="switch__button">
            Sign In
          </button>
        </div>
        <div className="switch__container is-hidden">
          <h2 className="title">Hello Frind !</h2>
          <p className="description">
            Enter your personal details and start journey with us
          </p>
          <button className="switch__button">
            Sign Up
          </button>
        </div>
      </SwitchContainer>
    </MainContainer>
  )
}