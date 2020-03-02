import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cyberjaya, malta, dubai, labuan, asuncion } from './_locations'
import { SEO, SectionContainer, Container, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, LocalizedLink } from 'components/localization'
import { Header, Text, Image } from 'components/elements'
import MalaysiaFlagIcon from 'images/svg/flag_malaysia.svg'
import ParaguayFlagIcon from 'images/svg/flag_paraguay.svg'
import UAEFlagIcon from 'images/svg/flag_uae.svg'
import MaltaFlagIcon from 'images/svg/flag_malta.svg'
import Chevron from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
    width: 16px;
    height: 16px;

    g {
        g {
            fill: var(--color-red);
        }
    }
`

const BackDrop = styled.section`
    background-color: var(--color-black);
    padding: 12rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Header} {
        padding-bottom: 5.4rem;
    }
    ${Text} {
        max-width: 86.2rem;
        text-align: center;
    }
`

const Hero = () => (
    <BackDrop>
        <Header as="h1" font_size="var(--text-size-xl)" align="center" color="white">
            {localize('Truly global')}
        </Header>
        <Text size="var(--text-size-sm)" color="white">
            {localize(
                'We are in 5 cities in 4 countries. When you join Deriv, here are some of the great places around the globe you’ll get to experience.',
            )}
        </Text>
    </BackDrop>
)

const CountryCardWrapper = styled(LocalizedLink)`
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    max-width: 38.4rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.3s;

    svg {
        margin-right: 8px;
    }
    &:hover {
        cursor: pointer;
        transform: translateY(-1.1rem) scale(1.02);
    }
`

const CardGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6rem 2.4rem;
    margin-top: 8rem;
`

const CountryCard = ({ country_name, city_name, link, img, Icon }) => (
    <CountryCardWrapper to={link}>
        <Image img_name={img} width="100%" />
        <div style={{ padding: '32px' }}>
            <Header as="h5" font_size="var(--text-size-sm)">
                {city_name}
            </Header>
            <Flex jc="unset" ai="center" mt="8px" mb="8px">
                <Icon />
                <Text weight="bold">{country_name}</Text>
            </Flex>
            <Flex ai="center" jc="space-between">
                <Text>2 Open positions</Text>
                <ChevronRight />
            </Flex>
        </div>
    </CountryCardWrapper>
)

CountryCard.propTypes = {
    city_name: PropTypes.string,
    country_name: PropTypes.string,
    Icon: PropTypes.func,
    img: PropTypes.string,
    link: PropTypes.string,
}

const Locations = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Locations')} />
        <Hero />
        <Container direction="column">
            <SectionContainer>
                <Header as="h2" align="center" font_size={'var(--text-size-header-1)'}>
                    {localize('Where we work')}
                </Header>
                <CardGrid>
                    <CountryCard
                        Icon={ParaguayFlagIcon}
                        img={asuncion.hero_img}
                        country_name={asuncion.country}
                        city_name={asuncion.display_name}
                        link={asuncion.link}
                    />
                    <CountryCard
                        Icon={MalaysiaFlagIcon}
                        img={cyberjaya.hero_img}
                        country_name={cyberjaya.country}
                        city_name={cyberjaya.display_name}
                        link={cyberjaya.link}
                    />
                    <CountryCard
                        Icon={UAEFlagIcon}
                        img={dubai.hero_img}
                        country_name={dubai.country}
                        city_name={dubai.display_name}
                        link={dubai.link}
                    />
                    <CountryCard
                        Icon={MalaysiaFlagIcon}
                        img={labuan.hero_img}
                        country_name={labuan.country}
                        city_name={labuan.display_name}
                        link={labuan.link}
                    />
                    <CountryCard
                        Icon={MaltaFlagIcon}
                        img={malta.hero_img}
                        country_name={malta.country}
                        city_name={malta.display_name}
                        link={malta.link}
                    />
                </CardGrid>
            </SectionContainer>
        </Container>
    </Layout>
)

export default WithIntl()(Locations)
