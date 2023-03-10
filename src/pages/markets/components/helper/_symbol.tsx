import React from 'react'
import { SymbolContainer, SymbolText } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
//TODO: refactor this component to always use instruments_type
type SymbolProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const Symbol = ({ instruments_type, src, text }: SymbolProps) => {
    const is_derived_fx = text?.toString().includes('DFX')
    return (
        <React.Fragment>
            {instruments_type ? (
                <React.Fragment>
                    {instruments_type.map((symbol, index) => (
                        <SymbolContainer key={index}>
                            <img src={symbol.src} alt="symbol" />
                            <Text>{symbol.text}</Text>
                        </SymbolContainer>
                    ))}
                </React.Fragment>
            ) : (
                <SymbolContainer>
                    <img src={src} alt="symbol" />
                    {is_derived_fx ? (
                        <SymbolText as="div" type="paragraph-2">
                            <Localize translate_text={text} />
                        </SymbolText>
                    ) : (
                        <Localize translate_text={text} />
                    )}
                </SymbolContainer>
            )}
        </React.Fragment>
    )
}

export default Symbol
