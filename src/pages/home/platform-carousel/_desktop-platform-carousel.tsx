import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import PlatformSlider from './_platform-slider'
import { platform_details_eu, platform_details_uk, platform_details_cr } from './_utils'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        max-width: 1600px;
        margin: 0 auto;
    }
`
const DesktopPlatformCarousel = () => {
    const [slide_index, setSlideIndex] = useState(0)
    const [platform_details, setPlatformDetails] = useState(platform_details_cr)

    const { is_eu, is_uk, is_row } = useCountryRule()

    const getPlatformDetails = useCallback(
        (no_of_copies) => {
            const new_details = []
            let current_index = 0

            const platformDetails = () => {
                if (is_eu) {
                    return platform_details_eu
                } else if (is_uk) {
                    return platform_details_uk
                }

                return platform_details_cr
            }

            for (let index = 0; index < no_of_copies; index++) {
                // prettier-ignore
                platformDetails().forEach((p) => {
            new_details.push({ ...p, id: current_index })
            current_index++
        })
            }

            return new_details
        },
        [is_eu, is_uk],
    )

    const no_slide_sets = useCallback(() => {
        if (!is_row) {
            return 1
        }
        return 1
    }, [is_row])

    const getSlideStartingIndex = useCallback(() => {
        if (!is_row) {
            return 0
        }
        return Math.round((no_slide_sets() * 8) / 2 - 2)
    }, [is_row, no_slide_sets])
    console.log(getSlideStartingIndex())

    useEffect(() => {
        setSlideIndex(getSlideStartingIndex())
    }, [getSlideStartingIndex])

    useEffect(() => {
        setPlatformDetails(getPlatformDetails(no_slide_sets()))
    }, [getPlatformDetails, no_slide_sets])

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <PlatformSlider
                getSlideStartingIndex={getSlideStartingIndex}
                slide_index={slide_index}
                onSelectSlide={setSlideIndex}
                platform_details={platform_details}
            />
            <Details slide={slide_index} platform_details={platform_details} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
