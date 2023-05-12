import React from 'react'
import MarketTab from './market-tabs/market-tab'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/custom/utils'

const handleTradingSpec = () => {
    window.location.href = '/trading-specification'
}

const LivePricing = () => {
    const [is_logged_in] = useAuthCheck()

    return (
        <Container.Fixed as="section" pt="16x" pb="16x" md={{ padding_block: '40x' }}>
            <MarketTab />
            <Flex.Box justify="center" align="center" padding="16x">
                <Typography.Paragraph
                    align="center"
                    font_family="UBUNTU"
                    textcolor="secondary"
                    size="small"
                >
                    <Localize translate_text="_t_All spreads are indicative. To view real-time spreads, please refer to your terminal._t_" />
                </Typography.Paragraph>
            </Flex.Box>

            <Flex.Box justify="center" align="center" gap="10x">
                <Button.Primary
                    onClick={handleTradingSpec}
                    aria-label="Check trading specs"
                    outlined
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </Button.Primary>
                {is_logged_in && (
                    <Button.Primary onClick={handleGetTrading} aria-label="Get trading">
                        <Localize translate_text="_t_Trade now_t_" />
                    </Button.Primary>
                )}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default LivePricing
