import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled.div`
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
        background: ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-grey-26)')};
        transition: background 0.25s;
    }
    &:last-child {
        margin-bottom: 0;
    }
`

const TabList = styled.div`
    max-width: 28.2rem;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.is_reverse
            ? css`
                  margin-left: 2.4rem;
              `
            : css`
                  margin-right: 2.4rem;
              `}
`

const Content = styled.div`
    flex: 1;
    width: 100%;
`

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}

const Tabs = ({ children, is_reverse }) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const selectTab = (tabIndex) => {
        setSelectedTab(tabIndex)
    }

    return (
        <Flex ai="flex-start" direction={is_reverse ? 'row-reverse' : 'row'}>
            <TabList role="tablist" is_reverse={is_reverse}>
                {React.Children.map(children, ({ props: { label, description } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={() => selectTab(index)}
                    >
                        <Text weight="bold">{label}</Text>
                        <Text mt="0.8rem">{description}</Text>
                    </TabButton>
                ))}
            </TabList>

            <Content>
                {React.Children.map(children, (el, index) =>
                    selected_tab === index ? el : undefined,
                )}
            </Content>
        </Flex>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    is_reverse: PropTypes.bool,
    tab_break: PropTypes.string,
}

export default Tabs
