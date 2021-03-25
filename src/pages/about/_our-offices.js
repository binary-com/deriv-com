import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Show from 'components/containers/show'
import { Header, Text, BackgroundImage } from 'components/elements'
import { SectionContainer, Flex, Container } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/chevron-thick.svg'

const query = graphql`
    query {
        office_background_map: file(relativePath: { eq: "about/about-us-office-map.png" }) {
            ...fadeIn
        }
        office_background_map_mobile: file(
            relativePath: { eq: "about/about-us-office-map-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

const Pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    }
    50% {
        box-shadow: 0 0 0 1rem rgba(255, 68, 79, 0.3);
    }
    100% {
        box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    }
`

const ChevronRight = styled(Chevron)`
    transform: rotate(90deg);
    width: 16px;
    height: 16px;

    .chevron-thick-path {
        fill: var(--color-red);
    }
`
const MapImage = styled(BackgroundImage)`
    position: relative;
    width: 100%;
    height: 639px;
    background-color: transparent;
    background-size: contain;

    @media ${device.tabletS} {
        height: 340px;
        margin-bottom: 25px;
    }
    @media ${device.mobileL} {
        height: 266px;
    }
    @media ${device.mobileM} {
        height: 228px;
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

const PinWrapper = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    cursor: pointer;
`

const Pin = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    animation: ${Pulse} 2s infinite;
    border-radius: 50%;
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
                    <Text color="red" mr="8px">
                        {title}
                    </Text>
                    <ChevronRight />
                </PinContent>
            )}
        </PinWrapper>
    )
}

const OfficeWrapper = styled(Flex)`
    @media ${device.tabletS} {
        flex-direction: column-reverse;
    }

    @media ${device.tabletS} {
        .fresnel-between-start-tabletS {
            width: 100%;
        }
        .fresnel-greaterThanOrEqual-tabletS {
            width: auto;
        }
    }

    .fresnel-greaterThanOrEqual-tabletS {
        width: 100%;
    }
`

const NumberWrapper = styled(Flex)`
    @media ${device.laptopL} {
        margin-left: 150px;
    }
    @media ${device.tabletL} {
        margin-left: 32px;
    }
    @media ${device.tabletS} {
        flex-direction: row;
        margin: 0 16px;
    }
`

const OfficeContainer = styled(Container)`
    @media ${device.laptopL} {
        width: 100%;
        max-width: 1440px;
    }
`

const HeaderOffice = styled(Header)`
    @media ${device.tabletS} {
        margin-bottom: 32px;
    }
`

MapPin.propTypes = {
    left: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    top: PropTypes.string,
}

export const OurOffices = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <OfficeContainer direction="column">
                <HeaderOffice as="h3" size="3.2rem" mb="4rem" align="center">
                    {localize('Our offices')}
                </HeaderOffice>
                <OfficeWrapper ai="center" jc="center">
                    <NumberWrapper fd="column" width="auto">
                        <Flex fd="column" ai="center" mb="8rem" tabletS={{ mb: '0' }}>
                            <Text color="red" size="4.8rem" align="center" weight="bold">
                                400+
                            </Text>
                            <Text align="center">{localize('Team members')}</Text>
                        </Flex>
                        <Flex
                            fd="column"
                            ai="center"
                            mb="8rem"
                            tabletS={{ mb: '0', ml: '25px', mr: '25px' }}
                        >
                            <Text align="center" color="red" size="4.8rem" weight="bold">
                                40+
                            </Text>
                            <Text align="center">{localize('Nationalities')}</Text>
                        </Flex>
                        <Flex fd="column" ai="center">
                            <Text align="center" color="red" size="4.8rem" weight="bold">
                                10
                            </Text>
                            <Text align="center">{localize('Corporate offices')}</Text>
                        </Flex>
                    </NumberWrapper>
                    <Show.Desktop max_width="tabletS">
                        <MapImage data={data['office_background_map']}>
                            <MapPin
                                left="19%"
                                top="75%"
                                title={localize('Paraguay')}
                                link="/contact_us#paraguay"
                            />
                            <MapPin
                                left="45.5%"
                                top="32.5%"
                                title={localize('Malta')}
                                link="/contact_us#malta"
                            />
                            <MapPin
                                left="51.5%"
                                top="32%"
                                title={localize('Cyprus')}
                                link="/contact_us#cyprus"
                            />
                            <MapPin
                                left="52%"
                                top="58%"
                                title={localize('Rwanda')}
                                link="/contact_us#rwanda"
                            />
                            <MapPin
                                left="48%"
                                top="20%"
                                title={localize('Belarus')}
                                link="/contact_us#belarus"
                            />
                            <MapPin
                                left="63.5%"
                                top="40%"
                                title={localize('Dubai')}
                                link="/contact_us#dubai"
                            />
                            <MapPin
                                left="81%"
                                top="55.5%"
                                title={localize('Ipoh')}
                                link="/contact_us#ipoh"
                            />
                            <MapPin
                                left="81.8%"
                                top="58.5%"
                                title={localize('Cyberjaya')}
                                link="/contact_us#cyberjaya"
                            />
                            <MapPin
                                left="83%"
                                top="60.3%"
                                title={localize('Melaka')}
                                link="/contact_us#melaka"
                            />
                            <MapPin
                                left="88%"
                                top="55.5%"
                                title={localize('Labuan')}
                                link="/contact_us#labuan"
                            />
                        </MapImage>
                    </Show.Desktop>

                    <Show.Mobile min_width="tabletS">
                        <MapImage data={data['office_background_map_mobile']}>
                            <MapPin
                                left="19%"
                                top="70%"
                                title="Paraguay"
                                link="/contact_us#paraguay"
                            />
                            <MapPin left="45%" top="31.5%" title="Malta" link="/contact_us#malta" />
                            <MapPin
                                left="52.4%"
                                top="33.8%"
                                title="Cyprus"
                                link="/contact_us#cyprus"
                            />
                            <MapPin
                                left="49%"
                                top="17.5%"
                                title={localize('Belarus')}
                                link="/contact_us#belarus"
                            />
                            <MapPin left="52%" top="57%" title="Rwanda" link="/contact_us#rwanda" />
                            <MapPin left="64%" top="36.8%" title="Dubai" link="/contact_us#dubai" />
                            <MapPin left="81.5%" top="48.5%" title="Ipoh" link="/contact_us#ipoh" />
                            <MapPin
                                left="82%"
                                top="52%"
                                title="Cyberjaya"
                                link="/contact_us#cyberjaya"
                            />
                            <MapPin left="83%" top="55%" title="Melaka" link="/contact_us#melaka" />
                            <MapPin left="88.5%" top="51%" title="Labuan" link="/contact_us#labuan" />
                        </MapImage>
                    </Show.Mobile>
                </OfficeWrapper>
            </OfficeContainer>
        </SectionContainer>
    )
}

export default OurOffices
