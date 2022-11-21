import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import ExperienceImage from 'images/common/conference/venue.png'
import MapImage from 'images/common/conference/map.png'
import device from 'themes/device'

const Announce = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f9feff;
    padding: 80px 222px;

    @media ${device.laptopM} {
        flex-wrap: wrap;
        padding: 40px 80px;
    }
`
const Place = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 222px;

    @media ${device.laptopM} {
        padding: 40px 80px;
    }
`
const Experience = styled.img`
    max-width: 384px;
    max-height: 403px;
    width: 100%;
`
const ExperienceHeader = styled(Header)`
    max-width: 585px;
    padding-right: 24px;

    @media ${device.laptopM} {
        max-width: unset;
        padding-bottom: 20px;
        padding-right: 0;
        text-align: center;
    }
`
const Placement = styled.img`
    max-width: 1156px;
    max-height: 700px;
    width: 100%;
    box-shadow: rgb(14 14 14 / 4%) 0 16px 16px 16px;

    @media ${device.laptop} {
        max-width: unset;
    }
`
const PlacementHeader = styled(Header)`
    text-align: center;
`

const Venue = () => {
    return (
        <>
            <Announce>
                <ExperienceHeader as="h6" type="subtitle-2" weight="normal">
                    Embora o objetivo seja que nossos parceiros participem online, você também pode
                    vir e ter a experiência completa.
                </ExperienceHeader>
                <Experience src={ExperienceImage} alt="expirience image" />
            </Announce>
            <Place>
                <PlacementHeader as="div" type="heading-3" pb="8px">
                    Endereço
                </PlacementHeader>
                <PlacementHeader as="div" type="subtitle-2" weight="normal" pb="32px">
                    Paseo La Galeria Centro de Eventos Asuncion Paraguay
                </PlacementHeader>
                <Placement src={MapImage} alt="venue map" />
            </Place>
        </>
    )
}

export default Venue
