import { navigate } from 'gatsby'
import { isBrowser } from 'common/utility'

export const url = isBrowser() ? window.location.href : ''

export const handleTag = (tag_name: string) => {
    navigate(`/academy/search?category=${encodeURI(tag_name)}`)
}
