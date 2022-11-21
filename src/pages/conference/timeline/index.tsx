import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import HeroBanner from './images/hero_banner.svg'
import ScheduleConference from './_schedule'
import { events_data } from './data_schedule'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import Layout from 'components/layout/layout'

type TabProps = {
    active?: boolean
    mobile_padding?: string
}

const HeroWrapper = styled.div`
    background-image: url(${HeroBanner});
    background-size: 100%;
    min-height: 70rem;
    background-repeat: no-repeat;
`

const Tab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px 0;
`

const selected = css`
    box-shadow: 0 32px 64px rgba(14, 14, 14, 0.14);
    border-radius: 4px 0;

    ${Header} {
        font-weight: 700;
    }
`

const notSelected = css`
    border: 1px solid var(--color-grey-8);
    border-radius: 0 4px;

    ${Header} {
        font-weight: 400;
        color: var(--color-grey-5);
    }
`

const TabItem = styled.div<TabProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 40px;
    height: 84px;
    background: var(--color-white);
    cursor: pointer;
    ${(props) => (props.active ? selected : notSelected)}
`

const TimeLine = () => {
    const [tab, setTab] = useState('dia1')
    const isDay1 = tab === 'dia1'
    const isDay2 = tab === 'dia2'
    const isDay3 = tab === 'dia3'

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    return (
        <Layout type="conference" margin_top={7.2}>
            <HeroWrapper />
            <Tab>
                <TabItem active={isDay1} onClick={() => onTabClick('dia1')}>
                    <Header type="subtitle-1" align="center">
                        {localize('Dia 1')}
                    </Header>
                </TabItem>
                <TabItem active={isDay2} onClick={() => onTabClick('dia2')}>
                    <Header type="subtitle-1" align="center">
                        {localize('Dia 2')}
                    </Header>
                </TabItem>
                <TabItem active={isDay3} onClick={() => onTabClick('dia3')}>
                    <Header type="subtitle-1" align="center">
                        {localize('Dia 3')}
                    </Header>
                </TabItem>
            </Tab>

            <div>
                {events_data.map((item, index) => {
                    return (
                        tab === `dia${index + 1}` && (
                            <ScheduleConference key={item.id} item={item} />
                        )
                    )
                })}
            </div>
        </Layout>
    )
}

export default TimeLine
