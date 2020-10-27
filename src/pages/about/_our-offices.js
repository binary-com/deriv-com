import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Header, Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import { ReactComponent as Map } from 'images/svg/world-map.svg'
import { ReactComponent as SmallMap } from 'images/svg/world-map-small.svg'
import device from 'themes/device'
import { ReactComponent as Labuan } from 'images/svg/labuan-pin-location.svg'
import { ReactComponent as Cyberjaya } from 'images/svg/cyberjaya-pin-location.svg'
import { ReactComponent as Dubai } from 'images/svg/dubai-pin-location.svg'
import { ReactComponent as Paraguay } from 'images/svg/paraguay-pin-location.svg'
import { ReactComponent as Malta } from 'images/svg/malta-pin-location.svg'

const OfficeContainer = styled.section`
    width: 100%;
    padding: 8rem 22.2rem;
    margin: auto;
    background-color: var(--color-white);

    @media ${device.laptopLC} {
        padding: 8rem 2rem;
    }
    @media ${device.laptopLC} {
        padding: 5rem 2rem;
    }
`
const MapWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: fit-content;

    @media ${device.desktop} {
        max-width: 1440px;
    }
`
const StyledMap = styled(Map)`
    height: 100%;
    width: 100%;

    @media ${device.laptopLC} {
        width: 996px;
    }
`
const StyledSmallMap = styled(SmallMap)`
    transform: translate(0, 0);
`
const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    border-radius: 50%;
    position: absolute;
    visibility: visible;
    top: ${(props) => (props.top ? props.top + '%' : '87%')};
    left: ${(props) => (props.left ? props.left + '%' : '11%')};

    @media ${device.tablet} {
        width: 0.5rem;
        height: 0.5rem;
        box-shadow: 0 0 0 0.3rem rgba(255, 68, 79, 0.3);
        top: ${(props) => props.top || '87%'};
        left: ${(props) => (props.left ? props.left - 50 + '%' : '11%')};
    }
`
const Pinpoint = styled.div`
    position: absolute;
    top: ${(props) => props.top + '%'};
    left: ${(props) => props.left + '%'};

    > svg {
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }
    &:hover {
        > svg {
            opacity: 1;
        }
    }
`

const PinpointWrapper = styled(Labuan)`
    position: relative;
    left: ${(props) => props.left || '-4%'};
`
const CyberjayaWrapper = styled(Cyberjaya)`
    ${PinpointWrapper}
`
const LabuanWrapper = styled(Labuan)`
    ${PinpointWrapper}
`
const DubaiWrapper = styled(Dubai)`
    ${PinpointWrapper}
`
const ParaguayWrapper = styled(Paraguay)`
    ${PinpointWrapper}
`
const MaltaWrapper = styled(Malta)`
    ${PinpointWrapper}
`
const NumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    text-align: center;
    align-items: center;
    margin-top: 2.4rem;

    @media ${device.laptopLC} {
        padding: 0 15rem;
    }
    @media ${device.tablet} {
        flex-direction: column;
        padding: 0 5rem;
    }
`
const Number = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media ${device.tablet} {
        :not(:last-child) {
            margin-bottom: 4rem;
        }
    }
`
const MapLink = styled(LocalizedLink)`
    cursor: pointer;
`
export const OurOffices = () => {
    return (
        <OfficeContainer>
            <Show.Mobile>
                <Header align="center" size="4.5rem" mb="3.2rem">
                    {localize('Our offices')}
                </Header>
            </Show.Mobile>
            <Show.Desktop>
                <Header align="center" size="3.6rem" mb="4rem">
                    {localize('Our offices')}
                </Header>
            </Show.Desktop>

            <MapWrapper>
                <Show.Mobile>
                    <StyledSmallMap />
                    <MapLink to="/contact-us/#paraguay" anchor>
                        <Pinpoint top="72" left="26">
                            <Oval />
                        </Pinpoint>
                    </MapLink>

                    <MapLink to="/contact-us/#malta" anchor>
                        <Pinpoint top="29.6" left="51">
                            <Oval />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#dubai" anchor>
                        <Pinpoint top="37.6" left="64.7">
                            <Oval />
                        </Pinpoint>
                    </MapLink>

                    <MapLink to="/contact-us/#cyberjaya" anchor>
                        <Pinpoint top="55" left="81.6">
                            <Oval top="83" left="88" />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#labuan" anchor>
                        <Pinpoint top="53.6" left="87">
                            <Oval left="8" />
                        </Pinpoint>
                    </MapLink>
                </Show.Mobile>

                <Show.Desktop>
                    <StyledMap />
                    <MapLink to="/contact-us/#paraguay" anchor>
                        <Pinpoint top="66" left="25">
                            <Oval />
                            <ParaguayWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#malta" anchor>
                        <Pinpoint top="21.6" left="49.6">
                            <Oval />
                            <MaltaWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#dubai" anchor>
                        <Pinpoint top="30.6" left="63.7">
                            <Oval />
                            <DubaiWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#cyberjaya" anchor>
                        <Pinpoint top="46" left="63.6">
                            <Oval top="83" left="88" />
                            <CyberjayaWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#labuan" anchor>
                        <Pinpoint top="44.6" left="85">
                            <Oval left="8" />
                            <LabuanWrapper />
                        </Pinpoint>
                    </MapLink>
                </Show.Desktop>
            </MapWrapper>

            <NumberWrapper>
                <Number>
                    <Show.Mobile>
                        <Header align="center" size="6rem">
                            250+
                        </Header>
                        <Text size="2rem" align="center">
                            {localize('Team members')}
                        </Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Header align="center" as="h2">
                            250+
                        </Header>
                        <Text align="center">{localize('Team members')}</Text>
                    </Show.Desktop>
                </Number>
                <Number>
                    <Show.Mobile>
                        <Header align="center" size="6rem">
                            40+
                        </Header>
                        <Text size="2rem" align="center">
                            {localize('Nationalites')}
                        </Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Header align="center" as="h2">
                            40+
                        </Header>
                        <Text align="center">{localize('Nationalites')}</Text>
                    </Show.Desktop>
                </Number>
                <Number>
                    <Show.Mobile>
                        <Header align="center" size="6rem">
                            5
                        </Header>
                        <Text size="2rem" align="center">
                            {localize('Corporate offices')}
                        </Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Header align="center" as="h2">
                            5
                        </Header>
                        <Text align="center">{localize('Corporate offices')}</Text>
                    </Show.Desktop>
                </Number>
            </NumberWrapper>
        </OfficeContainer>
    )
}
