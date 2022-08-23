import { ReactNode } from "react"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

export interface CardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

export const cards: CardProps[] = [
  {
    img: img1,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit?',
    link: 'https://www.futurecodersweb.com/2021/06/awesome-card-hover-effects-using-html.html'
  },
  {
    img: img2,
    title: 'Code',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit?',
    link: 'https://www.futurecodersweb.com/2021/06/awesome-card-hover-effects-using-html.html'
  },
  {
    img: img3,
    title: 'Launch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit?',
    link: 'https://www.futurecodersweb.com/2021/06/awesome-card-hover-effects-using-html.html'
  }
]