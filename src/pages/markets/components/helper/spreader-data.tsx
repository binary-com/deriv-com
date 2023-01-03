import React from 'react'
import { SymbolContainer } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text, Header } from 'components/elements'

//TODO: refactor this component to always use instruments_type
type SpreaderDataProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const SpreaderData = ({
    instruments_type,
    src,
    text,
    path,
    raw_spread,
    markup,
    full_spread,
    standard_deviation,
    minimum_spread,
    maximum_spread,
    swap_type,
    swaps_long,
    swaps_short,
    three_day,
    has_icon,
}: SpreaderDataProps) => (
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
            <>
                {has_icon ? (
                    <SymbolContainer>
                        <img src={src} alt="symbol" />
                        <Header weight="normal" type="sub-paragraph">
                            {text}
                        </Header>
                    </SymbolContainer>
                ) : (
                    <SymbolContainer>
                        <Header weight="normal" type="sub-paragraph">
                            {path}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {raw_spread}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {markup}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {full_spread}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {standard_deviation}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {minimum_spread}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {maximum_spread}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {swap_type}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {swaps_long}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {swaps_short}
                        </Header>
                        <Header weight="normal" type="sub-paragraph">
                            {three_day}
                        </Header>
                    </SymbolContainer>
                )}
            </>
        )}
    </React.Fragment>
)

export default SpreaderData
