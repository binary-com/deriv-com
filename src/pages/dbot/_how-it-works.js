import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, SectionContainer, Wrapper } from 'components/containers'
import { Header, Image, LinearLoader, SideTab } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const BackgroundContainer = styled(SectionContainer)`
    background: linear-gradient(to bottom, var(--color-grey-2), var(--color-white));
    border-bottom: 1px solid var(--color-grey-1);

    @media ${device.tabletL} {
        margin: 4rem 0;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: var(--text-size-l);
        margin-top: 1rem;
    }
`

const LoaderContainer = styled.div`
    margin-top: 3.8rem;
    margin-left: auto;
    width: 80%;

    @media ${device.tabletL} {
        margin: auto;
        width: 100%;
    }
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
    @media ${device.tabletL} {
        margin: 2rem 0;
    }

    animation: slide 0.4s linear;
`

const SelectAsset = ({ alt, img_name }) => (
    <AnimatedContainer>
        <Image img_name={img_name} alt={alt} width="100%" />
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
                <StyledHeader as="h2" align="center">
                    {localize('Build a trading robot in 5 easy steps')}
                </StyledHeader>
                <Wrapper width="100%" margin={{ top: '4rem' }}>
                    <SideTab>
                        <SelectAsset
                            label="select_asset"
                            text={localize('1. Select your asset')}
                            onClick={() => setProgress(20)}
                            img_name="dbot-step1.png"
                            alt="Step 1"
                        />
                        <SelectAsset
                            label="set_purchase"
                            text={localize('2. Set purchase conditions')}
                            onClick={() => setProgress(40)}
                            img_name="dbot-step2.png"
                            alt="Step 2"
                        />
                        <SelectAsset
                            label="restart_conditions"
                            text={localize('3. Set restart conditions')}
                            onClick={() => setProgress(60)}
                            img_name="dbot-step3.png"
                            alt="Step 3"
                        />
                        <SelectAsset
                            label="run_bot"
                            text={localize('4. Run bot')}
                            onClick={() => setProgress(80)}
                            img_name="dbot-step4.png"
                            alt="Step 4"
                        />
                        <SelectAsset
                            label="check_profit"
                            text={localize('5. Check profit')}
                            onClick={() => setProgress(100)}
                            img_name="dbot-step5.png"
                            alt="Step 5"
                        />
                    </SideTab>
                    <LoaderContainer>
                        <LinearLoader width="80%" progress={progress} />
                    </LoaderContainer>
                </Wrapper>
            </Container>
        </BackgroundContainer>
    )
}

SelectAsset.propTypes = {
    alt: PropTypes.string,
    img_name: PropTypes.string,
}

export default BannerSection
