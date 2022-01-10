import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, CssGrid, Show, Flex } from 'components/containers'
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
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
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

const StyledFlex = styled(Flex)`
    height: unset;
`

// eslint-disable-next-line react/prop-types
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
                {localize('Our global offices')}
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
                            left="73.3%"
                            top="57.5%"
                            title={localize('Ipoh')}
                            link="/careers/locations/ipoh"
                        />
                        <MapPin
                            left="74.2%"
                            top="58.5%"
                            title={localize('Cyberjaya')}
                            link="/careers/locations/cyberjaya"
                        />
                        <MapPin
                            left="74.2%"
                            top="60.6%"
                            title={localize('Melaka')}
                            link="/careers/locations/melaka"
                        />
                        <MapPin
                            left="77.2%"
                            top="58.7%"
                            title={localize('Labuan')}
                            link="/careers/locations/labuan"
                        />
                        <MapPin
                            left="45.8%"
                            top="28%"
                            title={localize('London')}
                            link="/careers/locations/london"
                        />
                        <MapPin
                            left="47.4%"
                            top="30.9%"
                            title={localize('Paris')}
                            link="/careers/locations/paris"
                        />
                        <MapPin
                            left="44.5%"
                            top="30.9%"
                            title={localize('Guernsey')}
                            link="/careers/locations/guernsey"
                        />
                    </MapImage>
                </Show.Desktop>
                <Show.Mobile min_width="tablet">
                    <MapImage data={data['earth_mobile']}>
                        <MapPin
                            left="28.5%"
                            top="71%"
                            title="Paraguay"
                            link="/careers/locations/asuncion"
                        />
                        <MapPin
                            left="48.5%"
                            top="35.5%"
                            title={localize('Malta')}
                            link="/careers/locations/malta"
                        />
                        <MapPin
                            left="53.5%"
                            top="36%"
                            title={localize('Cyprus')}
                            link="/careers/locations/cyprus"
                        />
                        <MapPin
                            left="52.5%"
                            top="57.5%"
                            title={localize('Rwanda')}
                            link="/careers/locations/rwanda"
                        />
                        <MapPin
                            left="52.5%"
                            top="23.5%"
                            title={localize('Belarus')}
                            link="/careers/locations/minsk"
                        />
                        <MapPin
                            left="60%"
                            top="41.9%"
                            title={localize('Dubai')}
                            link="/careers/locations/dubai"
                        />
                        <MapPin
                            left="72.3%"
                            top="51.2%"
                            title={localize('Ipoh')}
                            link="/careers/locations/ipoh"
                        />
                        <MapPin
                            left="71%"
                            top="55%"
                            title={localize('Cyberjaya')}
                            link="/careers/locations/cyberjaya"
                        />
                        <MapPin
                            left="73%"
                            top="56.7%"
                            title={localize('Melaka')}
                            link="/careers/locations/melaka"
                        />
                        <MapPin
                            left="76%"
                            top="54.7%"
                            title={localize('Labuan')}
                            link="/careers/locations/labuan"
                        />
                        <MapPin
                            left="44.3%"
                            top="24%"
                            title={localize('London')}
                            link="/careers/locations/london"
                        />
                        <MapPin
                            left="45.9%"
                            top="26.9%"
                            title={localize('Paris')}
                            link="/careers/locations/paris"
                        />
                        <MapPin
                            left="43%"
                            top="26.9%"
                            title={localize('Guernsey')}
                            link="/careers/locations/guernsey"
                        />
                    </MapImage>
                </Show.Mobile>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('750+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('employees')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('50+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('nationalities')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('11')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('offices')}
                    </NumberText>
                </StyledFlex>
                <StyledFlex fd="column">
                    <NumberHeader size="32px">{localize('8')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('countries')}
                    </NumberText>
                </StyledFlex>
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
