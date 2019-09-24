import React from 'react'
import styled, { css } from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import device, { size } from 'themes/device'
import MakeSmarterImage from 'images/svg/make-smarter.svg'
import TradeWhatYouWantImage1 from 'images/svg/trade-what-you-want1.svg'
import TradeWhatYouWantImage2 from 'images/svg/trade-what-you-want2.svg'
import HowYouWantImage from 'images/svg/how-you-want.svg'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    box-shadow: inset 0 1px 0 0 var(--color-grey-2);

    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
    }
`
const StyledContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-areas:
        'ms ms ms ms ms . msi msi msi msi msi msi'
        'twywi1 twywi1 twywi1 twywi1 twywi1 twywi1 . twyw twyw twyw twyw twyw'
        'hyw hyw hyw hyw hyw . hywi hywi hywi hywi hywi hywi';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 0;
        grid-template-areas:
            'msi'
            'ms'
            'twywi1'
            'twyw'
            'hywi'
            'hyw';
    }
`
const ContentContainer = styled.div`
    width: 100%;
    max-width: 41.5rem;
    grid-area: ${props => props.grid_area};

    ${Text} {
        margin-top: 0.8rem;
    }

    @media ${device.tabletL} {
        ${Header} {
            margin-top: 1.78rem;
            font-size: 3rem;
            font-weight: 500;
        }
        ${Text} {
            margin-top: 1rem;
            font-size: 2rem;
        }
    }
`
const CommonSVG = css`
    @media ${device.tabletL} {
        width: 288px;
        margin-top: 4rem;
    }
`
const MakeSmarterSVG = styled(MakeSmarterImage)`
    grid-area: msi;
    ${CommonSVG}
    height: 166px;
`
const TradeWhatYouWantSVG1 = styled(TradeWhatYouWantImage1)`
    grid-area: twywi1;
    ${CommonSVG}
    height: 210px;
`
const TradeWhatYouWantSVG2 = styled(TradeWhatYouWantImage2)`
    grid-area: twywi1;
    ${CommonSVG}
    height: 210px;
`
const HowYouWantSVG = styled(HowYouWantImage)`
    grid-area: hywi;
    ${CommonSVG}
    height: 166px;
`
const Trading = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <ContentContainer grid_area="ms">
                    <Header as="h2">Make smarter trading decisions</Header>
                    <Text>
                        Customise your chart with technical indicators and
                        widgets — everything you need to make smarter trading
                        decisions.
                    </Text>
                </ContentContainer>
                <MakeSmarterSVG />
                {window.innerWidth > size.tabletL ? (
                    <TradeWhatYouWantSVG1 />
                ) : (
                    <TradeWhatYouWantSVG2 />
                )}
                <ContentContainer grid_area="twyw">
                    <Header as="h2">
                        Trade what you want, when you want...
                    </Header>
                    <Text>
                        Forex, indices, commodities and volatility indices —
                        whether it’s the world markets or synthetic markets that
                        excite you, you’ll find them here.
                    </Text>
                </ContentContainer>
                <ContentContainer grid_area="hyw">
                    <Header as="h2">...And how you want</Header>
                    <Text>
                        Choose from a variety of customisable trade types with
                        stakes as low as $0.35 and durations as short as a
                        second.
                    </Text>
                </ContentContainer>
                <HowYouWantSVG />
            </StyledContainer>
        </StyledSection>
    )
}

export default Trading
