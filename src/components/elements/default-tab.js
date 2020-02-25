import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabsWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const TabButton = styled.button`
    flex: 1;
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
    border-bottom: 4px solid ${props => (props.selected ? 'blue' : '#fff')};

    &:hover,
    &:focus,
    &:active {
        border-bottom: 4px solid ${props => (props.selected ? 'blue' : '#eee')};
    }
`

const TabList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    @media (max-width: ${props => props.breakPoint}) {
        flex-direction: column;

        & > div,
        & > div > button {
            width: 100%;
        }
    }

    &::after {
        content: '';
        bottom: 0;
        position: absolute;
        height: 2px;
        width: 100%;
        background: var(--color-grey-2);
    }
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
        <TabsWrapper>
            <TabList breakPoint={tab_break} role="tablist">
                {React.Children.map(children, ({ props: { label } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={() => selectTab(index)}
                    >
                        {label}
                    </TabButton>
                ))}
            </TabList>

            <Content>
                {React.Children.map(children, (comp, index) =>
                    selected_tab === index ? comp : undefined,
                )}
            </Content>
        </TabsWrapper>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    tab_break: PropTypes.string,
}

export default Tabs
