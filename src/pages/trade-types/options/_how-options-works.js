import React from 'react'
import styled from 'styled-components'
import { SmallContainer, Grid } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import GetQuote from 'images/svg/trade-types/get-quote.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'

const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
    height: 240px;
`

const Card = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
    justify-content: flex-start;
`

const HowOptionsWorks = () => {
    return (
        <SectionContainer>
            <SmallContainer direction="column">
                <Header as="h3" mb="3.2rem">
                    {localize('How options contracts work')}
                </Header>
                <OptionGrid>
                    <Card fd="column" p="2.4rem">
                        <div>
                            <DefinePosition />
                        </div>
                        <Text weight="bold" mt="1.6rem" mb="0.8rem">
                            {localize('Define your position')}
                        </Text>
                        <Text>
                            {localize(
                                'Select the market, trade type, duration, and type in the amount you want to stake.',
                            )}
                        </Text>
                    </Card>
                    <Card fd="column" p="2.4rem">
                        <div>
                            <GetQuote />
                        </div>
                        <Text weight="bold" mt="1.6rem" mb="0.8rem">
                            {localize('Get quote')}
                        </Text>
                        <Text>
                            {localize(
                                'Receive payout quote or stake amount based on the position you have defined.',
                            )}
                        </Text>
                    </Card>
                    <Card fd="column" p="2.4rem">
                        <div>
                            <PurchaseContract />
                        </div>
                        <Text weight="bold" mt="1.6rem" mb="0.8rem">
                            {localize('Purchase your contract')}
                        </Text>
                        <Text>
                            {localize(
                                'Purchase the contract if you are satisfied with the quote or re-define your position.',
                            )}
                        </Text>
                    </Card>
                </OptionGrid>
            </SmallContainer>
        </SectionContainer>
    )
}

export default HowOptionsWorks
