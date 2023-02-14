import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import MapPin, { MapPinType } from './components/map-pin'
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
const MapImage = styled(BackgroundImage)`
    position: relative;
    width: 840px;
    overflow: auto;
    height: 414px;
    background-color: transparent;
    background-size: cover;
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
const StyledFlex = styled(Flex)`
    height: unset;
`

const OurOffices = ({ our_locations }: any) => {
    // when we're adding new locations we have to add it in strapi and placement of pin in the end of each list
    const desktop_pins: MapPinType[] = [
        {
            left: '30%',
            top: '74%',
        },
        {
            left: '31%',
            top: '76%',
        },
        {
            left: '23.5%',
            top: '50%',
        },
        {
            left: '50%',
            top: '39.5%',
        },
        {
            left: '55%',
            top: '40%',
        },
        {
            left: '56%',
            top: '43%',
        },
        {
            left: '54%',
            top: '61.5%',
        },
        {
            left: '54%',
            top: '27.5%',
        },
        {
            left: '61.5%',
            top: '45.9%',
        },
        {
            left: '73.3%',
            top: '57.5%',
        },
        {
            left: '74.2%',
            top: '58.5%',
        },
        {
            left: '74.2%',
            top: '60.6%',
        },
        {
            left: '77.2%',
            top: '58.7%',
        },
        {
            left: '47.4%',
            top: '30.9%',
        },
        {
            left: '28.3%',
            top: '50.8%',
        },
        {
            left: '49.4%',
            top: '27.9%',
        },
        {
            left: '44.5%',
            top: '30.9%',
        },
        {
            left: '92.2%',
            top: '69.7%',
        },
        {
            left: '74.6%',
            top: '61%',
        },
    ]
    const mobile_pins: MapPinType[] = [
        {
            left: '28.5%',
            top: '71%',
        },
        {
            left: '30%',
            top: '75%',
        },
        {
            left: '22%',
            top: '47.7%',
        },
        {
            left: '26%',
            top: '48%',
        },
        {
            left: '48.5%',
            top: '35.5%',
        },
        {
            left: '53.5%',
            top: '36%',
        },
        {
            left: '56.5%',
            top: '37%',
        },
        {
            left: '52.5%',
            top: '57.5%',
        },
        {
            left: '52.5%',
            top: '23.5%',
        },
        {
            left: '60%',
            top: '41.9%',
        },
        {
            left: '72.3%',
            top: '51.2%',
        },
        {
            left: '71%',
            top: '55%',
        },
        {
            left: '73%',
            top: '56.7%',
        },
        {
            left: '74.5%',
            top: '57.9%',
        },
        {
            left: '47.9%',
            top: '24.9%',
        },
        {
            left: '76%',
            top: '54.7%',
        },
        {
            left: '45.9%',
            top: '26.9%',
        },
        {
            left: '43%',
            top: '26.9%',
        },
        {
            left: '92.5%',
            top: '65.1%',
        },
    ]

    const desktop = []
    const mobile = []
    our_locations?.locations?.map((pin, index) => {
        desktop.push({ ...our_locations.locations[index], ...desktop_pins[index] })
        mobile.push({ ...our_locations.locations[index], ...mobile_pins[index] })
    })

    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                {our_locations?.header}
            </StyledHeader>

            <Flex>
                <Desktop>
                    <MapImage data={data['earth']}>
                        {desktop?.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </MapImage>
                </Desktop>
                <Mobile>
                    <MapImage data={data['earth_mobile']}>
                        {mobile?.map((pin, idx) => (
                            <MapPin key={idx} {...pin} />
                        ))}
                    </MapImage>
                </Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                {our_locations?.numbers.map(({ description, number }) => (
                    <StyledFlex fd="column" key={description}>
                        <NumberHeader size="32px">{number}</NumberHeader>
                        <NumberText size="16px" align="center">
                            {description}
                        </NumberText>
                    </StyledFlex>
                ))}
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
