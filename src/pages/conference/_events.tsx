import React from 'react'
import styled from 'styled-components'
import Dia1 from './event-images/dia1.png'
import Dia2 from './event-images/dia2.png'
import Dia3 from './event-images/dia3.png'
import { localize } from 'components/localization'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'

const EventsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 120px 80px 120px;
`
const Card = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 384px;
    height: 434px;
`
const EventsHeader = styled(Header)<{ attention?: boolean }>`
    text-align: center;
    white-space: nowrap;
    color: ${({ attention }) => (attention ? 'var(--color-red)' : 'var(--color-black-3)')};
`

const Events = () => {
    const events = [
        {
            day: 'Dia 1',
            icon: Dia1,
            title: '30 de Novembro - Virual e presencial',
            subtitle: 'Introducao e palestras',
        },
        {
            day: 'Dia 2',
            icon: Dia2,
            title: '1 de Dezembro - Virual e presencial',
            subtitle: 'Palestras',
        },
        {
            day: 'Dia 3',
            icon: Dia3,
            title: '2 de Dezembro - Somento presencial',
            subtitle: 'Workshop e reunioes individuals',
        },
    ]

    return (
        <EventsWrapper>
            {events.map((event) => {
                return (
                    <Card key={event.day}>
                        <EventsHeader as="div" type="heading-3">
                            {event.day}
                        </EventsHeader>
                        <img src={event.icon} alt="day" width={384} height={256} />
                        <EventsHeader as="div" weight="normal" type="subtitle-2" attention>
                            {event.title}
                        </EventsHeader>
                        <EventsHeader as="div" weight="normal" type="subtitle-1">
                            {event.subtitle}
                        </EventsHeader>
                    </Card>
                )
            })}
        </EventsWrapper>
    )
}

export default Events
