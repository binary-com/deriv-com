import React from 'react'
import PropTypes from 'prop-types'
import { SymbolContainer } from './_markets-style'
import { Text } from 'components/elements'

const Symbol = ({ src, text }) => (
    <SymbolContainer>
        <img src={src} />
        <Text>{text}</Text>
    </SymbolContainer>
)

Symbol.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
}

export default Symbol
