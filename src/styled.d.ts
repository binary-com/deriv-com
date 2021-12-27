// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface Img {
        display: string
        width: string
        height: string
    }
}
