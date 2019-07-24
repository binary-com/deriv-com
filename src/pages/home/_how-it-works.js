import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import Container, { SectionContainer } from 'components/containers/container'
import { SectionHeader } from './_headers'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'

import Practice from 'images/svg/practice.svg'
import Trade from 'images/svg/trade.svg'
import Withdraw from 'images/svg/withdraw.svg'

const SecondaryHeader = styled(Header)`
    margin-top: 2rem;
    margin-bottom: 0.8rem;
`

const Works = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(3rem, auto);
    grid-gap: 2rem;
    padding: 2rem 0;

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`

const SecondaryArticle = styled.article`
    padding: 0 0.5rem;
    min-width: 32.8rem;
`

export const HowItWorks = () => (
    <SectionContainer>
        <SectionHeader>
            <Header as="h2" align="center" color="black-2">
                {localize('How it works')}
            </Header>
        </SectionHeader>
        <Container>
            <Works>
                <SecondaryArticle>
                    <Practice />
                    <SecondaryHeader as="h4" weight="500">
                        {localize('Practice')}
                    </SecondaryHeader>
                    <Text>
                        {localize(
                            'Open a demo account with unlimited funds. Start trading for free and practise to hone your skills.',
                        )}
                    </Text>
                </SecondaryArticle>
                <SecondaryArticle>
                    <Trade />
                    <SecondaryHeader as="h4" weight="500">
                        {localize('Trade')}
                    </SecondaryHeader>
                    <Text>
                        {localize(
                            'Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.',
                        )}
                    </Text>
                </SecondaryArticle>
                <SecondaryArticle>
                    <Withdraw />
                    <SecondaryHeader as="h4" weight="500">
                        {localize('Withdraw')}
                    </SecondaryHeader>
                    <Text>
                        {localize(
                            'Get funds quickly and easily. We support many deposit and withdrawal options.',
                        )}
                    </Text>
                </SecondaryArticle>
            </Works>
        </Container>
    </SectionContainer>
)
