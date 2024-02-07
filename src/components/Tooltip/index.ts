import type { OptionList, TooltipTheme, TooltipWrapperFC } from './Tooltip'
import tooltipFactory from './Tooltip'

import tooltipTheme from './theme.module.css'

const theme = tooltipTheme as TooltipTheme

const themedTooltipFactory = (options: Partial<OptionList>): TooltipWrapperFC => tooltipFactory({ ...options, theme })
export { themedTooltipFactory as tooltipFactory }

export const tooltip = tooltipFactory({ theme })
