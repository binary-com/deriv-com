import { InfoItemType, LinkType, IconProps } from './types'
import NotAvailableImage from 'images/svg/no_page_found.svg'

export const not_available_image: IconProps = {
    src: NotAvailableImage,
    alt: '_t_Page not found_t_',
}
export const button_link: LinkType = {
    text: '_t_Return to homepage_t_',
    url: { type: 'internal', to: '/' },
}
export const info_items: InfoItemType = {
    header: '_t_Oops, sorry..._t_',
    sub_header: '_t_The requested URL was not found_t_',
}
