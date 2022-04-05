import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { desktop_pins, mobile_pins, our_offices_count } from './_data'
import MapPin from './components/map-pin'
import { localize } from 'components/localization'
import { SectionContainer, CssGrid, Desktop, Mobile, Flex } from 'components/containers'
import { Header, Text, BackgroundImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        earth: file(relativePath: { eq: "who-we-are/earth.png" }) {
            ...fadeIn
        }
        earth_mobile: file(relativePath: { eq: "who-we-are/earth-mobile.png" }) {
            ...fadeIn
        }
    }
`

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

const MapImage = styled(BackgroundImage)`
    position: relative;
    width: 840px;
    overflow: auto;
    height: 414px;
    background-color: transparent;
    background-size: cover;

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

const StyledFlex = styled(Flex)`
    height: unset;
`

const OurOffices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                {localize('Our locations')}
            </StyledHeader>

            <Flex>
                <Desktop>
                    <MapImage data={data['earth']}>
                        {desktop_pins.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </MapImage>
                </Desktop>
                <Mobile>
                    <MapImage data={data['earth_mobile']}>
                        {mobile_pins.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </MapImage>
                </Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                {our_offices_count.map(({ count, title }) => (
                    <StyledFlex fd="column" key={title}>
                        <NumberHeader size="32px">{count}</NumberHeader>
                        <NumberText size="16px" align="center">
                            {title}
                        </NumberText>
                    </StyledFlex>
                ))}
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
