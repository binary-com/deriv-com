import React from 'react'
import styled from 'styled-components'
import Map from 'images/svg/world-map.svg'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

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

    @media ${device.laptopL} {
        width: 80rem;
        height: 50rem;
    }
    @media ${device.laptop} {
        display: none;
    }
`
const StyledMap = styled(Map)`
    height: 100%;
    width: 100%;

    @media ${device.laptopL} {
        width: 80rem;
        height: 50rem;
    }
`
const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: #ff444f;
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};

    @media ${device.laptopL} {
        top: ${props => parseFloat(props.top) - 4}rem;
        left: ${props => parseFloat(props.left) - 5}rem;
    }
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
                <Oval top="39.4rem" left="26.3rem" />
                <Oval top="16.3rem" left="50.6rem" />
                <Oval top="20.8rem" left="64.2rem" />
                <Oval top="28.9rem" left="81.1rem" />
                <Oval top="28.5rem" left="86.1rem" />
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
