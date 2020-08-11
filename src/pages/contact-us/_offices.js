import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Text } from 'components/elements/typography'
import { Header, QueryImage } from 'components/elements'
import { SectionContainer, Container, Flex, Box } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
// import { map_api_key } from 'common/utility'
// SVG
import Malta from 'images/svg/contact/malta.svg'
import Dubai from 'images/svg/contact/dubai.svg'
import Paraguay from 'images/svg/contact/paraguay.svg'
import Malaysia from 'images/svg/contact/malaysia.svg'

const query = graphql`
    query {
        map_paraguay: file(relativePath: { eq: "maps/map-paraguay.png" }) {
            ...fadeIn
        }
        map_dubai: file(relativePath: { eq: "maps/map-dubai.png" }) {
            ...fadeIn
        }
        map_labuan: file(relativePath: { eq: "maps/map-labuan.png" }) {
            ...fadeIn
        }
        map_ipoh: file(relativePath: { eq: "maps/map-ipoh.png" }) {
            ...fadeIn
        }
        map_melaka: file(relativePath: { eq: "maps/map-melaka.png" }) {
            ...fadeIn
        }
        map_malta: file(relativePath: { eq: "maps/map-malta.png" }) {
            ...fadeIn
        }
        map_cyberjaya: file(relativePath: { eq: "maps/map-cyberjaya.png" }) {
            ...fadeIn
        }
    }
`

const Content = styled.div`
    max-width: 996px;
`

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    width: 100%;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`

const MapContainer = styled.div`
    width: 100%;
    max-width: 22.8rem;
    height: 12rem;
`

const BorderBox = styled.div`
    display: flex;
    padding-top: 1.6rem;
    border-top: 1px solid var(--color-grey-2);

    @media ${device.mobileL} {
        flex-direction: column-reverse;

        ${MapContainer} {
            height: 173px;
            max-width: 100%;
        }
        ${Text} {
            font-size: 16px;
            margin-left: 0;
            margin-top: 8px;
            margin-bottom: 16px;
        }
    }
`

const CountryText = styled(Text)`
    font-size: var(--text-size-xs);
    color: var(--color-grey-5);
    margin-bottom: 0.8rem;
`

const FullBorder = styled(BorderBox)`
    padding: 2.4rem 0;
    border-bottom: 1px solid var(--color-grey-2);
`

const ResHeader = styled(Header)`
    margin-bottom: 4rem;
    text-align: center;

    @media ${device.tablet} {
        font-size: 40px;
        margin-bottom: 40px;
    }
`

const OfficeHeader = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.mobileL} {
        flex-direction: row;
        margin-bottom: 8px;

        ${Header} {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 16px;
            align-self: flex-end;
            font-size: 20px;
        }
    }
`

const FullBox = styled(Flex)`
    @media ${device.mobileL} {
        flex-direction: column-reverse;

        ${Box} {
            margin-top: 0;
            margin-left: 0;
        }
        ${CountryText} {
            margin-top: 0;
            margin-bottom: 8px;
            font-size: 14px;
        }
    }
`

export const Offices = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer>
            <Container>
                <Content>
                    <ResHeader as="h2">{localize('Our offices')}</ResHeader>
                    <GridLayout>
                        <Flex fd="column" max_width="48.6rem">
                            <OfficeHeader>
                                <div>
                                    <Malta />
                                </div>
                                <Header as="h4" mt="0.8rem" mb="1.6rem">
                                    {localize('Malta')}
                                </Header>
                            </OfficeHeader>

                            <BorderBox>
                                <MapContainer>
                                    <QueryImage
                                        alt="Map Malta"
                                        data={data['map_malta']}
                                        height="100%"
                                    />
                                </MapContainer>
                                <Text mt="0.8rem" ml="1.6rem">
                                    Level 3, W Business Centre, Triq Dun Karm, Birkirkara, BKR 9033
                                </Text>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem">
                            <OfficeHeader>
                                <div>
                                    <Dubai />
                                </div>
                                <Header as="h4" mt="0.8rem" mb="1.6rem">
                                    {localize('Dubai')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <QueryImage
                                        alt="Map Dubai"
                                        data={data['map_dubai']}
                                        height="100%"
                                    />
                                </MapContainer>
                                <Text mt="0.8rem" ml="1.6rem">
                                    Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake Towers
                                </Text>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <Flex fd="column" m="4rem 0">
                        <OfficeHeader>
                            <div>
                                <Malaysia />
                            </div>
                            <Header as="h4" mt="0.8rem" mb="1.6rem">
                                {localize('Malaysia')}
                            </Header>
                        </OfficeHeader>
                        <FullBorder>
                            <GridLayout>
                                <FullBox>
                                    <MapContainer>
                                        <QueryImage
                                            alt="Map Cyberjaya"
                                            data={data['map_cyberjaya']}
                                            height="100%"
                                        />
                                        {/* <Iframe
                                            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyTcAIli2zTERA4MWDMgk9i0&key=${map_api_key}`}
                                        /> */}
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Cyberjaya</CountryText>
                                        <Text>
                                            C-13, iTech Tower, Jalan Impact, Cyber 6, 63000
                                            Cyberjaya, Selangor
                                        </Text>
                                    </Box>
                                </FullBox>
                                <FullBox>
                                    <MapContainer>
                                        <QueryImage
                                            alt="Map Labuan"
                                            data={data['map_labuan']}
                                            height="100%"
                                        />
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Labuan</CountryText>
                                        <Text>
                                            F16, 1st Floor, Paragon Labuan, Jalan Tun Mustapha,
                                            87000, Labuan
                                        </Text>
                                    </Box>
                                </FullBox>
                                <FullBox>
                                    <MapContainer>
                                        <QueryImage
                                            alt="Map Ipoh"
                                            data={data['map_ipoh']}
                                            height="100%"
                                        />
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Ipoh</CountryText>
                                        <Text>
                                            Block E-5-6, Soho Ipoh 2, Jalan Sultan Idris Shah, 30000
                                            Ipoh, Perak
                                        </Text>
                                    </Box>
                                </FullBox>
                                <FullBox>
                                    <MapContainer>
                                        <QueryImage
                                            alt="Map Melaka"
                                            data={data['map_melaka']}
                                            height="100%"
                                        />
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Melaka</CountryText>
                                        <Text>
                                            No.69, Jalan KLJ 6, Taman Kota Laksamana Jaya, 75200
                                            Melaka
                                        </Text>
                                    </Box>
                                </FullBox>
                            </GridLayout>
                        </FullBorder>
                    </Flex>
                    <Flex mt="4rem" fd="column" max_width="48.6rem">
                        <OfficeHeader>
                            <div>
                                <Paraguay />
                            </div>
                            <Header as="h4" mt="0.8rem" mb="1.6rem">
                                {localize('Paraguay')}
                            </Header>
                        </OfficeHeader>
                        <BorderBox>
                            <MapContainer>
                                <QueryImage
                                    alt="Map Paraguay"
                                    data={data['map_paraguay']}
                                    height="100%"
                                />
                            </MapContainer>
                            <Text mt="0.8rem" ml="1.6rem">
                                Edificio Australia, Oficina 1, Herib Campos Cervera 886, Asunción
                            </Text>
                        </BorderBox>
                    </Flex>
                </Content>
            </Container>
        </SectionContainer>
    )
}
