import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import { CommonMarketSymbol } from 'features/components/molecules/instruments-table/types'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

interface SingleInstrumentsItemProps {
    content: CommonMarketSymbol
}

const SymbolWithText = ({ content }: SingleInstrumentsItemProps) => {
    const { src, text } = content
    return (
        <Flex.Box gap="5x">
            <img src={src} alt="symbol" />
            <Typography.Paragraph>
                <Localize translate_text={text} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SymbolWithText
