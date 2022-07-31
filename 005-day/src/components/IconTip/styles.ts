import { styled, theme } from "../../../stitches.config"; 

export const IconTipContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$primaryLight',
  borderRadius: '$round',
  padding: '$16',
  margin: '$12',
  width: '4rem',
  height: '4rem',
  fontSize: '$24',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  span: {
    'svg': {
      display: 'block',
      fontSize: '2rem',
    },
  },

  '&:hover .tooltip': {
    top: '-2.8rem',
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto'
  },

  '&:hover span, &:hover .tooltip': {
    textShadow: '0px -1px 0px rgba(0, 0, 0, 0.1)',
  },

  variants: {
    bgColor: {
      bg1: {
        '&:hover': {
          backgroundColor: '$background_1',
          color: '$primaryLight',
          '.tooltip': {
            backgroundColor: '$background_1',
            '&::before': {
              backgroundColor: theme.colors.background_1
            }
          },
        }
      },
      bg2: {
        '&:hover': {
          backgroundColor: '$background_2',
          color: '$primaryLight',
          '.tooltip': {
            backgroundColor: '$background_2',
            '&::before': {
              backgroundColor: '$background_2'
            }
          },
        }
      },
      bg3: {
        '&:hover': {
          backgroundColor: '$background_3',
          color: '$primaryLight',
          '.tooltip': {
            backgroundColor: '$background_3',
            '&::before': {
              backgroundColor: '$background_3'
            }
          },
        }
      },
      bg4: {
        '&:hover': {
          backgroundColor: '$background_4',
          color: '$primaryLight',
          '.tooltip': {
            backgroundColor: '$background_4',
            '&::before': {
              backgroundColor: '$background_4'
            }
          },
        }
        
      },
      bg5: {
        '&:hover': {
          backgroundColor: '$background_5',
          color: '$primaryLight',
          '.tooltip': {
            backgroundColor: '$background_5',
            '&::before': {
              backgroundColor: '$background_5'
            }
          },
        }
        
      },
    }
  },

  // defaultVariants: {
  //   bgColor: 'bg1',
  // }
});

export const Tooltip = styled('div', {
  position: 'absolute',
  top: 0,
  fontSize: '$16',
  fontWeight: 'bold',
  background: '$primaryLight',
  color: '$primaryLight',
  padding: '$4 $8',
  borderRadius: '$default',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  opacity: '0',
  pointerEvents: 'none',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  '&::before': {
    content: '',
    position: 'absolute',
    height: '0.5rem',
    width: '0.5rem',
    backgroundColor: '$primaryLight',
    bottom: '-0.25rem',
    left: '50%',
    transform: 'translate(-50%) rotate(45deg)',
    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
});