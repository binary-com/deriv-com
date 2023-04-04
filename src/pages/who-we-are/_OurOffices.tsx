import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { desktop_pins, mobile_pins, our_offices_count } from './_data'
import MapPin from './components/map-pin'
import { localize } from 'components/localization'
import { SectionContainer, CssGrid, Desktop, Mobile, Flex } from 'components/containers'
import { Header, Text, BackgroundImage } from 'components/elements'
import device from 'themes/device'
import './_OurOffices.css'

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

const OurOffices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                {localize('Our locations')}
            </StyledHeader>

            <Flex>
                <Desktop>
                    <BackgroundImage
                        data={data['earth']}
                        alt="Map view"
                        child_style={{
                            height: '414px',
                            width: '840px',
                            direction: 'ltr',
                        }}
                        dark_background={false}
                        objectFit="cover"
                    >
                        {desktop_pins.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </BackgroundImage>
                </Desktop>
                <Mobile>
                    <BackgroundImage
                        data={data['earth_mobile']}
                        alt="Map view"
                        child_style={{
                            height: '170px',
                            width: '328px',
                            direction: 'ltr',
                            overflow: 'hidden',
                        }}
                        dark_background={false}
                        objectFit="cover"
                        child_class="mapview"
                    >
                        {mobile_pins.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </BackgroundImage>
                </Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                {our_offices_count.map(({ count, title }) => (
                    <StyledFlex fd="column" key={title.props.translate_text}>
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
