import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Wrapper, Container } from 'components/containers'
import { Header, Image, Text } from 'components/elements'
import { localize } from 'components/localization'
import ChevronRight from 'images/svg/fill-chevron.svg'
import Binary from 'images/svg/binary-blur.svg'
import Deriv from 'images/svg/deriv-blur.svg'
import device from 'themes/device'

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 6rem;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`

const SubHeader = styled(Header)`
    margin-top: 1.6rem;
    margin-bottom: 8rem;
`

const StyledContainer = styled(Container)`
    position: relative;
`

const ChevronLeft = styled(ChevronRight)`
    transform: rotate(180deg);
`

const StyledWrapper = styled(Wrapper)`
    background: var(--color-grey-8);
    padding: 8rem 0;
    position: relative;

    @media ${device.tabletS} {
        display: none;
    }
`

const StyledSlide = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 79.2rem;
    align-items: center;
    margin: 4rem auto;
    width: 100%;
`

const StyledSlideText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledDotsWrapper = styled.ul`
    width: 100%;
    border-top: 4px solid var(--color-green);
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background: var(--color-black);
        border-radius: 50%;
        position: absolute;
        left: 0;
        bottom: 0.8rem;
    }
    &::before {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background: var(--color-black);
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 0.8rem;
    }

    @media ${device.laptopLC} {
        display: none;
    }
`

const StyledDot = styled.li`
    margin: 0 3rem;
    position: relative;

    & .carousel__dot {
        height: 10px;
        width: 3px;
        background: var(--color-grey);

        &--selected {
            &::after {
                content: '▼';
                font-size: var(--text-size-l);
                position: absolute;
                left: -11px;
                top: -19px;
                color: var(--color-red);
                text-shadow: 0 0 10px rgba(204, 46, 61, 0.5);
            }
            span {
                font-size: var(--text-size-m);
                font-weight: bold;
                color: var(--color-black);
                left: -3rem;
            }
        }
    }
`

const StyledYear = styled.span`
    position: absolute;
    top: 2rem;
    left: -2rem;
    font-size: var(--text-size-s);
    color: var(--color-grey);
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`

const ButtonWrapper = styled.div`
    & .carousel__back-button {
        position: absolute;
        top: 35%;
        left: 0;
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
    & .carousel__next-button {
        position: absolute;
        top: 35%;
        right: 0;
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
`

const StyledBinary = styled(Binary)`
    position: absolute;
    left: -15.6rem;
    bottom: 4rem;

    @media ${device.laptopLC} {
        display: none;
    }
`

const StyledDeriv = styled(Deriv)`
    position: absolute;
    right: -15.6rem;
    bottom: 4rem;

    @media ${device.laptopLC} {
        display: none;
    }
`

