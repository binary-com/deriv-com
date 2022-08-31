export {}

declare global {
    interface Window {
        ___navigate: (pathname: string) => void
    }
}
