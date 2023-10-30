import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Header, QueryImage, Text, LocalizedLinkText } from 'components/elements'
import { SectionContainer, Container, Flex, Box, Desktop, Mobile } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import France from 'images/svg/contact/france.svg'
import Malta from 'images/svg/contact/malta.svg'
import Guernsey from 'images/svg/contact/guernsey.svg'
import Dubai from 'images/svg/contact/dubai.svg'
import Paraguay from 'images/svg/contact/paraguay.svg'
import Malaysia from 'images/svg/contact/malaysia.svg'
import Cayman from 'images/svg/contact/cayman.svg'
import Cyprus from 'images/svg/contact/cyprus.svg'
import Rwanda from 'images/svg/contact/rwanda.svg'
import Singapore from 'images/svg/contact/singapore.svg'
import Jordan from 'images/svg/contact/jordan.svg'
import Vanuatu from 'images/svg/contact/vanuatu.svg'
import UK from 'images/svg/contact/uk.svg'
import Berlin from 'images/svg/contact/berlin.svg'
import Bvi from 'images/svg/contact/bvi.svg'
import HongKong from 'images/svg/contact/hongkong.svg'

type GridLayoutProps = {
    children?: React.ReactNode | React.ReactChild
    row_gap?: string
    mt?: string
}

const query = graphql`
    query {
        map_paraguay: file(relativePath: { eq: "maps/map-paraguay.png" }) {
            ...fadeIn
        }
        map_dubai: file(relativePath: { eq: "maps/map-dubai.png" }) {
            ...fadeIn
        }
        map_jordan: file(relativePath: { eq: "maps/map-jordan.png" }) {
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
        map_singapore: file(relativePath: { eq: "maps/map-singapore.png" }) {
            ...fadeIn
        }
        map_malta: file(relativePath: { eq: "maps/map-malta.png" }) {
            ...fadeIn
        }
        map_france: file(relativePath: { eq: "maps/map-france.jpg" }) {
            ...fadeIn
        }
        map_vanuatu: file(relativePath: { eq: "maps/map-vanuatu.png" }) {
            ...fadeIn
        }
        map_cyberjaya: file(relativePath: { eq: "maps/map-cyberjaya.png" }) {
            ...fadeIn
        }
        map_guernsey: file(relativePath: { eq: "maps/map-guernsey.jpg" }) {
            ...fadeIn
        }
        map_cayman: file(relativePath: { eq: "maps/map-cayman.png" }) {
            ...fadeIn
        }
        map_ciudad: file(relativePath: { eq: "maps/map-ciudad.png" }) {
            ...fadeIn
        }
        map_cyprus: file(relativePath: { eq: "maps/map-cyprus.png" }) {
            ...fadeIn
        }
        map_rwanda: file(relativePath: { eq: "maps/map-rwanda.png" }) {
            ...fadeIn
        }
        map_uk: file(relativePath: { eq: "maps/map-uk.png" }) {
            ...fadeIn
        }
        map_bvi: file(relativePath: { eq: "maps/map-bvi.png" }) {
            ...fadeIn
        }
        map_berlin: file(relativePath: { eq: "maps/map-berlin.png" }) {
            ...fadeIn
        }
        map_hk: file(relativePath: { eq: "maps/map-hk.png" }) {
            ...fadeIn
        }
    }
`

const Content = styled.div`
    max-width: 996px;
    width: 100%;
`

const GridLayout = styled.div<GridLayoutProps>`
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
        padding-top: 0;

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
    @media ${device.mobileL} {
        margin-bottom: 13px;
        margin-top: 13px;
    }
`

const FullBorder = styled(BorderBox)`
    padding: 1rem 0;
`

const ResHeader = styled(Header)`
    margin-bottom: 4rem;
    text-align: center;

    @media ${device.tablet} {
        font-size: 40px;
        margin-bottom: 40px;
    }
`

