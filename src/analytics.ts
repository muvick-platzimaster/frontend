import ReactGA from 'react-ga'

export const Analytics = (path: string): void => {
   ReactGA.initialize('UA-42421772-6')
   ReactGA.pageview(path)
}
