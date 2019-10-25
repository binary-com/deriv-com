import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import device from 'themes/device'

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
    grid-row-gap: 7.5rem;
    grid-template-areas:
        ' twywi twywi twywi twywi twywi . ms ms ms ms ms ms'
        'twyw twyw twyw twyw twyw twyw msi msi msi msi msi msi';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 0;
        grid-template-areas:
            'msi'
            'ms'
            'twywi'
            'twyw';
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
    align-self: ${props => (props.align_self ? props.align_self : 'start')};

    @media ${device.tabletL} {
        margin: 4rem auto;
        width: 80%;
    }
`
const Row = styled.div`
    margin-top: ${props => (props.test ? '0' : '4rem')};
`
const Trading = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <ImageContainer grid_area="msi" align_self="center">
                    <Image img_name="dmt-5-mac.png" alt="DMT5 mac" />
                </ImageContainer>
                <ContentContainer grid_area="ms">
                    <Row test>
                        <Header as="h2">{localize('Standard Account')}</Header>
                        <Text secondary>
                            {localize(
                                'Get started easily with a Standard account for high leverage on your FX trades.',
                            )}
                        </Text>
                    </Row>
                    <Row>
                        <Header as="h2">{localize('Advanced Account')}</Header>
                        <Text secondary>
                            {localize(
                                "Get your trades placed straight through to the market with an Advanced account - a 100% 'A' book account with tight spreads.",
                            )}
                        </Text>
                    </Row>
                </ContentContainer>
                <ContentContainer grid_area="twyw">
                    <Row test>
                        <Header as="h2">{localize('Synthetic Indices')}</Header>
                        <Text secondary>
                            {localize(
                                'Trade 24/7 with a Synthetic Indices account. Trade indices that simulate the movements of real markets.',
                            )}
                        </Text>
                    </Row>
                    <Row>
                        <Header as="h2">
                            {localize('Practice with Demo accounts')}
                        </Header>
                        <Text secondary>
                            {localize(
                                'Create demo accounts (Standard, Advanced or Synthetic Indices) - the best way for you to check out the platform, get familiar with the tools and learn trading techniques.',
                            )}
                        </Text>
                    </Row>
                </ContentContainer>
                <ImageContainer grid_area="twywi" align_self="center">
                    <Image
                        img_name="dmt-5-ipad-iphone.png"
                        alt="DMT5 ipad iphone"
                    />
                </ImageContainer>
            </StyledContainer>
        </StyledSection>
    )
}

export default Trading