const ContinentHeader = styled(Header)`
    border-bottom: 1px solid var(--color-grey-2);
    height: 45px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    white-space: nowrap;
    margin-bottom: 38px;
    text-transform: uppercase;
    margin-top: 30px;
    color: #85acb0;
    flex: none;
    order: 0;
    flex-grow: 0;

    :nth-child(2) {
        margin-bottom: 0;
    }

    @media ${device.mobileL} {
        margin-top: 65px;
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
            margin-top: 33px;
            font-size: 14px;
        }
        ${Text} {
            margin-bottom: 33px;
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
const StyledMobileAddress = styled.div`
    @media ${device.tablet} {
        max-width: 328px;
        font-size: 14px;
    }

    @media (max-width: 324px) {
        max-width: 320px;
        font-size: 14px;
    }
`

export const Offices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer>
            <Container>
                <Content>
                    <ResHeader as="h2" type="page-title">
                        <Localize translate_text="_t_Our offices_t_" />
                    </ResHeader>
                    <ContinentHeader>
                        <Localize translate_text="_t_Europe_t_" />
                    </ContinentHeader>
                    <GridLayout>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="france">
                            <OfficeHeader>
                                <div>
                                    <img src={UK} alt="UK" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_United Kingdom_t_" />
                                </Header>
                            </OfficeHeader>

                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/hYvX7SUgPaTcf1uj6"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in UK"
                                            data={data['map_uk']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/hYvX7SUgPaTcf1uj6"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>Deriv Technologies Limited </p>
                                        <p>Suite 1, Ground Floor, Block D </p> <p>Apex</p>
                                        <p>Forbury Road </p>
                                        <p> Reading RG1 1AX</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Deriv Technologies LimitedSuite 1, Ground Floor, Block
                                            D, Apex, Forbury Road, Reading RG1 1AX
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="france">
                            <OfficeHeader>
                                <div>
                                    <img src={France} alt="France - Eiffel Tower" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_France_t_" />
                                </Header>
                            </OfficeHeader>

                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/9gWxUqM3goau5eRCA"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in France"
                                            data={data['map_france']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/9gWxUqM3goau5eRCA"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>17 Rue d&apos;Antin, 75002 Paris</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            17 Rue d&apos;Antin, 75002 Paris
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="malta">
                            <OfficeHeader>
                                <div>
                                    <img src={Malta} alt="Malta - Valleta" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Malta_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/kAwRSaSsk1ZNCtoy9"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Malta"
                                            data={data['map_malta']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/kAwRSaSsk1ZNCtoy9"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>Level 3, W Business Centre,</p>
                                        <p>Triq Dun Karm, Birkirkara,</p>
                                        <p>BKR 9033</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Level 3, W Business Centre,Triq Dun Karm, Birkirkara,
                                            BKR 9033
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="cyprus">
                            <OfficeHeader>
                                <div>
                                    <img src={Cyprus} alt="Cyprus - Limassol" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Cyprus_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/BdBfWNVhyLGZ2KfG7"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Cyprus"
                                            data={data['map_cyprus']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/BdBfWNVhyLGZ2KfG7"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>
                                            181, Leoforos Archiepiskopou Makariou III Avenue 15
                                            Business Centre, 1st Floor, 3030, Limassol Cyprus
                                        </p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            181, Leoforos Archiepiskopou Makariou III Avenue 15
                                            Business Centre, 1st Floor, 3030, Limassol Cyprus
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="guernsey">
                            <OfficeHeader>
                                <div>
                                    <img src={Guernsey} alt="Guernsey - Sark Lighthouse" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Guernsey_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/jX1D5CmysqtbMJeh6"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Guernsey"
                                            data={data['map_guernsey']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/jX1D5CmysqtbMJeh6"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>Suite 5, One Cornet Street, St </p>
                                        <p>Peter Port, Guernsey GY1 1 BZ</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Suite 5, One Cornet Street, St Peter Port, Guernsey GY1
                                            1 BZ
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="berlin">
                            <OfficeHeader>
                                <div>
                                    <img src={Berlin} alt="Germany - Berlin" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Berlin_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://maps.app.goo.gl/hPyVpLLrynCf6NmEA"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Germany"
                                            data={data['map_berlin']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://maps.app.goo.gl/hPyVpLLrynCf6NmEA"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>Kemperplatz 1 Mitte D, 10785</p>
                                        <p>Berlin, Germany</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Kemperplatz 1 Mitte D, 10785 Berlin, Germany
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <Flex fd="column" mt="30px" id="malaysia">
                        <ContinentHeader>
                            <Localize translate_text="_t_Asia_t_" />
                        </ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Malaysia} alt="Malaysia - Petronas Twin Towers" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                <Localize translate_text="_t_Malaysia_t_" />
                            </Header>
                        </OfficeHeader>
                        <FullBorder>
                            <GridLayout>
                                <FullBox id="cyberjaya">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/taw811vL1Wht9z4YA"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Deriv's office location map in Cyberjaya"
                                                data={data['map_cyberjaya']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Cyberjaya</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/taw811vL1Wht9z4YA"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Desktop>
                                                <p>Deriv HQ, 3500, Jalan Teknokrat </p>
                                                <p>3, 63000 Cyberjaya, Selangor</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    Deriv HQ, 3500, Jalan Teknokrat 3, 63000
                                                    Cyberjaya, Selangor
                                                </StyledMobileAddress>
                                            </Mobile>
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
                                                alt="Deriv's office location map in Labuan"
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
                                            <Desktop>
                                                <p>F16, Level 1, Paragon Labuan,</p>
                                                <p>Jalan Tun Mustapha,</p>
                                                <p>Labuan 87000, Sabah</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    F16, Level 1, Paragon Labuan Jalan Tun Mustapha,
                                                    Labuan 87000, Sabah
                                                </StyledMobileAddress>
                                            </Mobile>
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
                                                alt="Deriv's office location map in Ipoh"
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
                                            <Desktop>
                                                <p>E-5-6, Soho Ipoh 2,</p>
                                                <p>Jalan Sultan Idris Shah,</p>
                                                <p>Ipoh 30000, Perak</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    E-5-6, Soho Ipoh 2, Jalan Sultan Idris Shah,
                                                    Ipoh 30000, Perak
                                                </StyledMobileAddress>
                                            </Mobile>
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
                                                alt="Deriv's office location map in Melaka"
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
                                            <Desktop>
                                                <p>67-1 &amp; 69-1, Jalan KLJ 6,</p>
                                                <p>Taman Kota Laksamana Jaya,</p>
                                                <p>Melaka 75200</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    67-1 & 69-1, Jalan KLJ 6, Taman Kota Laksamana
                                                    Jaya, Melaka 75200
                                                </StyledMobileAddress>
                                            </Mobile>
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                            </GridLayout>
                        </FullBorder>
                    </Flex>
                    <GridLayout>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="singapore">
                            <OfficeHeader>
                                <div>
                                    <img src={Singapore} alt="Singapore - Merlion Park" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Singapore_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/kWBStW3LrCR5HuoP6"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Singapore"
                                            data={data['map_singapore']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/kWBStW3LrCR5HuoP6"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>80 Robinson Road, #11-03, Singapore 068898</Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            80 Robinson Road, #11-03, Singapore 068898
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="hong kong">
                            <OfficeHeader>
                                <div>
                                    <img src={HongKong} alt="Hong Kong - Hong Kong" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Hong Kong_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://maps.app.goo.gl/SKGKN8eVpSCBVWKp9"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Hong Kong"
                                            data={data['map_hk']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://maps.app.goo.gl/SKGKN8eVpSCBVWKp9"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        Room 408A, Empire Centre, 68 Mody Road, Tsim Sha Tsui East,
                                        Kowloon, Hong Kong
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Room 408A, Empire Centre, 68 Mody Road, Tsim Sha Tsui
                                            East, Kowloon, Hong Kong
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <ContinentHeader>
                        <Localize translate_text="_t_Middle East_t_" />
                    </ContinentHeader>
                    <GridLayout>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="dubai">
                            <OfficeHeader>
                                <div>
                                    <img src={Dubai} alt="Dubai - Burj Al Arab" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Dubai_t_" />
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
                                            alt="Deriv's office location map in Dubai"
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
                                    <Desktop>
                                        <p>Office 1902, Jumeirah Business</p>
                                        <p> Center 1, JLT Cluster G</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Office 1902, Jumeirah Business Center 1, JLT Cluster G
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="jordan">
                            <OfficeHeader>
                                <div>
                                    <img src={Jordan} alt="Jordan - Petra Gate" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Jordan_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/JuQYXXJpw37mu9ii7"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Jordan"
                                            data={data['map_jordan']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/JuQYXXJpw37mu9ii7"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>
                                            AJIB Building, No 12A & 12B, 3rd Floor, Al Bonouk
                                            Street,Al Abdali Boulevard, Amman - Jordan.
                                        </p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            AJIB Building, No 12A & 12B, 3rd Floor, Al Bonouk
                                            Street, Al Abdali Boulevard, Amman - Jordan.
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <Flex mt="30px" fd="column" id="rwanda">
                        <ContinentHeader>
                            <Localize translate_text="_t_Africa_t_" />
                        </ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Rwanda} alt="Rwanda - Kigali Convention Center" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                <Localize translate_text="_t_Rwanda_t_" />
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex mt="30px" fd="column" max_width="48.6rem">
                        <BorderBox>
                            <MapContainer>
                                <LocalizedLink
                                    to="https://goo.gl/maps/wJgnX1W846t5FAbK7"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage
                                        alt="Deriv's office location map in Rwanda"
                                        data={data['map_rwanda']}
                                        height="100%"
                                    />
                                </LocalizedLink>
                            </MapContainer>
                            <LocalizedLinkText
                                to="https://goo.gl/maps/wJgnX1W846t5FAbK7"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                                mt="0.8rem"
                                ml="1.6rem"
                            >
                                <Desktop>
                                    <p>Level 2 East Wing, Kigali Heights,</p>
                                    <p>KG7 Avenue, Kigali</p>
                                </Desktop>
                                <Mobile>
                                    <StyledMobileAddress>
                                        Level 2 East Wing, Kigali Heights, KG7 Avenue, Kigali
                                    </StyledMobileAddress>
                                </Mobile>
                            </LocalizedLinkText>
                        </BorderBox>
                    </Flex>

                    <Flex fd="column" mt="30px" id="latam">
                        <ContinentHeader>
                            <Localize translate_text="_t_Latin America_t_" />
                        </ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Paraguay} alt="Paraguay - National Pantheon of Heroes" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                <Localize translate_text="_t_Paraguay_t_" />
                            </Header>
                        </OfficeHeader>
                        <FullBorder>
                            <GridLayout>
                                <FullBox id="paraguay">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/ci85LgJcyNj97uDa7"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Deriv's office location map in Cyberjaya"
                                                data={data['map_paraguay']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Asunción</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/ci85LgJcyNj97uDa7"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Desktop>
                                                <p>Edificio Atrium, Piso 2,</p>
                                                <p>Guido Spano Esq. Doctor Morra,</p>
                                                <p>Asunción 1849</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    Edificio Atrium, Piso 2, Guido Spano Esq. Doctor
                                                    Morra, Asunción 1849
                                                </StyledMobileAddress>
                                            </Mobile>
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                                <FullBox id="ciudad">
                                    <MapContainer>
                                        <LocalizedLink
                                            to="https://goo.gl/maps/5d1aeBeeJDEWG1SW7"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <QueryImage
                                                alt="Deriv's office location map in Ciudad del Este"
                                                data={data['map_ciudad']}
                                                height="100%"
                                            />
                                        </LocalizedLink>
                                    </MapContainer>
                                    <Box mt="0.8rem" ml="1.6rem">
                                        <CountryText>Ciudad del Este</CountryText>
                                        <LocalizedLinkText
                                            to="https://goo.gl/maps/5d1aeBeeJDEWG1SW7"
                                            external
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Desktop>
                                                <p>World Trade Center Ciudad del Este</p>
                                            </Desktop>
                                            <Mobile>
                                                <StyledMobileAddress>
                                                    World Trade Center Ciudad del Este
                                                </StyledMobileAddress>
                                            </Mobile>
                                        </LocalizedLinkText>
                                    </Box>
                                </FullBox>
                            </GridLayout>
                        </FullBorder>
                    </Flex>
                    <ContinentHeader>
                        <Localize translate_text="_t_Caribbean_t_" />
                    </ContinentHeader>
                    <GridLayout>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="cayman">
                            <OfficeHeader>
                                <div>
                                    <img src={Cayman} alt="Cayman Islands - George Town" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_Cayman Islands_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/4bg5B7dkvUv5Pa11A"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in Cayman"
                                            data={data['map_cayman']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to="https://goo.gl/maps/4bg5B7dkvUv5Pa11A"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>Cayman Enterprise City,</p>
                                        <p>Strathvale House, 2nd Floor, 90N</p>
                                        <p>Church St, George Town, Cayman</p>
                                        <p>Islands</p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            Cayman Enterprise City, Strathvale House, 2nd Floor, 90
                                            N Church St, George Town, Cayman Islands
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="bvi">
                            <OfficeHeader>
                                <div>
                                    <img
                                        src={Bvi}
                                        width={'64px'}
                                        height={'64px'}
                                        alt="British Virgin Islands"
                                    />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    <Localize translate_text="_t_British Virgin Islands_t_" />
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to=" https://goo.gl/maps/nNq43TGQNZRRJgar5"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            alt="Deriv's office location map in British Virgin Islands"
                                            data={data['map_bvi']}
                                            height="100%"
                                        />
                                    </LocalizedLink>
                                </MapContainer>
                                <LocalizedLinkText
                                    to=" https://goo.gl/maps/nNq43TGQNZRRJgar5"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    mt="0.8rem"
                                    ml="1.6rem"
                                >
                                    <Desktop>
                                        <p>
                                            2nd Floor, Suite 2, Omar Hodge Building, 325 Waterfront
                                            Drive, Road Town, Tortola, VG 1110, British Virgin
                                            Islands
                                        </p>
                                    </Desktop>
                                    <Mobile>
                                        <StyledMobileAddress>
                                            2nd Floor, Suite 2, Omar Hodge Building, 325 Waterfront
                                            Drive, Road Town, Tortola, VG 1110, British Virgin
                                            Islands
                                        </StyledMobileAddress>
                                    </Mobile>
                                </LocalizedLinkText>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                    <Flex mt="30px" fd="column" id="vanuatu">
                        <ContinentHeader>
                            <Localize translate_text="_t_Oceania_t_" />
                        </ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Vanuatu} alt="Vanuatu - Port Vila" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                <Localize translate_text="_t_Vanuatu_t_" />
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex max_width="48.6rem">
                        <BorderBox>
                            <MapContainer>
                                <LocalizedLink
                                    to="https://goo.gl/maps/hvpgvBDJeED5YKDG6"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage
                                        alt="Deriv's office location map in Vanuatu"
                                        data={data['map_vanuatu']}
                                        height="100%"
                                    />
                                </LocalizedLink>
                            </MapContainer>
                            <LocalizedLinkText
                                to="https://goo.gl/maps/hvpgvBDJeED5YKDG6"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                                mt="0.8rem"
                                ml="1.6rem"
                            >
                                <Desktop>
                                    Yumiwork, Lolam building, Kumul Highway, Land # 11/OD22/021,
                                    Port Vila, Vanuatu.
                                </Desktop>
                                <Mobile>
                                    <StyledMobileAddress>
                                        Yumiwork, Lolam building, Kumul Highway, Land # 11/OD22/021,
                                        Port Vila, Vanuatu.
                                    </StyledMobileAddress>
                                </Mobile>
                            </LocalizedLinkText>
                        </BorderBox>
                    </Flex>
                </Content>
            </Container>
        </StyledSectionContainer>
    )
}

export default Offices
