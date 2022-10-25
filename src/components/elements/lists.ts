import styled from 'styled-components'

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 2rem;
    color: var(--color-black);
`

const Li = styled.li`
    margin-bottom: 0.8rem;

    &:last-child {
        margin-bottom: 0;
    }
`

export { Ul, Li }
