import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import PlatformSlider from './_platform-slider'
import { no_slide_sets, getPlatformDetails, getSlideStartingIndex } from './_utils'
import { Flex } from 'components/containers'
import device from 'themes/device'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        max-width: 1600px;
        margin: 0 auto;
    }
`
const DesktopPlatformCarousel = () => {
    const [slide_index, setSlideIndex] = useState(getSlideStartingIndex())
    const [platform_details, setPlatformDetails] = useState([])

    useEffect(() => {
        console.log({
            lol_the_sslides: getPlatformDetails(no_slide_sets()),
        })
        setPlatformDetails(getPlatformDetails(no_slide_sets()))
    }, [getPlatformDetails])

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <PlatformSlider
                slide_index={slide_index}
                onSelectSlide={setSlideIndex}
                platform_details={platform_details}
            />
            <Details slide={slide_index} platform_details={platform_details} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
