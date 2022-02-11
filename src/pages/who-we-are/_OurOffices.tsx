import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { desktop_pins, mobile_pins, MapPinType } from './_data'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, CssGrid, Desktop, Mobile, Flex } from 'components/containers'
import { Header, Text, BackgroundImage } from 'components/elements'
import device from 'themes/device'
import { ReactComponent as Pin } from 'images/svg/who-we-are/pin.svg'

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

const PinContent = styled(LocalizedLink)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-white);
    box-shadow: rgba(0, 0, 0, 0.05) 0 16px 20px 0, rgba(0, 0, 0, 0.05) 0 0 20px 0;
    border-radius: 5px;
    padding: 1rem 1.6rem;
    text-align: center;
    position: relative;
    left: -43%;
    top: -55px;
    transition: opacity 0.25s;
    z-index: 3;
    text-decoration: none;

    &::after {
        content: '';
        width: 12px;
        height: 12px;
        background: var(--color-white);
        position: absolute;
        transform: rotate(45deg);
        top: 83%;
        left: 40.5%;
    }
`

type PinWrapperProps = {
    left: string
    top: string
    to: string
}

const PinWrapper = styled.div<PinWrapperProps>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    -webkit-tap-highlight-color: transparent;
    /* stylelint-disable */
    -webkit-appearance: none;
    /* stylelint-enable */
    cursor: pointer;
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

const MapPin = ({ top, left, title, link }: MapPinType) => {
    const [is_pin_show, setPinShow] = React.useState(false)
    return (
        <PinWrapper
            onMouseEnter={() => setPinShow(true)}
            onMouseLeave={() => setPinShow(false)}
            top={top}
            left={left}
            to={link}
        >
            <Pin />
            {is_pin_show && (
                <PinContent locale="en" to={link} anchor>
                    <Text color="black" mr="8px">
                        {title}
                    </Text>
                </PinContent>
            )}
        </PinWrapper>
    )
}

const OurOffices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                {localize('Our locations')}
            </StyledHeader>

            <Flex>
                <Desktop max_width="tabletL">
                    <MapImage data={data['earth']}>
                        {desktop_pins.map((pin) => (
                            <MapPin
                                key={pin.title}
                                left={pin.left}
                                top={pin.top}
                                title={pin.title}
                                link={pin.link}
                            />
                        ))}
                    </MapImage>
                </Desktop>
                <Mobile min_width="tabletL">
                    <MapImage data={data['earth_mobile']}>
                        {mobile_pins.map((pin) => (
                            <MapPin
                                key={pin.title}
                                left={pin.left}
                                top={pin.top}
                                title={pin.title}
                                link={pin.link}
                            />
                        ))}
                    </MapImage>
                </Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('750+')}</NumberHeader>
                    <NumberText size="16px" align="center">
                        {localize('employees')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('50+')}</NumberHeader>
                    <NumberText size="16px" align="center">
                        {localize('nationalities')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('13')}</NumberHeader>
                    <NumberText size="16px" align="center">
                        {localize('locations')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('10')}</NumberHeader>
                    <NumberText size="16px" align="center">
                        {localize('countries')}
                    </NumberText>
                </StyledFlex>
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
