import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { localize, LocalizedLink } from 'components/localization'
// import Map from 'images/svg/world-map.svg'
import { Flex } from 'components/containers'
import SmallMap from 'images/svg/world-map-small.svg'
import { Header, Text, QueryImage } from 'components/elements'

const query = graphql`
    query {
        world_map: file(relativePath: { eq: "world-map.png" }) {
            ...fadeIn
        }
        world_map_mobile: file(relativePath: { eq: "world-map-mobile.png" }) {
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

const OvalWrapper = styled.div`
    position: absolute;
    top: ${(props) => props.top + '%'};
    left: ${(props) => props.left + '%'};

    > div:first-child {
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
    }
    &:hover {
        > div {
            opacity: 1;
        }
    }
`

const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    animation: pulse 2s infinite;
    border-radius: 50%;
    position: absolute;
    left: 46px;
    top: 49px;

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
`

const SpeechBubble = styled.div`
    display: flex;
    justify-content: space-around;
    height: 40px;
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 110px;
    text-align: center;
`
const SpeechBubbleArrow = styled.div`
    border-style: solid;
    position: absolute;
    border-color: var(--color-white) transparent transparent transparent;
    border-width: 8px;
    bottom: -8px;
    top: 39px;
    left: 44px;
    z-index: 1;

    ::after {
        border-color: #f8f8f8 transparent transparent transparent;
        border-style: solid;
        border-width: 7px;
        bottom: 1px;
        content: '';
        position: absolute;
        left: -7px;
    }
`

const Arrow = styled.div`
    width: 8px;
    height: 8px;
    box-shadow: -2px 2px 0 red;
    transform: rotate(-135deg);
    margin-left: 8px;
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
                </Show.Mobile>

                <Show.Desktop>
                    <MapImageWrapper>
                        <QueryImage data={data['world_map']} alt="World Map" width="100%" />
                    </MapImageWrapper>

                    <MapLink to="/contact-us/#paraguay" anchor>
                        <OvalWrapper top="68" left="32">
                            <SpeechBubble>
                                <Flex ai="center">
                                    <Text color="red">{localize('Paraguay')}</Text>
                                    <Arrow />
                                </Flex>
                                <SpeechBubbleArrow />
                            </SpeechBubble>
                            <Oval />
                        </OvalWrapper>
                    </MapLink>
                    <MapLink to="/contact-us/#malta" anchor>
                        <OvalWrapper top="22" left="53">
                            <SpeechBubble>
                                <Flex ai="center">
                                    <Text color="red">{localize('Malta')}</Text>
                                    <Arrow />
                                </Flex>
                                <SpeechBubbleArrow />
                            </SpeechBubble>
                            <Oval />
                        </OvalWrapper>
                    </MapLink>
                    <MapLink to="/contact-us/#dubai" anchor>
                        <OvalWrapper top="32" left="67">
                            <SpeechBubble>
                                <Flex ai="center">
                                    <Text color="red">{localize('Dubai')}</Text>
                                    <Arrow />
                                </Flex>
                                <SpeechBubbleArrow />
                            </SpeechBubble>
                            <Oval />
                        </OvalWrapper>
                    </MapLink>
                    <MapLink to="/contact-us/#cyberjaya" anchor>
                        <OvalWrapper top="51" left="82.5">
                            <SpeechBubble>
                                <Flex ai="center">
                                    <Text color="red">{localize('Cyberjaya')}</Text>
                                    <Arrow />
                                </Flex>
                                <SpeechBubbleArrow />
                            </SpeechBubble>
                            <Oval />
                        </OvalWrapper>
                    </MapLink>

                    <MapLink to="/contact-us/#labuan" anchor>
                        <OvalWrapper top="48" left="87">
                            <SpeechBubble>
                                <Flex ai="center">
                                    <Text color="red">{localize('Labuan')}</Text>
                                    <Arrow />
                                </Flex>
                                <SpeechBubbleArrow />
                            </SpeechBubble>
                            <Oval />
                        </OvalWrapper>
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