const history_data = [
    {
        year: '1990',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: '1990.png',
    },
    {
        year: '1993',
        title: localize('Early success'),
        description: localize(
            'Jean-Yves moved to Hong Kong and founded Fortitude Group Inc, dealing in various over-the-counter derivative products. The knowledge and experience he gained during this time would eventually become central to Binary.com and Deriv. The success he achieved at such a young age attracted the attention of Jim Mellon, an influential investor and visionary entrepreneur from the UK.',
        ),
        image: '1993.png',
    },
    {
        year: '1999',
        title: localize('Regents Markets is born'),
        description: localize(
            'Jean-Yves had an idea: to give ordinary investors a chance to make small trades. He collaborated with notable financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system. He then founded the Regent Markets Group and received a USD 2 million capital investment followed by a supplemental loan of USD 2 million from Jim Mellon’s Regent Pacific Group Ltd.',
        ),
        image: '1999.png',
    },
    {
        year: '2000',
        title: localize('The strategic move'),
        description: localize(
            'As the only player in the market, Regent Markets filed a patent for its fixed-odds trading system. Jean-Yves decided to move base to Malta and obtain an online gaming licence.',
        ),
        image: '2000.png',
    },
    {
        year: '2001',
        title: localize('BetOnMarkets.com is launched'),
        description: localize(
            'This was where things started taking off. BetOnMarkets.com, registered by Regent Markets, was the first online trading platform to offer binary options to retail traders, sparking off a market revolution. This led to the growth of a multi-billion dollar industry with Regent Markets as its leader.',
        ),
        image: '2001.png',
    },
    {
        year: '2004',
        title: localize('Licenced in the Isle Of Man'),
        description: localize(
            'Regent Markets obtained a licence in the Isle Of Man for its clientele in the UK.',
        ),
        image: '2004.png',
    },
    {
        year: '2007',
        title: localize('The recognition begins'),
        description: localize(
            "Just 6 years in, BetOnMarkets.com was awarded 'Best Fixed-Odds Financial Trading Provider' by Shares Magazine, Financial Times, and Investors Chronicle. Having handled over 15 million trades, BetOnMarkets.com was recognised as a reliable and secure online trading platform for novice and expert traders. Regent Markets is recognised as the pioneer of binary trading with patents granted in the United States.",
        ),
        image: '2007.png',
    },
    {
        year: '2008',
        title: localize('An award-winning commitment'),
        description: localize(
            "BetOnMarkets.com won another award from Investors Chronicle for 'Best Customer Communication Firm', in recognition of its commitment towards an ethical and customer-focused trading experience.",
        ),
        image: '2008.png',
    },
    {
        year: '2009',
        title: localize('More awards!'),
        description: localize(
            "BetOnMarkets.com bagged 'Best Fixed-Odds Financial Trading Provider' by Shares Magazine UK, and 'Financial Trading Operator of the Year' by eGaming Review.",
        ),
        image: '2009.png',
    },
    {
        year: '2011',
        title: localize('Patented technology'),
        description: localize(
            "Regent Markets obtained 2 US Patents: 'Computer trading system and method for speculating on a financial market' and 'Computer trading system for offering custom financial market speculations'.",
        ),
        image: '2011.png',
    },
    {
        year: '2012',
        title: localize('Reliability rewarded'),
        description: localize(
            "The reliability, product range, and customer services offered by BetOnMarkets.com led to the 'Best Fixed-Odds Firm 2012' award by Global Banking and Finance Review. ",
        ),
        image: '2012.png',
    },
    {
        year: '2013',
        title: localize('New brand, new offerings'),
        description: localize(
            'By this time, the online trading industry had grown exponentially. It was time for a rebrand. Introducing Binary.com, the latest version of BetOnMarkets.com, with new trade types and charting applications, becoming the most comprehensive digital options platform.',
        ),
        image: '2013.png',
    },
    {
        year: '2014',
        title: localize('No turning back'),
        description: localize(
            'Following the rebrand, Binary.com continued its growth. With just 50 employees, it garnered a client-base of 800,000, contributing to over 130,000 daily transactions and a cumulative turnover of USD 2 billion.',
        ),
        image: '2014.png',
    },
    {
        year: '2015',
        title: localize('The world’s best'),
        description: localize(
            "Binary.com won the first prize for the Financial Trading Operator category at the prestigious 2015 EGR Operator Awards ceremony and was honoured as the world's ‘Best Binary Options Broker’ at the 16th annual MENA International Financial Conference and Exhibition.",
        ),
        image: '2015.png',
    },
    {
        year: '2016',
        title: localize('Introducing Binary Bot'),
        description: localize(
            'Automated trading at its best. Clients could create their own trading bots without knowing how to code.',
        ),
        image: '2016.png',
    },
    {
        year: '2017',
        title: localize('The market leader'),
        description: localize(
            'In proving itself as a market leader, Binary.com was awarded Best Binary Options Broker by the Online Personal Wealth Awards.',
        ),
        image: '2017.png',
    },
    {
        year: '2018',
        title: localize('New office and licence in Labuan'),
        description: localize(
            'Binary.com opened a new office in Labuan, Malaysia and obtained a money-broking licence by Labuan Financial Services Authority.',
        ),
        image: '2018.png',
    },
    {
        year: '2019',
        title: localize('Deriv is born'),
        description: localize(
            'Deriv.com was launched as the next-generation online trading platform. Binary.com and Deriv collectively handle over 200 million transactions, with an unprecedented turnover of over USD 1 billion a year.',
        ),
        image: '2019.png',
    },
]

const OurHistory = () => {
    return (
        <StyledWrapper>
            <StyledContainer justify="center" direction="column">
                <Header as="h2" align="center">
                    {localize('Our history')}
                </Header>
                <SubHeader as="h4" weight="normal" align="center">
                    {localize('Scroll through our remarkable journey')}
                </SubHeader>
                <SliderWrapper>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={50}
                        totalSlides={history_data.length}
                    >
                        <Slider style={{ width: '80%', height: '42.8rem', margin: '0 auto' }}>
                            {history_data.map((history, index) => (
                                <Slide key={index} index={index}>
                                    <StyledSlide>
                                        <Wrapper width="90rem" margin={{ right: '2.4rem' }}>
                                            <Image img_name={history.image} />
                                        </Wrapper>
                                        <StyledSlideText>
                                            <StyledHeader as="h3">{history.title}</StyledHeader>
                                            <Text>{history.description}</Text>
                                        </StyledSlideText>
                                    </StyledSlide>
                                </Slide>
                            ))}
                        </Slider>
                        <ButtonWrapper>
                            <ButtonBack>
                                <ChevronLeft />
                            </ButtonBack>
                            <ButtonNext>
                                <ChevronRight />
                            </ButtonNext>
                        </ButtonWrapper>
                        <StyledDotsWrapper>
                            {history_data.map((history, index) => (
                                <StyledDot key={index}>
                                    <Dot slide={index}>
                                        <StyledYear>{history.year}</StyledYear>
                                    </Dot>
                                </StyledDot>
                            ))}
                        </StyledDotsWrapper>
                    </CarouselProvider>
                </SliderWrapper>
                <StyledBinary />
                <StyledDeriv />
            </StyledContainer>
        </StyledWrapper>
    )
}

export default OurHistory
