import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Map from 'images/svg/world-map.svg'
import device from 'themes/device'
import Labuan from 'images/svg/labuan-pin-location.svg'
import Cyberjaya from 'images/svg/cyberjaya-pin-location.svg'
import Dubai from 'images/svg/dubai-pin-location.svg'
import Paraguay from 'images/svg/paraguay-pin-location.svg'
import Malta from 'images/svg/malta-pin-location.svg'

const OfficeContainer = styled.section`
    width: 100%;
    padding: 8rem 22.2rem;
    margin: auto;
    background-color: var(--color-grey-8);

    @media ${device.laptopLC} {
        padding: 8rem 2rem;
    }

    @media ${device.laptop} {
        display: none;
    }
`
const MapWrapper = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;

    @media ${device.laptopLC} {
        width: 996px;
    }
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
const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    border-radius: 50%;
    position: absolute;
    visibility: visible;
    top: ${props => props.top || '87%'};
    left: ${props => props.left || '11%'};
`
const Pinpoint = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};

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
    left: ${props => props.left || '-4%'};
`
const LabuanWrapper = styled(Labuan)`
    ${PinpointWrapper}
`
const CyberjayaWrapper = styled(Cyberjaya)`
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
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    margin-bottom: 4rem;
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
    }
`
const Number = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const MapLink = styled.a`
    cursor: pointer;
`
export const OurOffices = () => {
    return (
        <OfficeContainer>
            <StyledHeader align="center">{localize('Our offices')}</StyledHeader>
            <MapWrapper>
                <StyledMap />
                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Edificio+Australia+Asunción&-25.282569,-57.563805&ll=-25.282569,-57.563805&z=17"
                >
                    <Pinpoint top="66%" left="25%">
                        <Oval />
                        <ParaguayWrapper />
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Binary+(Europe)+Ltd&35.903605,14.460732&ll=35.903605,14.460732&z=17"
                >
                    <Pinpoint top="21.6%" left="49.6%">
                        <Oval />
                        <MaltaWrapper />
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Lake+Plaza+Dubai&25.079220,55.149569&ll=25.079220,55.149569&z=16"
                >
                    <Pinpoint top="30.6%" left="63.7%">
                        <Oval />
                        <DubaiWrapper />
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=i-Tech+Tower&2.922708,101.661274&ll=2.922708,101.661274&z=18"
                >
                    <Pinpoint top="46%" left="63.6%">
                        <Oval top="83%" left="88%" />
                        <CyberjayaWrapper />
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Paragon+Labuan&5.280808,115.244948&ll=5.280808,115.244948&z=17"
                >
                    <Pinpoint top="44.6%" left="85%">
                        <Oval left="8%" />
                        <LabuanWrapper />
                    </Pinpoint>
                </MapLink>
            </MapWrapper>

            <NumberWrapper>
                <Number>
                    <Header align="center" as="h2">
                        250+
                    </Header>
                    <Text align="center">{localize('Team members')}</Text>
                </Number>
                <Number>
                    <Header align="center" as="h2">
                        40+
                    </Header>
                    <Text align="center">{localize('Nationalites')}</Text>
                </Number>
                <Number>
                    <Header align="center" as="h2">
                        5
                    </Header>
                    <Text align="center">{localize('Corporate offices')}</Text>
                </Number>
            </NumberWrapper>
        </OfficeContainer>
    )
}
