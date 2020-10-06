import ReactGA from 'react-ga'

export const Analytics = (path) => {
   ReactGA.initialize('UA-42421772-6')
   ReactGA.pageview(path)
}
