interface Window {
    _cio: any
    opera: string
    MSStream: boolean
    dataLayer: [loggedIn: boolean, language: () => string]
    LC_API: {
        open_chat_window: () => void
        hide_chat_window: () => void
        on_chat_ended: () => void
    }
    LiveChatWidget: {
        on: (x: string, y: (e) => void) => void
        call: (x: string, y: any) => void
    }
}
