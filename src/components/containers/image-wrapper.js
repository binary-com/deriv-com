import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: ${props => props.width};
    margin-top: ${props => props.my};
    margin-bottom: ${props => props.my};
    margin-left: ${props => props.mx};
    margin-right: ${props => props.mx};
`

export default ImageWrapper
