import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import { CommonMarketSymbol } from 'features/components/molecules/instruments-table/types'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import LazySymbol from 'components/elements/lazy-symbol'
const SymbolWithText = ({ content }: { content: CommonMarketSymbol }) => {
    const { src, text } = content
    return (
        <Flex.Box gap="5x" align="center">
            <LazySymbol name={src} />
            <Typography.Paragraph size="small">
                <Localize translate_text={text} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SymbolWithText
