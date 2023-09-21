import React from 'react'
import TradeSteps from 'features/components/organisms/markets/markets-trade-steps/trade-steps'
import { StepsTradeTypeItem } from 'features/components/organisms/markets/markets-trade-steps/types'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Button from 'features/components/atoms/button'
import usePpc from 'features/hooks/use-ppc'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'

interface TradeStepsType {
    data: StepsTradeTypeItem[]
    header: TString
}

const TradeStepsWrapper = ({ header, data }: TradeStepsType) => {
    const { is_ppc_redirect } = usePpc()
    const handleSignup = useHandleSignup(is_ppc_redirect)

    return (
        <Container.Fixed
            as="section"
            bgcolor="secondary"
            padding_block="20x"
            lg={{ padding: '40x' }}
            md={{ padding_block: '40x' }}
            padding_inline="8x"
        >
            <Typography.Heading
                as="h2"
                size="small"
                align="center"
                pb="12x"
                lg={{ padding: '20x' }}
            >
                <Localize translate_text={header} />
            </Typography.Heading>

            <Flex.Box
                container="fluid"
                direction="col"
                justify="center"
                gap="8x"
                md={{ direction: 'row', gap: '12x', justify: 'center' }}
                lg={{
                    gap: '12x',
                }}
            >
                {data.map((item) => (
                    <TradeSteps key={item.id} item={item.data} />
                ))}
            </Flex.Box>
            <Flex.Box
                container="fluid"
                justify="center"
                align="center"
                pt="20x"
                lg={{ padding_block: '20x' }}
            >
                <Button.Primary aria-label="Signup" onClick={handleSignup}>
                    <Localize translate_text="_t_Sign up now_t_" />
                </Button.Primary>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default TradeStepsWrapper
