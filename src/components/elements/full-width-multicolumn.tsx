import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Box, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import Button from 'components/custom/_button'
import device from 'themes/device'
import { TString } from 'types/generics'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { LocalizedLink } from 'components/localization/localized-link'
import { Localize } from 'components/localization'

export type TChild = {
    text?: TString
    item_title?: TString
    icon: ReactElement
    link_text?: TString
    link?: string
}

type FullWidthMultiColumnProps = {
    header: TString
    button_text?: TString
    sub_header?: TString
    button_title?: TString
    button_title_element?: React.ReactElement
    children?: Array<ReactElement<TChild>>
    multiple_row?: boolean
    header_width?: string
    subtext_width?: string
    gap?: string
}

type TStyledHeader = {
    header_width?: string
}

type TStyledTextContent = {
    subtext_width?: string
}

const Item = styled(Flex)`
    max-width: 22rem;
    width: 100%;

    img {
        width: 48px;
        margin-bottom: 1rem;
    }

    @media ${device.tablet} {
        max-width: 80%;
        gap: 6px;

        ${Text} {
            font-size: 14px;
        }
    }
`
const ItemContainer = styled(Box)`
    display: flex;
    margin: 40px 0 2rem;
    flex-direction: row;
    max-width: 140.4rem;
    justify-content: center;
    gap: ${(props) => props.gap || '40px'};

    @media ${device.laptop} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
`
const StyledHeader = styled(Header)<TStyledHeader>`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: white;
    margin-top: 4.5rem;
    max-width: ${(props) => (props.header_width ? props.header_width : '80vw')};

    @media ${device.mobileL} {
        text-align: center;
        max-width: ${(props) => (props.header_width ? props.header_width : '80vw')};
        font-size: 24px;
        margin-top: -1rem;
        line-height: 30px;
    }
`
const StyledSubHeader = styled(Header)`
    font-size: 24px;
    line-height: 36px;
    color: white;
    font-family: Ubuntu, sans-serif;

    @media ${device.tablet} {
        text-align: center;
        max-width: 80vw;
        margin-bottom: 8px;
        font-size: 22px;
        line-height: 30px;
    }
`
const StyledTitle = styled(Header)`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    width: 237px;
    color: white;
    text-align: center;

    @media ${device.tablet} {
        max-width: 90vw;
        font-weight: 700;
        font-size: 14px;
        line-height: 30px;
    }
`
const StyledButtonContent = styled(Text)`
    text-align: center;
    margin-top: 1.6rem;
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const StyledTextContent = styled.div<TStyledTextContent>`
    text-align: center;
    margin-top: 1.6rem;
    color: white;
    width: ${({ subtext_width }) => (subtext_width ? subtext_width : '231px')};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'IBM Plex Sans', sans-serif;
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        font-size: 14px;
        margin-top: 0;
        width: ${(props) => (props.subtext_width ? props.subtext_width : 'fit-content')};
        margin-bottom: 0;
    }
`
const StyledSectionContainer = styled(SectionContainer)`
    padding: 55px 0;
    margin: auto;
    background: #414652;
    color: white;

    @media ${device.tablet} {
        padding: 40px 0;
        margin-top: 40px;
    }
`
const LearnMore = styled(LocalizedLink)`
    font-size: 16px;
    font-family: Ubuntu, sans-serif;
    color: var(--color-white-1);
`

export const FullWidthMultiColumn = ({
    children,
    header,
    sub_header,
    multiple_row,
    button_title,
    button_title_element,
    button_text,
    gap,
    header_width,
    subtext_width,
}: FullWidthMultiColumnProps) => {
    const handleSignup = useHandleSignup()
    const first_three_items = children.slice(0, 3)
    const last_two = children.slice(3)
    const items = multiple_row ? [first_three_items, last_two] : [children]

    return (
        <StyledSectionContainer>
            <Flex direction="column" max-width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledHeader
                    header_width={header_width}
                    as="h2"
                    type="section-title"
                    align="center"
                    mb="0.1rem"
                    lh="1.25"
                >
                    <Localize translate_text={header} />
                </StyledHeader>
                <StyledSubHeader
                    as="p"
                    type="section-title"
                    align="center"
                    mb="1.2rem"
                    lh="1.25"
                    weight="400"
                >
                    {sub_header && <Localize translate_text={sub_header} />}
                </StyledSubHeader>
                {items.map((group, i) => (
                    <ItemContainer max-width="48.6rem" width="100%" key={i} gap={gap}>
                        {group.map((child, idx) => {
                            const { text, icon, item_title, link_text, link } = child.props
                            return (
                                <Item key={idx} ai="center" direction="column">
                                    {icon}
                                    {item_title && (
                                        <StyledTitle>
                                            <Localize translate_text={item_title} />
                                        </StyledTitle>
                                    )}
                                    {text && (
                                        <StyledTextContent subtext_width={subtext_width}>
                                            <Localize translate_text={text} />
                                        </StyledTextContent>
                                    )}
                                    {link_text && (
                                        <LearnMore to={link}>
                                            <Localize translate_text={link_text} />
                                        </LearnMore>
                                    )}
                                </Item>
                            )
                        })}
                    </ItemContainer>
                ))}
                {button_title && (
                    <StyledButtonContent>
                        <Localize translate_text={button_title} />
                    </StyledButtonContent>
                )}
                {button_title_element && (
                    <StyledButtonContent>{button_title_element}</StyledButtonContent>
                )}
                {button_text && <Button onClick={handleSignup} label={button_text} primary />}
            </Flex>
        </StyledSectionContainer>
    )
}
