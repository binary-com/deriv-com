import React, { useState } from 'react'
import styled from 'styled-components'
import Wrapper from 'components/containers/wrapper'
import Container, { SectionContainer } from 'components/containers/container'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import SideTab from 'components/elements/side-tab'
import Image from 'components/elements/image'
import Loader from 'components/elements/loader'

const BackgroundContainer = styled(SectionContainer)`
    background: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
    border-bottom: 1px solid var(--color-grey-1);
`

const LoaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 80%;
`

const AnimatedContainer = styled.div`
    @keyframes slide {
        0% {
            transform: translateX(8rem);
        }
        100% {
            transform: translateX(0);
        }
    }

    animation: slide 0.4s linear;
`

const SelectAsset = () => (
    <AnimatedContainer>
        <Image
            img_name="dbot-macbook.png"
            alt="Macbook dbot image"
            width="100%"
        />
    </AnimatedContainer>
)

const BannerSection = () => {
    const [progress, setProgress] = useState(25)

    return (
        <BackgroundContainer>
            <Container direction="column" align="center">
                <Header as="h4" align="center">
                    {localize('How it works')}
                </Header>
                <Header as="h2" align="center">
                    {localize('Build a trading robot in 4 easy steps')}
                </Header>
                <Wrapper width="100%" margin={{ top: '4rem' }}>
                    <SideTab>
                        <SelectAsset
                            label="select_asset"
                            text="1. Select your asset"
                            onClick={() => setProgress(25)}
                        />
                        <SelectAsset
                            label="set_purchase"
                            text="2. Set purchase conditions"
                            onClick={() => setProgress(50)}
                        />
                        <SelectAsset
                            label="analyse_result"
                            text="3. Analyse the result"
                            onClick={() => setProgress(75)}
                        />
                        <SelectAsset
                            label="repeat"
                            text="4. Repeat"
                            onClick={() => setProgress(100)}
                        />
                    </SideTab>
                    <LoaderContainer>
                        <Loader width="80%" progress={progress} />
                    </LoaderContainer>
                </Wrapper>
            </Container>
        </BackgroundContainer>
    )
}

export default BannerSection
