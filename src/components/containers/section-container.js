import styled from 'styled-components'

const SectionContainer = styled.section`
    width: 100%;
    padding: ${props => props.padding || '8rem 0'};
    background-color: ${props => props.bgcolor || 'transparent'};
`

export default SectionContainer
