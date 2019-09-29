import React from 'react'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import device from 'themes/device'
import MakeSmarterImage from 'images/svg/make-smarter.svg'
import TradeWhatYouWantImage1 from 'images/svg/trade-what-you-want1.svg'
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
        'acci acci acci acci acci acci . acc acc acc acc acc'
        'syn syn syn syn syn . syni syni syni syni syni syni';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 0;
        grid-template-areas:
            'acci'
            'acc'
            'syni'
            'syn';
    }
`
const ContentContainer = styled.div`
    width: 100%;
    max-width: 41.5rem;
    grid-area: ${props => props.grid_area};
    display: flex;
    flex-direction: column;

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
    width: 100%;
    @media ${device.tabletL} {
        margin-top: 4rem;
        height: 166px;
    }
`
const MakeSmarterSVG = styled(MakeSmarterImage)`
    grid-area: acci;
    ${CommonSVG}
`
const CommonTradeWhatYouWhant = css`
    grid-area: twywi1;
    ${CommonSVG}
    @media ${device.tabletL} {
        height: 210px;
    }
`
const TradeWhatYouWantSVG1 = styled(TradeWhatYouWantImage1)`
    ${CommonTradeWhatYouWhant}
`
const HowYouWantSVG = styled(HowYouWantImage)`
    grid-area: syni;
    ${CommonSVG}
`
const Part = styled.div`
    margin-top: ${props => (props.no_margin ? '' : '4rem')};
`
const Trading = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <MakeSmarterSVG />
                <ContentContainer grid_area="acc">
                    <Part no_margin>
                        <Header as="h2">{localize('Standard Account')}</Header>
                        <Text>
                            {localize(
                                'Get started easily with a Standard account for high leverage on your FX trades.',
                            )}
                        </Text>
                    </Part>
                    <Part>
                        <Header font_size="4.7rem">
                            {localize('Advanced Account')}
                        </Header>
                        <Text>
                            {localize(
                                "Get your trades placed straight through to the market with an Advanced account - a 100% 'A' book account with tight spreads.",
                            )}
                        </Text>
                    </Part>
                </ContentContainer>
                <ContentContainer grid_area="syn">
                    <Part no_margin>
                        <Header as="h2">{localize('Synthetic Indices')}</Header>
                        <Text>
                            {localize(
                                'Trade 24/7 with a Synthetic Indices account. Trade indices that simulate the movements of real markets.',
                            )}
                        </Text>
                    </Part>
                    <Part>
                        <Header font_size="4.7rem">
                            {localize('Practice with Demo accounts')}
                        </Header>
                        <Text>
                            {localize(
                                'Create demo accounts (Standard, Advanced or Synthetic Indices) - the best way for you to check out the platform, get familiar with the tools and learn trading techniques.',
                            )}
                        </Text>
                    </Part>
                </ContentContainer>
                <HowYouWantSVG />
            </StyledContainer>
        </StyledSection>
    )
}

export default Trading
