import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import Button from 'components/custom/_button'
import device from 'themes/device'
import { TString } from 'types/generics'
import useHandleSignup from 'components/hooks/use-handle-signup'

type FullWidthMultiColumnProps = {
    children?: ReactElement[]
    header?: ReactElement
    button_title?: ReactElement
    button_text?: TString | ReactElement
    multiple_row?: boolean
}

const Item = styled(Flex)`
    max-width: 24rem;
    width: 100%;

    img {
        width: 34px;
        margin-bottom: 10px;
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
        font-size: 24px;
        line-height: 30px;
    }
`
const StyledTitle = styled(Header)`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: white;
    text-align: center;

    @media ${device.tablet} {
        max-width: 80vw;
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 14px;
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
    margin-bottom: 1.6rem;

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
    button_title,
    button_text,
}: FullWidthMultiColumnProps) => {
    const handleSignup = useHandleSignup()
    const first_three_items = children.slice(0, 3)
    const last_two = children.slice(3)
    const items = multiple_row ? [first_three_items, last_two] : [children]
    return (
        <StyledSectionContainer>
            <Flex direction="column" max-width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledHeader as="h2" type="section-title" align="center" mb="1.2rem" lh="1.25">
                    {header}
                </StyledHeader>
                {items.map((group, i) => (
                    <ItemContainer max-width="48.6rem" width="100%" key={i}>
                        {group.map((child, idx) => {
                            const { text, icon, item_title } = child.props
                            return (
                                <Item key={idx} ai="center" direction="column">
                                    {icon}
                                    {item_title && <StyledTitle as="h3">{item_title}</StyledTitle>}
                                    {text && <StyledTextContent>{text}</StyledTextContent>}
                                </Item>
                            )
                        })}
                    </ItemContainer>
                ))}
                {button_title && <StyledTextContent>{button_title}</StyledTextContent>}
                {button_text && <Button onClick={handleSignup} label={button_text} primary />}
            </Flex>
        </StyledSectionContainer>
    )
}
