import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Map from 'images/svg/world-map.svg'
import device from 'themes/device'
import MapPinpoint from 'images/svg/map-pinpoint.svg'

const OfficeContainer = styled.section`
    width: 100%;
    padding: 8rem 22.2rem;
    margin: auto;
    background-color: var(--color-grey-8);

    @media ${device.laptopLC} {
        padding: 8rem 2rem;
    }
    @media ${device.desktop} {
        max-width: 1440px;
    }
`
const MapWrapper = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;

    @media ${device.laptopLC} {
        width: 996px;
    }
    @media ${device.laptop} {
        display: none;
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
    top: 74%;
    left: 7%;
`
const Pinpoint = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    visibility: hidden;

    &:hover {
        visibility: visible;
    }
`

const PinpointWrapper = styled(MapPinpoint)`
    position: relative;
    left: ${props => props.left || '-2%'};
    transform: ${props => props.trans || 'none'};
`
const LabelWrapper = styled.div`
    position: absolute;
    top: 0.8rem;
    left: ${props => props.left || '2.8rem'};
    width: auto;
    height: 3 rem;
    color: var(--color-white);
    font-size: 1.1rem;
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
                    <Pinpoint top="70%" left="26%">
                        <Oval />
                        <PinpointWrapper />
                        <LabelWrapper>{localize('Paraguay')}</LabelWrapper>
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Binary+(Europe)+Ltd&35.903605,14.460732&ll=35.903605,14.460732&z=17"
                >
                    <Pinpoint top="26%" left="50.3%">
                        <Oval />
                        <PinpointWrapper />
                        <LabelWrapper>{localize('Malta')}</LabelWrapper>
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Lake+Plaza+Dubai&25.079220,55.149569&ll=25.079220,55.149569&z=16"
                >
                    <Pinpoint top="34.6%" left="63.7%">
                        <Oval />
                        <PinpointWrapper />
                        <LabelWrapper>{localize('Dubai')}</LabelWrapper>
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=i-Tech+Tower&2.922708,101.661274&ll=2.922708,101.661274&z=18"
                >
                    <Pinpoint top="49.5%" left="80.6%">
                        <Oval />
                        <PinpointWrapper left="-72%" trans="scaleX(-1)" />
                        <LabelWrapper left="-5.2rem">{localize('Cyberjaya')}</LabelWrapper>
                    </Pinpoint>
                </MapLink>

                <MapLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maps.google.com/?q=Paragon+Labuan&5.280808,115.244948&ll=5.280808,115.244948&z=17"
                >
                    <Pinpoint top="49%" left="85.8%">
                        <Oval />
                        <PinpointWrapper />
                        <LabelWrapper>{localize('Labuan')}</LabelWrapper>
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
                        20
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
