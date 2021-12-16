import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Breakpoint, setDefaultBreakpoints } from 'react-socks'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Box } from 'components/containers'

// const NoMobile = styled(Box)`
//     background: red;

//     // @media ${device.mobile} {
//     //     display: none;
//     // }
// `

// const NoDesktop = styled(Box)`
//     @media min-width(${device.laptop}) {
//         display: none;
//     }
// `

// const pageDetails = (): boolean[] => {
//     const { mobileL } = size
//     const [is_ready, setIsReady] = useState<boolean>(false)
//     const [is_mobile] = useBrowserResize(mobileL)

//     useEffect(() => {
//         setTimeout(() => {
//             setIsReady(true)
//         })
//     }, [is_mobile])

//     return [is_ready, is_mobile]
// }

// export const Desktop: ReactNode = ({ children }) => {
//     const [is_ready, is_mobile] = pageDetails()

//     if (!is_ready) {
//         return <NoMobile>{children}</NoMobile>
//     } else {
//         if (!is_mobile) {
//             return <NoMobile>{children}</NoMobile>
//         }
//     }

//     return null
// }

// export const Mobile: ReactNode = ({ children }) => {
//     const [is_ready, is_mobile] = pageDetails()

//     if (!is_ready) {
//         return <NoDesktop>{children}</NoDesktop>
//     } else {
//         if (is_mobile) {
//             return children
//         }
//     }

//     return null
// }

setDefaultBreakpoints([{ mobile: size.mobileL, desktop: size.laptop }])

export const Desktop: ReactNode = ({ children }) => {
    return <Breakpoint mobile only></Breakpoint>
}

export const Mobile: ReactNode = ({ children }) => {
    return <Breakpoint desktop up></Breakpoint>
}
