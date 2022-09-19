import React from 'react'
import { SymbolContainer } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text } from 'components/elements'

//TODO: refactor this component to always use instruments_type
type SymbolProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const Symbol = ({ instruments_type, src, text }: SymbolProps) => {
    return (
        <>
            {instruments_type ? (
                <>
                    {instruments_type.map((symbol) => (
                        <SymbolContainer key={symbol.text.props.translate_text}>
                            <img src={symbol.src} />
                            <Text>{symbol.text}</Text>
                        </SymbolContainer>
                    ))}
                </>
            ) : (
                <SymbolContainer>
                    <img src={src} />
                    <Text>{text}</Text>
                </SymbolContainer>
            )}
        </>
    )
}

export default Symbol
