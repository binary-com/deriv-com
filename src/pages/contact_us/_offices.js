import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Text, LocalizedLinkText } from 'components/elements/typography'
import { Header, QueryImage } from 'components/elements'
import { SectionContainer, Container, Flex, Box } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// import { map_api_key } from 'common/utility'
// SVG
import Malta from 'images/svg/contact/malta.svg'
import Dubai from 'images/svg/contact/dubai.svg'
import Paraguay from 'images/svg/contact/paraguay.svg'
import Malaysia from 'images/svg/contact/malaysia.svg'
import Cyprus from 'images/svg/contact/cyprus.svg'
import Rwanda from 'images/svg/contact/rwanda.svg'
import Belarus from 'images/svg/contact/belarus.svg'

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
        map_cyprus: file(relativePath: { eq: "maps/map-cyprus.png" }) {
            ...fadeIn
        }
        map_rwanda: file(relativePath: { eq: "maps/map-rwanda.png" }) {
            ...fadeIn
        }
        map_belarus_contact: file(relativePath: { eq: "maps/map-belarus-contact.png" }) {
            ...fadeIn
        }
    }
`

const Content = styled.div`
    max-width: 996px;
    width: 100%;
`

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    grid-row-gap: ${(props) => props.row_gap || '2.4rem'};
    width: 100%;
    margin-top: ${(props) => props.mt || 0};

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
        ${LocalizedLinkText} {
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
    justify-content: flex-start;
    @media ${device.mobileL} {
        flex-direction: column-reverse;

        ${Box} {
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 16px;
        }
        ${CountryText} {
            margin-top: 0;
            margin-bottom: 8px;
            font-size: 14px;
        }
        ${Text} {
            margin-bottom: 0;
        }
        ${LocalizedLinkText} {
            margin-bottom: 0;
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

export const Offices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer>
            <Container>
                <Content>
                    <ResHeader as="h2" type="page-title">
                        {localize('Our offices')}
                    </ResHeader>
                    <GridLayout>
                        <Flex fd="column" max_width="48.6rem" id="malta">
                            <OfficeHeader>
                                <div>
                                    <img src={Malta} alt="malta" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Malta')}
                                </Header>
                            </OfficeHeader>

                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/kAwRSaSsk1ZNCtoy9"
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Malta"
                                            data={data['map_malta']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/kAwRSaSsk1ZNCtoy9"
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Level 3, W Business Centre,
                                    <br></br>
                                    Triq Dun Karm, Birkirkara,
                                    <br></br>
                                    BKR 9033
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem" id="dubai">
                            <OfficeHeader>
                                <div>
                                    <img src={Dubai} alt="dubai" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Dubai')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/fz9kjz1MLiCekhRy5"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Dubai"
                                            data={data['map_dubai']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/fz9kjz1MLiCekhRy5"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Office 1902, Jumeirah Business
                                    <br></br>
                                    Center 1, JLT Cluster G
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <Flex fd="column" m="4rem 0" id="malaysia">
                        <OfficeHeader>
                            <div>
                                <img src={Malaysia} alt="malaysia" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                {localize('Malaysia')}
                            </Header>
                        </OfficeHeader>
                        <FullBorder>
                            <GridLayout>
                                <FullBox id="cyberjaya">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/ExoJcRaRjcGdpMY78"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Map Cyberjaya"
                                                data={data['map_cyberjaya']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Cyberjaya</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/ExoJcRaRjcGdpMY78"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            C-13, iTech Tower, Jalan Impact,
                                            <br></br>
                                            Cyber 6, 63000, Cyberjaya,
                                            <br></br>
                                            Selangor
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                                <FullBox id="labuan">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/HGEKsJfUXHrTAj299"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Map Labuan"
                                                data={data['map_labuan']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Labuan</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/HGEKsJfUXHrTAj299"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            F16, Level 1, Paragon Labuan,
                                            <br></br>
                                            Jalan Tun Mustapha,
                                            <br></br>
                                            Labuan 87000, Sabah
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                                <FullBox id="ipoh">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/mFhCyN4gPksudC156"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Map Ipoh"
                                                data={data['map_ipoh']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Ipoh</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/mFhCyN4gPksudC156"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            E-5-6, Soho Ipoh 2,
                                            <br></br>
                                            Jalan Sultan Idris Shah,
                                            <br></br>
                                            Ipoh 30000, Perak
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                                <FullBox id="melaka">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/n2bm52JrWy9M2ARV9"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Map Melaka"
                                                data={data['map_melaka']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Melaka</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/n2bm52JrWy9M2ARV9"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            67-1 &amp; 69-1, Jalan KLJ 6, Taman
                                            <br></br>
                                            Kota Laksamana Jaya, Melaka 75200
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                            </GridLayout>
                        </FullBorder>
                    </Flex>
                    <GridLayout mt="4rem" row_gap="4rem">
                        <Flex fd="column" max_width="48.6rem" id="paraguay">
                            <OfficeHeader>
                                <div>
                                    <img src={Paraguay} alt="paraguay" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Paraguay')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/Y2VJmt6cPkdJpEoM7"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Paraguay"
                                            data={data['map_paraguay']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/Y2VJmt6cPkdJpEoM7"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Edificio Australia, Oficina 1,
                                    <br></br>
                                    Herib Campos Cervera 886,
                                    <br></br>
                                    Asunción
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem" id="cyprus">
                            <OfficeHeader>
                                <div>
                                    <img src={Cyprus} alt="cyprus" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Cyprus')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/MP8aqZQ4xt8LJ9id9"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Cyprus"
                                            data={data['map_cyprus']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/MP8aqZQ4xt8LJ9id9"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Level 5, 42 Agias Filaxeos,
                                    <br></br>
                                    Limassol 3025
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem" id="rwanda">
                            <OfficeHeader>
                                <div>
                                    <img src={Rwanda} alt="rwanda" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Rwanda')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/dy3BPr2y29usir648"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Rwanda"
                                            data={data['map_rwanda']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/dy3BPr2y29usir648"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Level 2 East Wing, Kigali Heights,
                                    <br></br>
                                    KG7 Avenue, Kigali
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem" id="belarus">
                            <OfficeHeader>
                                <div>
                                    <img src={Belarus} alt="belarus" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('Belarus')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://www.google.com/maps/place/vulica+Viery+Charu%C5%BEaj+25,+Minsk,+Belarus/@53.9216551,27.566977,17z"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Map Belarus"
                                            data={data['map_belarus_contact']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://www.google.com/maps/place/vulica+Viery+Charu%C5%BEaj+25,+Minsk,+Belarus/@53.9216551,27.566977,17z"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    Level 2, 25/1-3 Vera Khoruzhey Street, Minsk 220123
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                </Content>
            </Container>
        </StyledSectionContainer>
    )
}

export default Offices
