import React from 'react'
import styled from 'styled-components'
import RawBannerData from './_row-banner-data'
import EuBannerData from './_eu-banner-data'
import EuMobileBannerData from './_eu-mobile-banner-data'
import RowMobileBannerData from './_row-mobile-banner-data'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'

type HeroProps = {
    is_ppc?: boolean
}

const HeroWrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 100%;
    margin-top: 76px;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
        min-height: 100%;
    }
`

const Hero = ({ is_ppc }: HeroProps) => {
    const { is_eu } = useRegion()
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <HeroWrapper>
            {is_eu ? (
                is_mobile_or_tablet ? (
                    <EuMobileBannerData is_ppc={is_ppc} />
                ) : (
                    <EuBannerData is_ppc={is_ppc} />
                )
            ) : is_mobile_or_tablet ? (
                <RowMobileBannerData is_ppc={is_ppc} />
            ) : (
                <RawBannerData is_ppc={is_ppc} />
            )}
        </HeroWrapper>
    )
}

export default Hero
