import React from 'react'
import { SmallContainer, Grid, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import HighLeverge from 'images/svg/trade-types/high-leverage.svg'
import GoLongOrShort from 'images/svg/trade-types/go-long-or-short.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import FavoriteMarket from 'images/svg/trade-types/favoritemarket.svg'
import { Button } from 'components/form'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'
import { useCountryRule } from 'components/hooks/use-country-rule'

type TWhyTradeContent = {
    image: string
    image_alt: string
    title: TString
    description: TString
}[]

const why_trade_content_row: TWhyTradeContent = [
    {
        image: HighLeverge,
        image_alt: 'high leverage',
        title: '_t_High leverage, tight spreads_t_',
        description:
            '_t_Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms._t_',
    },
    {
        image: FavoriteMarket,
        image_alt: 'favorite market',
        title: '_t_All your favourite markets_t_',
        description:
            '_t_Trade on financial markets plus our proprietary synthetic indices that are available 24/7._t_',
    },
    {
        image: GoLongOrShort,
        image_alt: 'maximize potential profit',
        title: '_t_Go long or short_t_',
        description:
            '_t_Open long or short positions based on your predictions of the market price movements._t_',
    },
    {
        image: FriendlySupport,
        image_alt: 'friendly support',
        title: '_t_Expert and friendly support_t_',
        description: '_t_Get expert, friendly support when you need it._t_',
    },
    {
        image: InstantAccess,
        image_alt: 'instant access',
        title: '_t_Instant access_t_',
        description: '_t_Open an account and start trading in minutes._t_',
    },
]

const why_trade_content_eu_uk: TWhyTradeContent = [
    {
        image: HighLeverge,
        image_alt: 'high leverage',
        title: '_t_Tight spreads_t_',
        description: '_t_Take advantage of tight spreads on Deriv’s CFD trading platforms._t_',
    },
    {
        image: FavoriteMarket,
        image_alt: 'favorite market',
        title: '_t_All your favourite markets_t_',
        description:
            '_t_Trade on all popular markets plus our proprietary synthetic indices that are available 24/7._t_',
    },
    {
        image: GoLongOrShort,
        image_alt: 'maximize potential profit',
        title: '_t_Go long or short_t_',
        description:
            '_t_Open long or short positions based on your predictions of the market price movements._t_',
    },
    {
        image: FriendlySupport,
        image_alt: 'friendly support',
        title: '_t_Expert and friendly support_t_',
        description: '_t_Get expert, friendly support when you need it._t_',
    },
    {
        image: InstantAccess,
        image_alt: 'instant access',
        title: '_t_Instant access_t_',
        description: '_t_Open an account and start trading in minutes._t_',
    },
]

const WhyTradeCFD = () => {
    const { is_row } = useCountryRule()
    const why_trade_content = is_row ? why_trade_content_row : why_trade_content_eu_uk
    const handleSignup = useHandleSignup()

    return (
        <SectionContainer background="rgba(245, 247, 250, 0.64)" padding="4rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="4rem">
                    {localize('Why trade on CFDs with Deriv')}
                </Header>
                <Grid>
                    {why_trade_content.map((item) => (
                        <WhyTradeItem key={item.title}>
                            <img src={item.image} alt={item.image_alt} />
                            <Header
                                as="h4"
                                type="main-paragraph"
                                weight="bold"
                                mb="0.8rem"
                                mt="1.6rem"
                            >
                                {localize(item.title)}
                            </Header>
                            <Header
                                width="auto"
                                weight="normal"
                                type="main-paragraph"
                                as="p"
                                mb="4rem"
                            >
                                {localize(item.description)}
                            </Header>
                        </WhyTradeItem>
                    ))}
                </Grid>
                <Header as="h4" type="main-paragraph" weight="bold" align="left" width="100%">
                    {localize("Don't have a Deriv account yet?")}
                </Header>
                <Button onClick={handleSignup} id="dm-cfd-signup" mt="1.6rem" secondary>
                    {localize('Create free demo account')}
                </Button>
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhyTradeCFD
