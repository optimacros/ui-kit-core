import { useState } from 'react'

import { InputComponent } from './Component'
import { InputProps } from './models'
import { InputStore } from './store/store'

export const Input = (props: InputProps) => {
    const [store] = useState(() => new InputStore(props))

    return (
        <InputComponent {...props}
            store={store}
        />
    )
}
