import React from 'react'
import PropTypes from 'prop-types'
import { SymbolContainer } from '../../static/style/_markets-style'
import { Text } from 'components/elements'

const Symbol = ({ instruments_type }) => (
    <React.Fragment>
        {instruments_type.map((symbol, index) => (
            <SymbolContainer key={index}>
                <img src={symbol.src} alt="" />
                <Text>{symbol.text}</Text>
            </SymbolContainer>
        ))}
    </React.Fragment>
)

Symbol.propTypes = {
    instruments_type: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    src: PropTypes.string,
    text: PropTypes.string,
}

export default Symbol
