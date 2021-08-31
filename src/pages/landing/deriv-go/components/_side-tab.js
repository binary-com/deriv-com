import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Show } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled(Flex)`
    position: relative;
    z-index: 2;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    width: 428px;
    cursor: pointer;
    @media ${device.tabletL} {
        width: fit-content;
        padding-top: 10px;
    }
`

const TabList = styled.div`
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
const TextLabel = styled(Text)`
    font-size: 32px;
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const TextDesc = styled(Text)`
    font-size: 24px;
    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const Content = styled(Flex)`
    display: grid;
    justify-content: center;
    padding-top: 80px;
    @media ${device.tabletL} {
        padding-top: 24px;
    }
`

const Desktop = styled(Show.Desktop)`
    flex: 1;
    width: 100%;
`

const Mobile = styled(Show.Mobile)`
    @media ${device.tabletS} {
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

const TabPanel = ({ children, className }) => (
    <TabContent className={className} role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

const Tabs = ({ children, is_reverse, className, max_width }) => {
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
                                    <TextLabel className="side-tab__label" weight="bold">
                                        {label}
                                    </TextLabel>
                                    <TextDesc className="side-tab__description" mt="0.8rem">
                                        {description}
                                    </TextDesc>
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
    is_reverse: PropTypes.bool,
    max_width: PropTypes.string,
}

export default Tabs
