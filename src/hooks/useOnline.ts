import { useEffect, useState } from 'react'

const useOnline = (): boolean => {
   const [isOnline, setIsOnline] = useState(() => navigator.onLine || true)

   const handleOffline = () => {
      setIsOnline(false)
      showNotification()
   }

   const handleOnline = () => {
      setIsOnline(true)
      showNotification()
   }

   const showNotification = async () => {
      const registration = await navigator.serviceWorker.getRegistration()
      if (!registration) {
         return alert('There is not SW')
      }

      registration.showNotification(isOnline ? 'Offline' : 'Online', {
         body: `You're ${isOnline ? 'offline' : 'online'}`,
         icon: '../../public/muvick-icon.png'
      })
   }

   useEffect(() => {
      window.addEventListener('offline', handleOffline)
      window.addEventListener('online', handleOnline)

      return () => {
         window.removeEventListener('offline', handleOffline)
         window.removeEventListener('online', handleOnline)
      }
   })

   return isOnline
}

export default useOnline
