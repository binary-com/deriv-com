import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-wrap: no-wrap;

    & > * {
        flex: 1;
    }
`

export default Row
