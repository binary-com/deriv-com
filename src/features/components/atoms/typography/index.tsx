import React, { ReactNode } from 'react'
import BaseTypography from './base'
import Heading from './heading'
import HeroText from './hero'
import TypographyLink from './link'
import Paragraph from './paragraph'

type TypographyTypes = {
    Base: typeof BaseTypography
    Heading: typeof Heading
    Hero: typeof HeroText
    Paragraph: typeof Paragraph
    Link: typeof TypographyLink
    Text: typeof Text
}

const Typography: TypographyTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}
Typography.Base = BaseTypography
Typography.Heading = Heading
Typography.Hero = HeroText
Typography.Paragraph = Paragraph
Typography.Text = Text
Typography.Link = TypographyLink

export default Typography
