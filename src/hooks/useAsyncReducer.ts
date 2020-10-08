import { useState } from 'react'

const useAsyncReducer = (
   reducer: (state: any, action: { type: string; payload: any }) => any,
   initialState: any = null
): [any, (action: { type: string; payload: any }) => Promise<void>] => {
   const [state, setState] = useState(initialState)

   const dispatch = async (action: { type: string; payload: any }) => {
      const result = reducer(state, action)
      if (typeof result.then === 'function') {
         try {
            const newState = await result
            setState(newState)
         } catch (err) {
            setState({ ...state, error: err })
         }
      } else {
         setState(result)
      }
   }

   return [state, dispatch]
}

export default useAsyncReducer
