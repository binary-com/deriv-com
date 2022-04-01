import { navigate } from 'gatsby'
import { isBrowser } from 'common/utility'

export const url = isBrowser() ? window.location.href : ''

export const redirectionLink = (e, ref_item) => {
    const clicked_element = e.target as HTMLElement

    const class_list = clicked_element.getAttribute('class')

    const link = ref_item.current?.getAttribute('data-link')

    class_list && class_list.includes('tag-item')
        ? handleTag(clicked_element.innerHTML)
        : navigate(link)
}

export const handleTag = (tag_name) => {
    navigate(`/academy/search?category=${encodeURI(`${tag_name}`)}`)
}
