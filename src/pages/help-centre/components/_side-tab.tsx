import React, { JSXElementConstructor, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { TQuestions } from '../data/_data-types'
import { Header } from 'components/elements'
import device, { size } from 'themes/device'
import { getWindowWidth } from 'common/utility'
import { Desktop } from 'components/containers/show'
import { useTabStateQuery } from 'components/hooks/use-tab-state-query'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

interface ChildProps {
    label: string
}

class ChildComponent extends React.Component<ChildProps> {}

export type TChildren = Array<ReactElement<ChildProps, JSXElementConstructor<ChildComponent>>>

type SideTabType = {
    tab_header: TString
    data: TQuestions[]
    children: TChildren
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8rem;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 0;
    }
`

const Ol = styled.ol`
    width: 38.4rem;
    list-style: none;
`

const ListItem = styled.li`
    max-width: 38rem;
    cursor: pointer;
    font-size: var(--text-size-s);
    font-weight: 500;
    line-height: 1.5;
    color: var(--color-black-3);
    opacity: 0.72;
    transform: translateX(-16px);
    border-left: 4px transparent solid;
    padding: 3px 0 3px 16px;
    margin: auto;
    margin-bottom: 1.4rem;

    &.tab-active,
    &:hover {
        border-left: 4px red solid;
        opacity: 1;
    }
`

const TabContent = styled.div`
    flex: 1;
`

const getTabs = (data) => data.map(({ label }) => label)

const SideTab = ({ children, tab_header, data }: SideTabType) => {
    const [active_tab, setActiveTab] = useTabStateQuery(getTabs(data))
    const [is_menu, setMenu] = useState(false)
    const show_content = !is_menu || getWindowWidth() >= size.tabletL

    return (
        <Wrapper>
            <Desktop>
                <Header max_width="38.4rem" size="3.6rem" mb="4rem">
                    <Localize translate_text={tab_header} />
                </Header>

                <Ol>
                    {data.map(({ question, label }) => {
                        const className = active_tab === label ? 'tab-active' : ''

                        const handleClick = () => {
                            setActiveTab(label)
                            setMenu(!is_menu)
                        }

                        return (
                            <ListItem key={label} className={className} onClick={handleClick}>
                                <Localize translate_text={question} />
                            </ListItem>
                        )
                    })}
                </Ol>
            </Desktop>

            {show_content && (
                <TabContent>
                    {React.Children.map(children, (child) =>
                        child.props.label === active_tab ? child : undefined,
                    )}
                </TabContent>
            )}
        </Wrapper>
    )
}

export default SideTab
