import React from 'react'
import styled from 'styled-components'
import Alcino from './event-images/Alcino.png'
import Alejandro from './event-images/Alejandro.png'
import Claudia from './event-images/Claudia.png'
import Raul from './event-images/Raul.png'
import Name1 from './event-images/name1.png'
import Name2 from './event-images/name2.png'
import Name3 from './event-images/name3.png'
import { localize } from 'components/localization'
import { Header } from 'components/elements'

const SpeakersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 120px;
`
const SpeakersTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 56px;
    max-width: 1440px;
`
const IndividualSpeaker = styled.div`
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 282px;
    height: 296px;
    margin: 0 12px 56px 12px;
    box-shadow: 0 1px 3px rgba(14, 14, 14, 0.1), 0 1px 2px rgba(14, 14, 14, 0.06);
    border-radius: 8px;
`
const Photo = styled.img`
    max-width: 282px;
    max-height: 190px;
`
const SpeakerInfo = styled(Header)`
    text-align: center;
`

const Speakers = () => {
    const speakers_info = [
        { name: 'Alcino', role: 'Generate LATAM Deriv', photo: Alcino },
        { name: 'Ricardo', role: 'Lider da equipe America Central Deriv', photo: Alcino },
        { name: 'Name', role: 'Lider equipe LATAM Deriv', photo: Name1 },
        { name: 'Name', role: 'Lider de equipe Brasil Deriv', photo: Name2 },
        { name: 'Claudia', role: 'Gestora de affiaclod Deriv', photo: Claudia },
        { name: 'Raul', role: 'Gestora de afficaclos Deriv', photo: Raul },
        { name: 'Alejandro', role: 'Suporte ao cliente Deriv', photo: Alejandro },
        { name: 'Name', role: 'Gestoramdemaffiados Deriv', photo: Name3 },
    ]

    return (
        <SpeakersWrapper>
            <SpeakerInfo as="h5" type="heading-2">
                Palestrantes
            </SpeakerInfo>
            <SpeakersTable>
                {speakers_info.map((speaker) => {
                    return (
                        <IndividualSpeaker key={speaker.name}>
                            <Photo src={speaker.photo} alt={speaker.name} />
                            <SpeakerInfo as="div" type="subtitle-1">
                                {speaker.name}
                            </SpeakerInfo>
                            <SpeakerInfo as="div" type="paragraph-1" weight="normal">
                                {speaker.role}
                            </SpeakerInfo>
                        </IndividualSpeaker>
                    )
                })}
            </SpeakersTable>
        </SpeakersWrapper>
    )
}

export default Speakers
