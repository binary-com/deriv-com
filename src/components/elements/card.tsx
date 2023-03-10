import React, { ReactNode, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// SVG
import Arrow from 'images/svg/elements/card-arrow.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { ImageWithDireciton } from 'components/elements'
import { TString } from 'types/generics'

type StyledProps = {
    width?: string
    padding?: string
    background_color?: string
    is_selected?: boolean
    min_height?: string
    is_rtl: boolean
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
const CardCover = styled.div<StyledProps>`
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

const CardWrapper = styled.article<StyledProps>`
    ${CardStyle}
    position: relative;
    overflow: hidden;
    height: 100%;
    min-height: ${(props) => (props.min_height ? props.min_height : '0')};
    width: ${(props) => (props.width ? props.width : '38.4rem')};
    padding: ${(props) => (props.padding ? props.padding : '1.8rem 2rem 1.4rem 1.2rem')};
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
const Content = ({ content }: Pick<CardProps, 'content'>) => (
    <>
        {Array.isArray(content) ? (
            content.map((cont: TString | TLocalizeAttribute, idx) => (
                <>
                    {typeof cont === 'string' ? (
                        <CardContent key={cont}>
                            <Localize translate_text={cont} />
                        </CardContent>
                    ) : (
                        <CardContent key={cont.text}>
                            <Localize
                                key={idx}
                                translate_text={cont.text}
                                components={cont.components}
                            />
                        </CardContent>
                    )}
                </>
            ))
        ) : typeof content === 'string' ? (
            <CardContent key={content}>
                <Localize translate_text={content} />
            </CardContent>
        ) : (
            <CardContent>
                <Localize translate_text={content.text} components={content.components} />
            </CardContent>
        )}
    </>
)

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
type TLocalizeAttribute = {
    text: TString
    components: ReactElement[]
}

type CardProps = {
    children?: ReactNode
    className?: string
    content?: TString | TString[] | TLocalizeAttribute | TLocalizeAttribute[]
    cover_background?: string
    cover_content?: TString
    Icon?: () => ReactElement
    is_inline_icon?: boolean
    is_selected?: boolean
    min_height?: string
    padding?: string
    title?: TString
    width?: string
    word_break_cover?: boolean
}

export const Card = ({
    children,
    className,
    Icon,
    title,
    content,
    width,
    min_height,
    is_inline_icon,
    cover_background,
    cover_content,
    padding,
    is_selected,
    word_break_cover,
}: CardProps) => {
    const is_rtl = useIsRtl()

    const work_break_cover_contents: TString[] = [
        '_t_'.concat(
            cover_content.split(' ')[0].toString().replaceAll('_t_', ''),
            '_t_',
        ) as TString,
        '_t_'.concat(
            cover_content.split(' ').slice(1).join(' ').replaceAll('_t_', ''),
            '_t_',
        ) as TString,
    ]

    const final_content = word_break_cover ? (
        <Flex direction="column" jc="flex-start" ai="flex-start">
            <CoverContent>
                <Localize translate_text={work_break_cover_contents[0]} />
            </CoverContent>
            <CoverContent>
                <Localize translate_text={work_break_cover_contents[1]} />
            </CoverContent>
        </Flex>
    ) : (
        <CoverContent>
            <Localize translate_text={cover_content} />
        </CoverContent>
    )

    return (
        <CardWrapper
            is_rtl={is_rtl}
            width={width}
            min_height={min_height}
            padding={padding}
            className={className}
        >
            {!children && (
                <>
                    {is_inline_icon ? (
                        <>
                            <CardCover
                                background_color={cover_background}
                                is_selected={is_selected}
                                is_rtl={is_rtl}
                            >
                                <div>
                                    {final_content}
                                    <ImageWithDireciton
                                        src={Arrow}
                                        alt="arrow"
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
                                    <Content content={content} />
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
                                <Content content={content} />
                            </ContentWrapper>
                        </>
                    )}
                </>
            )}
            {children}
        </CardWrapper>
    )
}

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

type NavigationType = {
    textDecoration?: string
    maxWidth?: string
}

type NavCardProps = {
    aria_label?: string
    content?: TString
    external?: boolean
    icon?: () => ReactElement
    style?: NavigationType
    title?: TString
    target?: string
    type?: string
    otherLinkProps?: { rel?: string }
    onClick?: () => void
    to?: string
}

export const NavCard = ({
    content,
    external,
    icon: Icon,
    style,
    title,
    ...props
}: NavCardProps) => {
    const is_rtl = useIsRtl()
    return (
        <LocalizedLink
            style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '33.6rem',
                position: 'relative',
                ...style,
            }}
            external={external}
            {...props}
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
                            alt="Diagonal"
                            width="16"
                            height="16"
                        />
                    </div>
                )}
            </FlexHover>
        </LocalizedLink>
    )
}

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
type CardLinkProps = {
    content?: string
    external?: boolean
    icon?: () => ReactElement
    onClick?: () => void
    style?: NavigationType
    target?: string
    title: TString
    to: string
    type?: string
    rel?: string
}

export const CardLink = ({
    icon: Icon,
    title,
    to,
    style,
    external,
    target,
    onClick,
    ...props
}: CardLinkProps) => {
    return (
        <LocalizedLink
            target={target}
            onClick={onClick}
            to={to}
            style={{
                textDecoration: 'none',
                width: '100%',
                position: 'relative',
                ...style,
            }}
            external={external}
            {...props}
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
                                alt="Diagonal"
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
