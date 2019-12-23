import React from 'react'
import styled from 'styled-components'
import { HeroHeader } from './_headers'
// import Video from './_video'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Show } from 'components/containers'
import { Modal, useModal } from 'components/elements'
import { localize } from 'components/localization'
import SignupModal from 'components/custom/signup-modal'

const HeroWrapper = styled.section`
    width: 100%;
    padding-top: 27rem;
    min-height: calc(100vh - 7rem);
    background: var(--color-black);
    position: relative;

    @media ${device.laptop} {
        background-position: -10rem 100%;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        background-color: var(--color-black);
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const StyledArticle = styled.article`
    position: relative;
    z-index: 2;
`

// const VideoWrapper = styled.div`
//     position: absolute;
//     max-width: 58vw;
//     height: 52.5rem;
//     right: 0;
//     top: 2rem;

//     @media ${device.laptop} {
//         display: none;
//     }
// `

const HeroGrid = styled.section`
    width: 100%;
    max-width: 100%;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;

    ${Button} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: left;
    }
`

export const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <HeroHeader align="center" as="h1" color="white" lh="1.2">
                            {localize('This is your ultimate trading experience')}
                        </HeroHeader>
                        <HeroHeader as="h4" align="center" color="white" weight="500" secondary>
                            {localize('The next evolution of online trading by Binary.com')}
                        </HeroHeader>
                        <ButtonWrapper>
                            <Button type="submit" onClick={toggleModal} secondary>
                                {localize('Create a free account')}
                            </Button>
                        </ButtonWrapper>
                    </StyledArticle>
                    {/* <VideoWrapper>
                         <Video />
                         </VideoWrapper> */}
                    <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                        <SignupModal autofocus />
                    </Modal>
                </HeroGrid>
            </Container>
            <Show.Desktop>
                <video
                    title={localize('deriv.app platform video')}
                    style={{
                        position: 'absolute',
                        top: '0%',
                        objectFit: 'fill',
                        filter: 'brightness(0.8)',
                    }}
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src="/deriv.mp4" type="video/webm" />
                    <source src="/deriv.mp4" type="video/mp4" />
                </video>
            </Show.Desktop>
        </HeroWrapper>
    )
}
