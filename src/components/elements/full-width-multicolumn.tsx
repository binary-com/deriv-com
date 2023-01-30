import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

type FullWidthMultiColumnProps = {
    children?: ReactElement[]
    header?: ReactElement
    multiple_row?: boolean
}

const Item = styled(Flex)`
    max-width: 19rem;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }

    @media ${device.tabletL} {
        max-width: 18rem;
        gap: 6px;

        ${Text} {
            font-size: 14px;
        }
    }
`

const ItemContainer = styled(Box)`
    display: flex;
    margin: 40px 0 32px;
    flex-direction: row;
    max-width: 140.4rem;
    justify-content: center;
    gap: 50px;

    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
`
const StyledHeader = styled(Header)`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: white;

    @media ${device.tablet} {
        text-align: center;
        max-width: 80vw;
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }
`
const StyledTextContent = styled(Text)`
    text-align: center;
    margin-top: 1.6rem;
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    padding: 55px 0;
    margin: auto;
    background: #414652;
    color: white;
`

export const FullWidthMultiColumn = ({
    children,
    header,
    multiple_row,
}: FullWidthMultiColumnProps) => {
    const first_three_items = children.slice(0, 3)
    const last_two = children.slice(3)

    return (
        <StyledSectionContainer>
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader as="h2" type="section-title" align="center" mb="1.2rem" lh="1.25">
                        {header}
                    </StyledHeader>
                </div>
                {multiple_row ? (
                    <div>
                        <ItemContainer max_width="48.6rem" width="100%">
                            {first_three_items.map((child, idx) => {
                                {
                                    const { text, icon, item_title } = child.props
                                    return (
                                        <Item key={idx} ai="center" direction="column">
                                            {icon}
                                            {<StyledTextContent>{item_title}</StyledTextContent>}
                                            {<StyledTextContent>{text}</StyledTextContent>}
                                        </Item>
                                    )
                                }
                            })}
                        </ItemContainer>
                        <ItemContainer max_width="48.6rem" width="100%">
                            {last_two.map((child, idx) => {
                                {
                                    const { text, icon, item_title } = child.props
                                    return (
                                        <Item key={idx} ai="center" direction="column">
                                            {icon}
                                            {<StyledTextContent>{item_title}</StyledTextContent>}
                                            {<StyledTextContent>{text}</StyledTextContent>}
                                        </Item>
                                    )
                                }
                            })}
                        </ItemContainer>
                    </div>
                ) : (
                    <ItemContainer max_width="48.6rem" width="100%">
                        {children.map((child, idx) => {
                            {
                                const { text, icon } = child.props
                                return (
                                    <Item key={idx} ai="center" direction="column">
                                        {icon}
                                        {<StyledTextContent>{text}</StyledTextContent>}
                                    </Item>
                                )
                            }
                        })}
                    </ItemContainer>
                )}
            </Flex>
        </StyledSectionContainer>
    )
}
