import React from 'react'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import MarketTab from 'components/elements/market-tab'
import { TString } from 'types/generics'

const handleTradingSpec = () => {
    window.location.href = '/trading-specification'
}

const LivePricing = () => {
    const [is_logged_in] = useAuthCheck()
    const disclaimer_text: TString =
        '_t_All spreads are indicative. To view real-time spreads, please refer to your terminal._t_'
    const button_text: TString = '_t_Check trading specs_t_'
    const trade_now_button: TString = '_t_Trade now_t_'

    return (
        <Container.Fixed as="section" pt="16x" pb="16x" md={{ padding_block: '40x' }}>
            <MarketTab is_home={true} />
            <Flex.Box justify="center" align="center" padding="16x">
                <Typography.Paragraph align="center" font_family="UBUNTU" textcolor="secondary">
                    <Localize translate_text={disclaimer_text} />
                </Typography.Paragraph>
            </Flex.Box>

            <Flex.Box justify="center" align="center" gap="10x">
                <Button.Primary
                    onClick={handleTradingSpec}
                    aria-label="Check trading specs"
                    outlined
                >
                    <Localize translate_text={button_text} />
                </Button.Primary>
                {is_logged_in && (
                    <Button.Primary onClick={handleGetTrading} aria-label="Get trading">
                        <Localize translate_text={trade_now_button} />
                    </Button.Primary>
                )}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default LivePricing
