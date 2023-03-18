import React, { ReactNode } from 'react'
import BaseTypography from './base'
import DisplayTitle from './display-title'
import Heading from './heading'
import HeroText from './hero'
import TypographyLink from './link'
import MainLandingTitle from './main-landing-title'
import PageTitle from './page-title'
import Paragraph from './paragraph'
import SectionTitle from './section-title'
import Small from './small'
import SubSectionTitle from './sub-section-title'
import SubText from './sub-text'
import Subtitle from './subtitle'
import Text from './text'

type TypographyTypes = {
    Base: typeof BaseTypography
    DisplayTitle: typeof DisplayTitle
    Heading: typeof Heading
    Hero: typeof HeroText
    MainLandingTitle: typeof MainLandingTitle
    PageTitle: typeof PageTitle
    Paragraph: typeof Paragraph
    SectionTitle: typeof SectionTitle
    Small: typeof Small
    SubSectionTitle: typeof SubSectionTitle
    SubText: typeof SubText
    Subtitle: typeof Subtitle
    Text: typeof Text
}

const Typography: TypographyTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}
Typography.Base = BaseTypography
Typography.DisplayTitle = DisplayTitle
Typography.Heading = Heading
Typography.Hero = HeroText
Typography.MainLandingTitle = MainLandingTitle
Typography.PageTitle = PageTitle
Typography.Paragraph = Paragraph
Typography.SectionTitle = SectionTitle
Typography.Small = Small
Typography.SubSectionTitle = SubSectionTitle
Typography.SubText = SubText
Typography.Subtitle = Subtitle
Typography.Text = Text

export default Typography
