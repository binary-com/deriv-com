import React from 'react'
import styled from 'styled-components'
import { TOurOffices } from './_types'
import MapPin, { MapPinType } from './components/_map-pin'
import { Localize } from 'components/localization'
import { Desktop, Flex, Mobile, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    @media ${device.tablet} {
        margin-top: 40px;
        padding: 0 0 40px;
    }
`
const StyledHeader = styled(Header)`
    line-height: 4rem;
    margin-bottom: 40px;

    @media ${device.laptop} {
        font-size: 28px;
    }
`
const NumberSection = styled(Flex)`
    margin-top: 40px;
    max-width: 788px;
`
const NumberText = styled(Header)`
    font-weight: normal;
`
const MapImage = styled.div<{ bg_image: string }>`
    position: relative;
    width: 840px;
    overflow: auto;
    height: 414px;
    background-image: url(${({ bg_image }) => bg_image});
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

const OurOffices = ({ our_locations }: TOurOffices) => {
    // when we're adding new locations we have to add it in strapi and placement of pin in the end of each list
    const desktop_pins: MapPinType[] = [
        { left: '30%', top: '74%' },
        { left: '31%', top: '76%' },
        { left: '23.5%', top: '50%' },
        { left: '50%', top: '39.5%' },
        { left: '55%', top: '40%' },
        { left: '56%', top: '43%' },
        { left: '54%', top: '61.5%' },
        { left: '61.5%', top: '45.9%' },
        { left: '73.3%', top: '57.5%' },
        { left: '74.2%', top: '58.5%' },
        { left: '74.2%', top: '60.6%' },
        { left: '77.2%', top: '58.7%' },
        { left: '47.4%', top: '30.9%' },
        { left: '28.3%', top: '50.8%' },
        { left: '49.4%', top: '27.9%' },
        { left: '44.5%', top: '30.9%' },
        { left: '92.2%', top: '69.7%' },
        { left: '74.6%', top: '61%' },
        { left: '45.7%', top: '29%' },
        { left: '78%', top: '48%' },
        { left: '46.5%', top: '29.5%' },
    ]
    const mobile_pins: MapPinType[] = [
        { left: '28.5%', top: '71%' },
        { left: '30%', top: '75%' },
        { left: '22%', top: '47.7%' },
        { left: '48.5%', top: '35.5%' },
        { left: '53.5%', top: '36%' },
        { left: '56.5%', top: '37%' },
        { left: '52.5%', top: '57.5%' },
        { left: '60%', top: '41.9%' },
        { left: '72.3%', top: '51.2%' },
        { left: '71%', top: '55%' },
        { left: '73%', top: '56.7%' },
        { left: '76%', top: '54.7%' },
        { left: '45.9%', top: '26.9%' },
        { left: '26%', top: '48%' },
        { left: '47.9%', top: '24.9%' },
        { left: '43%', top: '26.9%' },
        { left: '92.5%', top: '65.1%' },
        { left: '74.5%', top: '57.9%' },
        { left: '45.7%', top: '20%' },
        { left: '76%', top: '45%' },
        { left: '46.5%', top: '20%' },
    ]
    const desktop = []
    const mobile = []
    our_locations?.locations?.map((location, index) => {
        desktop.push({ ...our_locations?.locations[index], ...desktop_pins[index] })
        mobile.push({ ...our_locations?.locations[index], ...mobile_pins[index] })
    })

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                <Localize translate_text={our_locations?.header} />
            </StyledHeader>

            <Flex>
                <Desktop>
                    <MapImage bg_image={our_locations?.earth?.localFile?.publicURL}>
                        {desktop?.map((pin) => (
                            <MapPin key={pin?.country_city} {...pin} />
                        ))}
                    </MapImage>
                </Desktop>
                <Mobile>
                    <MapImage bg_image={our_locations?.earth_mobile?.localFile?.publicURL}>
                        {mobile?.map((pin) => (
                            <MapPin key={pin?.country_city} {...pin} />
                        ))}
                    </MapImage>
                </Mobile>
            </Flex>

            <NumberSection>
                {our_locations?.numbers.map(({ description, number }) => (
                    <Flex fd="column" key={description}>
                        <Header as="p" type="heading-3" align="center" pb="8px">
                            {number}
                        </Header>
                        <NumberText as="p" type="paragraph-1" align="center">
                            <Localize translate_text={description} />
                        </NumberText>
                    </Flex>
                ))}
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
