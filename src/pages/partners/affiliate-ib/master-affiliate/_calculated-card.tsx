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
                    <Localize translate_text="_t_Master Affiliate_t_" />
                </Header>
                <Header as="p" type="paragraph-2">
                    <Localize translate_text="_t_This plan is not available for affiliates who promote to clients residing in the EU._t_" />
                </Header>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 1:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A sub-affiliate generates USD 300 worth of commission. Here is how we calculate their total commissions:_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Sub affiliate’s total commission: USD 300_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Master affiliate’s total commission: USD 300 x 20% = USD 60_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 2:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A sub-affiliate earns USD 200 from their Revenue Share plan. The same sub-affiliate earns USD 100 from their IB programme. Here is how we calculate their total commissions:_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Sub-affiliate’s total commission: 200 + 100 = USD 300 (including IB commission)_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Master affiliate’s total commission: USD 200 * 20% = USD 40_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Disclaimer:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p">
                            <Localize translate_text="_t_Master affiliates will not earn based on the sub-affiliates’ IB programme_t_" />
                        </Header>
                    </Li>
                    <Li>
                        <Header as="p" mt="0.8">
                            <Localize translate_text="_t_You need to be a registered affiliate with Deriv before signing up as a master affiliate. (To sign up as a master affiliate, contact your respective account manager.)_t_" />
                        </Header>
                    </Li>
                </Ul>
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
