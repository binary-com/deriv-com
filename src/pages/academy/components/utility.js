import { isBrowser } from 'common/utility'

export const url = isBrowser() ? window.location.href : ''
