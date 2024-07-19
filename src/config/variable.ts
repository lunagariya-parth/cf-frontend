interface ColorValues {
  white: string
  black: string
  success: string
  warning: string
  info: string
  error: string
  yellow: string
  'primary-1': string
  'primary-2': string
  'primary-3': string
  'primary-4': string
  'secondary-1': string
  'secondary-2': string
  'secondary-3': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  //light
  default: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    info: '56, 166, 222',
    success: '96, 181, 39',
    warning: '248, 156, 24',
    yellow: '253, 191, 0',
    error: '255, 69, 92',
    'primary-1': '56, 166, 222',
    'primary-2': '24, 80, 141',
    'primary-3': '128, 131, 163',
    'primary-4': '71, 71, 71',

    'secondary-1': '24, 101, 177',
    'secondary-2': '81, 161, 33',
    'secondary-3': '117, 117, 117'
  },
  dark: {
    white: '255, 255, 255',
    black: '0, 0, 0',

    info: '56, 166, 222',
    success: '96, 181, 39',
    warning: '248, 156, 24',
    yellow: '253, 191, 0',
    error: '255, 69, 92',

    'primary-1': '56, 166, 222',
    'primary-2': '24, 80, 141',
    'primary-3': '159, 160, 165',
    'primary-4': '223, 223, 223',

    'secondary-1': '24, 101, 177',
    'secondary-2': '81, 161, 33',
    'secondary-3': '141, 141, 141'
  }
}

export const breakpoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}

export const breakpointsDown = {
  xs: '(max-width: 479px)',
  sm: '(max-width: 575px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 991px)',
  xl: '(max-width: 1199px)',
  xxl: '(max-width: 1599px)'
}

export const spacingValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32]

export const sizeValues = [1, 2, 4, 8, 10, 12, 14, 16, 20, 24, 32, 36, 40, 44]

export const fontSizes = [6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60]

export const fontWeights = [300, 400, 500, 600, 700, 800, 900]

export const radiusValues = [0, 2, 4, 6, 8, 12, 16, 24, 1000]

export const displayValues = [
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'grid'
]

export const alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'baseline'
]

export const justifyContentValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]

export const flexDirectionValues = [
  'column',
  'column-reverse',
  'row',
  'row-reverse'
]

export const textAlignValues = [
  'start',
  'center',
  'end',
  'left',
  'right',
  'justify'
]

export const rem = (pxValue: number | number[]): string => {
  const ratio = 16 // Set according to the project configuration ratio
  if (Array.isArray(pxValue)) {
    ;[pxValue] = pxValue
  }
  const parsedPxValue = parseInt(pxValue.toString(), 10)
  return `${parsedPxValue / ratio}rem`
}
