import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import PlatformSlider from './_platform-slider'
import { TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        max-width: 1600px;
        margin: 0 auto;
    }
`

type DesktopPlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const DesktopPlatformCarousel = ({ carousel_data }: DesktopPlatformCarouselProps) => {
    const [slide_index, setSlideIndex] = useState(42)
    const [platform_details, setPlatformDetails] = useState(null)
    const { is_row } = useCountryRule()

    useEffect(() => {
        if (!is_row) setSlideIndex(0)
        if (is_row) setSlideIndex(42)
    }, [is_row])

    useEffect(() => {
        const no_slide_sets = (!is_row && 1) || (is_row && 11)
        const getPlatformDetails = (no_of_copies) => {
            const new_details = []
            let current_index = 0

            for (let index = 0; index < no_of_copies; index++) {
                // prettier-ignore
                carousel_data?.forEach((p) => {
                    new_details.push({ ...p, id: current_index })
                    current_index++
                })
            }

            return new_details
        }

        setPlatformDetails(getPlatformDetails(no_slide_sets))
    }, [carousel_data, is_row])

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
