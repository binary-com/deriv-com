import React from 'react'
import styled from 'styled-components'
import DTrading, { TradingType } from 'components/custom/_dtrading'
import { SectionContainer, Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import { Icon24_7, IconMultipleMarketing, IconNewPromising } from 'images/svg/deriv-x'
import BoxStyledGrid from 'components/custom/_box-styled-grid'

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tablet} {
        font-size: 28px;
        padding: 40px 0;
    }
`
const StyledHeader = styled(Header)`
    margin: 0 0 80px;
    color: var(--color-black-9);
    @media ${device.mobileL} {
        font-size: 24px;
        padding: 0 35px;
        margin: 0 0 24px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`

const trading: TradingType[] = [
    {
        title: '_t_Bespoke trading experience_t_',
        subtitle:
            '_t_Easily customise your trading environment. Drag and drop widgets, create your own layouts, and get the info you need, when you need it._t_',
        image_name: 'bespoke',
        image_alt: '_t_Deriv X widgets to customise your CFD trading_t_',
    },
    {
        title: '_t_Intuitive tools_t_',
        subtitle:
            '_t_Keep track of your progress with the dashboard, learn from historical trades with the journal, and create custom watchlists for your favourite assets._t_',
        image_name: 'intuitive',
        image_alt: '_t_Deriv X dashboard with tools to track your online trading_t_',
    },
    {
        title: '_t_Know your margin_t_',
        subtitle:
            "_t_You'll always be informed of the margin impact on your account before every trade._t_",
        image_name: 'margin',
        image_alt: '_t_Know the margin impact on your CFD trading_t_',
    },
    {
        title: '_t_Feature-rich charts_t_',
        subtitle: '_t_Enjoy multiple chart views, 90+ indicators, and 13 drawing tools._t_',
        image_name: 'feature_rich',
        image_alt: '_t_Multiple charts to view your online trading_t_',
    },
]

const card_data: React.ComponentProps<typeof BoxStyledGrid>['items'] = [
    {
        icon: IconNewPromising,
        title: '_t_New and promising_t_',
        subtitle:
            '_t_Deriv X is our second CFD platform, after MT5. It’s packed with features and built to fit your trading style._t_',
        image_alt: '_t_New CFD trading platform_t_',
    },
    {
        icon: IconMultipleMarketing,
        title: '_t_Multiple markets on a single platform_t_',
        subtitle: '_t_Trade various assets in multiple markets simultaneously._t_',
        image_alt: '_t_Trade on multiple markets_t_',
    },
    {
        icon: Icon24_7,
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade cryptocurrencies and synthetics anytime, even on weekends and holidays._t_',
        image_alt: '_t_Trade any time of the day and week_t_',
    },
]

const WhyTradeDerivX = () => {
    return (
        <div>
            <StyledSectionContainer>
                <Container fd="column">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text="_t_Why trade with Deriv X_t_" />
                    </StyledHeader>
                    <BoxStyledGrid items={card_data} />
                </Container>
            </StyledSectionContainer>
            <DTrading trading={trading} />
        </div>
    )
}

export default WhyTradeDerivX
