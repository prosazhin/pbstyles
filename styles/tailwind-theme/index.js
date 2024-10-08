module.exports = {
  fontFamily: { sans: 'Inter, sans-serif' },
  fontWeight: { regular: 400, medium: 600, bold: 700 },
  lineHeight: { none: 1, tight: 1.25, normal: 1.5 },
  fontSize: {
    12: '12px',
    14: '14px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    48: '48px',
    64: '64px',
    h64: ['64px', { lineHeight: 1.25, fontWeight: 700 }],
    h48: ['48px', { lineHeight: 1.25, fontWeight: 700 }],
    h32: ['32px', { lineHeight: 1.25, fontWeight: 700 }],
    h24: ['24px', { lineHeight: 1.25, fontWeight: 700 }],
    h16: ['16px', { lineHeight: 1.25, fontWeight: 700 }],
    h20: ['20px', { lineHeight: 1.25, fontWeight: 700 }],
    t32: ['32px', { lineHeight: 1.5, fontWeight: 400 }],
    t24: ['24px', { lineHeight: 1.5, fontWeight: 400 }],
    t20: ['20px', { lineHeight: 1.5, fontWeight: 400 }],
    t16: ['16px', { lineHeight: 1.5, fontWeight: 400 }],
    t14: ['14px', { lineHeight: 1.5, fontWeight: 400 }],
    t12: ['12px', { lineHeight: 1.5, fontWeight: 400 }],
    tm32: ['32px', { lineHeight: 1.5, fontWeight: 600 }],
    tm24: ['24px', { lineHeight: 1.5, fontWeight: 600 }],
    tm20: ['20px', { lineHeight: 1.5, fontWeight: 600 }],
    tm16: ['16px', { lineHeight: 1.5, fontWeight: 600 }],
    tm14: ['14px', { lineHeight: 1.5, fontWeight: 600 }],
    tm12: ['12px', { lineHeight: 1.5, fontWeight: 600 }],
  },
  colors: {
    basic: { main: '#000000', light: '#78909c', lighter: '#f5f5f5', lightest: '#fafafa' },
    primary: { darker: '#2962ff', main: '#2979ff', light: '#bbdefb', lighter: '#e3f2fd' },
    secondary: { darker: '#263238', main: '#37474f', light: '#cfd8dc', lighter: '#eceff1' },
    success: { darker: '#4caf50', main: '#00c853', light: '#c8e6c9', lighter: '#e8f5e9' },
    danger: { darker: '#d50000', main: '#ff5252', light: '#ffcdd2', lighter: '#ffebee' },
    outline: {
      primary: 'rgba(41, 121, 255, 0.2)',
      secondary: 'rgba(55, 71, 79, 0.2)',
      success: 'rgba(0, 200, 83, 0.2)',
      danger: 'rgba(255, 23, 68, 0.2)',
    },
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      blue: {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
      },
    },
    blue: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      accent: { 100: '#82b1ff', 200: '#448aff', 300: '#2979ff', 400: '#2962ff' },
    },
    green: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      accent: { 100: '#b9f6ca', 200: '#69f0ae', 300: '#00e676', 400: '#00c853' },
    },
    red: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      accent: { 100: '#ff8a80', 200: '#ff5252', 300: '#ff1744', 400: '#d50000' },
    },
    pink: {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      accent: { 100: '#ff80ab', 200: '#ff4081', 300: '#f50057', 400: '#c51162' },
    },
    yellow: {
      50: '#fffde7',
      100: '#fff9c4',
      200: '#fff59d',
      300: '#fff176',
      400: '#ffee58',
      500: '#ffeb3b',
      600: '#fdd835',
      700: '#fbc02d',
      800: '#f9a825',
      900: '#f57f17',
      accent: { 100: '#ffff8d', 200: '#ffff00', 300: '#ffea00', 400: '#ffd600' },
    },
    orange: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
      accent: { 100: '#ffd180', 200: '#ffab40', 300: '#ff9100', 400: '#ff6d00' },
    },
  },
  screens: {
    desktop: { min: '769px' },
    mobile: { max: '768px' },
    xl: { min: '1441px' },
    lg: { max: '1440px', min: '921px' },
    md: { max: '920px', min: '769px' },
    sm: { max: '768px', min: '481px' },
    xs: { max: '480px' },
  },
  spacing: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    26: '26px',
    28: '28px',
    30: '30px',
    32: '32px',
    36: '36px',
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
    80: '80px',
    88: '88px',
    96: '96px',
    104: '104px',
    112: '112px',
    120: '120px',
    128: '128px',
    136: '136px',
    144: '144px',
    152: '152px',
    160: '160px',
    180: '180px',
    200: '200px',
    220: '220px',
    240: '240px',
    260: '260px',
    280: '280px',
    300: '300px',
    320: '320px',
    360: '360px',
    400: '400px',
  },
  borderRadius: {
    0: '0px',
    4: '4px',
    6: '6px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    999: '999px',
  },
  borderWidth: { 0: '0px', 1: '1px', 2: '2px', 4: '4px' },
  extend: {
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    boxShadow: {
      xs: '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
      sm: '0px 4px 6px -4px rgba(24, 39, 75, 0.12), 0px 8px 8px -4px rgba(24, 39, 75, 0.08)',
      md: '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
      lg: '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
      xl: '0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)',
      xxl: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
      xxxl: '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)',
      xxxxl: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
    },
    spacing: { 736: '736px', 1152: '1152px', full: '100%', aside: '184px' },
  },
};
