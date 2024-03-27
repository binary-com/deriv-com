import React from 'react'
import { StyledBackButton, StyledCard } from '../_style'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import { Li, Ul } from 'components/elements'

const CalculatedCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem" align_self="baseline">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Turnover_t_" />
                </Header>
                <Header as="p" type="paragraph-2">
                    <Localize translate_text="_t_This plan is not available for affiliates who promote to clients residing in the EU._t_" />
                </Header>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Options commission:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_Client trades with a stake of USD 10 and a payout of USD 15. Payout probability = 10/15 x 100 = 66.67%_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Based on the chart, the probability of return falls under 0.5% commission_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Calculation is as follows:_t_" />
                            <br />
                            <Localize translate_text="_t_Total commission earned: 10 x 0.5% = USD 0.05_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Multiplier commission:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_Client trades multipliers with a stake of USD 100. The commission generated from the client’s trade is USD 0.60._t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Calculation is as follows:_t_" />
                            <br />
                            <Localize translate_text="_t_Total commission earned: USD 0.60 * 40% = USD 0.24_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Lookback commission:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_Client trades with a stake of USD 10._t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Calculation is as follows:_t_" />
                            <br />
                            <Localize translate_text="_t_Total commission earned: USD 10 * 0.8% = USD 0.08_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="p" type="paragraph-1" mt="1.6rem">
                    <Localize translate_text="_t_Disclaimer: Affiliates residing in the EU may sign up for the Turnover plan. However, only clients residing outside of the EU can be referred under this plan._t_" />
                </Header>
            </div>
            <div>
                <StyledBackButton tertiary onClick={toggleCalculated} mt="2.4rem">
                    <Localize translate_text="_t_Back_t_" />
                </StyledBackButton>
            </div>
        </StyledCard>
    )
}

export default CalculatedCard
