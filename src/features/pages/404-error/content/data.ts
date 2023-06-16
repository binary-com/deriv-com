import { TButtonLink, TInfoItem } from './types'
import NotAvailableImage from 'images/svg/no_page_found.svg'

export const not_available_image = {
    src: NotAvailableImage,
    alt: 'Page not found',
}
export const button_link: TButtonLink = {
    text: '_t_Go home_t_',
    url: { type: 'internal', to: '/' },
}
export const info_items: TInfoItem = {
    header: '_t_Oops, sorry..._t_',
    sub_header: '_t_The requested URL was not found_t_',
}
