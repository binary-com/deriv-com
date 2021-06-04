export const checkLiveChatRedirection = () => {
    if (typeof window !== 'undefined') {
        const live_chat_key = 'live_chat_redirection'
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const liveChatOpened = urlParams.get('is_livechat_open')

        if (liveChatOpened) {
            localStorage.setItem(live_chat_key, liveChatOpened)
        }
    }
}
