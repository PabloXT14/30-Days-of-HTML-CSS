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
      bgColor: 'bg1'
    },
    {
      icon: FaTwitter,
      iconDescription: 'Twitter',
      bgColor: 'bg2'
    },
    {
      icon: FaInstagram,
      iconDescription: 'Instagram',
      bgColor: 'bg3'
    },
    {
      icon: FaGithub,
      iconDescription: 'Github',
      bgColor: 'bg4',
    },
    {
      icon: FaYoutube,
      iconDescription: 'Youtube',
      bgColor: 'bg5'
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
              bgColor={icon.bgColor}
            />
          )
        })}
      </Wrapper>
    </div>
  )
}
