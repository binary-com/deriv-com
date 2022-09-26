import { live_chat_key } from './constants'

export const checkLiveChatRedirection = () => {
    if (typeof window !== 'undefined') {
        const query_string = window.location.search
        const url_params = new URLSearchParams(query_string)
        const live_chat_opened = url_params.get('is_livechat_open')
        if (live_chat_opened) {
            localStorage.setItem(live_chat_key, live_chat_opened)
        }
    }
}
