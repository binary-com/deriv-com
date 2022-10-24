import type { EmblaCarouselType } from 'embla-carousel-react'
import { ButtonsProps } from '../carousel'
import { ColorPalette, TColor } from 'themes/theme.types'

export type TCarouselMode = 'vertical' | 'horizontal'
export type TCarouselContent = {
    embla?: EmblaCarouselType
    config?: TCarouselConfig
}
export type TCarouselButtonType = 'next' | 'previous'
export type TCarouselControlPlacement = 'outside' | 'inside'

export type NavigationButtonProps = Pick<ButtonsProps, 'color' | 'is_enabled' | 'onClick'>
export type TNavPlacement = 'start' | 'end'

export type TCarouselConfig = {
    controls_placement?: TCarouselControlPlacement
    controls_active_color?: TColor
    controls_offset?: number
    nav_placement?: TNavPlacement
    nav_color?: ColorPalette
    nav_offset?: number
    mode: TCarouselMode
}
