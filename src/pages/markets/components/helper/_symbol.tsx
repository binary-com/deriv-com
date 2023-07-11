//TODO: refactor this component to always use instruments_type
import React from 'react'
import { SymbolContainer, SymbolText } from '../../static/style/_markets-style'
import { Text } from 'components/elements'
import { TMarketSymbol } from 'pages/markets/static/content/_types'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'

type SymbolProps = {
    text?: TString
    src?: string
    instruments_type?: TMarketSymbol[]
}

const Symbol = ({ instruments_type, src, text }: SymbolProps) => {
    const is_derived_fx = text?.includes('DFX')

    return (
        <React.Fragment>
            {instruments_type ? (
                <React.Fragment>
                    {instruments_type.map(({ src, text }) => (
                        <SymbolContainer key={text}>
                            <img src={src} alt={localize('_t_symbol_t_')} />
                            <Text>
                                <Localize translate_text={text} />
                            </Text>
                        </SymbolContainer>
                    ))}
                </React.Fragment>
            ) : (
                <SymbolContainer>
                    {src && <img src={src} alt={localize('_t_symbol_t_')} />}
                    {is_derived_fx ? (
                        <SymbolText type="paragraph-2">
                            {text && <Localize translate_text={text} />}
                        </SymbolText>
                    ) : (
                        <Text>{text && <Localize translate_text={text} />}</Text>
                    )}
                </SymbolContainer>
            )}
        </React.Fragment>
    )
}

export default Symbol
