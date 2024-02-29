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
                    <Localize translate_text="_t_Revenue share_t_" />
                </Header>
                <Header as="p" type="paragraph-2">
                    <Localize translate_text="_t_This plan is not available for affiliates who promote to clients residing in the EU._t_" />
                </Header>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 1_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A client generates 10,000 USD monthly net revenue. Calculation is as follows:_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Total commission earned: 10,000 USD x 30% = 3,000 USD_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 2_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A client generates 25,000 USD monthly net revenue. Calculation is as follows:_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_20,000 USD x 30% = 6,000 USD_t_" />
                            <br />
                            <Localize translate_text="_t_5,000 USD x 45% = 2,250 USD_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Total commission earned:_t_" />
                            <br />
                            <Localize translate_text="_t_6,000 + 2,250 = 8,250 USD_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="p" type="paragraph-1" mt="1.6rem">
                    <Localize translate_text="_t_Disclaimer: Affiliates residing in the EU may sign up for the Revenue share plan. However, only clients residing outside of the EU can be referred under this plan._t_" />
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
