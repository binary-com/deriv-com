import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink, localize } from 'components/localization'
import device from 'themes/device'
// SVG
import Arrow from 'images/svg/elements/card-arrow.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { ImageWithDireciton } from 'components/elements'
import { TString } from 'types/generics'

type TCard = {
    title: TString
    cover_content: TString
    content: TString
    content_component?: React.ReactElement[]
    Icon?: () => ReactElement
    cover_background?: string
    min_height?: string
    width?: string
    is_selected?: boolean
    is_inline_icon?: boolean
    word_break_cover?: boolean
}

type TCardLink = {
    title: TString
    to: string
    Icon?: () => ReactElement
    onClick?: () => void
    type?: string
    external?: boolean
    target?: string
    rel?: string
}

type TNavCard = {
    content: TString
    title: TString
    aria_label?: string
    Icon?: () => ReactElement
    onClick?: () => void
    to?: string
    type?: string
    external?: boolean
    target?: string
    otherlinkprops?: { rel?: string }
}

type TCardWrapper = {
    width?: string
    is_selected?: boolean
    min_height?: string
    is_rtl: boolean
}

type TCardCover = {
    background_color: string
    is_selected: boolean
}

export const CardStyle = css`
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background-color: var(--color-white);
`
const CardContent = styled(Text)`
    font-size: var(--text-size-xs);
    margin-top: 0.5rem;
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const CardCover = styled.div<TCardCover>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.background_color};
    border-radius: 6px;
    top: 0;
    transition: 0.18s cubic-bezier(0.1, 0.25, 0.25, 1);
    display: flex;
    align-items: center;
    flex-direction: row;
    transform: ${(props) =>
        props.is_selected ? 'translate3d(-3%, 0, 0)' : 'translate3d(-105%, 0, 0)'};

    & > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1.6rem;
        align-items: center;
    }
`
const CardWrapper = styled.article<TCardWrapper>`
    ${CardStyle}
    position: relative;
    overflow: hidden;
    height: 100%;
    min-height: ${(props) => (props.min_height ? props.min_height : '0')};
    width: ${(props) => (props.width ? props.width : '38.4rem')};
    padding: 1.8rem 2rem 1.4rem 1.2rem;
    border-radius: 6px;

    &:hover {
        ${CardCover} {
            transform: ${(props) =>
                props.is_rtl ? 'translate3d(3%, 0, 0)' : 'translate3d(-3%, 0, 0)'};

            @media ${device.tabletL} {
                transform: ${(props) =>
                    props.is_rtl ? 'translate3d(5%, 0, 0)' : 'translate3d(-5%, 0, 0)'};
            }
        }
    }

    @media ${device.tabletL} {
        padding: 2rem;
        margin-top: 1.77rem;
        margin-right: 0;
        width: 100%;
    }
`
const LinkRightDiagonal = styled.div`
    opacity: 0;
    justify-self: flex-end;
    align-self: center;

    & > svg,
    img {
        width: 16px;
        height: 16px;
    }
`
const HoverFlex = styled(Flex)`
    &:hover {
        background-color: var(--color-grey-30);

        ${LinkRightDiagonal} {
            opacity: 1;
        }
    }
`
const IconRightWrapper = styled.div`
    & > svg,
    img {
        height: 24px;
        width: 24px;
        margin-right: 1.6rem;
    }
`
const RelativeFlex = styled(Flex)`
    position: relative;
`
const ContentWrapper = styled.div`
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin-top: 2.7rem;

        ${Header} {
            font-size: 3rem;
        }
    }
`
const IconContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    ${Header} {
        display: flex;
        align-items: center;
    }
`
const CardContentContainer = styled.div`
    margin-left: 1.6rem;
`
const IconWrapper = styled.div`
    & > svg {
        width: 7.9rem;
        height: 7.9rem;
    }
`
const CoverContent = styled(Text)`
    color: white;
    font-weight: bold;
    font-size: var(--text-size-m);
`
const NavContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const RightDiagonal = styled.img<{ is_rtl: boolean }>`
    transform: ${({ is_rtl }) => {
        return is_rtl ? 'scaleX(-1)' : null
    }};
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    width: 16px;
    height: 16px;
    right: 16px;
    top: 16px;

    @media ${device.tabletL} {
        opacity: 1;
        width: 16px;
        height: 16px;
        right: 0;
        margin-right: 0;
        top: 0;
    }
`
const ResponsiveHeader = styled(Header)`
    transition: color 0.2s;
    @media ${device.tabletL} {
        font-size: 16px;
    }
`
const ResponsiveText = styled(Text)`
    transition: color 0.2s;
    font-size: var(--text-size-xs);
    max-width: 212px;
    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const FlexHover = styled(Flex)`
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    @media ${device.mobileL} {
        padding: 0;
    }

    &:hover {
        background-color: var(--color-grey-30);

        ${RightDiagonal} {
            opacity: 1;
        }
        ${Text} {
            color: var(--color-black-3);
        }
    }
`
const SvgWrapper = styled.div`
    & > svg,
    img {
        width: 32px;
        height: 32px;
        margin-right: 1.6rem;

        @media ${device.mobileL} {
            width: 24px;
            height: 24px;
        }
    }
`

