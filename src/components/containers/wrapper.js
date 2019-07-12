import styled from 'styled-components'

const Wrapper = styled.div`
    width: ${props => (props.width ? props.width : '')};
    ${props => {
        if (props.margin) {
            let margins = ''
            Object.keys(props.margin).forEach(direction => {
                margins += `margin-${direction}: ${props.margin[direction]};`
            })
            return margins
        }
    }}
    ${props => {
        if (props.padding) {
            let paddings = ''
            Object.keys(props.margin).forEach(direction => {
                paddings += `padding-${direction}: ${props.padding[direction]};`
            })
            return paddings
        }
    }}
`

export default Wrapper
