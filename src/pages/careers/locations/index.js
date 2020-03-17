import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { getPositionsByLocation } from '../_controller/_teams'
import { StyledCard } from '../_layout-components/_team-card'
import { cyberjaya, malta, dubai, labuan, asuncion } from '../_model/_locations/_locations'
import { SEO, SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'
import MalaysiaFlagIcon from 'images/svg/flag_malaysia.svg'
import ParaguayFlagIcon from 'images/svg/flag_paraguay.svg'
import UAEFlagIcon from 'images/svg/flag_uae.svg'
import MaltaFlagIcon from 'images/svg/flag_malta.svg'
import Chevron from 'images/svg/carousel-chevron.svg'

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

const Hero = () => (
    <BackDrop>
        <Header as="h1" font_size="var(--text-size-xl)" align="center" color="white">
            Our locations
        </Header>
        <Text size="var(--text-size-sm)" color="white">
            From IT to marketing to data analytics, we offer opportunities for people of almost
            every skill set across our locations around the globe. As we expand, our culture of
            collaboration gives our teams the opportunity to enjoy a diverse, dynamic, and rewarding
            career experience.
        </Text>
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

const CountryCard = ({ open_positions, country_name, city_name, link, img_data, Icon }) => {
    return (
        <CountryCardWrapper to={link}>
            <QueryImage data={img_data} width="100%" />
            <div style={{ padding: '32px' }}>
                <Header as="h5" font_size="var(--text-size-sm)">
                    {city_name}
                </Header>
                <Flex jc="unset" ai="center" mt="8px" mb="8px">
                    <Icon />
                    <Text weight="bold">{country_name}</Text>
                </Flex>
                <Flex ai="center" jc="space-between">
                    <Text>
                        {open_positions} {'open positions'}
                    </Text>
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
    }
`

const Locations = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={'Locations'} />
            <Hero />
            <Container direction="column">
                <SectionContainer>
                    <Header as="h2" align="center" font_size={'var(--text-size-header-1)'}>
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
                            Icon={ParaguayFlagIcon}
                            img_data={images[asuncion.thumbnail]}
                            country_name={asuncion.country}
                            city_name={asuncion.display_name}
                            open_positions={getPositionsByLocation(asuncion.name).length}
                            link={asuncion.link}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[cyberjaya.thumbnail]}
                            country_name={cyberjaya.country}
                            city_name={cyberjaya.display_name}
                            link={cyberjaya.link}
                            open_positions={getPositionsByLocation(cyberjaya.name).length}
                        />
                        <CountryCard
                            Icon={UAEFlagIcon}
                            img_data={images[dubai.thumbnail]}
                            country_name={dubai.country}
                            city_name={dubai.display_name}
                            link={dubai.link}
                            open_positions={getPositionsByLocation(dubai.name).length}
                        />
                        <CountryCard
                            Icon={MalaysiaFlagIcon}
                            img_data={images[labuan.thumbnail]}
                            country_name={labuan.country}
                            city_name={labuan.display_name}
                            link={labuan.link}
                            open_positions={getPositionsByLocation(labuan.name).length}
                        />
                        <CountryCard
                            Icon={MaltaFlagIcon}
                            img_data={images[malta.thumbnail]}
                            country_name={malta.country}
                            city_name={malta.display_name}
                            link={malta.link}
                            open_positions={getPositionsByLocation(malta.name).length}
                        />
                    </CssGrid>
                </SectionContainer>
            </Container>
        </Layout>
    )
}

export default WithIntl()(Locations)
