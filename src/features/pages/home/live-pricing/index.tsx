import React from 'react'
import MarketTab from './market-tabs/market-tab'
import { button_table } from './live-pricing-section.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import useHandleLogin from 'components/hooks/use-handle-login'
import LinkButton from 'features/components/atoms/link-button'

const LivePricing = () => {
    const [is_logged_in] = useAuthCheck()
    const handleLogin = useHandleLogin()

    return (
        <Container.Fixed as="section" pt="16x" pb="16x" md={{ padding_block: '40x' }}>
            <MarketTab />
            <Flex.Box justify="center" align="center" padding="16x">
                <Typography.Paragraph
                    align="center"
                    font_family="UBUNTU"
                    textcolor="secondary"
                    size="medium"
                >
                    <Localize translate_text="_t_All spreads are indicative. To view real-time spreads, please refer to your terminal._t_" />
                </Typography.Paragraph>
            </Flex.Box>

            <Flex.Box
                justify="center"
                align="center"
                gap="4x"
                direction="col"
                md={{ direction: 'row', gap: '10x' }}
            >
                <LinkButton.Primary
                    className={button_table}
                    url={{ type: 'internal', to: '/trading-specification/' }}
                    outlined
                    font_family="UBUNTU"
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </LinkButton.Primary>

                <Button.Primary
                    className={button_table}
                    onClick={is_logged_in ? handleRedirectToTradersHub : handleLogin}
                    aria-label="Get trading"
                >
                    <Localize translate_text="_t_Trade now_t_" />
                </Button.Primary>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default LivePricing
