import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled.button`
    z-index: 2;
    height: 50px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    outline: none;
    transition: border-color 0.2s ease-in;
    border: none;
    border-bottom: 2px solid var(--color-grey-2);
    ${props =>
        props.selected &&
        css`
            border-color: var(--color-red);
            ${Text} {
                color: var(--color-red);
            }
        `}

    &:hover,
    &:focus,
    &:active {
        border-bottom: 2px solid
            ${props => (props.selected ? 'var(--color-red)' : 'var(--color-red-2)')};
    }
`

const TabList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    position: relative;
    @media (max-width: ${props => props.breakPoint}) {
        flex-direction: column;

        & > div,
        & > div > button {
            width: 100%;
        }
    }
`

const LineDivider = styled.div`
    bottom: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--color-grey-2);
    z-index: 1;
`

const Content = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 16px;
`

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}

const Tabs = ({ children, tab_break }) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const selectTab = tabIndex => {
        setSelectedTab(tabIndex)
    }

    return (
        <Flex direction="column">
            <TabList breakPoint={tab_break} role="tablist">
                {React.Children.map(children, ({ props: { label } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={() => selectTab(index)}
                    >
                        <Text size="var(--text-size-m)" color="red-2" weight="bold">
                            {label}
                        </Text>
                    </TabButton>
                ))}
                <LineDivider />
            </TabList>

            <Content>
                {React.Children.map(children, (comp, index) =>
                    selected_tab === index ? comp : undefined,
                )}
            </Content>
        </Flex>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    tab_break: PropTypes.string,
}

export default Tabs
