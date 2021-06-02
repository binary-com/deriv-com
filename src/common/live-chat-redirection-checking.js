import { CookieStorage } from './storage'

export const checkLiveChatRedirection = () => {
    if (typeof window !== 'undefined') {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const liveChatOpened = urlParams.get('is_livechat_open')
        const LIVE_CHAT_REDIRECTION = 'live_chat_redirection'
        const live_chat_redirection = new CookieStorage(LIVE_CHAT_REDIRECTION)

        if (liveChatOpened) {
            live_chat_redirection.set(LIVE_CHAT_REDIRECTION, liveChatOpened)
        } else {
            live_chat_redirection.remove(LIVE_CHAT_REDIRECTION)
        }
    }
}
