import React from 'react'
import { StyledCard, StyledCalculatedButton, CPAContent, StyledButtonWrap } from '../_style'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_CPA (EU only)_t_" />
                </Header>
                <Header as="p" type="paragraph-1" weight="normal" mb="1.6rem">
                    <Localize translate_text="_t_Earn based on each successful referral._t_" />
                </Header>
                <CPAContent>
                    <Header as="p" type="paragraph-1" weight="normal">
                        <Localize
                            translate_text="_t_You earn <0>USD 100</0> when your new referred client deposits and trades a total amount of <0>USD 100</0> or its equivalent into their Deriv account, either in one deposit or cumulatively._t_"
                            components={[<strong key={0} />]}
                        />
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal" mt="1.6rem">
                        <Localize
                            translate_text="_t_This plan is available exclusively for EU-based clients. <0>Please note that according to regulations, you cannot have clients who reside in Portugal or Spain.</0>_t_"
                            components={[<strong key={0} />]}
                        />
                    </Header>
                </CPAContent>
                <Header as="p" type="paragraph-1" mb="0.8rem" mt="1.6rem">
                    <Localize translate_text="_t_Disclaimer:_t_" />
                </Header>
                <Header as="p" type="paragraph-1">
                    <Localize translate_text="_t_This plan is available exclusively for affiliates who promote to clients residing in EU._t_" />
                </Header>
            </div>
            <StyledButtonWrap>
                <StyledCalculatedButton flat onClick={toggleCalculated}>
                    <Localize translate_text="_t_How it’s calculated_t_" />
                </StyledCalculatedButton>
            </StyledButtonWrap>
        </StyledCard>
    )
}

export default DefaultCard
