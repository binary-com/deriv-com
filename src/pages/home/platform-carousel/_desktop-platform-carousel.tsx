import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import PlatformSlider from './_platform-slider'
import { getPlatformDetails, TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import device from 'themes/device'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        max-width: 1600px;
        margin: 0 auto;
    }
`
const DesktopPlatformCarousel = () => {
    const [current, setCurrent] = useState<TPlatformDetails>()
    const platform_details = getPlatformDetails()

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <PlatformSlider items={platform_details} onChange={setCurrent} />
            <Details data={current} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
