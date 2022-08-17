import { styled } from "./style";

export const Button = styled("button", {
  background: '$primary',
  border: 'none',
  color: '$text',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1rem',
  margin: '1rem 3rem',
  padding: '0.75rem 3rem 0.625rem',
  position: 'relative',
  textTransform: 'uppercase',

  '&::before, &::after': {
    content: '',
    position: 'absolute',
    width: '25%',
    height: '1.5rem',
    borderStyle: 'solid',
    borderWidth: '0',
    transition: 'all 0.25s',
  },

  '&::before': {
    borderColor: '$primary',
    borderTopWidth: '2px',
    left: 0,
    top: '-5px'
  },

  '&::after': {
    borderColor: '$primary',
    borderBottomWidth: '2px',
    right: 0,
    bottom: '-5px'
  },

  '&:hover::before, &:hover::after': {
    width: '100%',
  }
})