import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledCard } from '../_layout-components/_team-card'
import { all_offices } from '../_model/_locations/_locations'
import device from 'themes/device'
import { SEO, SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'
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

const BackDrop = styled.section`
    background-color: var(--color-black);
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobile} {
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
    margin: 0;

    svg {
        margin-right: 8px;
    }
`
const StyledText = styled(Text)`
    font-size: 16px;

    @media ${device.laptop} {
        font-size: 14px;
    }
`
const CountryCard = ({ country_name, city_name, link, img_data, Icon }) => {
    return (
        <CountryCardWrapper to={link}>
            <QueryImage data={img_data} alt={city_name + localize('Office')} width="100%" />
            <div style={{ padding: '32px 32px 22px 32px' }}>
                <Header as="h5" size="var(--text-size-sm)">
                    {city_name}
                </Header>
                <Flex jc="unset" ai="center" mt="8px" mb="8px">
                    <StyledImg src={Icon} alt="" />
                    <StyledText weight="bold">{country_name}</StyledText>
                </Flex>
                <Flex ai="center" jc="flex-end">
                    <ChevronRight />
                </Flex>
            </div>
        </CountryCardWrapper>
    )
}

CountryCard.propTypes = {
    city_name: PropTypes.string,
    country_name: PropTypes.string,
    Icon: PropTypes.string,
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
        thumbnail_minsk: file(relativePath: { eq: "careers/thumbnail_minsk.jpg" }) {
            ...fadeIn
        }
        thumbnail_paris: file(relativePath: { eq: "careers/thumbnail_paris.jpg" }) {
            ...fadeIn
        }
        thumbnail_london: file(relativePath: { eq: "careers/thumbnail_london.jpg" }) {
            ...fadeIn
        }
        thumbnail_guernsey: file(relativePath: { eq: "careers/thumbnail_guernsey.jpg" }) {
            ...fadeIn
        }
    }
`

const Locations = () => {
    const images = useStaticQuery(query)

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
                <CssGrid
                    columns="repeat(3, 384px)"
                    row_gap="40px"
                    column_gap="24px"
                    laptop_columns="repeat(3, minmax(280px, 384px))"
                    laptop_margin="0 16px"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="minmax(300px, 384px)"
                    mobile_row_gap="37px"
                    style={{ marginTop: '0rem', justifyContent: 'center' }}
                    margin="0 16px"
                >
                    {all_offices.map((office) => (
                        <CountryCard
                            key={office.name}
                            Icon={office.flagIcon}
                            img_data={images[office.thumbnail]}
                            country_name={office.country}
                            city_name={office.display_name}
                            link={office.link}
                        />
                    ))}
                </CssGrid>
            </StyledSectionContainer>
        </Layout>
    )
}

export default WithIntl()(Locations)
