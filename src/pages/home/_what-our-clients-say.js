import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Carousel from './_testimonial-carousel'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import { addScript } from 'common/utility'
import Quote from 'images/svg/testimonials/quote.svg'

const StyledContainer = styled.div`
    background-color: var(--color-grey-25);
    width: 100%;
    height: fit-content;
`

const ClientContainer = styled(Container)`
    display: flex;
    align-items: center;
    min-height: 455px;
    margin: 0 auto 80px;
`

const ClientFlex = styled(Flex)`
    max-width: 1440px;
    min-height: 100px;

    @media ${device.tabletS} {
        padding: 40px 0;
        max-width: 100%;
    }
`

const ClientCard = styled(Flex)`
    .trustpilot-container {
        margin-top: 54px;
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
    top: -36px;

    @media ${device.tabletS} {
        top: 0;
    }
`

const ClientTestimonial = styled(Text)`
    margin-bottom: 40px;

    @media ${device.tablet} {
        font-size: 18px;
    }
`

const ClientName = styled(Text)`
    color: var(--color-black-3);
    margin-bottom: 5px;

    @media ${device.tablet} {
        font-size: 14px;
    }
`

const Date = styled(Text)`
    @media ${device.tablet} {
        font-size: 10px;
    }
`

const testimonial_slides = [
    {
        id: 'angeh',
        name: 'Angeh',
        date: '8 September 2021',
        quote: (
            <Localize translate_text="Weekend trades, fast deposits &amp; withdrawals, plus synthetics trading – what’s better than this?" />
        ),
    },
    {
        id: 'osilva',
        name: 'O.Silva',
        date: '9 January 2021',
        quote: (
            <Localize translate_text="Deriv is the best broker in the world so far in terms of the assets they offer, ease of withdrawals and deposits, plus other services. Keep on giving us the best, Deriv!" />
        ),
    },
    {
        id: 'montana',
        name: 'Montana',
        date: '16 January 2021',
        quote: (
            <Localize translate_text="Deriv P2P makes withdrawals and deposits simple, it’s the best user-friendly app." />
        ),
    },
    {
        id: 'sammy',
        name: 'Sammy',
        date: '22 July 2021',
        quote: <Localize translate_text="Deriv P2P is a great app, I love it!" />,
    },
    {
        id: 'amina',
        name: 'Amina',
        date: '24 June 2021',
        quote: <Localize translate_text="Deriv GO is amazingly easy to use." />,
    },
    {
        id: 'gladys',
        name: 'Gladys',
        date: '9 June 2021',
        quote: (
            <Localize translate_text="My experience so far is just awesome! You can do instant buying and selling, and I hope to continue enjoying using Deriv P2P. Keep up the good work!" />
        ),
    },
    {
        id: 'john',
        name: 'John',
        date: '15 September 2021',
        quote: (
            <Localize translate_text="I have never seen a platform that is so flexible with multiple resources that meet everyone’s needs. If that’s not enough, Deriv is second to none on customer support services!" />
        ),
    },
    {
        id: 'frank',
        name: 'Frank',
        date: '14 September 2021',
        quote: <Localize translate_text="Excellent and reliable services; tested and trusted!" />,
    },
    {
        id: 'aaron',
        name: 'Aaron',
        date: '12 September 2021',
        quote: (
            <Localize translate_text="Deriv has multiple withdrawal methods, including Deriv P2P, which is fast and convenient. Their support team is available any time and responds very quickly to any queries." />
        ),
    },
    {
        id: 'ovictor',
        name: 'O. Victor',
        date: '2 April 2021',
        quote: (
            <Localize translate_text="Deriv GO is a very nice app – payments have been swift and easy. I would highly recommend it." />
        ),
    },
    {
        id: 'isaac',
        name: 'Isaac',
        date: '23 May 2021',
        quote: (
            <Localize translate_text="Deriv is the most reliable broker - excellent customer support and fast payments. It’s a great platform for commodities, forex, and synthetics trading." />
        ),
    },
    {
        id: 'simon',
        name: 'Simon',
        date: '10 September 2021',
        quote: (
            <Localize translate_text="Low spreads on Synthetics and fast withdrawals - Deriv is a good broker!" />
        ),
    },
    {
        id: 'allan',
        name: 'Allan',
        date: '14 January 2021',
        quote: (
            <Localize translate_text="Deriv P2P is good. It’s easy to deposit and withdraw for small traders." />
        ),
    },
    {
        id: 'francoise',
        name: 'Francoise',
        date: '16 June 2021',
        quote: (
            <Localize translate_text="It's the best broker in the world. I will recommend it to anyone every day all the time. Their support agents are really helpful in all areas." />
        ),
    },
    {
        id: 'katleho',
        name: 'Katleho',
        date: '8 February 2021',
        quote: (
            <Localize translate_text="Wow! Deriv GO is so perfect, it's convenient and reliable. I highly recommend using the app." />
        ),
    },
    {
        id: 'jackline',
        name: 'Jackline',
        date: '13 September 2021',
        quote: (
            <Localize translate_text="I've been a trader for many years, and I've never encountered a good broker like Deriv before – it's the best for customer care and payment options!" />
        ),
    },
    {
        id: 'freeman',
        name: 'Freeman',
        date: '7 March 2021',
        quote: <Localize translate_text="Deriv P2P is a flawless innovation." />,
    },
    {
        id: 'vikas',
        name: 'Vikas',
        date: '24 May 2021',
        quote: (
            <Localize translate_text="It's been a really great experience trading forex on Deriv - it's a smooth and seamless operation!" />
        ),
    },
    {
        id: 'moyz',
        name: 'Moyz',
        date: '7 March 2021',
        quote: (
            <Localize translate_text="Deriv GO is really good! I've been looking for an app like this which is easy to use." />
        ),
    },
    {
        id: 'ls',
        name: 'LS',
        date: '14 May 2021',
        quote: (
            <Localize translate_text="Deriv is the best forex broker I have ever come across!" />
        ),
    },
]

