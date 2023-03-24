import { StrapiImage } from 'types/page.types'

type HeroType = {
    header: string
    sub_header: string
    first_paragraph: string
    second_paragraph: string
    third_paragraph: string
    hero_image: StrapiImage
    bg_desktop: StrapiImage
    bg_mobile: StrapiImage
}
type THero = { hero: HeroType }
type TValues = {
    header: string
    sub_header: string
    image: StrapiImage
}
type OurValues = {
    header: string
    values: TValues[]
}
type TOurValues = { our_values: OurValues }
type TPrinciples = {
    header: string
    button: { link_name: string; link_url: string }
    principles: { header: string; sub_header: string }[]
}
type TOurPrinciples = { our_principles: TPrinciples }
type TLeader = {
    name: string
    role: string
    link_url: string
    photo: StrapiImage
}
type TOurLeadership = {
    our_leadership: {
        header: string
        leaders: TLeader[]
    }
}
type TNumbers = {
    header: string
    sub_header: string
    numbers: { description: string; number: string }[]
}
type TDerivNumbers = { deriv_in_numbers: TNumbers }
type TSlider = {
    slider_1: StrapiImage
    slider_2: StrapiImage
    slider_3: StrapiImage
    slider_4: StrapiImage
    slider_5: StrapiImage
    slider_6: StrapiImage
}
type TImageMarquee = { slider_medias: TSlider[] }
type Tlocations = {
    header: string
    numbers: { description: string; number: string }[]
    locations: { country_city: string; link_url: string }[]
    earth: StrapiImage
    earth_mobile: StrapiImage
    pin: StrapiImage
}
type TOurOffices = { our_locations: Tlocations }
type TBanner = {
    header: string
    sub_header: string
    link_name: string
    link_url: string
    bg_desktop: StrapiImage
    bg_desktop_rtl: StrapiImage
    bg_mobile: StrapiImage
    bg_mobile_rtl: StrapiImage
}
type TWhoWeAreBanner = { banner: TBanner }
type TWhoWeAre = {
    data: {
        strapiWhoWeArePage: THero &
            TOurValues &
            TOurPrinciples &
            TLeader &
            TOurLeadership &
            TDerivNumbers &
            TImageMarquee &
            TOurOffices &
            TWhoWeAreBanner
    }
}

export {
    TWhoWeAre,
    THero,
    TOurValues,
    TOurPrinciples,
    TLeader,
    TOurLeadership,
    TDerivNumbers,
    TImageMarquee,
    TOurOffices,
    TWhoWeAreBanner,
}
