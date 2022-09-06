import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { StyledCard } from '../_layout-components/_team-card'
import { allContinents } from '../_model/_locations/_locations'
import device from 'themes/device'
import { SEO, SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import { Header, Text, Tabs, QueryImage } from 'components/elements'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

const meta_attributes = {
    og_title: localize('Explore our office locations | Deriv'),
    og_description: localize(
        'Discover career opportunities at Deriv across our office locations around the globe.',
    ),
}

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
`
const StyledTabs = styled(Tabs)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 912px;
    height: 56px;
`
const BackDrop = styled.section`
    background-color: var(--color-black);
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileS} {
        padding: 80px 0;
        align-items: center;
    }

    ${Header} {
        padding-bottom: 16px;
    }
    ${Text} {
        max-width: 79.2rem;
        text-align: center;
    }
`
const StyledSectionContainer = styled(SectionContainer)`
    margin: 0 16px;
    max-width: 100%;
    @media ${device.tablet} {
        padding: 40px 0;
        margin: 0;
    }
`
const StyledImg = styled.img`
    margin-right: 8px;
`

const Hero = () => (
    <BackDrop>
        <Container fd="column">
            <Header as="h1" size="var(--text-size-xl)" align="center" color="white">
                Our locations
            </Header>
            <Text size="var(--text-size-sm)" color="white">
                From IT to marketing to data analytics, we offer opportunities for people of almost
                every skill set across our locations around the globe. As we expand, our culture of
                collaboration gives our teams the opportunity to enjoy a diverse, dynamic, and
                rewarding career experience.
            </Text>
        </Container>
    </BackDrop>
)

const CountryCardWrapper = styled(StyledCard)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: 100%;
    max-width: 384px;
    height: 356px;
    background: #ffffff;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.08), 0 24px 24px rgba(0, 0, 0, 0.08);
    gap: 40px;
    border-radius: 4px;

    svg {
        margin-right: 8px;
    }
    @media ${device.mobileS} {
        max-width: 328px;
        height: 304px;
    }

    @media ${device.laptopS} and ${device.laptop} {
        height: 320px;
    }
`
const StyledText = styled(Text)`
    font-size: 16px;

    @media ${device.laptop} {
        font-size: 14px;
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 24px;
    position: absolute;
    width: 100%;
    max-width: 384px;
    bottom: 0;
    @media ${device.mobileM} {
        gap: 8.2px;
    }
    @media ${device.mobileS} {
        gap: 8px;
    }
`
type CountryCardProps = {
    country_name: string
    continent: string
    city_name: string
    thumbnail_name: string
    link: string
    img_alt: string
    img_data: ImageDataLike
    Icon: string
}
const StyledFrame = styled(Flex)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    height: 36px;

    @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        gap: 13.67px;
        height: 26px;
    }

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    justify-content: space-between;
`
const StyledHeader = styled(Text)`
    height: 36px;
    font-size: 24px;
    line-height: 36px;

    @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        width: auto;
        height: 26px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }
`
const StyledBox = styled(Flex)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    gap: 8px;
    width: auto;
    height: 24px;
    border: 1px solid #999999;
    border-radius: 100px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
const StyledName = styled(Text)`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const CountryCard = ({
    country_name,
    continent,
    city_name,
    thumbnail_name,
    link,
    img_alt,
    img_data,
    Icon,
}: CountryCardProps) => {
    return (
        <CountryCardWrapper to={link}>
            <QueryImage data={img_data} alt={img_alt} width="100%" />
            <StyledDiv>
                <StyledFrame>
                    <StyledHeader weight="bold">{city_name && thumbnail_name}</StyledHeader>
                    <StyledBox>
                        <StyledName weight="bold">{continent}</StyledName>
                    </StyledBox>
                </StyledFrame>
                <Flex jc="unset" ai="center" mt="8px" mb="8px">
                    <StyledImg src={Icon} alt="" />
                    <StyledText>{country_name}</StyledText>
                </Flex>
                <Flex ai="center" jc="flex-end" width="100%">
                    <ChevronRight />
                </Flex>
            </StyledDiv>
        </CountryCardWrapper>
    )
}

CountryCard.propTypes = {
    city_name: PropTypes.string,
    country_name: PropTypes.string,
    Icon: PropTypes.string,
    img_alt: PropTypes.string,
    img_data: PropTypes.object,
    link: PropTypes.string,
    open_positions: PropTypes.number,
}

const query = graphql`
    query {
        thumbnail_cyberjaya: file(relativePath: { eq: "careers/thumbnail_cyberjaya.png" }) {
            ...fadeIn
        }
        thumbnail_ciudad: file(relativePath: { eq: "careers/thumbnail_ciudad.png" }) {
            ...fadeIn
        }
        thumbnail_dubai: file(relativePath: { eq: "careers/thumbnail_dubai.png" }) {
            ...fadeIn
        }
        thumbnail_georgetown: file(relativePath: { eq: "careers/thumbnail_georgetown.png" }) {
            ...fadeIn
        }
        thumbnail_labuan: file(relativePath: { eq: "careers/thumbnail_labuan.png" }) {
            ...fadeIn
        }
        thumbnail_malta: file(relativePath: { eq: "careers/thumbnail_malta.png" }) {
            ...fadeIn
        }
        thumbnail_asuncion: file(relativePath: { eq: "careers/thumbnail_asuncion.png" }) {
            ...fadeIn
        }
        thumbnail_ipoh: file(relativePath: { eq: "careers/thumbnail_ipoh.png" }) {
            ...fadeIn
        }
        thumbnail_melaka: file(relativePath: { eq: "careers/thumbnail_melaka.png" }) {
            ...fadeIn
        }
        thumbnail_cyprus: file(relativePath: { eq: "careers/thumbnail_cyprus.png" }) {
            ...fadeIn
        }
        thumbnail_rwanda: file(relativePath: { eq: "careers/thumbnail_rwanda.jpg" }) {
            ...fadeIn
        }
        thumbnail_berlin: file(relativePath: { eq: "careers/thumbnail_berlin.jpg" }) {
            ...fadeIn
        }
        thumbnail_minsk: file(relativePath: { eq: "careers/thumbnail_minsk.png" }) {
            ...fadeIn
        }
        thumbnail_paris: file(relativePath: { eq: "careers/thumbnail_paris.jpg" }) {
            ...fadeIn
        }
        thumbnail_guernsey: file(relativePath: { eq: "careers/thumbnail_guernsey.jpg" }) {
            ...fadeIn
        }
        thumbnail_vanuatu: file(relativePath: { eq: "careers/thumbnail_vanuatu.png" }) {
            ...fadeIn
        }
        thumbnail_jordan: file(relativePath: { eq: "careers/thumbnail_jordan.jpg" }) {
            ...fadeIn
        }
        thumbnail_singapore: file(relativePath: { eq: "careers/thumbnail_singapore.png" }) {
            ...fadeIn
        }
    }
`

const Locations = () => {
    const images = useStaticQuery(query)

    const continents = Object.keys(allContinents)

    const changeCase = (continentName) => {
        return continentName.charAt(0).toUpperCase() + continentName.slice(1)
    }

    const formatContinentName = (continent) => {
        return continent
            .split('_')
            .filter((continentName) => continentName.length > 0)
            .map((continentName) => changeCase(continentName))
            .join(' ')
    }

    return (
        <Layout type="careers" margin_top={7}>
            <SEO
                title={localize('Explore our office locations | Deriv')}
                description={localize(
                    'Discover career opportunities at Deriv across our office locations around the globe.',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero />
            <StyledSectionContainer direction="column" padding="80px 16px">
                <Header
                    as="h2"
                    align="center"
                    padding="0 0 35px"
                    size={'var(--text-size-header-1)'}
                >
                    Explore our locations
                </Header>
                <StyledTabs
                    tab_list={[
                        'all',
                        'europe',
                        'asia',
                        'middle_east',
                        'eastern_europe',
                        'africa',
                        'latam',
                        'caribbean',
                    ]}
                    jc_tablet="start"
                    jc_mobileL="start"
                    mobile_font_size={16}
                    line_divider_length="unset"
                    starting_index={1}
                >
                    {continents.map((continent) => {
                        return (
                            <Tabs.Panel
                                label={formatContinentName(continent)}
                                key={continent}
                                width="79px"
                                height="56px"
                                gap="8px"
                            >
                                <CssGrid
                                    columns="repeat(3, 384px)"
                                    row_gap="40px"
                                    column_gap="24px"
                                    laptop_columns="repeat(3, minmax(280px, 384px))"
                                    laptop_margin="0 16px"
                                    tablet_columns="repeat(2, 1fr)"
                                    mobile_columns="minmax(300px, 384px)"
                                    mobile_row_gap="37px"
                                    style={{ justifyContent: 'center', marginTop: '80px' }}
                                    mobileS={{ mt: '40px' }}
                                    margin="0 16px"
                                >
                                    {allContinents[continent].map((office) => (
                                        <CountryCard
                                            key={office.name}
                                            Icon={office.flagIcon}
                                            img_data={images[office.thumbnail]}
                                            country_name={office.country}
                                            continent={office.display_continent}
                                            city_name={office.display_name}
                                            thumbnail_name={office.display_thumbnail_name}
                                            link={office.link}
                                            img_alt={office.img_alt}
                                        />
                                    ))}
                                </CssGrid>
                            </Tabs.Panel>
                        )
                    })}
                </StyledTabs>
            </StyledSectionContainer>
        </Layout>
    )
}

export default WithIntl()(Locations)
