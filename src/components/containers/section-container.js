import styled from 'styled-components'
import Box from './box'
import { size } from 'themes/device'

const hasResponsivePadding = (props) => {
    let has_padding = false
    const possibleOptions = ['p', 'pt', 'pr', 'pb', 'pl']

    Object.keys(size).forEach((device) => {
        if (props[device] && possibleOptions.includes(Object.keys(props[device])[0])) {
            has_padding = true
        }
    })

    return has_padding
}

const SectionContainer = styled(Box).attrs({
    as: 'section',
})`
    width: 100%;
    padding: ${(props) => props.padding || hasResponsivePadding(props) || '8rem 0'};
    position: ${(props) => props.position || 'static'};

    /* prettier-ignore */
    background-color: var(--color-${(props) => props.background || 'white'});
`

export default SectionContainer
