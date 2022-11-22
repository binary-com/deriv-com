import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import HeroBanner from './images/calendar.svg'
import ScheduleConference from './_schedule'
import events_data from './data_schedule'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import device from 'themes/device'

type TabProps = {
    active?: boolean
    mobile_padding?: string
}

const HeroWrapper = styled.div`
    background-image: url(${HeroBanner});
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 72rem;
    padding: 190px 0 0 120px;

    @media ${device.laptop} {
        padding: 120px 0 0 80px;
    }
    @media ${device.tabletS} {
        padding: 60px 0 0 30px;
        min-height: 60rem;
    }
`

const CalendarHeader = styled.div`
    display: flex;
    justify-content: center;
    margin: 74px;
`

const StyledHeroHeader = styled(Header)`
    padding: 20px 0 20px 12px;
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
        <Layout type="conference" margin_top="0px">
            <HeroWrapper>
                <CalendarHeader>
                    <StyledHeroHeader type="heading-1" weight="700" height="60px" align="center">
                        Cronograma de Palestras
                    </StyledHeroHeader>
                </CalendarHeader>
            </HeroWrapper>
            <Tab>
                <TabItem active={isDay1} onClick={() => onTabClick('dia1')}>
                    <Header type="subtitle-1" align="center">
                        Dia 1
                    </Header>
                </TabItem>
                <TabItem active={isDay2} onClick={() => onTabClick('dia2')}>
                    <Header type="subtitle-1" align="center">
                        Dia 2
                    </Header>
                </TabItem>
                <TabItem active={isDay3} onClick={() => onTabClick('dia3')}>
                    <Header type="subtitle-1" align="center">
                        Dia 3
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
