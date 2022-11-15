import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import ExperienceImage from 'images/common/conference/venue.png'
import MapImage from 'images/common/conference/map.png'

const VenueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9feff;
    padding: 80px 222px;
`
const Announce = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
`
const Place = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`
const Experience = styled.img`
    max-width: 384px;
    max-height: 403px;
    width: 100%;
`
const ExperienceHeader = styled(Header)`
    max-width: 585px;
    padding-right: 24px;
`
const Placement = styled.img`
    max-width: 1156px;
    max-height: 700px;
    width: 100%;
    padding-top: 32px;
`
const PlacementHeader = styled(Header)`
    text-align: center;
    padding-bottom: 8px;
`

const Venue = () => {
    return (
        <>
            <VenueWrapper>
                <Announce>
                    <ExperienceHeader as="h6" type="subtitle-2" weight="normal">
                        Embora o objetivo seja nossos parceiros participem online, voce tambem pode
                        e ter a experiencia completa
                    </ExperienceHeader>
                    <Experience src={ExperienceImage} alt="expirience image" />
                </Announce>
            </VenueWrapper>
            <Place>
                <PlacementHeader as="div" type="heading-3">
                    Endereco
                </PlacementHeader>
                <PlacementHeader as="div" type="subtitle-2" weight="normal">
                    Paseo La Galeria Centro de Eventos Asuncion Paraguay
                </PlacementHeader>
                <Placement src={MapImage} alt="venue map" />
            </Place>
        </>
    )
}

export default Venue
