import React from 'react'
import { isBrowser } from 'common/utility'

const ClientSideOnlyLazy = React.lazy(() => import('./_what-our-clients-say'))

const WhatOurClientsSayCarousell = () => {
    const [should_load, setShouldLoad] = React.useState(false)

    React.useEffect(() => {
        // TODO: remove this after replacing the swiper carousell
        setTimeout(() => {
            setShouldLoad(true)
        }, 1500)
    }, [])

    if (!should_load) return null

    return (
        <>
            {isBrowser() && (
                <React.Suspense fallback={<div />}>
                    <ClientSideOnlyLazy />
                </React.Suspense>
            )}
        </>
    )
}

export default WhatOurClientsSayCarousell
