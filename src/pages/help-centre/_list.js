import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text, LinkText } from 'components/elements/typography'

export const Ul = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: var(--text-size-s);
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
`
export const Ol = styled(Ul).attrs({
    as: 'ol',
})`
    list-style-type: decimal;
`

export const Li = styled(Text).attrs({
    as: 'li',
})``

const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`
export const ListWithLinks = ({ list, onClick, link_style }) => (
    <ListNoBullets>
        {list.map((item, idx) => (
            <li key={idx}>
                <LinkText {...link_style} onClick={() => onClick(item)}>
                    {item.title}
                </LinkText>
            </li>
        ))}
    </ListNoBullets>
)
ListWithLinks.propTypes = {
    link_style: PropTypes.object,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}
