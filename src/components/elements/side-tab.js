import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography'
import device, { size } from 'themes/device'
import { getWindowWidth } from 'common/utility'
import { Box } from 'components/containers'
import { Desktop, Mobile } from 'components/containers/show'
import { useTabState } from 'components/hooks/use-tab-state'
import { ReactComponent as Chevron } from 'images/svg/chevron.svg'

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
        opacity: 0.32;
        font-size: ${(props) => props.font_size || 'var(--text-size-s)'};
        max-width: 38.4rem;
        line-height: 30px;

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
const StyledActiveTabText = styled(Text)`
    ${TabsText}
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
const ChevronWrapper = styled(Chevron)`
    min-width: 16px;
    width: 16px;
    height: 16px;
    transform: ${(props) => (props.active_tab === '-' ? 'rotate(0deg)' : 'rotate(180deg)')};
`
const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.4rem;
`

const Tab = ({ active_tab, label, onClick, text, mobile, font_size }) => {
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
            <StyledTab className={className} onClick={handleClick} font_size={font_size}>
                <Text weight="500">{text}</Text>
            </StyledTab>
        </ItemWrapper>
    )
}

const getTabs = (children) => children.map((child) => child.props.label)
const findCurrentTab = (children, active_tab) =>
    children.find((child) => child.props.label === active_tab)

const SideTab = ({ children, is_sticky, tab_header, font_size }) => {
    const [active_tab, setActiveTab] = useTabState(getTabs(children))
    const [current_active_tab, setCurrentActiveTab] = useState(findCurrentTab(children, active_tab))
    const [is_menu, setMenu] = useState(false)

    useEffect(() => {
        setCurrentActiveTab(!is_menu ? findCurrentTab(children, active_tab) : null)
    }, [active_tab, is_menu])

    const Tabs = (props) => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        font_size={font_size}
                        mobile={props.is_mobile}
                        text={text}
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
                <Mobile>
                    <StyledDropDown onClick={() => setMenu(!is_menu)}>
                        {current_active_tab && (
                            <StyledActiveTabText>
                                {current_active_tab.props.text}
                            </StyledActiveTabText>
                        )}
                        <ChevronWrapper active_tab={active_tab} />
                    </StyledDropDown>
                    {is_menu && <Tabs is_mobile={true} />}
                </Mobile>
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
    tab_header: PropTypes.string,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    font_size: PropTypes.string,
    label: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
