import React from 'react'
import styled from 'styled-components'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import Show from 'components/containers/show'
// Icons
import DubaiSvg from 'images/svg/dubai.svg'
import CyberjayaSvg from 'images/svg/cyberjaya.svg'
import LabuanSvg from 'images/svg/labuan.svg'
import MaltaSvg from 'images/svg/malta.svg'
import ParaguaySvg from 'images/svg/paraguay.svg'

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
        name: <Localize translate_text="Cyberjaya," />,
        icon: <CyberjayaSvg />,
        country: <Localize translate_text="Malaysia" />,
        grid: 'kll',
    },
    {
        name: <Localize translate_text="Dubai," />,
        icon: <DubaiSvg />,
        country: <Localize translate_text="United Arab Emirates" />,
        grid: 'dl',
    },
    {
        name: <Localize translate_text="Asunción," />,
        icon: <ParaguaySvg />,
        country: <Localize translate_text="Paraguay" />,
        grid: 'pl',
    },
    {
        name: <Localize translate_text="Birkirkara," />,
        icon: <MaltaSvg />,
        country: <Localize translate_text="Malta" />,
        grid: 'ml',
    },
    {
        name: <Localize translate_text="Labuan," />,
        icon: <LabuanSvg />,
        country: <Localize translate_text="Malaysia" />,
        grid: 'll',
    },
]

export const OurLocations = () => {
    return (
        <Show.Desktop>
            <OurLocationsWrapper>
                <Header as="h2" align="center" color="black-2">
                    {localize('Our locations')}
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
                <LinkButton secondary to='/signup/'>
                    {localize('Start with a free practice account')}
                </LinkButton>
            </OurLocationsWrapper>
        </Show.Desktop>
    )
}
