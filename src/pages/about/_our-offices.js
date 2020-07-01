import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { localize, LocalizedLink } from 'components/localization'
// import Map from 'images/svg/world-map.svg'
import { Flex } from 'components/containers'
import SmallMap from 'images/svg/world-map-small.svg'
import device from 'themes/device'
import Labuan from 'images/svg/labuan-pin-location.svg'
import Cyberjaya from 'images/svg/cyberjaya-pin-location.svg'
import Dubai from 'images/svg/dubai-pin-location.svg'
import Paraguay from 'images/svg/paraguay-pin-location.svg'
import Malta from 'images/svg/malta-pin-location.svg'
import { Header, Text, QueryImage } from 'components/elements'

const query = graphql`
    query {
        world_map: file(relativePath: { eq: "world-map.png" }) {
            ...fadeIn
        }
    }
`
const OfficeContainer = styled.section`
    width: 100%;
    height: 87.9rem;
    background-color: var(--color-white);
    margin: 0 auto;
    padding: 8rem 0;
`
const MapWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 63.9rem;
    max-width: 1440px;
    margin: 0 auto;
`
const MapImageWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
`
const StyledSmallMap = styled(SmallMap)`
    transform: translate(0, 0);
`
const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    animation: pulse 2s infinite;
    border-radius: 50%;
    position: absolute;
    visibility: visible;
    top: ${(props) => (props.top ? props.top + '%' : '87%')};
    left: ${(props) => (props.left ? props.left + '%' : '11%')};

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
        }
        50% {
            box-shadow: 0 0 0 1rem rgba(255, 68, 79, 0.3);
        }
        100% {
            box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
        }
    }
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
const MapLink = styled(LocalizedLink)`
    cursor: pointer;
`
export const OurOffices = () => {
    const data = useStaticQuery(query)

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
                    <MapImageWrapper>
                        <QueryImage data={data['world_map']} alt="World Map" width="100%" />
                    </MapImageWrapper>
                    <MapLink to="/contact-us/#paraguay" anchor>
                        <Pinpoint top="69" left="34">
                            <Oval />
                            <ParaguayWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#malta" anchor>
                        <Pinpoint top="21.6" left="55">
                            <Oval />
                            <MaltaWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#dubai" anchor>
                        <Pinpoint top="30.6" left="69">
                            <Oval />
                            <DubaiWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#cyberjaya" anchor>
                        <Pinpoint top="49" left="73">
                            <Oval top="83" left="88" />
                            <CyberjayaWrapper />
                        </Pinpoint>
                    </MapLink>
                    <MapLink to="/contact-us/#labuan" anchor>
                        <Pinpoint top="48" left="90">
                            <Oval left="8" />
                            <LabuanWrapper />
                        </Pinpoint>
                    </MapLink>
                </Show.Desktop>
                <Flex
                    fd="column"
                    position="absolute"
                    width="12.4rem"
                    padding="0 0 0 12.7rem"
                    left="12.7rem"
                >
                    <Flex fd="column" height="unset">
                        <Header color="red-4" as="h2" align="center">
                            {localize('300+')}
                        </Header>
                        <Text align="center" mb="8rem">
                            {localize('Team members')}
                        </Text>
                    </Flex>
                    <Flex fd="column" height="unset">
                        <Header color="red-4" as="h2" align="center">
                            {localize('40+')}
                        </Header>
                        <Text align="center" mb="8rem">
                            {localize('Nationalities')}
                        </Text>
                    </Flex>
                    <Flex fd="column" height="unset">
                        <Header color="red-4" as="h2" align="center">
                            {localize('5')}
                        </Header>
                        <Text align="center">{localize('Corporate offices')}</Text>
                    </Flex>
                </Flex>
            </MapWrapper>
        </OfficeContainer>
    )
}
