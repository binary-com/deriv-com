import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography'
import device, { size } from 'themes/device'
import { getWindowWidth } from 'common/utility'
import { Box } from 'components/containers'
import { Desktop } from 'components/containers/show'
import { useTabStateQuery } from 'components/hooks/use-tab-state-query'

const StyledSideTab = styled(Box)`
    padding: 0;
    display: flex;

    @media ${device.tabletL} {
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`
const TabList = styled.ol`
    width: ${(props) => props.tab_width || '38.4rem'};
    list-style: none;
    ${(props) =>
        props.is_sticky &&
        css`
            position: sticky;
            height: fit-content;
            top: 13rem;
        `}

    @media ${device.tabletL} {
        width: 100%;
    }
`
const TabContent = styled.div`
    flex: 1;
`
const StyledTab = styled.li`
    cursor: pointer;
    width: 38rem;
    margin: auto;
    padding: 3px 0 3px 16px;
    transform: translateX(-16px);

    &.tab-active,
    &:hover {
        border-left: 4px red solid;
    }
    & > p {
        color: var(--color-black-3);
        opacity: ${({ opacity }) => opacity ?? '0.32'};
        font-size: ${(props) => props.font_size || 'var(--text-size-s)'};
        max-width: 38.4rem;
        line-height: ${({ line_height }) => line_height ?? '30px'};

        :hover {
            opacity: 1;
        }
    }
    &.tab-active > p {
        opacity: 1;
    }
`
const TabsText = css`
    font-size: var(--text-size-m);
    color: var(--color-red);
`

const StyledDropDown = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-red);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Text} {
        ${TabsText}
    }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.4rem;
`

const Tab = ({ active_tab, font_size, label, line_height, mobile, onClick, opacity, text }) => {
    const className = active_tab === label ? 'tab-active' : ''

    const handleClick = () => {
        onClick(label)
    }

    return mobile ? (
        <StyledDropDown onClick={handleClick}>
            <Text>{text}</Text>
        </StyledDropDown>
    ) : (
        <ItemWrapper>
            <StyledTab
                className={className}
                font_size={font_size}
                line_height={line_height}
                onClick={handleClick}
                opacity={opacity}
            >
                <Text weight="500">{text}</Text>
            </StyledTab>
        </ItemWrapper>
    )
}

const getTabs = (children) => children.map((child) => child.props.label)

const SideTab = ({ children, font_size, is_sticky, line_height, opacity, tab_header }) => {
    const [active_tab, setActiveTab] = useTabStateQuery(getTabs(children))
    const [is_menu, setMenu] = useState(false)

    const Tabs = (props) => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        font_size={font_size}
                        mobile={props.is_mobile}
                        text={text}
                        line_height={line_height}
                        opacity={opacity}
                        onClick={(e) => {
                            if (onClick) {
                                onClick(e)
                            }

                            setActiveTab(e)
                            setMenu(!is_menu)
                        }}
                        active_tab={active_tab}
                        label={label}
                    />
                </div>
            )
        })
    }

    return (
        <StyledSideTab>
            <TabList is_sticky={is_sticky}>
                <Desktop>
                    {!!tab_header && (
                        <Header max_width="38.4rem" size="3.6rem" mb="4rem">
                            {tab_header}
                        </Header>
                    )}
                    <Tabs />
                </Desktop>
            </TabList>
            <TabContent>
                {(!is_menu || getWindowWidth() >= size.tabletL) &&
                    children.map((child) => (child.props.label === active_tab ? child : undefined))}
            </TabContent>
        </StyledSideTab>
    )
}

SideTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    font_size: PropTypes.string,
    is_mobile: PropTypes.bool,
    is_sticky: PropTypes.bool,
    line_height: PropTypes.string,
    opacity: PropTypes.string,
    tab_header: PropTypes.string,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    font_size: PropTypes.string,
    label: PropTypes.string.isRequired,
    line_height: PropTypes.string,
    mobile: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    opacity: PropTypes.string,
    text: PropTypes.string.isRequired,
}

export default SideTab
