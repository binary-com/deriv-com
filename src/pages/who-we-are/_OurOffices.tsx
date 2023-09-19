import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { desktop_pins, mobile_pins, our_offices_count } from './_data'
import MapPin from './components/map-pin'
import { Localize, localize } from 'components/localization'
import { SectionContainer, CssGrid, Desktop, Mobile, Flex } from 'components/containers'
import { Header, Text, BackgroundImageWrapper, StaticImageWrapper } from 'components/elements'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    @media ${device.tablet} {
        margin-top: 40px;
        padding: 0 16px 40px;
    }
`

const StyledHeader = styled(Header)`
    line-height: 4rem;
    margin-bottom: 40px;
    @media ${device.laptop} {
        font-size: 28px;
    }
`

const NumberSection = styled(CssGrid)`
    margin-top: 40px;
    max-width: 788px;
    direction: ltr;

    @media ${device.tablet} {
        grid-column-gap: 3rem;
        padding: 0 16px;
    }

    @media (max-width: 359px) {
        grid-column-gap: 1rem;
    }
`

const NumberHeader = styled(Text)`
    font-weight: bold;
    line-height: 6rem;
    text-align: center;

    @media ${device.tablet} {
        font-size: 24px;
    }
`

const NumberText = styled(Text)`
    font-weight: 400;
    text-align: center;
    @media ${device.tablet} {
        font-size: 14px;
    }
`

const StyledFlex = styled(Flex)`
    height: unset;
`

const MapWrapper = styled.div`
    width: 840px;
    overflow: auto;
    height: 414px;
    direction: ltr;

    @media ${device.tabletL} {
        width: 328px;
        height: 170px;
        overflow: hidden;
    }
    @media (max-width: 359px) {
        width: 298px;
        height: 155px;
        overflow: hidden;
    }
`

const OurOffices = () => {
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                <Localize translate_text="_t_Our locations_t_" />
            </StyledHeader>

            <Flex>
                <Desktop>
                    <BackgroundImageWrapper>
                        <StaticImageWrapper>
                            <StaticImage
                                src="../../images/common/who-we-are/earth.png"
                                alt={localize('_t_Map view_t_')}
                                objectFit="cover"
                                formats={['avif', 'webp', 'auto']}
                            />
                        </StaticImageWrapper>
                        <MapWrapper>
                            {desktop_pins.map((pin, idx) => (
                                <MapPin key={idx} {...pin} />
                            ))}
                        </MapWrapper>
                    </BackgroundImageWrapper>
                </Desktop>
                <Mobile>
                    <BackgroundImageWrapper>
                        <StaticImageWrapper>
                            <StaticImage
                                src="../../images/common/who-we-are/earth-mobile.png"
                                alt={localize('_t_Map view_t_')}
                                objectFit="cover"
                                formats={['avif', 'webp', 'auto']}
                            />
                        </StaticImageWrapper>
                        <MapWrapper>
                            {mobile_pins.map((pin, idx) => (
                                <MapPin key={idx} {...pin} />
                            ))}
                        </MapWrapper>
                    </BackgroundImageWrapper>
                </Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                {our_offices_count.map(({ count, title }) => (
                    <StyledFlex fd="column" key={title}>
                        <NumberHeader size="32px">
                            <Localize translate_text={count} />
                        </NumberHeader>
                        <NumberText size="16px" align="center">
                            <Localize translate_text={title} />
                        </NumberText>
                    </StyledFlex>
                ))}
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
