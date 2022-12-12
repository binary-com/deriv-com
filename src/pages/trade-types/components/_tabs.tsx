import React, { ReactNode, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Flex, Desktop, Mobile } from 'components/containers'
import { Text } from 'components/elements'
import device, { SizeType } from 'themes/device'
import { ReactComponent as Info } from 'images/svg/trade-types/info2.svg'

type ChildProps = {
    label?: JSX.Element
    description?: JSX.Element
}

type TabButtonType = {
    selected: boolean
}

type TabListType = {
    is_reverse: boolean
}

type TabPanelProps = ChildProps & {
    className?: string
    children?: ReactNode[] | ReactNode
}

type TabsProps = {
    className?: string
    has_notice?: boolean
    is_reverse?: boolean
    max_width?: SizeType
    tab_break?: string
    children?: ReactElement | ReactElement[]
}

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

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

const DesktopWrapper = styled(Desktop)`
    flex: 1;
    width: 100%;
`

const MobileWrapper = styled(Mobile)`
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

const TabPanel = ({ children, className }: TabPanelProps) => (
    <TabContent className={className} role="tabpanel" tabIndex={0}>
        {children}
    </TabContent>
)

const Tabs = <T extends object>({
    children,
    is_reverse,
    className,
    max_width,
    has_notice,
    notice_content,
}: TabsProps & { notice_content?: T }) => {
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
                                <MobileWrapper
                                    className="side-tab__mobile"
                                    breakpoint={max_width || 'tabletS'}
                                >
                                    <Content>{selected_tab === index ? child : undefined}</Content>
                                </MobileWrapper>
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
            <DesktopWrapper className="side-tab__desktop" breakpoint={max_width || 'tabletS'}>
                <Content>
                    {React.Children.map(children, (el, index) => {
                        return selected_tab === index ? el : undefined
                    })}
                </Content>
            </DesktopWrapper>
        </Flex>
    )
}

Tabs.Panel = TabPanel

export default Tabs
