import styled from 'styled-components'
import Box from './box'

const SectionContainer = styled(Box).attrs({
    as: 'section',
})`
    width: 100%;
    padding: ${(props) => props.padding || '8rem 0'};
    position: ${(props) => props.position || 'static'};

    /* prettier-ignore */
    background-color: var(--color-${(props) => props.background || ''});
`

export default SectionContainer
