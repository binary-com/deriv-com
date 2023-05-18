import React from 'react'
import * as styles from '../instrumental-table.module.scss'
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
        <Flex.Box
            className={styles.single_content_item}
            align="center"
            padding="10x"
            basis={mobile_basis}
            md={{ basis: md_basis }}
        >
            <SymbolWithText content={content} />
        </Flex.Box>
    )
}

export default SingleInstrumentsItem
