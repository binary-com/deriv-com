import React from 'react'
import styled from 'styled-components'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'

const SymbolContainer = styled(Flex)`
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: flex-start;
    padding-right: 5vw;

    img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    ${Header} {
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
    }

    @media ${device.mobileL} {
        > img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        ${Header} {
            font-size: 12px;
        }
    }
`

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
                        <Header>{symbol.text}</Header>
                    </SymbolContainer>
                ))}
            </React.Fragment>
        ) : (
            <>
                {has_icon ? (
                    <SymbolContainer>
                        <img src={src} alt="symbol" />
                        <Header weight="normal" type="paragraph-1">
                            {text}
                        </Header>
                    </SymbolContainer>
                ) : (
                    <SymbolContainer>
                        <Header weight="normal" type="paragraph-2">
                            {path}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {raw_spread}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {markup}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {full_spread}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {standard_deviation}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {minimum_spread}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {maximum_spread}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {swap_type}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {swaps_long}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {swaps_short}
                        </Header>
                        <Header weight="normal" type="paragraph-2">
                            {three_day}
                        </Header>
                    </SymbolContainer>
                )}
            </>
        )}
    </React.Fragment>
)

export default SpreaderData
