import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, Header, Text, Divider } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import FabioImage from 'images/common/fabio.png'
import FernandoImage from 'images/common/fernando.png'
import JoseImage from 'images/common/jose.png'
import ManikandanImage from 'images/common/manikandan.png'
import MustafijurImage from 'images/common/mustafijur.png'
import MugendaImage from 'images/common/paul-mugenda.png'
import VilcaImage from 'images/common/paul-vilca.png'
import TueloImage from 'images/common/tuelo.png'
import VipulImage from 'images/common/vipul.png'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
    }
`

const ClientCard = styled.article`
    width: 58.2rem;
    padding-top: 5.2rem;
    position: relative;
    overflow: hidden;

    @media ${device.tabletL} {
        padding: 4rem;
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

const ClientSlide = ({ quote, img_path, img_alt, name, location }) => (
    <Flex ai="center" height="unset">
        <ClientCard>
            <QuoteText as="blockquote">{quote}</QuoteText>
            <Divider width="28rem" color="grey-8" />
            <Flex p="1.7rem 0 0 0">
                <Flex ai="center" width="auto">
                    <ImageWrapper>
                        <img src={img_path} alt={img_alt} width="50" height="50" loading="lazy" />
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
    img_alt: PropTypes.string,
    img_path: PropTypes.string,
    location: PropTypes.node,
    name: PropTypes.string,
    quote: PropTypes.node,
}

const fabio = {
    name: 'Fábio Oliveira',
    location: <Localize translate_text="Kenya" />,
    img_path: FabioImage,
    quote: (
        <Localize translate_text="It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more." />
    ),
    index: 1,
}

const mugenda = {
    name: 'Paul Mugenda',
    location: <Localize translate_text="Kenya" />,
    img_path: MugendaImage,
    quote: (
        <Localize translate_text="The Deriv platform is fast, easy to navigate, and very user-friendly. It looks great and it’s packed with many appealing features. Deposits and withdrawals are easy. My favourite markets to trade on are the Crash and Boom indices on MT5." />
    ),
    index: 2,
}

const tuelo = {
    name: 'Tuelo Ronald Boitshwarelo',
    location: <Localize translate_text="Botswana" />,
    img_path: TueloImage,
    quote: (
        <Localize translate_text="What I like most is that my withdrawals are processed fast. This is the platform of the future: it offers more functionality as well as different ways to trade. No other broker has given me the same satisfaction as Deriv has. A great broker indeed." />
    ),
    index: 3,
}

const mustafijur = {
    name: 'Mustafijur Rahman',
    location: <Localize translate_text="Bangladesh" />,
    img_path: MustafijurImage,
    quote: (
        <Localize translate_text="The Deriv platform is user-friendly and making deposits and withdrawals is easy." />
    ),
    index: 4,
}

const vipul = {
    name: 'Vipul Kumar',
    location: <Localize translate_text="India" />,
    img_path: VipulImage,
    quote: (
        <Localize translate_text="The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks." />
    ),
    index: 5,
}

const manikandan = {
    name: 'Manikandan',
    location: <Localize translate_text="India" />,
    img_path: ManikandanImage,
    quote: (
        <Localize translate_text="I have more than a decade’s worth of online trading experience, and I think that Deriv is one of the best brokers in the world. I like the new features on the Deriv platform. Being able to trade on weekends on volatility indices is a plus." />
    ),
    index: 6,
}

const jose = {
    name: 'José Miguel Santos Martinez',
    location: <Localize translate_text="Dominican Republic" />,
    img_path: JoseImage,
    quote: (
        <Localize translate_text="The Deriv platform is very attractive, intuitive, and user-friendly, and it’s equipped with all the tools I need." />
    ),
    index: 7,
}

const vilca = {
    name: 'Paul Vilca',
    location: <Localize translate_text="Peru" />,
    img_path: VilcaImage,
    quote: (
        <Localize translate_text="I like using the new Deriv platform because it’s so intuitive; I don’t need any tutorials to learn how to use it. The dark mode option on DTrader is very pleasing to my eyes. The ability to set my trade duration to ticks, seconds, and minutes is something I don’t see on other platforms." />
    ),
    index: 8,
}

const fernando = {
    name: 'Fernando Aguilar',
    location: <Localize translate_text="Bolivia" />,
    img_path: FernandoImage,
    quote: (
        <Localize translate_text="I’ve been trading on Deriv for a while now, and I think it’s very appealing to traders who are just starting out. It’s easy to understand and all my trading information is very accessible. There are a variety of assets, trade contracts, chart types, and indicators for technical analysis." />
    ),
    index: 9,
}

const our_client_slides = [
    fabio,
    mugenda,
    tuelo,
    mustafijur,
    vipul,
    manikandan,
    jose,
    vilca,
    fernando,
]

const WhatOurClientsSay = () => {
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
        <>
            <StyledSection>
                <Container direction="column">
                    <Header align="center" as="h3" type="section-title">
                        {localize('What our clients say about Deriv')}
                    </Header>
                </Container>
                <Carousel has_autoplay autoplay_interval={4000} {...settings}>
                    {our_client_slides.map((trader, idx) => (
                        <div key={idx}>
                            <ClientSlide
                                key={trader.name}
                                quote={trader.quote}
                                name={trader.name}
                                location={trader.location}
                                img_path={trader.img_path}
                                img_alt={trader.name + localize(" - Deriv's Client")}
                            />
                        </div>
                    ))}
                </Carousel>
            </StyledSection>
        </>
    )
}

export default WhatOurClientsSay
