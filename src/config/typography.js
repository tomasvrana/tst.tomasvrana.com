import Typography from 'typography'

export default new Typography({
  baseFontSize: '1rem',
  baseLineHeight: 1,
  scaleRatio: 4.8,
  googleFonts: [
    {
      name: 'DM Sans',
      styles: [
        '200',
        '300',
        '600'
      ]
    }
  ],
  headerFontFamily: ['DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 300,
  bodyFontFamily: ['DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyWeight: 300,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      'margin': '1rem 0 3rem 0',
      'font-weight': '200',
      'font-size': '4rem',
      'line-height': '5.6rem',
      'letter-spacing': '1.4rem'
    },
    'h2': {
      'margin': '4.2rem 0 2.6rem',
      'font-size': '2.4rem',
      'line-height': '2.6rem',
      'letter-spacing': '0.4rem'
    },

    'h3,h4': {
      'line-height': '2.4rem'
    },
    'h3': {
      'margin': '3.4rem 0 1.8rem',
      'font-size': '1.5rem',
      'letter-spacing': '0.075rem',
      'font-weight': '600'
    },
    'h4': {
      'margin': '3rem 0 1.8rem',
      'font-size': '1.4rem',
      'font-weight': '400',
      'letter-spacing': '0.28rem'
    },
    'small': {
      'font-size': '1.2rem',
      'font-weight': '600',
      'letter-spacing': '0.28rem'
    },
    '.introduction': {
      'font-weight': '300',
      'font-size': '1.8rem',
      'line-height': '3rem',
      'letter-spacing': '0.018rem'
    },
    'body,code': {
      'font-size': '1.8rem',
      'line-height': '1.6',
      'letter-spacing': '0.14rem',
      'font-weight': '300'
    },
    '.title-text': {
      'font-size': '1.8rem',
      'line-height': '2.6rem',
      'letter-spacing': '0.18rem',
      'font-weight': '600'
    },
    '.sub-title-text': {
      'font-size': '1.3rem',
      'line-height': '2.3rem',
      'letter-spacing': '0.065rem',
      'font-weight': '600'
    }
  })
})
