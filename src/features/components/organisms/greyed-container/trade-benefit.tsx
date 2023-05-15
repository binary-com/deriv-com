import React from 'react'
import { item_container, item_description } from './style.module.scss'
import { TradeBenefitType } from './types'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'

interface TradeBenefitProps {
    item: TradeBenefitType
}

const TradeBenefit = ({ item }: TradeBenefitProps) => {
    return (
        <Flex.Box
            className={item_container}
            direction="col"
            align="center"
            gap="5x"
            md={{
                padding_block: '20x',
            }}
        >
            <Image src={item.icon_src} width={48} height={48} />

            <Flex.Item className={item_description} padding_inline={'5x'}>
                <Typography.Paragraph
                    size="large"
                    textcolor="inverted"
                    md={{ mb: '10x' }}
                    align="center"
                >
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default TradeBenefit
