import { FormEvent, useRef } from 'react';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa';

import { 
  MainContainer, 
  SignInContainer, 
  SignUpContainer, 
  SwitchContainer 
} from './styles';

export function Main() {
  const switchContainer = useRef<HTMLDivElement>(null);
  const switchC1 = useRef<HTMLDivElement>(null);
  const switchC2 = useRef<HTMLDivElement>(null);
  const switchCircle1 = useRef<HTMLDivElement>(null);
  const switchCircle2 = useRef<HTMLDivElement>(null);

  const signUpContainer = useRef<HTMLDivElement>(null);
  const signInContainer = useRef<HTMLDivElement>(null);

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleSwitchForm() {
    switchContainer.current?.classList.add('is-gx');
    setTimeout(() => {
      switchContainer.current?.classList.remove('is-gx');
    }, 1500);

    switchContainer.current?.classList.toggle('is-txr');
    switchCircle1.current?.classList.toggle('is-txr');
    switchCircle2.current?.classList.toggle('is-txr');
    // switchCircles.current?.classList.toggle('is-txr');
    // switchCircles.current[1]?.classList.toggle('is-txr');

    switchC1.current?.classList.toggle('is-hidden');
    switchC2.current?.classList.toggle('is-hidden');

    signUpContainer.current?.classList.toggle('is-txl');
    signInContainer.current?.classList.toggle('is-txl');
    signInContainer.current?.classList.toggle('is-z200');
  }

  return (
    <MainContainer>
      <SignUpContainer ref={signUpContainer}>
        <form action="" onSubmit={handleFormSubmit}>
          <h2 className='title'>Create Account</h2>
          <div className="form__icons">
          <span className="form__icon">
              <FaFacebookF />
            </span>
            <span className="form__icon">
              <FaLinkedinIn />
            </span>
            <span className="form__icon">
              <FaTwitter />
            </span>
          </div>

          <span className="form__span">or use email for registration</span>
          <input className='form__input' type="text" placeholder='Name' />
          <input className='form__input' type="email" placeholder='Email' />
          <input className='form__input' type="password" placeholder='Password' />

        <button 
          className="btn__submit" 
          type='submit'
        >
          Sign Up
        </button>
        </form>
      </SignUpContainer>

      <SignInContainer ref={signInContainer}>
        <form action="" onSubmit={handleFormSubmit}>
          <h2 className="title">Sign in to Website</h2>
          <div className="form__icons">
            <span className="form__icon">
              <FaFacebookF />
            </span>
            <span className="form__icon">
              <FaLinkedinIn />
            </span>
            <span className="form__icon">
              <FaTwitter />
            </span>
          </div>

          <span className="form__span">or use your email account</span>
          <input className='form__input' type="email" placeholder='Email' />
          <input className='form__input' type="password" placeholder='Password' />
          <a className='form__link' href="#">
            Forgot your password?
          </a>

          <button 
            className="btn__submit" 
            type='submit'
          >
            Sign In
          </button>
        </form>
      </SignInContainer>

      <SwitchContainer ref={switchContainer}>
        <div className="switch__circle" ref={switchCircle1}></div>
        <div className="switch__circle switch__circle--t" ref={switchCircle2}></div>
        <div className="switch__container" ref={switchC1}>
          <h2 className="title">Welcome Back!</h2>
          <p className="description">
            To Keep connected with us please login with your personal info
          </p>
          <button 
            className="switch__button" 
            onClick={() => handleSwitchForm()}
          >
            Sign In
          </button>
        </div>
        <div className="switch__container is-hidden" ref={switchC2}>
          <h2 className="title">Hello Friend !</h2>
          <p className="description">
            Enter your personal details and start journey with us
          </p>
          <button 
            className="switch__button" 
            onClick={() => handleSwitchForm()}
          >
            Sign Up
          </button>
        </div>
      </SwitchContainer>
    </MainContainer>
  )
}