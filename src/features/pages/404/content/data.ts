import { TButtonLink, TInfoItem } from './types'
import NotAvailableImage from 'images/svg/image-not-available.svg'

export const not_available_image = {
    src: NotAvailableImage,
    alt: 'Page not found',
}
export const button_link: TButtonLink = {
    text: '_t_Visit our homepage_t_',
    url: { type: 'internal', to: '/' },
}
export const info_items: TInfoItem = {
    header: '_t_Testing: We couldn’t find that page_t_',
    sub_header:
        '_t_Testing :It may not be available in your country, or maybe a broken link has brought you here._t_',
}
