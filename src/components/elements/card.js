import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography.js'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
// SVG
import Arrow from 'images/svg/elements/card-arrow.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import {
    SizeMixin,
    MarginMixin,
    PaddingMixin,
    BorderRadiusMixin,
    PositionMixin,
} from 'themes/mixins'

export const CardStyle = css`
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background-color: var(--color-white);
`

const CardContent = styled(Text)`
    font-size: var(--text-size-xs);
    ${MarginMixin({ top: '0.5rem' })}
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const CardCover = styled.div`
    position: absolute;
    ${SizeMixin({ width: '100%', height: '100%' })}
    background-color: ${(props) => props.background_color};
    ${BorderRadiusMixin({ all: '6px' })}
    ${PositionMixin({ top: '0' })}
    transition: 0.18s cubic-bezier(0.1, 0.25, 0.25, 1);
    display: flex;
    align-items: center;
    flex-direction: row;
    transform: ${(props) =>
        props.is_selected ? 'translate3d(-3%, 0, 0)' : 'translate3d(-105%, 0, 0)'};

    & > div {
        display: flex;
        justify-content: space-between;
        ${SizeMixin({ width: '100%' })}
        ${PaddingMixin({ all: '0 1.6rem' })}
        align-items: center;
    }
`

const CardWrapper = styled.article`
    ${CardStyle}
    position: relative;
    overflow: hidden;
    ${(props) =>
        SizeMixin({
            height: '100%',
            min_height: props.min_height ? props.min_height : '0',
            width: props.width ? props.width : '38.4rem',
        })}
    ${(props) => PaddingMixin({ all: props.padding ? props.padding : '1.8rem 2rem 1.4rem 1.2rem' })}
    ${BorderRadiusMixin({ all: '6px' })}

    &:hover {
        ${CardCover} {
            transform: translate3d(-3%, 0, 0);

            @media ${device.tabletL} {
                transform: translate3d(-5%, 0, 0);
            }
        }
    }

    @media ${device.tabletL} {
        ${PaddingMixin({ all: '2rem' })}
        ${MarginMixin({ top: '1.77rem', end: '0' })}
        ${SizeMixin({ width: '100%' })}
    }
`
const ContentWrapper = styled.div`
    ${MarginMixin({ top: '4rem' })}

    @media ${device.tabletL} {
        ${MarginMixin({ top: '2.7rem' })}

        ${Header} {
            font-size: 3rem;
        }
    }
