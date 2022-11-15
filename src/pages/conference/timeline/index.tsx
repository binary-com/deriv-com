import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import events_data from './_data-schedule'
import ScheduleConference from './_schedule'
import HeroBanner from 'images/common/conference/calendar.png'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import device from 'themes/device'
import { localize } from 'components/localization'

const HeroWrapper = styled.div`
    background-image: url(${HeroBanner});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 72rem;

    @media ${device.tabletS} {
        min-height: 60rem;
    }
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
const TabItem = styled.div<{ active?: boolean }>`
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
    const [tab, setTab] = useState('day1')
    const isDay1 = tab === 'day1'
    const isDay2 = tab === 'day2'
    const isDay3 = tab === 'day3'

    return (
        <Layout type="conference" margin_top="0px">
            <HeroWrapper>
                <Header as="h1" type="heading-1" align="center" pt="280px">
                    {localize('Schedule')}
                </Header>
            </HeroWrapper>
            <Tab>
                <TabItem active={isDay1} onClick={() => setTab('day1')}>
                    <Header as="div" type="subtitle-1" align="center">
                        {localize('Day 1')}
                    </Header>
                </TabItem>
                <TabItem active={isDay2} onClick={() => setTab('day2')}>
                    <Header as="div" type="subtitle-1" align="center">
                        {localize('Day 2')}
                    </Header>
                </TabItem>
                <TabItem active={isDay3} onClick={() => setTab('day3')}>
                    <Header as="div" type="subtitle-1" align="center">
                        {localize('Day 3')}
                    </Header>
                </TabItem>
            </Tab>

            <div>
                {events_data.map((item, index) => {
                    return (
                        tab === `day${index + 1}` && (
                            <ScheduleConference key={item.id} item={item} />
                        )
                    )
                })}
            </div>
        </Layout>
    )
}

export default TimeLine
