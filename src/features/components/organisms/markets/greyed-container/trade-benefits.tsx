import React from 'react'
import { item_container } from './styles.module.scss'
import { TradeBenefitType } from './types'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'

const TradeBenefit = ({ item }: { item: TradeBenefitType }) => {
    return (
        <Flex.Box className={item_container} direction="col" align="center" gap="5x">
            <Image src={item.icon.src} width={48} height={48} alt={localize(item.icon.alt)} />

            <Flex.Item>
                <Typography.Paragraph textcolor="inverted" align="center">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default TradeBenefit
