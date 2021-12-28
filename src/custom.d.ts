declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<
            React.SVGProps<SVGSVGElement> & { title?: string }
        >,
        src: string

    export default src
}

declare module '*.png'
declare module '*.jpg'
declare module '*.mp4'

declare global {
    interface Window {
        _cio?: any
    }
}