`

const CardChildrenWrapper = styled.article`
    ${Header} {
        text-align: center;
    }

    ${CardStyle}
    ${(props) =>
        SizeMixin({
            width: props.width ? props.width : '50.2rem',
            height: '100%',
            min_height: '26.8rem',
        })}
    ${PaddingMixin({ all: '2.6rem' })}
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: var(--text-size-s);

        a {
            color: var(--color-red);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    svg,
    img {
        ${MarginMixin({ all: '0.2rem 0 0.8rem 0' })}
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
    ${MarginMixin({ start: '1.6rem' })}
`
const Content = ({ content }) => (
    <>
        {Array.isArray(content) ? (
            content.map((text) => <CardContent key={text}>{text}</CardContent>)
        ) : (
            <CardContent>{content}</CardContent>
        )}
    </>
)

const IconWrapper = styled.div`
    & > svg {
        ${SizeMixin({ width: '7.9rem', height: '7.9rem' })}
    }
`

const CoverContent = styled(Text)`
    color: white;
    font-weight: bold;
    font-size: var(--text-size-m);
`

Content.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
}) => {
    return (
        <CardWrapper width={width} min_height={min_height} padding={padding} className={className}>
            {!children && (
                <>
                    {is_inline_icon ? (
                        <>
                            <CardCover
                                background_color={cover_background}
                                is_selected={is_selected}
                            >
                                <div>
                                    {word_break_cover ? (
                                        <Flex direction="column" jc="flex-start" ai="flex-start">
                                            <CoverContent>
                                                {cover_content.split(' ')[0]}
                                            </CoverContent>
                                            <CoverContent>
                                                {cover_content.split(' ').slice(1).join(' ')}
                                            </CoverContent>
                                        </Flex>
                                    ) : (
                                        <CoverContent>{cover_content}</CoverContent>
                                    )}
                                    <img src={Arrow} alt="arrow" width="16" height="16" />
                                </div>
                            </CardCover>
                            <IconContainer>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <CardContentContainer>
                                    <Header as="h4" type="sub-section-title" weight="bold">
                                        {title}
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
                                    {title}
                                </Text>
                                <Content content={content} />
                            </ContentWrapper>
                        </>
                    )}
                </>
            )}
            {children && children}
        </CardWrapper>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    cover_background: PropTypes.string,
    cover_content: PropTypes.string,
    Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    is_inline_icon: PropTypes.bool,
    is_selected: PropTypes.bool,
    min_height: PropTypes.string,
    padding: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
    word_break_cover: PropTypes.bool,
}

export const CardChildren = ({ Icon, title, width, children, icon_width, icon_height }) => (
    <CardChildrenWrapper width={width}>
        <Header as="h4" weight="500">
            {title}
        </Header>
        <Icon width={icon_width} height={icon_height} />
        {children}
    </CardChildrenWrapper>
)

CardChildren.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    Icon: PropTypes.func,
    icon_height: PropTypes.string,
    icon_width: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
}

const NavContent = styled.div`
    ${SizeMixin({ width: '10)%' })}
    display: flex;
    flex-direction: column;
`
const RightDiagonal = styled.img`
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    ${SizeMixin({ width: '16px', height: '16px' })}
    ${PositionMixin({ top: '16px', end: '16px' })}

    @media ${device.tabletL} {
        opacity: 1;
        ${SizeMixin({ width: '16px', height: '16px' })}
        ${PositionMixin({ top: '0', end: '0' })}
        ${MarginMixin({ end: '0' })}
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

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const FlexHover = styled(Flex)`
    ${PaddingMixin({ all: '0.8rem 1.6rem' })}
    cursor: pointer;
    @media ${device.mobileL} {
        ${PaddingMixin({ all: '0' })}
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
        ${SizeMixin({ width: '32px', height: '32px' })}
        ${MarginMixin({ end: '1.6rem' })}

        @media ${device.mobileL} {
            ${SizeMixin({ width: '24px', height: '24px' })}
        }
    }
`

export const NavCard = ({ content, external, icon: Icon, style, title, ...props }) => {
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
                        {title}
                    </ResponsiveHeader>
                    <ResponsiveText color="grey-5">{content}</ResponsiveText>
                </NavContent>
                {external && (
                    <div>
                        <RightDiagonal src={Diagonal} alt="Diagonal" widht="16" height="16" />
                    </div>
                )}
            </FlexHover>
        </LocalizedLink>
    )
}

NavCard.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    external: PropTypes.string,
    icon: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

const LinkRightDiagonal = styled.div`
    opacity: 0;
    justify-self: flex-end;
    align-self: center;

    & > svg,
    img {
        ${SizeMixin({ widht: '16px', height: '16px' })}
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
        ${SizeMixin({ width: '24px', height: '24px' })}
        ${MarginMixin({ end: '1.6rem' })}
    }
`

const RelativeFlex = styled(Flex)`
    position: relative;
`

export const CardLink = ({ icon: Icon, title, to, style, external, target, onClick, ...props }) => {
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
            <HoverFlex
                pt="1rem"
                pb="1rem"
                pl="1.6rem"
                pr="1.6rem"
                jc="flex-start"
                direction="row"
                tablet_direction="row"
            >
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
                        {title}
                    </ResponsiveHeader>
                    {external && (
                        <LinkRightDiagonal>
                            <img src={Diagonal} alt="Diagonal" width="16" height="16" />
                        </LinkRightDiagonal>
                    )}
                </RelativeFlex>
            </HoverFlex>
        </LocalizedLink>
    )
}

CardLink.propTypes = {
    content: PropTypes.string,
    external: PropTypes.string,
    icon: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
    target: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
}
