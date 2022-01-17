import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Show } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'
import { ReactComponent as Info } from 'images/svg/trade-types/info2.svg'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`
// const Mobile = styled(Show.Mobile)`

// `

type TabButtonType = {
    selected: boolean
}

const TabButton = styled.div<TabButtonType>`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-left: 1.6rem;
    margin-bottom: 1.6rem;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        left: 0;
        top: 0;
        background: ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-grey-29)')};
        transition: background 0.25s;
    }
    &:last-child {
        margin-bottom: 0;
    }
`
type TabListType = {
    is_reverse: boolean
}

const right = css`
    margin-right: 2.4rem;
`
const left = css`
    margin-left: 2.4rem;
`

const TabList = styled.div<TabListType>`
    max-width: 100%;
    ${(props) => (props.is_reverse ? left : right)}
`

const TabListWrapper = styled.div`
    max-width: 28.2rem;
    display: flex;
    flex-direction: column;

    @media ${device.tabletS} {
        max-width: 100%;
        margin: 0;
    }
`

const Content = styled.div`
    flex: 1;
    width: 100%;
`

const Desktop = styled(Show.Desktop)`
    flex: 1;
    width: 100%;
`

const Mobile = styled(Show.Mobile)`
    @media ${device.tabletS} {
        margin-top: 1.6rem;
        margin-bottom: 2.3rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        margin-top: 0.8rem;
        margin-bottom: 0;
    }
`

const NoticeWrapper = styled(Flex)`
    width: 100%;
    margin: 3.2rem 0 0 2.2rem;
    align-self: flex-start;

    @media ${device.tabletL} {
        margin: 32px 0 0 0;
        justify-content: flex-start;
    }
`

const StyledInfo = styled(Info)`
    margin-right: 8px;
    margin-top: 4px;

    @media ${device.tabletL} {
        margin-right: 8px;
        margin-left: -10px;
    }
`
const StyledText = styled(Text)`
    line-height: 2.4rem;
    max-width: 36rem;
    width: 94%;

    @media ${device.tabletL} {
        line-height: 24px;
        max-width: 100%;
    }
    @media ${device.tabletS} {
        font-size: 18px;
    }
`

const TabPanel = ({ children, className }) => (
    <TabContent className={className} role="tabpanel" tabIndex={0}>
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.node,
    label: PropTypes.node,
}

const Tabs = ({ children, is_reverse, className, max_width, has_notice, notice_content }) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const selectTab = (tabIndex) => {
        setSelectedTab(tabIndex)
    }

    return (
        <Flex className={className} ai="flex-start" direction={is_reverse ? 'row-reverse' : 'row'}>
            <TabListWrapper className="side-tab__wrapper">
                <TabList className="side-tab__list" role="tablist" is_reverse={is_reverse}>
                    {React.Children.map(children, (child, index) => {
                        const {
                            props: { label, description },
                        } = child
                        return (
                            <>
                                <TabButton
                                    className="side-tab__button"
                                    role="tab"
                                    selected={selected_tab === index}
                                    aria-selected={selected_tab === index ? 'true' : 'false'}
                                    onClick={() => selectTab(index)}
                                >
                                    <Text className="side-tab__label" weight="bold">
                                        {label}
                                    </Text>
                                    <Text className="side-tab__description" mt="0.8rem">
                                        {description}
                                    </Text>
                                </TabButton>
                                <Mobile
                                    className="side-tab__mobile"
                                    min_width={max_width || 'tabletS'}
                                >
                                    <Content>{selected_tab === index ? child : undefined}</Content>
                                </Mobile>
                            </>
                        )
                    })}
                </TabList>
                {has_notice && (
                    <NoticeWrapper>
                        <StyledInfo />
                        <StyledText>{notice_content}</StyledText>
                    </NoticeWrapper>
                )}
            </TabListWrapper>
            <Desktop className="side-tab__desktop" max_width={max_width || 'tabletS'}>
                <Content>
                    {React.Children.map(children, (el, index) => {
                        return selected_tab === index ? el : undefined
                    })}
                </Content>
            </Desktop>
        </Flex>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    has_notice: PropTypes.bool,
    is_reverse: PropTypes.bool,
    max_width: PropTypes.string,
    notice_content: PropTypes.object,
    tab_break: PropTypes.string,
}

export default Tabs
