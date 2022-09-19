import styled from 'styled-components'
import Box from './box'

type SectionContainerType = {
    padding?: string
    position?: string
    background?: string
}

const SectionContainer = styled(Box).attrs({
    as: 'section',
})<SectionContainerType>`
    width: 100%;
    padding: ${(props) => props.padding || '8rem 0'};
    position: ${(props) => props.position || 'static'};
    background-color: ${({ background }) =>
        background ? `var(--color-${background})` : 'var(--color-white)'};
`

export default SectionContainer
