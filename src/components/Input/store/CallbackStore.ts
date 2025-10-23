import { isNull } from 'lodash'
import { action, makeObservable, observable } from 'mobx'

export class CallbackStore<T extends (...args: any[]) => void> {
    constructor(callback: T, delay: number) {
        this.callback = callback
        this.delay = delay

        makeObservable(this)
    }

    @observable isPending = false

    timer: null | ReturnType<typeof setTimeout> = null
    callback: T
    delay = 0

    call = (...args: Parameters<T>) => {
        if (!this.delay) {
            this.callback(...args)

            return
        }

        this.cancel()

        this.setIsPending(true)

        this.timer = setTimeout(() => {
            this.setIsPending(false)

            this.callback(...args)
        }, this.delay)
    }

    cancel = () => {
        if (!isNull(this.timer)) {
            clearTimeout(this.timer)
            this.timer = null
            this.setIsPending(false)
        }
    }

    @action setIsPending = (newState: boolean) => {
        this.isPending = newState
    }
}
