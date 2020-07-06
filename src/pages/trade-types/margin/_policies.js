import React from 'react'
import styled from 'styled-components'
import { SmallContainer, Ul } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, CardStyle } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Info from 'images/svg/trade-types/info.svg'

const Card = styled.article`
    ${CardStyle}
`

const CardHeading = styled(Flex)`
    padding: 3rem 2.4rem;
    background: var(--color-grey-25);
    align-items: center;
`

const CardBody = styled(Flex)`
    flex-direction: column;
    padding: 2.4rem;
`
const InfoWrapper = styled.div`
    margin-right: 1.6rem;
`

const Note = styled.div`
    background-color: var(--color-grey-25);
    border-radius: 60px;
    padding: 0.8rem 2.4rem;
    width: fit-content;
`

const Policies = () => {
    return (
        <>
            <SectionContainer background="white" padding="4rem 0 0">
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
                    <Text mb="4rem">
                        {localize(
                            'Margin requirements may differ depending on factors like the asset you want to trade, the equity in your account, your account type and market conditions.',
                        )}
                    </Text>
                    <Card>
                        <CardHeading>
                            <InfoWrapper>
                                <Info />
                            </InfoWrapper>
                            <Header as="h4">
                                {localize('Important notes on our swap rates (overnight funding)')}
                            </Header>
                        </CardHeading>
                        <CardBody>
                            <Text mb="1.6rem">
                                {localize(
                                    'If you keep any position open overnight, an interest adjustment (or swap rate) will be made to your trading account to compensate for the cost of keeping your position open. Instruments traded on our platforms are subjected to different swap rates and other conditions:',
                                )}
                            </Text>
                            <Header as="h5" mb="0.8rem">
                                {localize('Forex and commodities')}
                            </Header>
                            <Text mb="0.8rem">
                                {localize(
                                    'The swap rate is based on interbank lending rates, in addition to a 2% fee that is charged daily (every night) that your position is held. The swap rate also depends on the time and days that you hold your positions open:',
                                )}
                            </Text>
                            <Ul>
                                <li>
                                    <Text>
                                        {localize(
                                            'If you keep a position open past 23:59:59 GMT, you will be subjected to the basic swap rate.',
                                        )}
                                    </Text>
                                </li>
                                <li>
                                    <Text>
                                        {localize(
                                            'Since it takes two days for forex transactions to settle, positions that are still open on Wednesday at 23:59:59 GMT will be charged three times the swap rate to account for weekends.',
                                        )}
                                    </Text>
                                </li>
                                <li>
                                    <Text>
                                        {localize(
                                            'Our swap rate may also be adjusted to take holidays into account.',
                                        )}
                                    </Text>
                                </li>
                            </Ul>
                            <Header as="h5" mt="1.6rem" mb="0.8rem">
                                {localize('Synthetic indices')}
                            </Header>
                            <Text mb="0.8rem">
                                {localize(
                                    'An interest adjustment will be made to your trading account to compensate for the cost of keeping your position open overnight.',
                                )}
                            </Text>
                            <Text mb="0.8rem">
                                <Localize
                                    translate_text="The interest adjustment is calculated on an annual basis for long and short positions according to the formula: <0>(volume in lot * specified swap size/100)/360</0>."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Note>
                                <Text size="var(--text-size-xs)">
                                    {localize(
                                        'Please note that our swap rate also depends on the time and days you hold your positions open.',
                                    )}
                                </Text>
                            </Note>
                        </CardBody>
                    </Card>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default Policies
