import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'

const VenueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 222px;
`
const Announce = styled.div`
    flex-direction: row;
    justify-content: space-between;
`
const Map = styled.div`
    flex-direction: column;
`
const VenueImage = styled.img`
    max-width: 384px;
    max-height: 403px;
    width: 100%;
`
const MapImage = styled.img`
    max-width: 1156px;
    max-height: 700px;
    width: 100%;
`

const Venue = () => {
    return (
        <VenueWrapper>
            <Announce>
                <Header as="h6" type="subtitle-2" weight="normal">
                    Embora o objetivo seja nossos parceiros participem online, voce tambem pode e
                    ter a experiencia completa
                </Header>
                <VenueImage src="" alt="announce image" />
            </Announce>
            <Map>
                <Header as="div" type="heading-3">
                    Endereco
                </Header>
                <Header as="div" type="subtitle-2" weight="normal">
                    Paseo La Galeria Centro de Eventos Asuncion Paraguay
                </Header>
                <MapImage src="" alt="map image" />
            </Map>
        </VenueWrapper>
    )
}

export default Venue
