import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import Container, { SectionContainer } from 'components/containers/container.js'
import Image from 'components/elements/image'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'

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
    grid-row-gap: 8rem;
    grid-template-areas:
        'ms ms ms ms ms . msi msi msi msi msi msi'
        'twywi twywi twywi twywi twywi twywi . twyw twyw twyw twyw twyw'
        'hyw hyw hyw hyw hyw . hywi hywi hywi hywi hywi hywi';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 0;
        grid-template-areas:
            'msi'
            'ms'
            'twywi'
            'twyw'
            'hywi'
            'hyw';
    }
`
const ContentContainer = styled.div`
    width: 100%;
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

const ImageContainer = styled.div`
    grid-area: ${props => props.grid_area};

    @media ${device.tabletL} {
        margin: 4rem auto;
        width: 100%;
    }
`
const ImageWrapper = styled.div`
    max-width: ${props => props.max_width};
    max-height: 30rem;
    margin: 0 auto;
`
const Trading = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <ContentContainer grid_area="ms">
                    <Header as="h2">
                        {localize('Make smarter trading decisions')}
                    </Header>
                    <Text secondary>
                        {localize(
                            'Customise your chart with technical indicators and widgets — everything you need to make smarter trading decisions.',
                        )}
                    </Text>
                </ContentContainer>
                <ImageContainer grid_area="msi">
                    <ImageWrapper max_width="42rem">
                        <Image img_name="make-smarter.png" alt={localize("Make smarter")} />
                    </ImageWrapper>
                </ImageContainer>
                <ImageContainer grid_area="twywi">
                    <ImageWrapper max_width="50rem">
                        <Image
                            img_name="trade-what-you-want.png"
                            alt={localize("Trade what you want")}
                        />
                    </ImageWrapper>
                </ImageContainer>
                <ContentContainer grid_area="twyw">
                    <Header as="h2">
                        {localize('Trade what you want, when you want...')}
                    </Header>
                    <Text secondary>
                        {localize(
                            'Forex, indices, commodities and volatility indices — whether it’s the world markets or synthetic markets that excite you, you’ll find them here.',
                        )}
                    </Text>
                </ContentContainer>
                <ContentContainer grid_area="hyw">
                    <Header as="h2">{localize('...And how you want')}</Header>
                    <Text secondary>
                        {localize(
                            'Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second.',
                        )}
                    </Text>
                </ContentContainer>
                <ImageContainer grid_area="hywi">
                    <ImageWrapper max_width="44.8rem">
                        <Image img_name="how-you-want.png" alt={localize("How you want")} />
                    </ImageWrapper>
                </ImageContainer>
            </StyledContainer>
        </StyledSection>
    )
}

export default Trading