const ClientSlide = ({ quote, name, date }) => (
    <Flex direction="column" height="100%" jc="space-between">
        <ClientTestimonial size={'24px'} weight={400} lh={'36px'} className="flexi-item">
            {quote}
        </ClientTestimonial>
        <Flex direction="column" height="fit-content">
            <ClientName size={'16px'} weight={700}>
                {name}
            </ClientName>
            <Date size={'12px'}>{date}</Date>
        </Flex>
    </Flex>
)

ClientSlide.propTypes = {
    date: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    quote: PropTypes.node,
}

const WhatOurClientsSay = () => {
    useEffect(() => {
        addScript({
            src: 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
            id: 'trust-pilot',
            async: true,
        })
    }, [document])

    return (
        <StyledContainer>
            <ClientContainer padding="5rem 0 0">
                <ClientFlex
                    jc="space-between"
                    ai="center"
                    height="fit-content"
                    width="100%"
                    tablet_direction="column"
                >
                    <ClientCard
                        direction="column"
                        mr="36px"
                        max_width="384px"
                        tablet={{
                            max_width: '588px',
                            mb: '20px',
                            mr: '0px',
                        }}
                    >
                        <Header as="h2" type="heading-2">
                            {localize('What our clients say about Deriv')}
                        </Header>
                        <TrustPilotWidget
                            m="25px 0 0 0"
                            width="240px"
                            height="100px"
                            tablet={{
                                heigth: '80px',
                            }}
                        >
                            <div
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
                        <QuoteIcon src={Quote} />
                        <Flex
                            ml="auto"
                            pl="40px"
                            max_width="690px"
                            tablet={{
                                pl: '0',
                                max_width: '100%',
                            }}
                        >
                            <Carousel>
                                {testimonial_slides.map(({ date, id, name, quote }) => (
                                    <ClientSlide key={id} quote={quote} name={name} date={date} />
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
