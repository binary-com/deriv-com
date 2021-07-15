import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel, Divider, Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'

const ClientCard = styled.article`
    width: 58.2rem;
    padding-top: 5.2rem;
    position: relative;
    overflow: hidden;

    @media ${device.tabletL} {
        padding: 4rem 4rem 0;
    }
`

const QuoteText = styled(Text)`
    text-align: left;
    padding-bottom: 3.2rem;
    z-index: 10;
    position: relative;

    &::after {
        content: '“';
        position: absolute;
        font-size: 24rem;
        z-index: -1;
        left: -1rem;
        top: -10.6rem;
        color: var(--color-grey-8);
    }

    @media ${device.tabletL} {
        padding-bottom: 0.5rem;
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
        max-width: 27rem;
    }
`

const SmallText = styled(Text)`
    font-size: var(--text-size-xs);
    opacity: 0.5;

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const Name = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const ImageWrapper = styled.div`
    width: 50px;
    margin-right: 1.6rem;

    img {
        width: 50px;
    }
`

const ClientSlide = ({ quote, img, img_alt, name, location }) => (
    <Flex ai="center" height="unset">
        <ClientCard>
            <QuoteText as="blockquote">{quote}</QuoteText>
            <Divider width="28rem" color="grey-8" />
            <Flex p="1.7rem 0 0 0">
                <Flex ai="center" width="auto">
                    <ImageWrapper>
                        <QueryImage data={img} width="50" height="50" alt={img_alt} />
                    </ImageWrapper>
                </Flex>
                <figure>
                    <Name weight="bold">{name}</Name>
                    <SmallText>{location}</SmallText>
                </figure>
            </Flex>
        </ClientCard>
    </Flex>
)

ClientSlide.propTypes = {
    img: PropTypes.object,
    img_alt: PropTypes.string,
    location: PropTypes.node,
    name: PropTypes.string,
    quote: PropTypes.node,
}

const our_client_slides = [
    {
        id: 'fabio',
        name: 'Fábio Oliveira',
        location: <Localize translate_text="Kenya" />,
        quote: (
            <Localize translate_text="It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more." />
        ),
    },
    {
        id: 'mugenda',
        name: 'Paul Mugenda',
        location: <Localize translate_text="Kenya" />,
        quote: (
            <Localize translate_text="The Deriv platform is fast, easy to navigate, and very user-friendly. It looks great and it’s packed with many appealing features. Deposits and withdrawals are easy. My favourite markets to trade on are the Crash and Boom indices on MT5." />
        ),
    },
    {
        id: 'tuelo',
        name: 'Tuelo Ronald Boitshwarelo',
        location: <Localize translate_text="Botswana" />,
        quote: (
            <Localize translate_text="What I like most is that my withdrawals are processed fast. This is the platform of the future: it offers more functionality as well as different ways to trade. No other broker has given me the same satisfaction as Deriv has. A great broker indeed." />
        ),
    },
    {
        id: 'mustafijur',
        name: 'Mustafijur Rahman',
        location: <Localize translate_text="Bangladesh" />,
        quote: (
            <Localize translate_text="The Deriv platform is user-friendly and making deposits and withdrawals is easy." />
        ),
    },
    {
        id: 'vipul',
        name: 'Vipul Kumar',
        location: <Localize translate_text="India" />,
        quote: (
            <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
        ),
    },
    {
        id: 'manikandan',
        name: 'Manikandan',
        location: <Localize translate_text="India" />,
        quote: (
            <Localize translate_text="I have more than a decade’s worth of online trading experience, and I think that Deriv is one of the best brokers in the world. I like the new features on the Deriv platform. Being able to trade on weekends on volatility indices is a plus." />
        ),
    },
    {
        id: 'jose',
        name: 'José Miguel Santos Martinez',
        location: <Localize translate_text="Dominican Republic" />,
        quote: (
            <Localize translate_text="The Deriv platform is very attractive, intuitive, and user-friendly, and it’s equipped with all the tools I need." />
        ),
    },
    {
        id: 'vilca',
        name: 'Paul Vilca',
        location: <Localize translate_text="Peru" />,
        quote: (
            <Localize translate_text="I like using the new Deriv platform because it’s so intuitive; I don’t need any tutorials to learn how to use it. The dark mode option on DTrader is very pleasing to my eyes. The ability to set my trade duration to ticks, seconds, and minutes is something I don’t see on other platforms." />
        ),
    },
    {
        id: 'fernando',
        name: 'Fernando Aguilar',
        location: <Localize translate_text="Bolivia" />,
        quote: (
            <Localize translate_text="I’ve been trading on Deriv for a while now, and I think it’s very appealing to traders who are just starting out. It’s easy to understand and all my trading information is very accessible. There are a variety of assets, trade contracts, chart types, and indicators for technical analysis." />
        ),
    },
]

const query = graphql`
    query {
        fabio: file(relativePath: { eq: "fabio.png" }) {
            ...fadeIn
        }
        mugenda: file(relativePath: { eq: "paul-mugenda.png" }) {
            ...fadeIn
        }
        tuelo: file(relativePath: { eq: "tuelo.png" }) {
            ...fadeIn
        }
        mustafijur: file(relativePath: { eq: "mustafijur.png" }) {
            ...fadeIn
        }
        vipul: file(relativePath: { eq: "vipul.png" }) {
            ...fadeIn
        }
        manikandan: file(relativePath: { eq: "manikandan.png" }) {
            ...fadeIn
        }
        jose: file(relativePath: { eq: "jose.png" }) {
            ...fadeIn
        }
        vilca: file(relativePath: { eq: "paul-vilca.png" }) {
            ...fadeIn
        }
        fernando: file(relativePath: { eq: "fernando.png" }) {
            ...fadeIn
        }
    }
`

const WhatOurClientsSay = () => {
    const data = useStaticQuery(query)
    const settings = {
        options: {
            loop: true,
        },
        container_style: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '100%',
            paddingLeft: '1rem',
            position: 'relative',
        },
        chevron_style: {
            chevron_color: 'black',
        },
    }

    return (
        <SectionContainer padding='5rem 0 0'>
            <Container direction="column">
                <Header align="center" as="h3" type="section-title">
                    {localize('What our clients say about Deriv')}
                </Header>
            </Container>
            <Carousel has_autoplay autoplay_interval={6000} {...settings}>
                {our_client_slides.map((trader, idx) => (
                    <div key={idx}>
                        <ClientSlide
                            key={trader.name}
                            quote={trader.quote}
                            name={trader.name}
                            location={trader.location}
                            img={data[trader.id]}
                            img_alt={trader.name + localize(" - Deriv's Client")}
                        />
                    </div>
                ))}
            </Carousel>
        </SectionContainer>
    )
}

export default WhatOurClientsSay
