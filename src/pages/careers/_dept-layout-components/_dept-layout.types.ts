export type HeaderProps = {
    background: string
    title: string
    subtitle: string
}

export type OpenPositionsProps = {
    title: string
    location: string
    id: string
}

type TestimonyHeadlineProps = {
    text: string
}

export type TestimonySectionProps = {
    image: string
    image_mobile: string
    img_alt: string
    testimony_headline: TestimonyHeadlineProps[]
}

type ParagraphProps = {
    text: string
}

export type IntroSectionProps = {
    image: string
    img_alt: string
    paragraph: ParagraphProps[]
}

export type DataProps = {
    header: HeaderProps
    intro_section: IntroSectionProps
    open_position?: OpenPositionsProps[]
    testimony_section: TestimonySectionProps
    link_url?: string
}

export type FirstDataProps = {
    data: DataProps
}
