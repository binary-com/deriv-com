import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'components/form/button.js'
import { localize } from 'components/localization'
import Container from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'

import DubaiSVG from 'images/svg/dubai.svg'
import KualaLumpurSVG from 'images/svg/kuala-lumpur.svg'
import LabuanSVG from 'images/svg/labuan.svg'
import MaltaSVG from 'images/svg/malta.svg'
import ParaguaySVG from 'images/svg/paraguay.svg'

const OurLocationsWrapper = styled.div`
    width: 100%;
    background-color: var(--color-white);
    text-align: center;
    padding: 8rem 0;

    button {
        margin-top: 4rem;
        padding: 1.2rem 2.5rem;
    }
`
const OurLocationsContainer = styled(Container)`
    padding: 4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-template-areas:
        'kll kll kll kll dl dl dl dl pl pl pl pl'
        '. . ml ml ml ml ll ll ll ll . .';
`

const Location = styled.div`
    grid-area: ${props => props.location};

    p {
        margin-top: 0.5rem;
        font-size: var(--text-size-sm);
        line-height: 1.5;
        color: var(--color-black-2);
    }
`

const locations = [
    {
        name: localize('Kuala Lumpur'),
        icon: <KualaLumpurSVG />,
        country: localize('Malaysia'),
        grid: 'kll',
    },
    {
        name: localize('Dubai'),
        icon: <DubaiSVG />,
        grid: 'dl',
    },
    {
        name: localize('Asunción'),
        icon: <ParaguaySVG />,
        country: localize('Paraguay'),
        grid: 'pl',
    },
    {
        name: localize('Kuala Lumpur'),
        icon: <KualaLumpurSVG />,
        country: localize('Malaysia'),
        grid: 'kll',
    },
    {
        name: localize('Birkirkara'),
        icon: <MaltaSVG />,
        country: localize('Malta'),
        grid: 'ml',
    },
    {
        name: localize('Labuan'),
        icon: <LabuanSVG />,
        country: localize('Malaysia'),
        grid: 'll',
    },
]

export const OurLocations = ({ toggleModal }) => (
    <OurLocationsWrapper>
        <Header as="h2" align="center" color="black-2">
            {localize('Our Locations')}
        </Header>
        <OurLocationsContainer>
            {locations.map((location, idx) => (
                <Location key={idx} location={location.grid}>
                    {location.icon}
                    <p>
                        {location.name}
                        {location.country && (
                            <>
                                <br />
                                {location.country}
                            </>
                        )}
                    </p>
                </Location>
            ))}
        </OurLocationsContainer>
        <Button secondary onClick={toggleModal}>
            {localize('Start with free practice account')}
        </Button>
    </OurLocationsWrapper>
)

OurLocations.propTypes = {
    toggleModal: PropTypes.func,
}
