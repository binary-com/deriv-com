import React from 'react'
import styled from 'styled-components'
import { ButtonBack, ButtonNext, CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel'
import { Container, Wrapper } from 'components/containers'
import { Header, Image, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Binary from 'images/svg/binary-blur.svg'
import Deriv from 'images/svg/deriv-blur.svg'
import ChevronRight from 'images/svg/fill-chevron.svg'
import 'pure-react-carousel/dist/react-carousel.es.css'
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
    margin-bottom: 4rem;
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
    margin: 0 auto;
    width: 100%;
`

const StyledSlideText = styled.div`
    width: 100%;
    max-width: 48.6rem;
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

    /* overriding the library styling */
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

const ImageWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify};
    width: 28.2rem;
    height: 30rem;
    margin-right: 3.2rem;

    * {
        margin: auto 0;
    }
`

const history_data = [
    {
        year: '1990',
        title: localize('Introducing an award-winning entrepreneur'),
        description: localize(
            'Jean-Yves Sireau creates a technical analysis software at just 19 years old. His creation wins him the Jacques Douce Prize for young entrepreneurs awarded by the French Prime Minister, inspiring him to start his own company. ',
        ),
        image: '1990.png',
        width: '22.9rem',
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
            'Jean-Yves collaborates with financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system. The system allows ordinary investors to make small trades. Jean-Yves creates the Regent Markets Group and raises USD 2 million capital investment.',
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
        year: '2002',
        title: localize('Ten million dollars'),
        description: localize(
            'The numbers validate Jean-Yves’ instincts to create a market for retail investors. The platform’s customers grow to over 3,500 users making over 150,000 trades in 2002. The total turnover increases tenfold from the previous year to reach over USD 10,000,000. ',
        ),
        image: '2002.png',
        width: '22.5rem',
        justify: 'center',
    },
    {
        year: '2004',
        title: localize('A new hub and a new licence'),
        description: (
            <Localize
                translate_text="The company continues to experience rapid growth. Regent Markets established a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia.<0 /><0 />
                The company also obtains a licence in the Isle Of Man for its customers in the United Kingdom in 2004.<0 /><0 />
                The company also obtains a licence in the Isle Of Man for its customers  in the United Kingdom in 2004."
                components={[<br key={0} />]}
            />
        ),
        image: '2004.png',
    },
    {
        year: '2006',
        title: localize('Reaching newer heights'),
        description: (
            <Localize
                translate_text="The number of customers continues to grow, along with confidence in the platform. Fifteen thousand customers make over 2 million trades. The total turnover for the year exceeds USD 100 million.  "
                components={[<br key={0} />]}
            />
        ),
        image: '2006.png',
        width: '19.3rem',
        justify: 'center',
    },
    {
        year: '2007',
        title: localize('Recognition...'),
        description: localize(
            'BetOnMarkets.com earns  the ‘Best Fixed-Odds Financial Trading Provider’ award from Shares Magazine UK. The service  is recognised as a reliable and secure online trading platform for all levels of traders. Shortly after, the Financial Times and Investors Chronicle UK awards BetOnMarkets.com the title of ‘Best Fixed-Odds Financial Provider’.',
        ),
        image: '2007.png',
        width: '21.4rem',
    },
    {
        year: '2008',
        title: localize(' ...after recognition'),
        description: localize(
            'BetOnMarkets.com handles  over 15 million trades and wins Shares Magazine UK’s ‘Best Fixed Odds Financial Trading Provider’ for the second time. The company also earns  the Investors Chronicle award for ‘Best Customer Communication Firm’, a recognition for the platform’s ethical and customer-focused trading experience.',
        ),
        image: '2008.png',
        width: '22.3rem',
        justify: 'center',
    },
    {
        year: '2012',
        title: localize('One billion dollars'),
        description: localize(
            'Regent Markets continues to innovate and strengthen BetOnMarkets.com. The hard work pays off with over 36,000 active clients on board and a cumulative turnover of USD 1 billion since its inception in 1999. ',
        ),
        image: '2012.png',
        width: '18.4rem',
        justify: 'center',
    },
    {
        year: '2013',
        title: localize('New brand, new offerings'),
        description: localize(
            'The online trading industry has grown exponentially. Regent Markets decides to breathe new life by rebranding BetOnMarkets.com to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications. Binary.com is now the most comprehensive digital options platform in the world.',
        ),
        image: '2013.png',
        width: '20.8rem',
    },
    {
        year: '2014',
        title: localize('Two billion dollars'),
        description: localize(
            'With a workforce of just 50 people, Binary.com continued to lead in the online trading space. Its client base grew, and it saw 130,000 transactions per day. In only two years since hitting a billion-dollar cumulative turnover in 2012, Binary.com quickly doubled its cumulative turnover to USD 2 billion.   ',
        ),
        image: '2014.png',
        width: '18.4rem',
        justify: 'center',
    },
    {
        year: '2015',
        title: localize('Now available in the EU'),
        description: localize(
            'The Malta Financial Services Authority grants Binary.com a Category 3 Investment Services licence. This licence makes it possible for us to extend our offering to clients in the European Union. ',
        ),
        image: '2015.png',
    },
    {
        year: '2016',
        title: localize('Continued innovation and growth'),
        description: (
            <Localize
                translate_text="In 2016, Binary.com adds Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders. In the same year, we introduce Binary Bot. This new invention delivers a drag-and-drop programming tool, which enables traders to build trading bots without knowing how to code.
                <0 /><0 />The Binary.com team expands to 100 people. "
                components={[<br key={0} />]}
            />
        ),
        image: '2016.png',
        width: '24.6rem',
    },
    {
        year: '2018',
        title: localize('One billion per year'),
        description: (
            <Localize
                translate_text="We saw our first billion-dollar turnover in 2012, after 13 years of operations. Then two years later, in 2014, we hit USD 2 billion in cumulative turnover.<0 /><0 />In 2018, Binary.com achieved a momentous milestone of USD 1 billion in turnover in a single year.<0 /><0 />Binary.com opens a third office in Labuan as part of its business expansion."
                components={[<br key={0} />]}
            />
        ),
        image: '2018.png',
        width: '18.4rem',
        justify: 'center',
    },
    {
        year: '2019',
        title: localize('A new era in online trading'),
        description: (
            <Localize
                translate_text="In 2019, we see our active trader count go over 250,000. We open offices in Dubai and Paraguay to support our growth.<0 /><0 />Inspired by our clients who are driven to succeed, we launch Deriv.com. Featuring customisable charts and tools, and a sleeker design, Deriv is created to be the world’s most customer-centric online trading company; a place where traders come to find and discover any derivative they want to trade."
                components={[<br key={0} />]}
            />
        ),
        image: '2019.png',
        width: '21.2rem',
        justify: 'center',
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
                                        <ImageWrapper justify={history.justify || 'flex-end'}>
                                            <Image
                                                img_name={history.image}
                                                width={history.width || '28.2rem'}
                                            />
                                        </ImageWrapper>
                                        <StyledSlideText>
                                            <StyledHeader as="h4">{history.title}</StyledHeader>
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
