import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography.js'
import { Flex, Show } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
// SVG
import Arrow from 'images/svg/card-arrow.svg'
import Diagonal from 'images/svg/pink-right-diagonal.svg'

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
const CardCover = styled.div`
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

        h4 {
            color: var(--color-white);
            font-size: 2.8rem;
            font-weight: bold;
            line-height: 1.25;
        }
    }
`

const CardWrapper = styled.article`
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
            transform: translate3d(-3%, 0, 0);

            @media ${device.tabletL} {
                transform: translate3d(-5%, 0, 0);
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

const CardChildrenWrapper = styled.article`
    ${Header} {
        text-align: center;
    }

    ${CardStyle}
    width: ${(props) => (props.width ? props.width : '50.2rem')};
    height: 100%;
    min-height: 26.8rem;
    padding: 2.6rem;
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
    svg {
        margin: 0.2rem 0 0.8rem 0;
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
        width: 7.9rem;
        height: 7.9rem;
    }
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
                                            <h4>{cover_content.split(' ')[0]}</h4>
                                            <h4>{cover_content.split(' ').slice(1).join(' ')}</h4>
                                        </Flex>
                                    ) : (
                                        <h4>{cover_content}</h4>
                                    )}
                                    <Arrow />
                                </div>
                            </CardCover>
                            <IconContainer>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <CardContentContainer>
                                    <Header as="h4" weight="bold">
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
                                <Header as="h4" weight="bold">
                                    {title}
                                </Header>
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
    width: 100%;
    max-width: 21.3rem;
    display: flex;
    flex-direction: column;

    ${Text} {
        font-size: var(--text-size-xxs);
        color: var(--color-grey-5);
        transition: color 0.25s;
    }
`
const RightDiagonal = styled(Diagonal)`
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    right: 0;
`

const ResponsiveHeader = styled(Header)`
    transition: color 0.2s;
    @media ${device.tabletS} {
        font-size: 16px;
    }
`
const ResponsiveText = styled(Text)`
    transition: color 0.2s;
    @media ${device.tabletS} {
        font-size: 10.5px;
    }
`

const FlexHover = styled(Flex)`
    & > svg {
        width: 24px;
        height: 24px;
        margin-right: 1.6rem;

        @media ${device.mobileL} {
            width: 30px;
            height: 30px;
        }
    }
    &:hover {
        ${RightDiagonal} {
            opacity: 1;
        }
        ${Text} {
            color: var(--color-black-3);
        }
    }
`
export const NavCard = ({
    icon: Icon,
    title,
    content,
    to,
    style,
    external,
    target,
    className,
    is_binary_link,
    otherLinkProps,
}) => {
    return (
        <LocalizedLink
            to={to}
            style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '27.7rem',
                position: 'relative',
                ...style,
            }}
            external={external}
            target={target}
            className={className}
            is_binary_link={is_binary_link}
            {...otherLinkProps}
        >
            <FlexHover jc="flex-start" direction="row" tablet_direction="row">
                <Icon />
                <NavContent>
                    <ResponsiveHeader size="var(--text-size-xs)" lh="1.14" mb="0.8rem">
                        {title}
                    </ResponsiveHeader>
                    <ResponsiveText size="var(--text-size-xxs)" color="grey-5">
                        {content}
                    </ResponsiveText>
                </NavContent>
                <Show.Desktop>
                    <RightDiagonal />
                </Show.Desktop>
            </FlexHover>
        </LocalizedLink>
    )
}

NavCard.propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    external: PropTypes.string,
    icon: PropTypes.func,
    is_binary_link: PropTypes.bool,
    otherLinkProps: PropTypes.object,
    style: PropTypes.object,
    target: PropTypes.string,
    title: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    to: PropTypes.string,
}

const LinkRightDiagonal = styled(RightDiagonal)`
    opacity: 0;
    right: -25px;
`

const HoverFlex = styled(Flex)`
    &:hover {
        ${ResponsiveHeader} {
            color: var(--color-red);
        }
        ${LinkRightDiagonal} {
            opacity: 1;
        }
    }
`

const RelativeFlex = styled(Flex)`
    position: relative;
`

export const CardLink = ({ title, to, style, external }) => {
    return (
        <LocalizedLink
            to={to}
            style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '20rem',
                position: 'relative',
                ...style,
            }}
            external={external}
        >
            <HoverFlex jc="flex-start" direction="row" tablet_direction="row">
                <RelativeFlex jc="flex-start" width="auto">
                    <ResponsiveHeader
                        color="black-3"
                        size="var(--text-size-xs)"
                        lh="1.14"
                        mb="1.6rem"
                        weight="normal"
                    >
                        {title}
                    </ResponsiveHeader>
                    <LinkRightDiagonal />
                </RelativeFlex>
            </HoverFlex>
        </LocalizedLink>
    )
}

CardLink.propTypes = {
    content: PropTypes.string,
    external: PropTypes.bool,
    icon: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.string,
    to: PropTypes.string,
}
