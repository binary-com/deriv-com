import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer, Ul } from '../components/_style'
import { SectionContainer, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { DerivStore } from 'store'
import device from 'themes/device'

const query = graphql`
    query {
        example: file(relativePath: { eq: "trade-types/margin-example-crash-boom.png" }) {
            ...fadeIn
        }
        example_mobile: file(
            relativePath: { eq: "trade-types/margin-example-crash-boom-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

const ShowWrapper = styled.div`
    width: 100%;
`

const ExampleImage = styled(QueryImage)`
    margin: ${(props) => (props.center ? '0 auto' : 'unset')};
    width: 792px;
    height: 453px;

    @media ${device.laptop} {
        width: 630px;
        height: 361px;
    }

    @media ${device.tabletL} {
        width: 328px;
        height: 506px;
    }

    @media ${device.mobileM} {
        width: 289px;
        height: 454px;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 1.2rem 1.5rem;
    font-size: 14px;
    max-height: 4rem;
    height: 100%;
    margin-right: 0.8rem;

    @media ${device.laptop} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        display: block;
        max-height: 40px;

        :nth-child(2) {
            margin-bottom: 16px;
        }
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

const Policies = () => {
    const data = useStaticQuery(query)
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <>
            <SectionContainer background="white" padding="4rem 0 0">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
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
                    <Header as="h3" type="section-title" mb="0.8rem">
                        {localize('Things you should know when trading on margin')}
                    </Header>
                    <Text size="var(--text-size-m)" weight="bold" mb="0.8rem">
                        {localize('Margin increases both potential profit and loss')}
                    </Text>
                    <Text mb="2.4rem">
                        {localize(
                            'Trading on margin increases your market exposure, thus amplifying both your potential profit and loss.',
                        )}
                    </Text>
                    <Text size="var(--text-size-m)" weight="bold" mb="0.8rem">
                        {localize('Stop loss')}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'You can set the stop loss level to minimise potential losses and decrease the chances of getting a margin call. When you set this level, your trade will automatically close when your losses equal the stop loss amount.',
                        )}
                    </Text>
                    <Text weight="bold" mb="0.8rem">
                        {localize('Stop loss with Crash/Boom/Range break indices')}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'Stop loss works slightly differently in Crash/Boom/Range break indices. When trading on these indices with a stop loss level, your trade will automatically close if your losses exceed the stop loss amount.',
                        )}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'The reason is that in Crash/Boom/Range break indices, sudden fluctuations in price between one tick to another can sometimes surpass the stop loss you set. In this case, your trade will close at the nearest applicable market price instead of exactly at the stop loss level.',
                        )}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'For example, you predict that the market will go up, and buy a contract on Crash 500 index at 8,000.',
                        )}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'When the market price climbs to 8,700, you decide to set the stop loss level at 8,200. After a few ticks, the price dives to 8,100, surpassing your stop loss level.',
                        )}
                    </Text>
                    <Text mb="1.6rem">
                        {localize(
                            'Your trade will automatically close at 8,100, which is the nearest applicable market price to your stop loss level.',
                        )}
                    </Text>
                    <Show.Desktop>
                        <ExampleImage data={data['example']} />
                    </Show.Desktop>
                    <ShowWrapper>
                        <Show.Mobile width="100%">
                            <ExampleImage data={data['example_mobile']} />
                        </Show.Mobile>
                    </ShowWrapper>

                    <Text size="var(--text-size-m)" weight="bold" mb="0.8rem" mt="2.4rem">
                        {localize('Margin call')}
                    </Text>
                    <Text mb="2.4rem">
                        {localize(
                            'You can still open positions when you get a margin call,  but we recommend you add funds to your account to keep your positions running.',
                        )}
                    </Text>
                    <Text size="var(--text-size-m)" weight="bold" mb="0.8rem">
                        {localize('Margin requirements')}
                    </Text>
                    <Text mb="2.4rem">
                        {localize(
                            'Margin requirements may differ depending on factors like the asset you want to trade, the equity in your account, your account type and market conditions.',
                        )}
                    </Text>
                    <Header as="h4" type="sub-section-title" id="swap-policy">
                        {localize('Swap rates (overnight funding)')}
                    </Header>

                    <Text mb="1.6rem">
                        {localize(
                            'If you keep any position open overnight, an interest adjustment (or swap rate) will be made to your trading account to compensate for the cost of keeping your position open. Instruments traded on our platforms are subjected to different swap rates and other conditions:',
                        )}
                    </Text>
                    <Header as="h5" type="main-paragraph" mb="0.8rem">
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
                    <Header as="h5" type="main-paragraph" mt="1.6rem" mb="0.8rem">
                        {localize('Synthetic indices')}
                    </Header>
                    <Text mb="1.6rem">
                        {localize(
                            'An interest adjustment will be made to your trading account to compensate for the cost of keeping your position open overnight. The interest adjustment is calculated on an annual basis for long and short positions.',
                        )}
                    </Text>
                    <Text mb="1.6rem">
                        {is_eu_country
                            ? localize(
                                  'You can use our swap calculator to estimate the swap charges required to keep your positions open overnight on DMT5.',
                              )
                            : localize(
                                  'You can use our swap calculator to estimate the swap changes required to keep your positions open overnight on Deriv MT5 (DMT5) and Deriv X.',
                              )}
                    </Text>

                    <StyledLinkButton secondary="true" to="/trader-tools/swap-calculator/">
                        {localize('Swap calculator')}
                    </StyledLinkButton>

                    <Text size="var(--text-size-xs)" mt="1.6rem">
                        {localize(
                            'Please note that our swap rate also depends on the time and days you hold your positions open.',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default Policies
