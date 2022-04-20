interface Window {
    _cio: any
    dataLayer: [loggedIn: boolean, language: () => string]
    LC_API: {
        open_chat_window: () => void
        hide_chat_window: () => void
        on_chat_ended: () => void
    }
    LiveChatWidget: {
        on: (x, y) => void
        call: (x, y) => void
    }
}
