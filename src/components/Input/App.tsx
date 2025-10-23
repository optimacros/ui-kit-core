import { useMemo } from 'react'

import { InputComponent } from './Component'
import { InputProps } from './models'
import { InputContext } from './store/context'
import { InputStore } from './store/store'

export const Input = (props: InputProps) => {
    const store = useMemo(() => new InputStore(props), [])

    return <InputContext.Provider value={store}><InputComponent {...props} /></InputContext.Provider>
}
