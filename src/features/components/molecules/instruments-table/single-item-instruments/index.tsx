import React from 'react'
import SymbolWithText from './symbol-text'
import Flex from 'features/components/atoms/flex-box'
import { CommonMarketSymbol } from 'features/components/molecules/instruments-table/types'
import { TFlexBasis } from 'features/types'

interface SingleInstrumentsItemProps {
    content: CommonMarketSymbol
    mobile_basis: TFlexBasis
    md_basis: TFlexBasis
}

const SingleInstrumentsItem = ({ content, mobile_basis, md_basis }: SingleInstrumentsItemProps) => {
    return (
        <Flex.Box align="center" padding="5x" basis={mobile_basis} md={{ basis: md_basis }}>
            <SymbolWithText content={content} />
        </Flex.Box>
    )
}

export default SingleInstrumentsItem
