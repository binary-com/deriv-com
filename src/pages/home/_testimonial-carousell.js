import React from 'react'
import Loadable from '@loadable/component'
import { isBrowser } from 'common/utility'

const WhatOurClientsSay = Loadable(() => import('./_what-our-clients-say'))

const WhatOurClientsSayCarousell = () => {
    const [should_load, setShouldLoad] = React.useState(false)

    React.useEffect(() => {
        // TODO: remove this after replacing the swiper carousell
        setTimeout(() => {
            setShouldLoad(true)
        }, 1500)
    }, [])

    if (!should_load) return null

    return <>{isBrowser() && <WhatOurClientsSay />}</>
}

export default WhatOurClientsSayCarousell
