import { createContext, useContext } from 'react'

export enum SwitchState {
   TV = 'tvs',
   MOVIES = 'movies'
}

export const SwitchContext = createContext([])
export const useSwitch = () => useContext(SwitchContext)
