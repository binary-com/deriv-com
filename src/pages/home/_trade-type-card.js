import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from 'components/elements/typography.js'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
// SVG
import Diagonal from 'images/svg/pink-right-diagonal.svg'

const NavContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const RightDiagonal = styled(Diagonal)`
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
    & > svg {
        width: 33px;
        height: 33px;
        margin-right: 1.6rem;

        @media ${device.mobileL} {
            width: 24px;
            height: 24px;
        }
    }
`

export const TradeTypeCard = ({
    icon: Icon,
    title,
    content,
    onClick,
    to,
    style,
    external,
    target,
    className,
    is_binary_link,
    is_smarttrader_link,
    otherLinkProps,
}) => {
    return (
        <LocalizedLink
            onClick={onClick}
            to={to}
            style={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: '33.6rem',
                position: 'relative',
                ...style,
            }}
            external={external}
            target={target}
            className={className}
            is_binary_link={is_binary_link}
            is_smarttrader_link={is_smarttrader_link}
            {...otherLinkProps}
        >
            <FlexHover jc="flex-start" direction="row" tablet_direction="row">
                <SvgWrapper>
                    <Icon />
                </SvgWrapper>

                <NavContent>
                    <ResponsiveHeader size="var(--text-size-s)" lh="1.14" mb="0.8rem">
                        {title}
                    </ResponsiveHeader>
                    <ResponsiveText color="grey-5">{content}</ResponsiveText>
                </NavContent>
                {external && (
                    <div>
                        <RightDiagonal />
                    </div>
                )}
            </FlexHover>
        </LocalizedLink>
    )
}

TradeTypeCard.propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    external: PropTypes.string,
    icon: PropTypes.func,
    is_binary_link: PropTypes.bool,
    is_smarttrader_link: PropTypes.bool,
    onClick: PropTypes.func,
    otherLinkProps: PropTypes.object,
    style: PropTypes.object,
    target: PropTypes.string,
    title: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    to: PropTypes.string,
}
