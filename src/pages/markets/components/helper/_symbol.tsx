import React from 'react'
import { SymbolContainer, SymbolText } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text } from 'components/elements'
import LazySymbol from 'components/elements/lazy-symbol'

//TODO: refactor this component to always use instruments_type
type SymbolProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const Symbol = ({ instruments_type, src, text }: SymbolProps) => {
    const is_derived_fx = text?.props.translate_text.includes('DFX')
    return (
        <React.Fragment>
            {instruments_type ? (
                <React.Fragment>
                    {instruments_type.map((symbol, index) => (
                        <SymbolContainer key={index}>
                            <LazySymbol name={symbol.src} />
                            <Text>{symbol.text}</Text>
                        </SymbolContainer>
                    ))}
                </React.Fragment>
            ) : (
                <SymbolContainer>
                    <LazySymbol name={src} />
                    {is_derived_fx ? (
                        <SymbolText as="div" type="paragraph-2">
                            {text}
                        </SymbolText>
                    ) : (
                        <Text>{text}</Text>
                    )}
                </SymbolContainer>
            )}
        </React.Fragment>
    )
}

export default React.memo(Symbol)
