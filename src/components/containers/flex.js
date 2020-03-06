import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    margin: ${props => (props.m ? props.m : '')};
    margin-top: ${props => (props.mt ? props.mt : '')};
    margin-bottom: ${props => (props.mb ? props.mb : '')};
    margin-right: ${props => (props.mr ? props.mr : '')};
    margin-left: ${props => (props.ml ? props.ml : '')};
    padding: ${props => (props.p ? props.p : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};
`

export default Flex
