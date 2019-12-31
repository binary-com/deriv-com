import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    width: ${props => props.width || '100%'};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    margin: ${props => (props.m ? props.m : '')};
    padding: ${props => (props.p ? props.p : '')};
`

export default Flex
