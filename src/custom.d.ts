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
declare module '*.jpeg'
declare module '*.mp4'
