import React from 'react'
import { SymbolContainer, SymbolText } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text } from 'components/elements'

//TODO: refactor this component to always use instruments_type
type SymbolProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const Symbol = ({ instruments_type, src, text }: SymbolProps) => {
<<<<<<< HEAD
    const is_derived_fx = text?.props.translate_text.includes('DFX')
=======
    const is_derived_fx = text.props.translate_text.includes('DFX')
>>>>>>> d00ae32134 (Translation [FE Deriv.com squad] 85828 NikitK / Derived FX, add Vol 20  (#4067))
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

export default Symbol
