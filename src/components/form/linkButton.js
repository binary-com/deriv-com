import styled from 'styled-components'
import { LocalizedLink } from 'components/localization'

const LinkButton = styled(LocalizedLink)`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        transform: scale(0.95);
    }
`
export default LinkButton
