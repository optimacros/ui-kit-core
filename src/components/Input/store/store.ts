import { some, values, each } from 'lodash'
import { action, computed, makeObservable, observable } from 'mobx'

import { CallbackStore } from './CallbackStore'
import type { Callback, InputProps } from '../models'

export class InputStore {
    constructor(props: InputProps) {
        this.value = props.value ?? props.defaultValue ?? ''
        this.setCallbacks(props)

        makeObservable(this)
    }

    @observable value: InputProps['value']
    @observable.ref callbacks: { [key in Callback]?: CallbackStore<NonNullable<InputProps[key]>> } = {}

    @action setValue = (newValue: InputProps['value']) => {
        this.value = newValue
    }

    @action setCallbacks = (props: InputProps) => {
        const { debounce: debounceProp } = props

        const getCallback: <T extends Callback>(key: T) =>
            undefined | CallbackStore<NonNullable<InputProps[T]>> = (key) => {
                const callbackProp = props[key]

                // callback not provided
                if (!callbackProp) {
                    return callbackProp
                }

                const delay = (typeof debounceProp === 'object'
                    ? debounceProp[key]
                    : debounceProp) || 0

                return new CallbackStore(callbackProp, delay)
            }

        this.callbacks = {
            onChange: getCallback<'onChange'>('onChange'),
            onKeyPress: getCallback('onKeyPress'),
            onKeyDown: getCallback('onKeyDown'),
        }
    }

    cancelCallbacks = () => {
        each(values(this.callbacks), cb => {
            if (cb?.isPending) {
                cb.cancel()
            }
        })
    }

    @computed get isAnyCallbackPending() {
        return some(values(this.callbacks), cb => !!cb?.isPending)
    }
}

