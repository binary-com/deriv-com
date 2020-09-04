import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { Helmet } from 'react-helmet'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import MarginLogo from 'images/svg/margin_tt.svg'
import OptionsLogo from 'images/svg/options_tt.svg'
import MultipliersLogo from 'images/svg/multipliers_tt.svg'
import Arrow from 'images/svg/arrow-right.svg'

const StyledSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TradingButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
    width: 21.6rem;
    justify-content: center;
    margin-top: 3.2rem;
`

const TradeTypeCard = styled.article`
    width: 25rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 2rem;
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`
const SwiperWrapper = styled.div`
    .swiper-container {
        padding-bottom: 4rem;
    }
    .swiper-slide {
        width: 25rem;
    }
    .swiper-pagination {
        bottom: 0;
    }
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
    }
    .swiper-pagination-bullet-active {
        background-color: var(--color-black);
    }
`

const TradeTypeSlide = ({ icon, title, description }) => {
    return (
        <Flex ai="center" height="unset">
            <TradeTypeCard>
                <Flex ai="center" fd="column">
                    {icon}
                    <Header mt="1.6rem" mb="0.8rem" align="center" size="var(--text-size-m)">
                        {title}
                    </Header>
                    <Text size="var(--text-size-sm)" align="center">
                        {description}
                    </Text>
                    <StyledLink
                        ariaLabel={localize('Margin')}
                        to={
                            icon == <MarginLogo />
                                ? '/trade-types/margin'
                                : icon == <OptionsLogo />
                                ? '/trade-types/options'
                                : '/trade-types/multipliers'
                        }
                    >
                        {localize('Learn more')} <Arrow />
                    </StyledLink>
                </Flex>
            </TradeTypeCard>
        </Flex>
    )
}

TradeTypeSlide.propTypes = {
    description: PropTypes.any,
    icon: PropTypes.any,
    title: PropTypes.any,
}

const margin = {
    icon: <MarginLogo />,
    title: <Localize translate_text="Margin Trading" />,
    description: (
        <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
    ),
}
const options = {
    icon: <OptionsLogo />,
    title: <Localize translate_text="Options" />,
    description: (
        <Localize translate_text="Earn fixed payouts by predicting an assets price movement within a fixed time." />
    ),
}
const multipliers = {
    icon: <MultipliersLogo />,
    title: <Localize translate_text="Multipliers" />,
    description: (
        <Localize translate_text="Get the best of both - the upside of margin trading with the simplicity of options." />
    ),
}

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 126px;
    height: 24px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ff444f;

    @media ${device.tabletL} {
        margin: 1rem 0;
    }
`

const trade_types = [margin, options, multipliers]

const TradeTypesMobile = () => {
    const ref = React.useRef(null)

    const params = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 12,
        lazy: true,
        // autoplay: {
        //     delay: 15000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <StyledSection padding="4rem 0">
                <Header align="center" as="h2" mb="0.8rem">
                    {localize('Trade types')}
                </Header>
                <Text padding="0 2rem" size="var(--text-size-sm)" align="center" mb="2rem">
                    {localize(
                        'Trade what you like, the way you like it, and on your preferred market.',
                    )}
                </Text>
                <SliderWrapper>
                    <SwiperWrapper>
                        <Swiper {...params} ref={ref}>
                            {trade_types.map((trade_slide) => (
                                <div className="swiper-slide" key={trade_slide.title}>
                                    <TradeTypeSlide
                                        icon={trade_slide.icon}
                                        title={trade_slide.title}
                                        description={trade_slide.description}
                                    />
                                </div>
                            ))}
                        </Swiper>
                    </SwiperWrapper>
                </SliderWrapper>
                <TradingButton type="submit" secondary="true" to="/signup/">
                    {localize('Start trading')}
                </TradingButton>
            </StyledSection>
        </>
    )
}

export default TradeTypesMobile
