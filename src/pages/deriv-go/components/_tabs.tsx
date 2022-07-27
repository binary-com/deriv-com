import React, { useEffect, ReactElement } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Flex, Show } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

const TabContent = styled.div`
    flex: 1;
    width: 100%;

    & .content-wrapper {
        width: 287px;
        height: 576px;
        @media ${device.tabletL} {
            width: 192px;
            height: 386px;
        }
    }
`
const TabButton = styled(Flex)`
    position: relative;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
    width: 428px;
    cursor: pointer;
    margin-left: 9rem;

    @media ${device.tabletL} {
        width: fit-content;
        padding-top: 10px;
        margin-left: 0;
    }
`
const TabList = styled.div<{ is_reverse: boolean }>`
    max-width: 100%;
    ${(props) =>
        props.is_reverse
            ? css`
                  margin-left: 2.4rem;
              `
            : css`
                  margin-right: 2.4rem;
              `}
`
const TabListWrapper = styled.div`
    max-width: 28.2rem;
    display: flex;
    flex-direction: column;

    @media ${device.tabletL} {
        max-width: 100%;
        margin: 0;
    }
`
const animateTab = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}

`
const TextLabel = styled(Text)`
    color: ${(props) => (props.selected ? 'rgba(51, 51, 51, 1)' : 'rgba(153, 153, 153, 1)')};
    font-size: 32px;
    animation: ${animateTab} 2s;

    @media ${device.tabletL} {
        font-size: 24px;
    }
`
const TextDesc = styled(Text)`
    display: ${(props) => (!props.selected ? 'none' : '')};
    font-size: 24px;
    animation: ${animateTab} 2s;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const Content = styled(Flex)`
    display: grid;
    justify-content: center;
    padding-left: 16rem;
    padding-top: 60px;
    @media ${device.tabletL} {
        padding-top: 24px;
        padding-left: 0;
    }
`
const CarouselDot = styled.div<{ selected: boolean }>`
    height: 12px;
    align-self: center;
    width: 12px;
    border-radius: 50%;
    border: ${(props) => (props.selected ? 'none' : '1px solid #000000')};
    margin-bottom: 16px;
    background-color: ${(props) =>
        props.selected ? 'rgba(255, 68, 79, 1)' : 'rgba(248, 250, 251, 1)'};
    @media ${device.tabletL} {
        display: none;
    }
`
const CarouselContainer = styled.div`
    height: 80px;
    align-self: center;
    margin-right: 36px;
`
const Desktop = styled(Show.Desktop)`
    flex: 1;
    width: 100%;
`
const Mobile = styled(Show.Mobile)`
    @media ${device.tabletL} {
        margin-top: 0.8rem;
        margin-bottom: 0;

        &:last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        margin-top: 0.8rem;
        margin-bottom: 0;
    }
`

type TabsProps = {
    children: ReactElement[]
    label?: ReactElement
    description?: ReactElement
    className?: string
    is_reverse?: boolean
    max_width?: string
}

type TabPanelProps = Pick<TabsProps, 'children' | 'className' | 'label' | 'description'>

const TabPanel = ({ children, className }: TabPanelProps) => (
    <TabContent className={className} role="tabpanel">
        {children}
    </TabContent>
)

const Tabs = ({ children, is_reverse, className, max_width }: TabsProps) => {
    const [selected_tab, setSelectedTab] = React.useState(0)

    useEffect(() => {
        let timer
        if (selected_tab >= 2) {
            timer = setTimeout(() => setSelectedTab(0), 3000)
        } else {
            timer = setTimeout(() => setSelectedTab(selected_tab + 1), 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [selected_tab, setSelectedTab])

    return (
        <Flex className={className} ai="center" direction={is_reverse ? 'row-reverse' : 'row'}>
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
                                    onClick={() => setSelectedTab(index)}
                                >
                                    <TextLabel
                                        selected={selected_tab === index}
                                        className="side-tab__label"
                                        weight="bold"
                                    >
                                        {label}
                                    </TextLabel>
                                    <TextDesc
                                        selected={selected_tab === index}
                                        className="side-tab__description"
                                        mt="0.8rem"
                                    >
                                        {description}
                                    </TextDesc>
                                </TabButton>
                                <Mobile
                                    className="side-tab__mobile"
                                    min_width={max_width || 'tabletL'}
                                >
                                    <Content>{selected_tab === index ? child : undefined}</Content>
                                </Mobile>
                            </>
                        )
                    })}
                </TabList>
            </TabListWrapper>
            <Desktop className="side-tab__desktop" max_width={max_width || 'tabletL'}>
                <Content>
                    {React.Children.map(children, (el, index) => {
                        return selected_tab === index ? el : undefined
                    })}
                </Content>
            </Desktop>
            <CarouselContainer>
                {React.Children.map(children, (child, index) => (
                    <CarouselDot selected={selected_tab === index} />
                ))}
            </CarouselContainer>
        </Flex>
    )
}

Tabs.Panel = TabPanel

export default Tabs