const Content = ({ content, content_component }: Pick<TCard, 'content' | 'content_component'>) => (
    <CardContent>
        <Localize translate_text={content} components={content_component} />
    </CardContent>
)

export const Card = ({
    children,
    Icon,
    title,
    content,
    content_component,
    width,
    min_height,
    is_inline_icon,
    cover_background,
    cover_content,
    is_selected,
    word_break_cover,
}: React.PropsWithChildren<TCard>) => {
    const is_rtl = useIsRtl()
    const untranslated_cover_content = cover_content.substring(3, cover_content.length - 3)

    const final_content = word_break_cover ? (
        <Flex direction="column" jc="flex-start" ai="flex-start">
            <CoverContent>{untranslated_cover_content.split(' ')[0]}</CoverContent>
            <CoverContent>{untranslated_cover_content.split(' ').slice(1).join(' ')}</CoverContent>
        </Flex>
    ) : (
        <CoverContent>
            <Localize translate_text={cover_content} />
        </CoverContent>
    )

    return (
        <CardWrapper is_rtl={is_rtl} width={width} min_height={min_height}>
            {!children && (
                <>
                    {is_inline_icon ? (
                        <>
                            <CardCover
                                background_color={cover_background}
                                is_selected={is_selected}
                            >
                                <div>
                                    {final_content}
                                    <ImageWithDireciton
                                        src={Arrow}
                                        alt={localize('_t_arrow_t_')}
                                        width="16"
                                        height="16"
                                    />
                                </div>
                            </CardCover>
                            <IconContainer>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <CardContentContainer>
                                    <Header as="h4" type="sub-section-title" weight="bold">
                                        <Localize translate_text={title} />
                                    </Header>
                                    <Content
                                        content={content}
                                        content_component={content_component}
                                    />
                                </CardContentContainer>
                            </IconContainer>
                        </>
                    ) : (
                        <>
                            <Icon />
                            <ContentWrapper>
                                <Text size="var(--text-size-m)" weight="bold">
                                    <Localize translate_text={title} />
                                </Text>
                                <Content content={content} content_component={content_component} />
                            </ContentWrapper>
                        </>
                    )}
                </>
            )}
            {children}
        </CardWrapper>
    )
}

export const CardLink = ({ title, to, Icon, onClick, type, external, target, rel }: TCardLink) => {
    return (
        <LocalizedLink
            target={target}
            onClick={onClick}
            to={to}
            style={{
                textDecoration: 'none',
                width: '100%',
                position: 'relative',
            }}
            external={external}
            rel={rel}
            type={type}
        >
            <HoverFlex p="1rem 1.6rem" jc="flex-start" direction="row" tablet_direction="row">
                <RelativeFlex ai="center" jc="flex-start">
                    {Icon && (
                        <IconRightWrapper>
                            <Icon />
                        </IconRightWrapper>
                    )}
                    <ResponsiveHeader
                        as="span"
                        color="black-3"
                        size="var(--text-size-xs)"
                        lh="1.14"
                        weight="normal"
                    >
                        <Localize translate_text={title} />
                    </ResponsiveHeader>
                    {external && (
                        <LinkRightDiagonal>
                            <ImageWithDireciton
                                src={Diagonal}
                                alt={localize('_t_Diagonal_t_')}
                                width="16"
                                height="16"
                            />
                        </LinkRightDiagonal>
                    )}
                </RelativeFlex>
            </HoverFlex>
        </LocalizedLink>
    )
}

export const NavCard = ({
    content,
    title,
    aria_label,
    Icon,
    onClick,
    to,
    type,
    external,
    target,
    otherlinkprops,
}: TNavCard) => {
    const is_rtl = useIsRtl()

    return (
        <LocalizedLink
            style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '33.6rem',
                position: 'relative',
            }}
            external={external}
            aria_label={aria_label}
            to={to}
            type={type}
            target={target}
            onClick={onClick}
            rel={otherlinkprops.rel}
        >
            <FlexHover jc="flex-start" direction="row" tablet_direction="row">
                <SvgWrapper>
                    <Icon />
                </SvgWrapper>
                <NavContent>
                    <ResponsiveHeader as="span" size="var(--text-size-s)" lh="1.14" mb="0.8rem">
                        <Localize translate_text={title} />
                    </ResponsiveHeader>
                    <ResponsiveText>
                        <Localize translate_text={content} />
                    </ResponsiveText>
                </NavContent>
                {external && (
                    <div>
                        <RightDiagonal
                            is_rtl={is_rtl}
                            src={Diagonal}
                            alt={localize('_t_Diagonal_t_')}
                            width="16"
                            height="16"
                        />
                    </div>
                )}
            </FlexHover>
        </LocalizedLink>
    )
}
