import { ReactElement } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type ContentType = {
    title: ReactElement
    header?: ReactElement
    second_title?: ReactElement
    subtitle?: ReactElement
    subtitle1?: ReactElement
    subtitle2?: ReactElement
    second_subtitle1?: ReactElement
    subtitle_mobile1?: ReactElement
    subtitle_mobile2?: ReactElement
    icon?: string
    imgsrc?: string
    image_name?: string
    image_name_mobile?: string
    image_alt?: string
}

export type StyledProps = {
    margin_right?: string
    margin_left?: string
    width?: string
    flex_direction?: string
    flex_direction_mobile?: string
}

export type HeroProps = {
    title: string
    content: ReactElement
    background_data?: ImageDataLike
}
