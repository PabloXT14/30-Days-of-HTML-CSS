import { styled } from "../../styles/stitches.config";

export const AccordionItemContainer = styled('div', {
  borderBottom: '1px solid',
  borderColor: '$border_1',

  'button': {
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    width: '100%',
    padding: '1rem 0',
    color: '$secondary',
    fontSize: '1.15rem',
    fontWeight: 400,
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',

    '&:hover, &:focus': {
      curor: 'pointer',
      color: '$thirdy'
    },

    '&:hover::after, &:focus::after': {
      cursor: 'pointer',
      color: '$thirdy',
      border: '1px solid',
      borderColor: '$thirdy'
    },

    '.accordion-title': {
      padding: '1em 1.5em 1em 0'
    },

    '.accordion-icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '1.125rem',
      right: '0',
      width: '1.375rem',
      height: '1.375rem',
      border: '1px solid',
      borderRadius: '22px',

      'svg': {
        width: '70%',
        height: '70%',
      }
    }
  },

  '.accordion-content': {
    opacity: 0,
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'opacity 200ms linear, max-height 200ms linear',

    'p': {
      fontSize: '1rem',
      fontWeight: 300,
      margin: '2em 0'
    }
  },

  variants: {
    isOpen: {
      true: {
        'button': {
          borderBottom: '1px solid',
          borderColor: '$border_2',

          '& + .accordion-content': {
            opacity: 1,
            maxHeight: '9em',
            transition: 'all 200ms linear',
          }
        }
      }
    }
  }

});