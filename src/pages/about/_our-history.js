import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Wrapper, Container } from 'components/containers'
import { Header, Image, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
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
        title: localize('Before the beginning'),
        description: localize(
            'Jean-Yves moves to Hong Kong to found  Fortitude Group Inc, a company offering various over-the-counter derivative products. While leading the group, he notices how the market only allowed trading in large quantities, making it impossible for the ordinary investor to participate . Jean-Yves sees an opportunity and gets to work.',
        ),
        image: '1993.png',
    },
    {
        year: '1999',
        title: localize('Regents Markets is born'),
        description: localize(
            'Jean-Yves collaborates with notable financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system. The system allows  ordinary investors to make small trades. Jean-Yves creates the Regent Markets Group and raises  USD 2 million capital investment.',
        ),
        image: '1999.png',
    },
    {
        year: '2000',
        title: localize('And so it begins'),
        description: localize(
            'Jean-Yves moves to Malta. There he obtains  an online gaming licence, which allows  him to offer  the newly-created fixed-odds trading system to the world. The first binary option is purchased and by the end of the year, Regent Markets sees  more than 2,000 trades, and a turnover of  USD 250,000.   ',
        ),
        image: '2000.png',
    },
    {
        year: '2001',
        title: localize('Upward momentum'),
        description: localize(
            'Regent Markets launch an online platform called  BetOnMarkets.com. The platform is the first to offer  binary options to retail traders . BetOnMarkets.com acquires  over 1,000 active clients within the year. The company sparks  a market revolution, inspiring others to imitate its offering.',
        ),
        image: '2001.png',
    },
    {
        year: '2004',
        title: localize('A new hub and a new licence'),
        description: (
            <Localize
                translate_text="The company continues  to experience rapid growth. Regent Markets established a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia.<0 /><0 />The company also obtains a licence in the Isle Of Man for its customers  in the United Kingdom in 2004. "
                components={[<br key={0} />]}
            />
        ),
        image: '2004.png',
    },
    {
        year: '2007',
        title: localize('Recognition...'),
        description: localize(
            'BetOnMarkets.com earns  the ‘Best Fixed-Odds Financial Trading Provider’ award from Shares Magazine UK. The service  is recognised as a reliable and secure online trading platform for all levels of traders. Shortly after, the Financial Times and Investors Chronicle UK awards BetOnMarkets.com the title of ‘Best Fixed-Odds Financial Provider’.',
        ),
        image: '2007.png',
    },
    {
        year: '2008',
        title: localize(' ...after recognition'),
        description: localize(
            'BetOnMarkets.com handles  over 15 million trades and wins Shares Magazine UK’s ‘Best Fixed Odds Financial Trading Provider’ for the second time. The company also earns  the Investors Chronicle award for ‘Best Customer Communication Firm’, a recognition for the platform’s ethical and customer-focused trading experience.',
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
            "The reliability, product range, and customer services offered by BetOnMarkets.com led to the 'Best Fixed-Odds Firm 2012' award by Global Banking and Finance Review.",
        ),
        image: '2012.png',
    },
    {
        year: '2013',
        title: localize('New brand, new offerings'),
        description: localize(
            'By 2013, the online trading industry had grown exponentially. It’s time for a revamp: BetOnMarkets.com rebrands to Binary.com. The rebrand comes with enhanced  features, a new range of trade types, and a variety of charting applications. Binary.com is now the  most comprehensive digital options platform in the world.',
        ),
        image: '2013.png',
    },
    {
        year: '2014',
        title: localize('Two billion dollars'),
        description: localize(
            'With a workforce of just 50 people, Binary.com continued to lead in the online trading space. Its client base grew, and it saw 130,000 transactions per day. In only two years since hitting a billion-dollar cumulative turnover in 2012, Binary.com quickly doubled its cumulative turnover to USD 2 billion.   ',
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
        title: localize('Continued innovation and growth'),
        description: (
            <Localize
                translate_text="In 2016, Binary.com added Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders. In the same year, we introduced Binary Bot. This new invention delivered a drag-and-drop programming tool, which enabled traders to build trading bots without knowing how to code.<0 />The Binary.com team expanded to 100 people."
                components={[<br key={0} />]}
            />
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
        title: localize('One billion per year'),
        description: (
            <Localize
                translate_text="We saw our first billion-dollar turnover in 2012, after 13 years of operations. Then two years later, in 2014, we hit USD 2 billion in cumulative turnover.<0 />In 2018, Binary.com achieved a momentous milestone of USD 1 billion in turnover in a single year.<0 />Binary.com opens a third office in Labuan as part of its business expansion."
                components={[<br key={0} />]}
            />
        ),
        image: '2018.png',
    },
    {
        year: '2019',
        title: localize('A new era in online trading'),
        description: localize(
            'In 2019, we saw our active trader count go over 250,000. Inspired by our clients who are driven to succeed, we launched Deriv.com. Featuring customisable charts and tools, and a sleeker design, Deriv is created to be the world’s most customer-centric online trading company; a place where traders come to find and discover any derivative they want to trade.',
        ),
        image: '2019.png',
    },
]

const OurHistory = () => {
    return (
        <StyledWrapper>
            <StyledContainer justify="center" direction="column">
                <Header font_size="3.6rem" align="center">
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
