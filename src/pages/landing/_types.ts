import { ReactElement } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { TString } from 'types/generics'

export type ContentType = {
    title: TString
    header?: TString
    second_title?: TString
    subtitle?: TString
    subtitle1?: TString
    subtitle1_component?: ReactElement[]
    subtitle2?: TString
    second_subtitle1?: TString
    subtitle_mobile1?: TString
    subtitle_mobile1_components?: ReactElement[]
    subtitle_mobile2?: TString
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
    title: TString
    content: TString
    background_data?: ImageDataLike
}
