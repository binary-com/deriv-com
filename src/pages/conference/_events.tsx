import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import Dia1 from 'images/common/conference/dia1.png'
import Dia2 from 'images/common/conference/dia2.png'
import Dia3 from 'images/common/conference/dia3.png'
import device from 'themes/device'
import { localize } from 'components/localization'

const EventsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 120px 80px 120px;

    @media ${device.tabletL} {
        align-items: center;
        padding: 0 0 40px;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 384px;
    height: 434px;
    margin: 0 12px;
`
const EventsHeader = styled(Header)`
    text-align: center;
    white-space: nowrap;
    color: var(--color-black-3);
`

type TEvents = {
    day: string
    icon: string
    title: string
    subtitle: string
}

const Events = () => {
    const events: TEvents[] = [
        {
            day: 'Day 1',
            icon: Dia1,
            title: 'November 30 - Virtual and in person',
            subtitle: 'Introduction and lectures',
        },
        {
            day: 'Day 2',
            icon: Dia2,
            title: 'December 1 - Virtual and in person',
            subtitle: 'Speeches',
        },
        {
            day: 'Day 3',
            icon: Dia3,
            title: 'December 2 - In person only',
            subtitle: 'Workshops and individual meetings',
        },
    ]

    return (
        <EventsWrapper>
            {events.map((event) => {
                return (
                    <Card key={event.day}>
                        <EventsHeader as="div" type="heading-3" pb="32px">
                            {localize(event.day)}
                        </EventsHeader>
                        <img src={event.icon} alt="day" width={384} height={256} />
                        <EventsHeader as="div" weight="normal" type="subtitle-2" pt="24px" pb="8px">
                            {localize(event.title)}
                        </EventsHeader>
                        <EventsHeader as="div" weight="normal" type="subtitle-1">
                            {localize(event.subtitle)}
                        </EventsHeader>
                    </Card>
                )
            })}
        </EventsWrapper>
    )
}

export default Events
