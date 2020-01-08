import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    width: ${props => (props.width ? props.width : '100%')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    margin: ${props => (props.m ? props.m : '')};
    padding: ${props => (props.p ? props.p : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};
`

export default Flex
