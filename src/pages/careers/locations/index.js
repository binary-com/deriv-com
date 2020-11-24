import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledCard } from '../_layout-components/_team-card'
import {
    cyberjaya,
    malta,
    dubai,
    labuan,
    asuncion,
    ipoh,
    melaka,
    cyprus,
    rwanda,
} from '../_model/_locations/_locations'
import { SEO, SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'
import MalaysiaFlagIcon from 'images/svg/flag_malaysia.svg'
import ParaguayFlagIcon from 'images/svg/flag_paraguay.svg'
import UAEFlagIcon from 'images/svg/flag_uae.svg'
import MaltaFlagIcon from 'images/svg/flag_malta.svg'
import CyprusFlagIcon from 'images/svg/flag_cyprus.svg'
import RwandaFlagIcon from 'images/svg/flag_rwanda.svg'
import { ReactComponent as Chevron } from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
`

const BackDrop = styled.section`
    background-color: var(--color-black);
    padding: 12rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Header} {
        padding-bottom: 4rem;
    }
    ${Text} {
        max-width: 79.2rem;
        text-align: center;
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
    max-width: 38.4rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    svg {
        margin-right: 8px;
    }
`

const CountryCard = ({ country_name, city_name, link, img_data, Icon }) => {
    return (
        <CountryCardWrapper to={link}>
            <QueryImage data={img_data} alt={city_name + localize('Office')} width="100%" />
            <div style={{ padding: '32px' }}>
                <Header as="h5" size="var(--text-size-sm)">
                    {city_name}
                </Header>
                <Flex jc="unset" ai="center" mt="8px" mb="8px">
                    <StyledImg src={Icon} alt="icon" />
                    <Text weight="bold">{country_name}</Text>
                </Flex>
                <Flex ai="center" jc="flex-end">
                    {/* <Text>
                        {open_positions} {'open positions'}
                    </Text> */}
                    <ChevronRight />
                </Flex>
            </div>
        </CountryCardWrapper>
    )
}

CountryCard.propTypes = {
    city_name: PropTypes.string,
    country_name: PropTypes.string,
    Icon: PropTypes.func,
    img_data: PropTypes.object,
    link: PropTypes.string,
    open_positions: PropTypes.number,
}

const query = graphql`
    query {
        thumbnail_cyberjaya: file(relativePath: { eq: "careers/thumbnail_cyberjaya.png" }) {
            ...fadeIn
        }
        thumbnail_dubai: file(relativePath: { eq: "careers/thumbnail_dubai.png" }) {
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
    }
`

const Locations = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" margin_top="7rem">
            <SEO
                title={localize('Explore our office locations | Deriv')}
                description={localize(
                    'Discover career opportunities at Deriv across our office locations around the globe.',
                )}
            />
            <Hero />
            <Container direction="column">
                <SectionContainer>
                    <Header as="h2" align="center" size={'var(--text-size-header-1)'}>
                        Explore our locations
                    </Header>
                    <CssGrid
                        columns="repeat(3, 38.4rem)"
                        row_gap="6rem"
                        column_gap="2.4rem"
                        laptop_columns="repeat(2, 38.4rem)"
                        tablet_columns="repeat(2, 38.4rem)"
                        mobile_columns="38.4rem"
                        style={{ marginTop: '8rem', justifyContent: 'center' }}
                    >
                        <CountryCard
                            Icon={MaltaFlagIcon}
                            img_data={images[malta.thumbnail]}
                            country_name={malta.country}
                            city_name={malta.display_name}
                            link={malta.link}
                        />
                        <CountryCard
                            Icon={UAEFlagIcon}
                            img_data={images[dubai.thumbnail]}
                            country_name={dubai.country}
                            city_name={dubai.display_name}
                            link={dubai.link}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[cyberjaya.thumbnail]}
                            country_name={cyberjaya.country}
                            city_name={cyberjaya.display_name}
                            link={cyberjaya.link}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[labuan.thumbnail]}
                            country_name={labuan.country}
                            city_name={labuan.display_name}
                            link={labuan.link}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[ipoh.thumbnail]}
                            country_name={ipoh.country}
                            city_name={ipoh.display_name}
                            link={ipoh.link}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[melaka.thumbnail]}
                            country_name={melaka.country}
                            city_name={melaka.display_name}
                            link={melaka.link}
                        />
                        <CountryCard
                            Icon={ParaguayFlagIcon}
                            img_data={images[asuncion.thumbnail]}
                            country_name={asuncion.country}
                            city_name={asuncion.display_name}
                            link={asuncion.link}
                        />
                        <CountryCard
                            Icon={CyprusFlagIcon}
                            img_data={images[cyprus.thumbnail]}
                            country_name={cyprus.country}
                            city_name={'Limassol'}
                            link={cyprus.link}
                        />
                        <CountryCard
                            Icon={RwandaFlagIcon}
                            img_data={images[rwanda.thumbnail]}
                            country_name={rwanda.country}
                            city_name={'Kigali'}
                            link={rwanda.link}
                        />
                    </CssGrid>
                </SectionContainer>
            </Container>
        </Layout>
    )
}

export default WithIntl()(Locations)
