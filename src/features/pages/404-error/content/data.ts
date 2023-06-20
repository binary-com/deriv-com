import { ButtonLink, InfoItem, ImageItem } from './types'
import NotAvailableImage from 'images/svg/no_page_found.svg'

export const not_available_image: ImageItem = {
    src: NotAvailableImage,
    alt: '_t_Page not found_t_',
}
export const button_link: ButtonLink = {
    text: '_t_Go home_t_',
    url: { type: 'internal', to: '/' },
}
export const info_items: InfoItem = {
    header: '_t_Oops, sorry..._t_',
    sub_header: '_t_The requested URL was not found_t_',
}
