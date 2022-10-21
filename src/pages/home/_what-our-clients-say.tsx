import React, { ReactElement, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Carousel from './_testimonial-carousel'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import Quote from 'images/svg/testimonials/quote.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledContainer = styled.div`
    background: linear-gradient(76.83deg, #b1c9df 4.59%, #eaf4f5 66.44%);
    width: 100%;
    height: fit-content;

    @media ${device.tabletL} {
        background: linear-gradient(76.48deg, #8aadc5 3.41%, #d3e0e9 64.21%);
    }
`

const ClientContainer = styled(Container)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
`

const ClientFlex = styled(Flex)`
    max-width: 1440px;
    min-height: 100px;
    padding: 80px 48px 65px 120px;

    @media ${device.laptopM} {
        padding: 80px 48px;
    }
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
    @media ${device.tabletS} {
        max-width: 100%;
    }
`

const ClientCard = styled(Flex)`
    min-height: 231px;

    .trustpilot-container {
        margin-top: 54px;
    }

    @media ${device.tabletL} {
        max-width: 588px;
        min-height: auto;
    }

    @media ${device.tabletS} {
        max-width: 100% !important;
    }
`

const TrustPilotWidget = styled(Flex)`
    a {
        display: none;
    }
    .trustpilot-widget {
        transform: scale(0.8);
        position: relative;
        left: -20px;
        top: -10px;
    }
`

const QuoteIcon = styled.img`
    position: absolute;
    width: 160px;
    height: 128px;
    top: -60px;

    @media ${device.tabletL} {
        top: 0;
        width: 120px;
        height: 96px;
    }
`

const ClientTestimonial = styled(Header)`
    margin-bottom: 48px;

    @media ${device.tabletL} {
        margin-bottom: 24px;
    }
`

const ClientName = styled(Text)`
    color: var(--color-black-3);

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const testimonial_slides = [
    {
        id: 'angeh',
        name: 'Angeh',
        quote: (
            <Localize translate_text="Weekend trades, fast deposits & withdrawals, plus synthetics trading - what’s better than this?" />
        ),
    },
    {
        id: 'osilva',
        name: 'O.Silva',
        quote: (
            <Localize translate_text="Deriv is the best broker in the world so far in terms of the assets they offer, ease of withdrawals and deposits, plus other services. Keep on giving us the best, Deriv!" />
        ),
    },
    {
        id: 'montana',
        name: 'Montana',
        quote: (
            <Localize translate_text="Deriv P2P makes withdrawals and deposits simple, it’s the best user-friendly app." />
        ),
    },
    {
        id: 'sammy',
        name: 'Sammy',
        quote: <Localize translate_text="Deriv P2P is a great app, I love it!" />,
    },
    {
        id: 'amina',
        name: 'Amina',
        quote: <Localize translate_text="Deriv GO is amazingly easy to use." />,
    },
    {
        id: 'gladys',
        name: 'Gladys',
        quote: (
            <Localize translate_text="My experience so far is just awesome! You can do instant buying and selling, and I hope to continue enjoying using Deriv P2P. Keep up the good work!" />
        ),
    },
    {
        id: 'john',
        name: 'John',
        quote: (
            <Localize translate_text="I have never seen a platform that is so flexible with multiple resources that meet everyone’s needs. If that’s not enough, Deriv is second to none on customer support services!" />
        ),
    },
    {
        id: 'frank',
        name: 'Frank',
        quote: <Localize translate_text="Excellent and reliable services; tested and trusted!" />,
    },
    {
        id: 'aaron',
        name: 'Aaron',
        quote: (
            <Localize translate_text="Deriv has multiple withdrawal methods, including Deriv P2P, which is fast and convenient. Their support team is available any time and responds very quickly to any queries." />
        ),
    },
    {
        id: 'ovictor',
        name: 'O. Victor',
        quote: (
            <Localize translate_text="Deriv GO is a very nice app – payments have been swift and easy. I would highly recommend it." />
        ),
    },
    {
        id: 'isaac',
        name: 'Isaac',
        quote: (
            <Localize translate_text="Deriv is the most reliable broker - excellent customer support and fast payments. It’s a great platform for commodities, forex, and synthetics trading." />
        ),
    },
    {
        id: 'simon',
        name: 'Simon',
        quote: (
            <Localize translate_text="Low spreads on Synthetics and fast withdrawals - Deriv is a good broker!" />
        ),
    },
    {
        id: 'allan',
        name: 'Allan',
        quote: (
            <Localize translate_text="Deriv P2P is good. It’s easy to deposit and withdraw for small traders." />
        ),
    },
    {
        id: 'francoise',
        name: 'Francoise',
        quote: (
            <Localize translate_text="It's the best broker in the world. I will recommend it to anyone every day all the time. Their support agents are really helpful in all areas." />
        ),
    },
    {
        id: 'katleho',
        name: 'Katleho',
        quote: (
            <Localize translate_text="Wow! Deriv GO is so perfect, it's convenient and reliable. I highly recommend using the app." />
        ),
    },
    {
        id: 'jackline',
        name: 'Jackline',
        quote: (
            <Localize translate_text="I've been a trader for many years, and I've never encountered a good broker like Deriv before – it's the best for customer care and payment options!" />
        ),
    },
    {
        id: 'freeman',
        name: 'Freeman',
        quote: <Localize translate_text="Deriv P2P is a flawless innovation." />,
    },
    {
        id: 'vikas',
        name: 'Vikas',
        quote: (
            <Localize translate_text="It's been a really great experience trading forex on Deriv - it's a smooth and seamless operation!" />
        ),
    },
    {
        id: 'moyz',
        name: 'Moyz',
        quote: (
            <Localize translate_text="Deriv GO is really good! I've been looking for an app like this which is easy to use." />
        ),
    },
    {
        id: 'ls',
        name: 'LS',
        quote: (
            <Localize translate_text="Deriv is the best forex broker I have ever come across!" />
        ),
    },
]

const filtered_testimonial = (unavailable_testimonial) =>
    testimonial_slides.filter(({ quote }) => {
        const lowered_quote = quote.props.translate_text.toLowerCase()
        let show = true
        unavailable_testimonial.forEach(
            (unavailable) => lowered_quote.includes(unavailable) && (show = false),
        )
        return show
    })

const unavailable_testimonial_eu = ['p2p', 'deriv go']
const unavailable_testimonial_uk = ['p2p', 'synthetic', 'deriv go']

type ClientSideProps = {
    quote: ReactElement
    name: string
}

const ClientSlide = ({ quote, name }: ClientSideProps) => (
    <Flex direction="column" height="100%" jc="space-between" max_width="588px">
        <ClientTestimonial type="subtitle-1" weight="normal" lh={'36px'} className="flexi-item">
            {quote}
        </ClientTestimonial>
        <Flex direction="column" height="fit-content">
            <ClientName size={'16px'} weight={700}>
                {name}
            </ClientName>
        </Flex>
    </Flex>
)

const WhatOurClientsSay = () => {
    const { is_eu, is_uk } = useCountryRule()
    const ref = useRef()

    useEffect(() => {
        window?.Trustpilot?.loadFromElement(ref.current, true)
    }, [])

    return (
        <StyledContainer>
            <ClientContainer padding="5rem 0 0">
                <ClientFlex
                    jc="space-between"
                    ai="center"
                    height="fit-content"
                    width="100%"
                    tabletL={{ fd: 'column' }}
                >
                    <ClientCard
                        direction="column"
                        mr="36px"
                        max_width="384px"
                        tabletL={{
                            max_width: '588px',
                            mb: '24px',
                            mr: '0px',
                        }}
                    >
                        <Header as="h2" type="heading-2">
                            {localize('What our clients say about Deriv')}
                        </Header>
                        <TrustPilotWidget
                            m="40px 0 0"
                            width="240px"
                            height="100px"
                            tabletL={{
                                heigth: '64px',
                                m: '24px 0 0',
                            }}
                        >
                            <div
                                ref={ref}
                                className="trustpilot-widget"
                                data-locale="en-US"
                                data-template-id="53aa8807dec7e10d38f59f32"
                                data-businessunit-id="5ed4c8a9f74f310001f51bf7"
                                data-style-height="150px"
                                data-style-width="100%"
                                data-theme="light"
                            >
                                <a
                                    href="https://www.trustpilot.com/review/deriv.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Trustpilot
                                </a>
                            </div>
                        </TrustPilotWidget>
                    </ClientCard>
                    <ClientCard position="relative" direction="column">
                        <QuoteIcon src={Quote} alt="" />
                        <Flex
                            ml="auto"
                            pl="40px"
                            max_width="690px"
                            tablet={{
                                pl: '0',
                                max_width: '588px',
                                m: '0 auto',
                                pt: '68px',
                            }}
                        >
                            <Carousel>
                                {(
                                    (is_eu && filtered_testimonial(unavailable_testimonial_eu)) ||
                                    (is_uk && filtered_testimonial(unavailable_testimonial_uk)) ||
                                    testimonial_slides
                                ).map(({ id, name, quote }) => (
                                    <ClientSlide key={id} quote={quote} name={name} />
                                ))}
                            </Carousel>
                        </Flex>
                    </ClientCard>
                </ClientFlex>
            </ClientContainer>
        </StyledContainer>
    )
}

export default WhatOurClientsSay
