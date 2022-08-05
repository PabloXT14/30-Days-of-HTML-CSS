import { styled } from "./styles";

export const Container = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.25rem',

  form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  }
});

export const InputRadioAreaLabel = styled('label', {
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  fontWeight: 500,
  cursor: 'pointer',
  marginBottom: '0.375em',

  input: {
    position: 'absolute',
    left: '-999999px',
  },

  'input:checked + span': {
    backgroundColor: '$thirdy',
  },

  'input:checked + span::before': {
    boxShadow: 'inset 0 0 0 0.4375em #8257E6',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.375em 0.75em 0.375em 0.375em',
    borderRadius: '999999px',
    transition: '0.25s ease',

    '&:hover': {
      backgroundColor: '$hover_bg',
    },

    '&::before': {
      content: '',
      display: 'flex',
      flexShrink: 0,
      backgroundColor: '$primary',
      width: '1.5em',
      height: '1.5em',
      borderRadius: '50%',
      marginRight: '0.375em',
      transation: '0.25s ease',
      boxShadow: 'inset 0 0 0 0.125em #8257E6'
    }
  },
});