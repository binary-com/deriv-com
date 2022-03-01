import React, { ReactElement } from 'react'
import { SymbolContainer } from '../../static/style/_markets-style'
import { Text } from 'components/elements'

type SymbolProps = {
    instruments_type: { src: string; text: ReactElement }[]
}

const Symbol = ({ instruments_type }: SymbolProps) => (
    <React.Fragment>
        {instruments_type.map((symbol, index) => (
            <SymbolContainer key={index}>
                <img src={symbol.src} alt="" />
                <Text>{symbol.text}</Text>
            </SymbolContainer>
        ))}
    </React.Fragment>
)

export default Symbol
