//TODO: refactor this component to always use instruments_type
import React from 'react'
import {
    SymbolContainer,
    SymbolText,
    SymbolWrapper,
    StyledBadge,
} from '../../static/style/_markets-style'
import { Text } from 'components/elements'
import { TMarketSymbol } from 'pages/markets/static/content/_types'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'

type SymbolProps = {
    text?: TString
    src?: string
    instruments_type?: TMarketSymbol[]
    has_demo_tag?: boolean
}

const TradeSymbol = ({ instruments_type, src, text, has_demo_tag }: SymbolProps) => {
    const is_derived_fx = text?.includes('DFX')

    return (
        <React.Fragment>
            {instruments_type ? (
                <React.Fragment>
                    {instruments_type.map(({ src, text }) => (
                        <SymbolContainer key={text}>
                            <SymbolWrapper>
                                <img src={src} alt={localize('_t_symbol_t_')} />
                                <Text>
                                    <Localize translate_text={text} />
                                </Text>
                            </SymbolWrapper>
                        </SymbolContainer>
                    ))}
                </React.Fragment>
            ) : (
                <SymbolContainer>
                    {has_demo_tag && <StyledBadge>Demo</StyledBadge>}
                    <SymbolWrapper>
                        {src && <img src={src} alt={localize('_t_symbol_t_')} />}
                        {is_derived_fx ? (
                            <SymbolText type="paragraph-2">
                                {text && <Localize translate_text={text} />}
                            </SymbolText>
                        ) : (
                            <Text>{text && <Localize translate_text={text} />}</Text>
                        )}
                    </SymbolWrapper>
                </SymbolContainer>
            )}
        </React.Fragment>
    )
}

export default TradeSymbol
