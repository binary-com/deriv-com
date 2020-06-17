import React from 'react'
import { SmallContainer, Ul } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

const Policies = () => {
    return (
        <>
            <SectionContainer background="white" padding="8.8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('Margin policies on Deriv')}
                    </Header>
                    <Text mb="1.2rem">
                        {localize(
                            'When trading on Deriv, we can apply stop-out and forced liquidation measures to protect your account against losses that might exceed your equity. Equity, in this case, is the sum of your balance and floating profit and loss (PnL).',
                        )}
                    </Text>
                    <Text mb="0.8rem">
                        {localize(
                            'These measures are enforced when the margin level, that is, the ratio of equity to margin, falls below the stop-out level (usually 50%). When this happens, we will initiate a forced liquidation process to close your positions in the following sequence:',
                        )}
                    </Text>
                    <Ul>
                        <li>
                            <Text mb="0.8rem">
                                {localize(
                                    'Firstly, we will delete the order with the largest margin reserved.',
                                )}
                            </Text>
                        </li>
                        <li>
                            <Text mb="0.8rem">
                                {localize(
                                    'If your margin level is still below the stop-out level, the position with the second-largest margin reserved will be deleted but orders without margin requirements will not be affected.',
                                )}
                            </Text>
                        </li>
                        <li>
                            <Text mb="0.8rem">
                                {localize(
                                    'If your margin level is still below the stop-out level, we will close the position with the largest loss.',
                                )}
                            </Text>
                        </li>
                    </Ul>
                    <Text mb="2.6rem">
                        {localize(
                            'We will continue with this process until your margin level becomes higher than the stop-out level.',
                        )}
                    </Text>
                    <Header as="h3" mb="0.8rem">
                        {localize('Things you should know when trading on margin')}
                    </Header>
                    <Text weight="bold" mb="0.8rem">
                        {localize('Margin increases both potential profit and loss')}
                    </Text>
                    <Text mb="1.2rem">
                        {localize(
                            'Trading on margin increases your market exposure, thus amplifying both your potential profit and loss.',
                        )}
                    </Text>
                    <Text weight="bold" mb="0.8rem">
                        {localize('Stop-loss')}
                    </Text>
                    <Text mb="1.2rem">
                        {localize(
                            'You can use the stop-loss tool to minimise potential losses and decrease the chances of getting a margin call.',
                        )}
                    </Text>
                    <Text weight="bold" mb="0.8rem">
                        {localize('Margin call')}
                    </Text>
                    <Text mb="1.2rem">
                        {localize(
                            'You can still open positions when you get a margin call,  but we recommend you add funds to your account to keep your positions running.',
                        )}
                    </Text>
                    <Text weight="bold" mb="0.8rem">
                        {localize('Margin requirements')}
                    </Text>
                    <Text>
                        {localize(
                            'Margin requirements may differ depending on factors like the asset you want to trade, the equity in your account, and your account type.',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default Policies
