import React from 'react'
import { StyledBackButton, StyledCard } from '../_style'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import { Li, Ul } from 'components/elements'

const CalculatedCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_CPA_t_" />
                </Header>
                <Header as="p" type="paragraph-2">
                    <Localize translate_text="_t_This plan is available exclusively for affiliates who promote to clients residing in EU._t_" />
                </Header>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Earn based on each successful referral._t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_You earn USD 100 when a referred client successfully deposits a one-time or cumulative total of USD 100 into their Deriv account._t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_This plan is available exclusively for EU-based clients. Please note that according to regulations, you cannot have clients who reside in Portugal or Spain._t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 1:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A referred client based in the EU deposits USD 100 in one transaction_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Total commission earned: USD 100_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 2:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A referred client based in the EU deposits USD 50 in one transaction. Commission = USD 0_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_The same EU client deposits USD 50 in another transaction_t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Total commission earned: USD 100_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Example 3:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" weight="normal">
                            <Localize translate_text="_t_A referred client based in the EU deposits USD 200 in one transaction._t_" />
                        </Header>
                        <Header as="p" weight="normal" mt="2.4rem">
                            <Localize translate_text="_t_Total commission earned: USD 100_t_" />
                        </Header>
                    </Li>
                </Ul>
                <Header as="p" type="paragraph-2" weight="normal" mt="1.6rem">
                    <Localize translate_text="_t_(The CPA commission is a one-time payment.)_t_" />
                </Header>
                <Header as="h2" type="paragraph-2" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Disclaimer: Affiliates not residing in the EU may sign up for the CPA plan._t_" />
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
