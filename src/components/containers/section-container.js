import styled from 'styled-components'
import Box from './box'
import { SizeMixin, PaddingMixin } from 'themes/mixins'

const SectionContainer = styled(Box).attrs({
    as: 'section',
})`
    ${SizeMixin({ width: '100%' })}
    ${(props) => PaddingMixin({ all: props?.padding ?? '8rem 0' })}
    position: ${(props) => props.position || 'static'};
    background-color: ${({ background }) =>
        background ? `var(--color-${background})` : 'var(--color-white)'};
`

export default SectionContainer
