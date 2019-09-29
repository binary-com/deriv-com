import React from 'react'
import styled, { css } from 'styled-components'
import { isBrowser } from '../../common/utility.js'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import device, { size } from 'themes/device'
import BuildStrategySVG from 'images/svg/build-your-strategy.svg'

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
    grid-template-areas: 'ms ms ms ms ms . msi msi msi msi msi msi';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 0;
        grid-template-areas:
            'msi'
            'ms';
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
    width: 100%;
    @media ${device.tabletL} {
        margin-top: 4rem;
        height: 166px;
    }
`
const BuildStrategyImage = styled(BuildStrategySVG)`
    grid-area: msi;
    ${CommonSVG}
`

const Trading = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <ContentContainer grid_area="ms">
                    <Header as="h2">
                        {localize('Start with a proven strategy')}
                    </Header>
                    <Text>
                        {localize(
                            'Martingale, D’Alembert, Oscar’s Grid, Cuttler’s RSI, Bollinger Bands, and SMA Crossover - load and customise proven strategies or create your own from scratch.',
                        )}
                    </Text>
                </ContentContainer>
                <BuildStrategyImage />
            </StyledContainer>
        </StyledSection>
    )
}

export default Trading
