import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_side-tab'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import GetQuote from 'images/svg/trade-types/get-quote.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'

const query = graphql`
    query {
        option_market: file(relativePath: { eq: "trade-types/options-market.png" }) {
            ...fadeIn
        }
        option_trade_type: file(relativePath: { eq: "trade-types/options-trade-type.png" }) {
            ...fadeIn
        }
        option_duration: file(relativePath: { eq: "trade-types/options-duration.png" }) {
            ...fadeIn
        }
        option_stake: file(relativePath: { eq: "trade-types/options-stake.png" }) {
            ...fadeIn
        }
        option_quote: file(relativePath: { eq: "trade-types/options-quote.png" }) {
            ...fadeIn
        }
        option_purchase: file(relativePath: { eq: "trade-types/options-purchase.png" }) {
            ...fadeIn
        }
    }
`

const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
`

const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;

    @media ${device.mobileL} {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        & > div > svg {
            width: 20px;
            height: 20px;
        }
    }
`

const HowOptionsWorks = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" mb="3.2rem">
                    {localize('How options contracts work')}
                </Header>
                <OptionGrid>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <DefinePosition />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Define your position')}
                            </Text>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Select the market, trade type, duration, and specify your stake amount.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <GetQuote />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Get quote')}
                            </Text>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Receive payout quote or stake amount based on the position you have defined.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <PurchaseContract />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Purchase your contract')}
                            </Text>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Purchase the contract if you are satisfied with the quote or re-define your position.',
                            )}
                        </Text>
                    </HowItWorksItem>
                </OptionGrid>
                <Header as="h3" mt="4rem">
                    {localize('How to buy your first options contract on DTrader')}
                </Header>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Define your position')}
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Market" />}
                        description={
                            <Localize translate_text="Choose from the four markets offered on Deriv – forex, stock indices, commodities, synthetic indices." />
                        }
                    >
                        <QueryImage data={data['option_market']} alt="Trade types option market" />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Trade type" />}
                        description={
                            <Localize translate_text="Select your desired trade type – Up and Down, High and Lows, Digits, etc." />
                        }
                    >
                        <QueryImage
                            data={data['option_trade_type']}
                            alt="Trade types option trade type open"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Duration" />}
                        description={
                            <Localize translate_text="Set the duration of your trade. Depending on whether you have a short-term or long-term view of the markets, you can set your preferred duration, starting from 1 to 10 ticks or 15 seconds to 365 days." />
                        }
                    >
                        <QueryImage
                            data={data['option_duration']}
                            alt="Trade types option duration"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="4. Stake" />}
                        description={
                            <Localize translate_text="Enter your stake amount to receive a payout quote instantly. Alternatively, you can set your preferred payout to receive a price quote for a corresponding stake amount." />
                        }
                    >
                        <QueryImage data={data['option_stake']} alt="Trade types option stake" />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Get quote')}
                </Header>
                <SideTab is_reverse>
                    <SideTab.Panel
                        label={<Localize translate_text="5. Get quote" />}
                        description={
                            <Localize translate_text="Based on the parameters you have defined, our patented pricing technology will calculate your potential payout or the required stake for each variation of the trade type that you have selected." />
                        }
                    >
                        <QueryImage data={data['option_quote']} alt="Trade types option quote" />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Purchase your contract')}
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="6. Purchase your contract" />}
                        description={
                            <Localize translate_text="Purchase your order immediately if you are satisfied with the quote that you received.  Otherwise, continue to customise the parameters and place your order when you are comfortable with the quote." />
                        }
                    >
                        <QueryImage
                            data={data['option_purchase']}
                            alt="Trade types option purchase"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </SectionContainer>
    )
}

export default HowOptionsWorks
