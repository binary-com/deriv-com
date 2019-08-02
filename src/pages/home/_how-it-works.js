import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from './_headers'
import Container, {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import device from 'themes/device'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'

import Practice from 'images/svg/practice.svg'
import Trade from 'images/svg/trade.svg'
import Withdraw from 'images/svg/withdraw.svg'

const SecondaryHeader = styled(Header)`
    margin-top: 2rem;
    margin-bottom: 0.8rem;
`

const Works = styled(FlexGridContainer)`
    margin-top: 4rem;
`

const SecondaryArticle = styled.article`
    @media ${device.mobileL} {
        & > * {
            text-align: center;
        }
    }
`

export const HowItWorks = () => (
    <SectionContainer>
        <SectionHeader>
            <Header as="h2" align="center" color="black-2">
                {localize('How it works')}
            </Header>
        </SectionHeader>
        <Container>
            <Works content_width="32rem" justify="center" gap="1rem">
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
