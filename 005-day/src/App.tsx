import { IconTip, IconTipProps } from './components/IconTip';
import { styled } from '../stitches.config';
import { globalStyles } from './styles/global';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaYoutube
} from 'react-icons/fa';


globalStyles();

const Wrapper = styled('div', {
  display: 'inline-flex',
})


interface IconesProps extends IconTipProps {};

export function App() {
  const icones: IconesProps[] = [
    {
      icon: FaFacebook,
      iconDescription: 'Facebook',
    },
    {
      icon: FaTwitter,
      iconDescription: 'Twitter',
    },
    {
      icon: FaInstagram,
      iconDescription: 'Instagram',
    },
    {
      icon: FaGithub,
      iconDescription: 'Github',
    },
    {
      icon: FaYoutube,
      iconDescription: 'Youtube'
    }
  ]

  return (
    <div className='App'>
      <Wrapper>
        {icones.map((icon) => {
          return (
            <IconTip 
              key={icon.iconDescription}
              icon={icon.icon} 
              iconDescription={icon.iconDescription}
            />
          )
        })}
      </Wrapper>
    </div>
  )
}
