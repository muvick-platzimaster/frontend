import { createContext, Dispatch, SetStateAction } from 'react'
export type SwitchState = 'series' | 'movies'

interface SwitchContext {
   setSwitchValue: Dispatch<SetStateAction<SwitchState>>
   switchValue: SwitchState
}

export const SwitchContext = createContext<Partial<SwitchContext>>({})
