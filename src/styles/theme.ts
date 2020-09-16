export const colors = {
   'color-body-base': '#24292e',
   'color-font-base': '#e8f0fe',
   'color-primary': '#3D81D8',
   'color-error': 'brown',
   'color-body-dark': '#000',
   'color-font-muted': '#757575'
}

export const breakpoints = {
   xs: '425px',
   sm: '640px',
   md: '768px',
   lg: '1024px',
   xl: '1280px'
}

type Opacity = '2A' | '55' | '7E' | 'AA' | 'D4';

export const colorOpacity = (color: string, opacity: Opacity): string => {
   return `${color}${opacity}`
}
