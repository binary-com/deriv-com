import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Text, LinkText } from 'components/elements'
import device from 'themes/device'

export const Ul = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: var(--text-size-s);
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
    li {
        @media ${device.tabletL} {
            font-size: var(--text-size-sm);
            font-weight: 300;
        }
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

    li {
        max-width: 32rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: var(--text-size-sm);
`

export const ListWithLinks = ({ list, onClick, link_style, categoryLink }) => {
    function renderSwitch(category) {
        switch (category) {
            case '':
                break

            default:
                break
        }
    }
    return (
        <ListNoBullets>
            {list.map((item, idx) => (
                <li key={idx}>
                    <StyledLink to={categoryLink}>{item.title}</StyledLink>
                    {/* 
                <LinkText {...link_style} onClick={() => onClick(item)}>
                    {item.title}
                </LinkText> */}
                </li>
            ))}
        </ListNoBullets>
    )
}
ListWithLinks.propTypes = {
    link_style: PropTypes.object,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}
