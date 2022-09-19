import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './_career_container'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

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
        background-color: rgba(244, 244, 244, 0.4);
    }
    @media ${device.tabletL} {
        height: 100%;
        padding: 1.6rem;
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
    font-size: var(--text-size-m);
    padding-right: 10px;
`
const MiddleText = styled(Text)`
    margin-right: auto;
    font-size: var(--text-size-sm);
`
type ListItemsProps = {
    to: string
    text: string
    middle_text: string
    number: number
}

type Props = {
    list_items: ListItemsProps[]
}

export const LinkList = ({ list_items }: Props) => (
    <Container>
        <List>
            {list_items &&
                list_items.map((item, idx) => (
                    <ListItem key={idx}>
                        <LocalizedLink to={item.to}>
                            <Flex ai="center" jc="unset">
                                <Flex tablet_direction="column" tablet_ai="unset" ai="center">
                                    <StyledText secondary weight="bold">
                                        {item.text}
                                    </StyledText>
                                    <MiddleText>{item.middle_text}</MiddleText>
                                </Flex>
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
