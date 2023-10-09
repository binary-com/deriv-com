import React from 'react'
import { StyledCard, StyledCalculatedButton, CPAContent } from '../_style'
import { Header, Text } from 'components/elements/typography'
import { Localize } from 'components/localization'

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="85rem" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_CPA (EU only)_t_" />
                </Header>
                <Text>
                    <Localize translate_text="_t_Earn based on each successful referral._t_" />
                </Text>
                <CPAContent>
                    <Text>
                        <Localize
                            translate_text="_t_You earn <0>100 USD</0> when a referred client successfully deposits a one-time or cumulative total of <0>100 USD</0> into their Deriv account._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <Text>
                        <Localize
                            translate_text="_t_This plan is available exclusively for EU-based clients. <0>Please note that according to regulations, you cannot have clients who reside in Portugal or Spain.</0>_t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                </CPAContent>
                <Text mb="0.8rem" mt="2.4rem">
                    <Localize
                        translate_text="_t_<0>Disclaimer:</0>_t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Header as="p" type="paragraph-1">
                    <Localize translate_text="_t_This plan is available exclusively for affiliates who promote to clients residing in EU._t_" />
                </Header>
            </div>
            <div>
                <StyledCalculatedButton secondary onClick={toggleCalculated}>
                    <Localize translate_text="_t_How it’s calculated_t_" />
                </StyledCalculatedButton>
            </div>
        </StyledCard>
    )
}

export default DefaultCard
