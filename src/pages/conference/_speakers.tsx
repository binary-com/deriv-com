import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import Alcino from 'images/common/conference/Alcino.png'
import Ricardo from 'images/common/conference/Ricardo.png'
import Sebastian from 'images/common/conference/Sebastian.png'
import Alejandro from 'images/common/conference/Alejandro.png'
import Claudia from 'images/common/conference/Claudia.png'
import Raul from 'images/common/conference/Raul.png'
import Sasky from 'images/common/conference/Sasky.png'
import Ana from 'images/common/conference/Ana.png'

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
    white-space: nowrap;
`

const Speakers = () => {
    const speakers_info = [
        { name: 'Alcino', role: 'Gerente LATAM Deriv', photo: Alcino },
        { name: 'Ricardo', role: 'Líder da equipe America Central Deriv', photo: Ricardo },
        { name: 'Sebastian', role: 'Conferência de Afiliados da Deriv 2022', photo: Sebastian },
        { name: 'Sasky', role: 'Líder da equipe Brasil Deriv', photo: Sasky },
        { name: 'Claudia', role: 'Gestora de afiliados Deriv', photo: Claudia },
        { name: 'Raul', role: 'Gestora de afficaclos Deriv', photo: Raul },
        { name: 'Alejandro', role: 'Suporte ao cliente Deriv', photo: Alejandro },
        { name: 'Ana', role: 'Gestora de afiliados Deriv', photo: Ana },
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
                            <SpeakerInfo as="div" type="subtitle-1" pt="20px">
                                {speaker.name}
                            </SpeakerInfo>
                            <SpeakerInfo
                                as="div"
                                type="paragraph-1"
                                weight="normal"
                                pt="20px"
                                pb="16px"
                            >
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
