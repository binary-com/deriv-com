import React from 'react'
import styled from 'styled-components'
import { SectionHeader, StyledSubHeader } from './_headers'
import Button from 'components/form/button'
import Container, {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'

import SuperiorPlatform from 'images/svg/superior-trading-platform.svg'
import PatentedTech from 'images/svg/patented-technology.svg'
import Intuitive from 'images/svg/intuitive.svg'

const DtraderSectionContainer = styled(SectionContainer)`
    border-bottom: 1px solid var(--color-grey-2);
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );

    h2 {
        &::before {
            content: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='34' viewBox='0 0 38 36' aria-labelledby='deriv-icon-title'%3E%3Ctitle id='deriv-icon-title'%3EDeriv icon%3C/title%3E%3Cdefs%3E%3ClinearGradient id='deriv_a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6544'/%3E%3Cstop offset='100%25' stop-color='%23FF4449'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='nonzero'%3E%3Cpath fill='url(%23deriv_a)' d='M8.244 0v.039L21.94 18 0 35.961V36h22.154c6.466 0 12.076-4.498 13.53-10.848l1.833-8.01a14.081 14.081 0 0 0-2.663-11.859A13.843 13.843 0 0 0 23.99 0H8.244z'/%3E%3Cpath fill='%23B51A31' d='M21.93 18.036L12.298 36H0z'/%3E%3C/g%3E%3C/svg%3E");
            width: 14rem;
        }
    }
`

const Cta = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`
const StyledContainer = styled(Container)`
    padding: 4rem 0;
`

export const Dtrader = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <DtraderSectionContainer>
            <SectionHeader>
                <Header as="h2" align="center" lh="6rem">
                    {localize('DTrader')}
                </Header>
                <StyledSubHeader as="h4" align="center" weight="500">
                    {localize(
                        'The platform that helps you make better trading decisions',
                    )}
                </StyledSubHeader>
            </SectionHeader>
            <StyledContainer>
                <FlexGridContainer
                    content_width="32rem"
                    gap="1rem"
                    justify="center"
                >
                    <Card
                        title={localize('Superior trading platform')}
                        Icon={SuperiorPlatform}
                        content={[
                            localize(
                                'A revolutionary platform for all traders.',
                            ),
                            localize(
                                'Access the world’s most traded markets and assets.',
                            ),
                            localize('100+ instruments.'),
                        ]}
                        width="32rem"
                    />

                    <Card
                        title={localize('Patented pricing technology')}
                        Icon={PatentedTech}
                        content={[
                            localize('Real-time, two-way pricing.'),
                            localize('Powered by our patented algorithms.'),
                            localize('Transparency guaranteed.'),
                        ]}
                        width="32rem"
                    />
                    <Card
                        title={localize('Intuitive and customisable')}
                        Icon={Intuitive}
                        content={[
                            localize(
                                'Easy-to-use and powerful trading environment.',
                            ),
                            localize(
                                'Trade the way you want with customisable charts, analytic tools, and themes.',
                            ),
                        ]}
                        width="32rem"
                    />
                </FlexGridContainer>
            </StyledContainer>
            <Cta>
                <Button onClick={toggleModal} secondary>
                    {localize('Create a free account')}
                </Button>
                <Modal
                    toggle={toggleModal}
                    is_open={show_modal}
                    is_blurred={true}
                    closeModal={closeModal}
                >
                    <SignupModal autofocus />
                </Modal>
            </Cta>
        </DtraderSectionContainer>
    )
}
