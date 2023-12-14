import type { Options, RippleWrapperFC, Theme } from './Ripple'
import rippleFactory from './Ripple'

import rippleTheme from './theme.module.css'

const theme = rippleTheme as Theme
export default (options: Partial<Options>): RippleWrapperFC => rippleFactory({ ...options, theme })
