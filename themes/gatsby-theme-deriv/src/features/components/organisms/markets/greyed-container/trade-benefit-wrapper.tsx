import React from 'react'
import { BenefitTradeTypeItem } from './types'
import TradeBenefit from './trade-benefits'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import useVisibleContent from 'components/hooks/use-visible-content'
import useBuildVariant from 'features/hooks/use-build-variant'

interface TradeBenefitWrapperProps {
    data: BenefitTradeTypeItem[]
    header: TString
}

const TradeBenefitWrapper = ({ data, header }: TradeBenefitWrapperProps) => {
    const { region } = useBuildVariant()
    const visible_trade_benefits = useVisibleContent({ content: data, config: { is_eu: region === 'eu' ? true : false } })
    return (
        <Container.Fixed
            as="section"
            bgcolor="inverted"
            padding_block="20x"
            padding_inline="8x"
            lg={{ padding: '40x' }}
        >
            <Typography.Heading
                as="h2"
                size="small"
                align="center"
                textcolor="inverted"
                padding_inline="40x"
                pb="10x"
                lg={{ padding_block: '20x' }}
            >
                <Localize translate_text={header} />
            </Typography.Heading>
            <Flex.Box
                direction="col"
                justify="center"
                align="center"
                gap="12x"
                lg={{ direction: 'row', padding_inline: '20x', pb: '20x' }}
            >
                {visible_trade_benefits.map((item) => (
                    <TradeBenefit key={item.id} item={item.data} />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default TradeBenefitWrapper
