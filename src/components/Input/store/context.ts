import { createContext } from 'react'

import { InputStore } from './store'

export const InputContext = createContext<InputStore | null>(null)
