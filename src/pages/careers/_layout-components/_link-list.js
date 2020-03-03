import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Container, Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import Chevron from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    width: 16px;
    height: 16px;
    transform: rotate(180deg);

    g {
        g {
            fill: var(--color-black);
        }
    }
`
const List = styled.ul`
    width: 99.6rem;
    padding-bottom: 2rem;
`

const ListItem = styled.li`
    width: 100%;
    height: 8.4rem;
    border-bottom: 1px solid var(--color-grey-7);
    transition: background-color 0.25s;
    padding: 0 1.6rem;

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
    margin-right: 16px;
    border-radius: 50%;
    background-color: var(--color-green);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledText = styled(Text)`
    min-width: 50%;
    max-width: 45rem;
`
const MiddleText = styled(Text)`
    margin-right: auto;
`
// list_items = [{ text: 'Marketing',  to: '/marketing/', number: 5 (optional), middle_text: 'Dubai, United Arab Emirates' (optional) }]
export const LinkList = ({ list_items }) => (
    <Container>
        <List>
            {list_items &&
                list_items.map((item, idx) => (
                    <ListItem key={idx}>
                        <LocalizedLink to={item.to}>
                            <Flex ai="center" jc="unset">
                                <StyledText secondary="true" weight="bold">
                                    {item.text}
                                </StyledText>
                                <MiddleText>{item.middle_text}</MiddleText>
                                <Flex ai="center" width="unset">
                                    {item.number && <Circle>{item.number}</Circle>}
                                    <ChevronRight />
                                </Flex>
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
