/* eslint-disable no-console */
import React from 'react'
import useOnline from '../../hooks/useOnline'

/* Styles  */
import { Offline } from './styles/online'

const Online = ({
   children
}: {
   children: Element[] | React.ReactNode
}): JSX.Element => {
   const isOnline = useOnline()

   const handleStart = () => {
      if (!('Notification' in window) || !('serviceWorker' in navigator)) {
         alert('Notification not support')
      }

      if (Notification.permission === 'default') {
         Notification.requestPermission()
      }

      if (Notification.permission === 'denied') {
         console.log('Notification Blocked')
      }

      if (Notification.permission === 'granted') {
         console.log('Notification Allowed!')
      }
   }

   return (
      <React.Fragment>
         <Offline onClick={handleStart} hidden={isOnline || navigator.onLine}>
            Offline
         </Offline>

         <React.Fragment>{children}</React.Fragment>
      </React.Fragment>
   )
}

export default Online
