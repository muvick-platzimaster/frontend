export const colors = {
   'color-body-base': '#24292e',
   'color-font-base': '#e8f0fe',
   'color-primary': '#3D81D8',
   'color-error': '#e50914',
   'color-body-dark': '#000',
   'color-font-muted': 'darkgray',
   'color-primary-muted': '#7b94ac',
   'color-warning': '#b7791f',
   'color-success': '#38a169'
}

export const breakpoints = {
   xs: '425px',
   sm: '640px',
   md: '768px',
   lg: '1024px',
   xl: '1280px',
   responsive: '100%'
}

type Opacity = '2A' | '55' | '7E' | 'AA' | 'D4'

export const colorOpacity = (color: string, opacity: Opacity): string => {
   return `${color}${opacity}`
}

export const transitions = {
   normal: 'ease 300ms'
}

export const radius = {
   standard: '0.2rem',
   circle: '50%'
}
