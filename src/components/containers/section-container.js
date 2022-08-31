import styled from 'styled-components'
import Box from './box'

const SectionContainer = styled(Box).attrs({
    as: 'section',
})`
    inline-size: 100%;
    padding-block: ${(props) => props.padding || '8rem'};
    padding-inline: ${(props) => props.padding || '0'};
    position: ${(props) => props.position || 'static'};
    background-color: ${({ background }) =>
        background ? `var(--color-${background})` : 'var(--color-white)'};
`

export default SectionContainer
