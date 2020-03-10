import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography.js'
import device from 'themes/device'
import Arrow from 'images/svg/card-arrow.svg'

export const CardStyle = css`
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
`

const CardContent = styled(Text)`
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
    background-color: ${props => props.background_color};
    border-radius: 6px;
    top: 0;
    transition: 0.18s cubic-bezier(0.1, 0.25, 0.25, 1);
    display: flex;
    align-items: center;
    flex-direction: row;
    transform: ${props =>
        props.is_selected ? 'translate3d(-3%, 0, 0)' : 'translate3d(-105%, 0, 0)'};

    div {
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
    min-height: ${props => (props.min_height ? props.min_height : '0')};
    width: ${props => (props.width ? props.width : '38.4rem')};
    padding: ${props => (props.padding ? props.padding : '1.8rem 2rem 1.4rem 1.2rem')};
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
    width: ${props => (props.width ? props.width : '50.2rem')};
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
    justify-content: center;

    div {
        svg {
            width: 7.2rem;
            height: 7.2rem;
        }
    }
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
            content.map(text => <CardContent key={text}>{text}</CardContent>)
        ) : (
            <CardContent>{content}</CardContent>
        )}
    </>
)

Content.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export const Card = ({
    children,
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
}) => {
    return (
        <CardWrapper width={width} min_height={min_height} padding={padding}>
            {!children && (
                <>
                    {is_inline_icon ? (
                        <>
                            <CardCover
                                background_color={cover_background}
                                is_selected={is_selected}
                            >
                                <div>
                                    <h4>{cover_content}</h4>
                                    <Arrow />
                                </div>
                            </CardCover>
                            <IconContainer>
                                <div>
                                    <Icon />
                                </div>
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
