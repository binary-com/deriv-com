import React from 'react'
import { BenefitTradeTypeItem } from './types'
import TradeBenefit from './trade-benefits'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'

interface TradeBenefitWrapperProps {
    data: BenefitTradeTypeItem[]
    header: TString
}

const TradeBenefitWrapper = ({ data, header }: TradeBenefitWrapperProps) => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="inverted"
            padding_block="16x"
            md={{ padding_block: '40x' }}
            lg={{ padding_block: '16x' }}
        >
            <Typography.Heading as="h1" size="large" align="center" textcolor="inverted" mt="40x">
                <Localize translate_text={header} />
            </Typography.Heading>
            <Flex.Box
                container="fluid"
                direction="col"
                justify="center"
                align="center"
                gap="20x"
                md={{ direction: 'row', gap: '12x', justify: 'center' }}
                lg={{
                    gap: '12x',
                }}
            >
                {data.map((item) => (
                    <TradeBenefit key={item.id} item={item.data} />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default TradeBenefitWrapper
