import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'

type CardItemsProps = {
    header: TString
    description: TString
}

const CardBasic = ({ header, description }: CardItemsProps) => {
    return (
        <Flex.Box
            className={dclsx('item_container')}
            direction="col"
            gap="4x"
            radius="8x"
            lg={{ padding: '12x' }}
            padding="8x"
        >
            <Typography.Heading as="h3" size="xs">
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph md={{ mb: '10x' }}>
                <Localize translate_text={description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default CardBasic
