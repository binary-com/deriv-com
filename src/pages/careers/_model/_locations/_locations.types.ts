export type LocationsType = {
    name: string
    link: string
    display_name?: string
    job_location?: string
    display_thumbnail_name?: string
    display_title_name?: string
    img_alt?: string
    map_office_name: string
    country: string
    continent: string
    display_continent: string
    flagIcon: string
    thumbnail: string
    first_p: string
    first_img: string
    first_img_alt?: string
    grid_images: string[]
    grid_img_alt?: string[]
    map: string
    map_img?: string
    map_text: string
    address: string[]
    google_map_link?: string
    has_iframe?: boolean
    // has_map check is for the new offices with ready office addresses
    // can be deprecated once all new offices have ready physical addresses
    has_map?: boolean
    badge?: string
    badge_alt?: string
}
