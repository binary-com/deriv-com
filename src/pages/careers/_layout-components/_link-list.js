import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Container, Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'

const List = styled.ul`
    width: 99.6rem;
    padding-bottom: 2rem;
`

const ListItem = styled.li`
    width: 100%;
    height: 8.4rem;
    border-bottom: 1px solid var(--color-grey-7);
    transition: background-color 0.25s;

    a {
        text-decoration: none;
    }
    &:hover {
        cursor: pointer;
        background-color: var(--color-grey-6);
    }
`
const Circle = styled.span`
    font-size: 2.1rem;
    font-weight: bold;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-green);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
`

// list_items = [{ text, number }]
export const LinkList = ({ list_items }) => (
    <Container>
        <List>
            {list_items.map((item, idx) => (
                <ListItem key={idx}>
                    <LocalizedLink to={item.to}>
                        <Flex ai="center" jc="space-between">
                            <Text secondary="true" weight="bold">
                                {item.text}
                            </Text>{' '}
                            {item.number && <Circle>{item.number}</Circle>}
                        </Flex>
                    </LocalizedLink>
                </ListItem>
            ))}
        </List>
    </Container>
)

LinkList.propTypes = {
    list_items: PropTypes.array,
}
