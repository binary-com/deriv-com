import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, CssGrid, Show, Flex } from 'components/containers'
import { Header, ImageWrapper, Text, BackgroundImage } from 'components/elements'
import device from 'themes/device'

import { ReactComponent as Pin } from 'images/svg/about-us/pin.svg'

const query = graphql`
    query {
        earth: file(relativePath: { eq: "about-us/earth.png" }) {
            ...fadeIn
        }
        earth_mobile: file(relativePath: { eq: "about-us/earth-mobile.png" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
`

const StyledHeader = styled(Header)`
    line-height: 4rem;
    margin-bottom: 69px;
    @media ${device.laptop} {
        font-size: 28px;
        margin-bottom: 40px;
    }
`

const StyledImageWrapper = styled(ImageWrapper)`
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`

const NumberSection = styled(CssGrid)`
    max-width: 788px;

    @media ${device.tablet} {
        grid-column-gap: 3rem;
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
    cursor: pointer;
`

const MapImage = styled(BackgroundImage)`
    position: relative;
    width: 840px;
    overflow: auto;
    height: 414px;
    background-color: transparent;
    background-size: cover;

    @media ${device.tablet} {
        width: 328px;
        height: 170px;
        overflow: hidden;
    }
`

const MapPin = ({ top, left, title, link }) => {
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
                <PinContent to={link} anchor>
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
                {localize('Our international offices')}
            </StyledHeader>

            <Flex>
                <Show.Desktop max_width="tablet">
                    <MapImage data={data['earth']}>
                        <MapPin
                            left="30%"
                            top="75%"
                            title="Paraguay"
                            link="/careers/locations/asuncion"
                        />
                        <MapPin
                            left="50%"
                            top="39.5%"
                            title={localize('Malta')}
                            link="/careers/locations/malta"
                        />
                        <MapPin
                            left="55%"
                            top="40%"
                            title={localize('Cyprus')}
                            link="/careers/locations/cyprus"
                        />
                        <MapPin
                            left="54%"
                            top="61.5%"
                            title={localize('Rwanda')}
                            link="/careers/locations/rwanda"
                        />
                        <MapPin
                            left="54%"
                            top="27.5%"
                            title={localize('Belarus')}
                            link="/careers/locations/minsk"
                        />
                        <MapPin
                            left="61.5%"
                            top="45.9%"
                            title={localize('Dubai')}
                            link="/careers/locations/dubai"
                        />
                        <MapPin
                            left="73.8%"
                            top="58.5%"
                            title={localize('Ipoh')}
                            link="/careers/locations/ipoh"
                        />
                        <MapPin
                            left="74%"
                            top="59%"
                            title={localize('Cyberjaya')}
                            link="/careers/locations/cyberjaya"
                        />
                        <MapPin
                            left="74.2%"
                            top="60%"
                            title={localize('Melaka')}
                            link="/careers/locations/melaka"
                        />
                        <MapPin
                            left="77.2%"
                            top="58.7%"
                            title={localize('Labuan')}
                            link="/careers/locations/labuan"
                        />
                        <MapPin left="45.8%" top="28%" title={localize('London')} link="" />
                        <MapPin left="47.4%" top="30.9%" title={localize('Paris')} link="" />
                        <MapPin left="44.5%" top="30.9%" title={localize('Guernsey')} link="" />
                    </MapImage>
                </Show.Desktop>
                <Show.Mobile min_width="tablet">
                    <MapImage data={data['earth_mobile']}>
                        <MapPin
                            left="30%"
                            top="75%"
                            title="Paraguay"
                            link="/careers/locations/asuncion"
                        />
                        <MapPin
                            left="50%"
                            top="39.5%"
                            title={localize('Malta')}
                            link="/careers/locations/malta"
                        />
                        <MapPin
                            left="55%"
                            top="40%"
                            title={localize('Cyprus')}
                            link="/careers/locations/cyprus"
                        />
                        <MapPin
                            left="54%"
                            top="61.5%"
                            title={localize('Rwanda')}
                            link="/careers/locations/rwanda"
                        />
                        <MapPin
                            left="54%"
                            top="27.5%"
                            title={localize('Belarus')}
                            link="/careers/locations/minsk"
                        />
                        <MapPin
                            left="61.5%"
                            top="45.9%"
                            title={localize('Dubai')}
                            link="/careers/locations/dubai"
                        />
                        <MapPin
                            left="73.8%"
                            top="58.5%"
                            title={localize('Ipoh')}
                            link="/careers/locations/ipoh"
                        />
                        <MapPin
                            left="74%"
                            top="59%"
                            title={localize('Cyberjaya')}
                            link="/careers/locations/cyberjaya"
                        />
                        <MapPin
                            left="74.2%"
                            top="60%"
                            title={localize('Melaka')}
                            link="/careers/locations/melaka"
                        />
                        <MapPin
                            left="77.2%"
                            top="58.7%"
                            title={localize('Labuan')}
                            link="/careers/locations/labuan"
                        />
                        <MapPin left="45.8%" top="28%" title={localize('London')} link="" />
                        <MapPin left="47.4%" top="30.9%" title={localize('Paris')} link="" />
                        <MapPin left="44.5%" top="30.9%" title={localize('Guernsey')} link="" />
                    </MapImage>
                </Show.Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('750+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('employees')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('50+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('nationalities')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('13')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('offices')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('10')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('countries')}
                    </NumberText>
                </Flex>
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
