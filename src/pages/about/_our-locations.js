import React from 'react'
import styled from 'styled-components'
import Button from 'components/form/button.js'
import { localize } from 'components/localization'
import Container from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import Show from 'components/containers/show'
// Icons
import DubaiGif from 'images/gif/dubai.gif'
import CyberjayaGif from 'images/gif/cyberjaya.gif'
import LabuanGif from 'images/gif/labuan.gif'
import MaltaGif from 'images/gif/malta.gif'
import ParaguayGif from 'images/gif/paraguay.gif'

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
        name: localize('Cyberjaya,'),
        icon: (
            <img
                src={CyberjayaGif}
                style={{
                    backgroundColor: 'red',
                    padding: '20px',
                    maxWidth: '50%',
                }}
            />
        ),
        country: localize('Malaysia'),
        grid: 'kll',
    },
    {
        name: localize('Dubai,'),
        icon: <img src={DubaiGif} />,
        country: localize('United Arab Emirates'),
        grid: 'dl',
    },
    {
        name: localize('Asunción,'),
        icon: <img src={ParaguayGif} />,
        country: localize('Paraguay'),
        grid: 'pl',
    },
    {
        name: localize('Birkirkara,'),
        icon: <img src={MaltaGif} />,
        country: localize('Malta'),
        grid: 'ml',
    },
    {
        name: localize('Labuan,'),
        icon: <img src={LabuanGif} />,
        country: localize('Malaysia'),
        grid: 'll',
    },
]

export const OurLocations = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Show.Desktop>
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
                <Modal
                    toggle={toggleModal}
                    is_open={show_modal}
                    closeModal={closeModal}
                >
                    <SignupModal autofocus />
                </Modal>
            </OurLocationsWrapper>
        </Show.Desktop>
    )
}
