import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Map from 'images/svg/world-map.svg'

const OfficeContainer = styled.section`
    width: 100%;
    padding: 8rem 22.2rem;
    margin: auto;

    @media ${device.desktop} {
        max-width: 1440px;
    }

    @media ${device.laptop} {
        padding: 8rem 5rem;
    }
`
const MapWrapper = styled.div`
    position: relative;

    @media ${device.laptopL} {
        display: none;
    }
`
const Bullet = styled.div`
    height: 0.8rem;
    width: 0.8rem;
    background-color: rgba(255, 68, 79, 0.65);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
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
                <Map />
                <Bullet top="39.4rem" left="26.3rem" />
                <Bullet top="16.3rem" left="54.1rem" />
                <Bullet top="20.8rem" left="64.2rem" />
                <Bullet top="28.9rem" left="81.1rem" />
                <Bullet top="28.5rem" left="86.1rem" />
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
