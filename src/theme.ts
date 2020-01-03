export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: '#067df7',
    lightgray: '#f6f6ff',
    darkgray: '#9b9b9b',
    heading: '#333',
    text: '#434343'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {
    card: {
      padding: '18px 18px 24px',
      width: '220px',
      textAlign: 'left',
      textDecoration: 'none',
      color: 'text',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'darkgrey',
      '&:hover': {
        borderColor: 'primary'
      }
    },
    row: {
      maxWidth: 880,
      m: '80px auto 40px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    nav: {
      textAlign: 'center',

      ul: {
        p: '4px 16px',
        display: 'flex',
        justifyContent: 'space-between'
      },
      li: {
        p: '6px 8px',
        display: 'flex'
      },
      a: {
        fontSize: 13,
        color: 'primary',
        textDecoration: 'none'
      }
    }
  },
  text: {
    heading: {
      color: 'heading'
    },
    page: {
      title: {
        color: 'heading',
        m: 0,
        width: '100%',
        pt: 80,
        lineHeight: 1.15,
        fontSize: 6
      }
    },
    card: {
      title: {
        m: 0,
        color: 'primary',
        fontSize: '18px'
      },
      body: {
        m: 0,
        p: '12px 0 0',
        fontSize: '13px',
        color: 'title'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    }
  }
};
