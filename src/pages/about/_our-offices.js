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

    @media ${device.desktop} {
        max-width: 1440px;
    }
`
const MapWrapper = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;

    @media ${device.laptop} {
        display: none;
    }
`
const StyledMap = styled(Map)`
    height: 100%;
    width: 100%;
`
const Pinpoint = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    visibility: hidden;

    &:hover ${Oval} {
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
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    margin-bottom: 4rem;
`
const NumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    align-items: center;
    margin-top: 2.4rem;
`
const Number = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

export const OurOffices = () => {
    return (
        <OfficeContainer>
            <StyledHeader align="center">{localize('Our offices')}</StyledHeader>
            <MapWrapper>
                <StyledMap />

                <Pinpoint top="70%" left="26%">
                    <Oval />
                    <PinpointWrapper />
                    <LabelWrapper>Paraguay</LabelWrapper>
                </Pinpoint>

                <Pinpoint top="26%" left="50.3%">
                    <Oval />
                    <PinpointWrapper />
                    <LabelWrapper>Malta</LabelWrapper>
                </Pinpoint>

                <Pinpoint top="34.6%" left="63.7%">
                    <Oval />
                    <PinpointWrapper />
                    <LabelWrapper>Dubai</LabelWrapper>
                </Pinpoint>

                <Pinpoint top="49.5%" left="80.6%">
                    <Oval />
                    <PinpointWrapper left="-72%" trans="scaleX(-1)" />
                    <LabelWrapper left="-5.2rem">Cyberjaya</LabelWrapper>
                </Pinpoint>

                <Pinpoint top="49%" left="85.8%">
                    <Oval />
                    <PinpointWrapper />
                    <LabelWrapper>Labuan</LabelWrapper>
                </Pinpoint>
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
                <Number>
                    <Header align="center" as="h2">
                        900+
                    </Header>
                    <Text align="center">{localize('Global customer base')}</Text>
                </Number>
            </NumberWrapper>
        </OfficeContainer>
    )
}
