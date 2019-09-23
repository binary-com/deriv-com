import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography.js'

const Wrapper = styled.div`
    width: 100%;
`
const Tab = styled.div`
    width: 26rem;
    border-bottom: 1px solid
        ${props =>
            props.active_tab ? 'var(--color-red)' : 'var(--color-red-2);'};
    cursor: pointer;
`
const StyledHeader = styled(Header)`
    color: ${props =>
        props.active_tab ? 'var(--color-red)' : 'var(--color-red-2);'};
    font-weight: 500;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const ActiveTab = styled.div`
    margin-top: 1.6rem;
`
const DtraderTabs = props => {
    const [activeTabIndex, setActiveTabIndex] = useTab()
    return (
        <Wrapper>
            <TitleWrapper>
                {props.children.map((child, index) => (
                    <Tab
                        key={index}
                        active_tab={index === activeTabIndex ? true : false}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        <StyledHeader
                            as="h4"
                            lh="1.5"
                            align="center"
                            active_tab={index === activeTabIndex ? true : false}
                        >
                            {index}. {child.props.title}
                        </StyledHeader>
                    </Tab>
                ))}
            </TitleWrapper>
            <ActiveTab>{props.children[activeTabIndex]}</ActiveTab>
        </Wrapper>
    )
}
export default DtraderTabs

export function useTab(initial = 0) {
    const [activeTabIndex, setActiveTabIndex] = useState(initial)
    return [activeTabIndex, setActiveTabIndex]
}
