export type header = {
    background: string
    title: string
    subtitle: string
}

export type open_position = {
    title: string
    location: string
    id: string
}

type testimony_headline = {
    text: string
}

export type testimony_section = {
    image: string
    image_mobile: string
    img_alt: string
    testimony_headline: testimony_headline[]
}

type paragraph = {
    text: string
}

export type intro_section = {
    image: string
    img_alt: string
    paragraph: paragraph[]
}

export type data = {
    header: header
    intro_section: intro_section
    open_position?: open_position[]
    testimony_section: testimony_section
}

export type firstData = {
    data: data
}
