import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Carousel, Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import MarginLogo from 'images/svg/trade-types/margin.svg'
import OptionsLogo from 'images/svg/trade-types/options.svg'
import MultipliersLogo from 'images/svg/trade-types/multipliers.svg'
import Arrow from 'images/svg/arrow-right.svg'
import { DerivStore } from 'store'

const StyledSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TradingButton = styled(LinkButton)`
    height: 40px;
    display: flex;
    align-items: center;
    width: 216px;
    justify-content: center;
`

const TradeTypeCard = styled.article`
    width: 216px;
    position: relative;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 24px;
    height: 100%;
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    margin: 1rem 0;
    height: 100%;
`

const CustomLinkWrap = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 16px;
    align-items: center;
`

const TradeTypeSlide = ({ description, icon, link, linkTitle, title }) => {
    return (
        <Flex ai="center">
            <StyledLink aria_label={linkTitle} to={link}>
                <TradeTypeCard>
                    <Flex ai="center" fd="column">
                        {icon}
                        <Header
                            mt="1.6rem"
                            mb="0.8rem"
                            align="center"
                            as="h4"
                            type="main-paragraph"
                        >
                            {title}
                        </Header>
                        <Text size="14px" align="center">
                            {description}
                        </Text>
                        <CustomLinkWrap>
                            <Text weight="bold" mr="0.8rem" color="red">
                                {localize('Learn more')}{' '}
                            </Text>
                            <img src={Arrow} alt="arrow" width="16" height="16" />
                        </CustomLinkWrap>
                    </Flex>
                </TradeTypeCard>
            </StyledLink>
        </Flex>
    )
}

TradeTypeSlide.propTypes = {
    description: PropTypes.any,
    icon: PropTypes.any,
    link: PropTypes.any,
    linkTitle: PropTypes.any,
    title: PropTypes.any,
}

const TradeTypesMobile = () => {
    const margin = {
        icon: <img src={MarginLogo} alt="margin" width="48" height="49" />,
        title: <Localize translate_text="Margin trading" />,
        description: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/margin/',
        linkTitle: localize('Margin'),
    }
    const options = {
        icon: <img src={OptionsLogo} alt="options" width="48" height="49" />,
        title: <Localize translate_text="Options" />,
        description: (
            <Localize translate_text="Earn fixed payouts by predicting an asset's price movement within a fixed time." />
        ),
        link: '/trade-types/options/',
        linkTitle: localize('Options'),
    }
    const multipliers = {
        icon: <img src={MultipliersLogo} alt="multipliers" width="48" height="49" />,
        title: <Localize translate_text="Multipliers" />,
        description: (
            <Localize translate_text="Get the best of both - the upside of margin trading with the simplicity of options." />
        ),
        link: '/trade-types/multiplier/',
        linkTitle: localize('Multiplier'),
    }

    const { is_eu_country } = React.useContext(DerivStore)

    const trade_types = is_eu_country ? [margin, multipliers] : [margin, options, multipliers]

    const settings = {
        options: {
            align: 'center',
        },
        container_style: {
            width: '100%',
            overflow: 'hidden',
        },
        slide_style: {
            minWidth: '216px',
            borderRadius: '8px',
            margin: '10px 16px 48px 0',
            height: 'auto',
            position: 'relative',
        },
        chevron_style: {
            is_displayed_on_mobile: true,
        },
        navigation_style: {
            nav_color: '--color-grey-33',
            bottom_offset: '24px',
        },
        view_port: {
            height: 'auto',
        },
    }

    return (
        <>
            <StyledSection padding="0 0 40px">
                <Header align="center" as="h3" type="section-title" mb="0.8rem">
                    {localize('Trade types')}
                </Header>
                <Text padding="0 2rem" align="center" mb="2rem">
                    {localize('Explore different trade types to trade on your preferred market.')}
                </Text>
                <Carousel {...settings}>
                    {trade_types.map((trade_slide, idx) => (
                        <TradeTypeSlide
                            key={idx}
                            icon={trade_slide.icon}
                            title={trade_slide.title}
                            description={trade_slide.description}
                            link={trade_slide.link}
                            linkTitle={trade_slide.linkTitle}
                        />
                    ))}
                </Carousel>
                <TradingButton type="submit" secondary="true" to="/signup/">
                    {localize('Start trading')}
                </TradingButton>
            </StyledSection>
        </>
    )
}

export default TradeTypesMobile
