import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Header } from 'components/elements'
import ExperienceImage from 'images/common/conference/venue.png'
import MapImage from 'images/common/conference/map.png'
import device from 'themes/device'
import { localize } from 'components/localization'

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

const Venue = (map_link: string) => {
    const google_map_link =
        map_link ||
        'https://www.google.com/maps/place/Paraguay/@-32.0487267,-69.8405863,5z/data=!4m13!1m7!3m6!1s0x945c083490f13d63:0xb3faff611d582ef3!2sParaguay!3b1!8m2!3d-23.442503!4d-58.443832!3m4!1s0x945c083490f13d63:0xb3faff611d582ef3!8m2!3d-23.442503!4d-58.443832'
    return (
        <>
            <Announce>
                <ExperienceHeader as="h6" type="subtitle-2" weight="normal">
                    {localize(
                        'While the goal is for our partners to participate online, you can also come and get the full experience.',
                    )}
                </ExperienceHeader>
                <Experience src={ExperienceImage} alt="expirience image" />
            </Announce>
            <Place>
                <PlacementHeader as="div" type="heading-3" pb="8px">
                    {localize('Address')}
                </PlacementHeader>
                <PlacementHeader as="div" type="subtitle-2" weight="normal" pb="32px">
                    {localize('Paseo La Galeria Event Center Asuncion Paraguay')}
                </PlacementHeader>
                <Link to={google_map_link}>
                    <Placement src={MapImage} alt="venue map" />
                </Link>
            </Place>
        </>
    )
}

export default Venue
