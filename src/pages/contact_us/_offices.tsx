import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Header, QueryImage, Text, LocalizedLinkText } from 'components/elements'
import { SectionContainer, Container, Flex, Box, Desktop, Mobile } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import France from 'images/svg/contact/france.svg'
import Malta from 'images/svg/contact/malta.svg'
import Guernsey from 'images/svg/contact/guernsey.svg'
import Dubai from 'images/svg/contact/dubai.svg'
import Paraguay from 'images/svg/contact/paraguay.svg'
import Malaysia from 'images/svg/contact/malaysia.svg'
import Cyprus from 'images/svg/contact/cyprus.svg'
import Rwanda from 'images/svg/contact/rwanda.svg'
import Belarus from 'images/svg/contact/belarus.svg'

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
        map_france: file(relativePath: { eq: "maps/map-france.jpg" }) {
            ...fadeIn
        }
        map_cyberjaya: file(relativePath: { eq: "maps/map-cyberjaya.png" }) {
            ...fadeIn
        }
        map_guernsey: file(relativePath: { eq: "maps/map-guernsey.jpg" }) {
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
                        {localize('Our offices')}
                    </ResHeader>
                    <ContinentHeader>{localize('EUROPE')}</ContinentHeader>
                    <GridLayout>
                        <Flex mt="30px" fd="column" max_width="48.6rem" id="france">
                            <OfficeHeader>
                                <div>
                                    <img src={France} alt="France - Eiffel Tower" />
                                </div>
                                <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                    {localize('France')}
                                </Header>
                            </OfficeHeader>

                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/5xvdS7tvZM7kKkDK8"
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
                                    to="https://goo.gl/maps/5xvdS7tvZM7kKkDK8"
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
                                    {localize('Malta')}
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
                                    {localize('Cyprus')}
                                </Header>
                            </OfficeHeader>
                            <BorderBox>
                                <MapContainer>
                                    <LocalizedLink
                                        to="https://goo.gl/maps/j7fs9r73dfwQtHgj8"
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
                                    to="https://goo.gl/maps/j7fs9r73dfwQtHgj8"
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
                                    {localize('Guernsey')}
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
                    </GridLayout>
                    <Flex fd="column" mt="30px" id="malaysia">
                        <ContinentHeader>{localize('ASIA')}</ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Malaysia} alt="Malaysia - Petronas Twin Towers" />
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
                    <Flex mt="30px" mb="30px" fd="column" id="dubai">
                        <ContinentHeader>{localize('MIDDLE EAST')}</ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Dubai} alt="Dubai - Burj Al Arab" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                {localize('Dubai')}
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex max_width="48.6rem">
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
                    <Flex mt="30px" fd="column" id="belarus">
                        <ContinentHeader>{localize('EASTERN EUROPE')}</ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Belarus} alt="Belarus - National Library" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                {localize('Belarus')}
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex mt="30px" fd="column" max_width="48.6rem">
                        <BorderBox>
                            <MapContainer>
                                <LocalizedLink
                                    to="https://yandex.com/maps/-/CCUeZJdAKA"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage
                                        alt="Deriv's office location map in Belarus"
                                        data={data['map_belarus_contact']}
                                        height="100%"
                                    />
                                </LocalizedLink>
                            </MapContainer>
                            <LocalizedLinkText
                                to="https://yandex.com/maps/-/CCUeZJdAKA"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                                mt="0.8rem"
                                ml="1.6rem"
                            >
                                <Desktop>
                                    <p>Level 2, 25/1-3 Vera Khoruzhey</p>
                                    <p>Street, Minsk 220123</p>
                                </Desktop>
                                <Mobile>
                                    <StyledMobileAddress>
                                        Level 2, 25/1-3 Vera Khoruzhey Street, Minsk 220123
                                    </StyledMobileAddress>
                                </Mobile>
                            </LocalizedLinkText>
                        </BorderBox>
                    </Flex>
                    <Flex mt="30px" fd="column" id="rwanda">
                        <ContinentHeader>{localize('AFRICA')}</ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Rwanda} alt="Rwanda - Kigali Convention Center" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                {localize('Rwanda')}
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex mt="30px" fd="column" max_width="48.6rem">
                        <BorderBox>
                            <MapContainer>
                                <LocalizedLink
                                    to="https://goo.gl/maps/dy3BPr2y29usir648"
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
                                to="https://goo.gl/maps/dy3BPr2y29usir648"
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

                    <Flex mt="30px" fd="column" id="paraguay">
                        <ContinentHeader>{localize('LATIN AMERICA')}</ContinentHeader>
                        <OfficeHeader>
                            <div>
                                <img src={Paraguay} alt="Paraguay - National Pantheon of Heroes" />
                            </div>
                            <Header as="h4" type="sub-section-title" mt="0.8rem" mb="1.6rem">
                                {localize('Paraguay')}
                            </Header>
                        </OfficeHeader>
                    </Flex>
                    <Flex max_width="48.6rem">
                        <BorderBox>
                            <MapContainer>
                                <LocalizedLink
                                    to="https://goo.gl/maps/ci85LgJcyNj97uDa7"
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage
                                        alt="Deriv's office location map in Paraguay"
                                        data={data['map_paraguay']}
                                        height="100%"
                                    />
                                </LocalizedLink>
                            </MapContainer>
                            <LocalizedLinkText
                                to="https://goo.gl/maps/ci85LgJcyNj97uDa7"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                                mt="0.8rem"
                                ml="1.6rem"
                            >
                                <Desktop>
                                    <p>Edificio Atrium, Piso 2,</p>
                                    <p>Guido Spano Esq. Doctor Morra,</p>
                                    <p>Asunción 1849</p>
                                </Desktop>
                                <Mobile>
                                    <StyledMobileAddress>
                                        Edificio Atrium, Piso 2, Guido Spano Esq. Doctor Morra,
                                        Asunción 1849
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
