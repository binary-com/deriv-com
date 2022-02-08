import React from 'react'
import PropTypes from 'prop-types'
import { SymbolContainer } from '../../static/style/_markets-style'
import type { MarketSymbol } from '../../static/content/_market-symbols'
import { Text } from 'components/elements'

//TODO: refactor this component to always use instruments_type
type SymbolProps = MarketSymbol & { instruments_type?: MarketSymbol[] }
const Symbol = ({ instruments_type, src, text }: SymbolProps) => (
    <React.Fragment>
        {instruments_type ? (
            <React.Fragment>
                {instruments_type.map((symbol, index) => (
                    <SymbolContainer key={index}>
                        <img src={symbol.src} />
                        <Text>{symbol.text}</Text>
                    </SymbolContainer>
                ))}
            </React.Fragment>
        ) : (
            <SymbolContainer>
                <img src={src} />
                <Text>{text}</Text>
            </SymbolContainer>
        )}
    </React.Fragment>
)

Symbol.propTypes = {
    instruments_type: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    src: PropTypes.string,
    text: PropTypes.string,
}

export default Symbol
