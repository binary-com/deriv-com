import React from 'react'
import { StyledCard } from '../_style'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="70rem" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_CPA_t_" />
                </Header>
                <Header as="p" type="paragraph-1" weight="normal">
                    <Localize
                        translate_text="_t_Earn a <0>USD 100</0> when your new referred client deposits a total of <0>USD 100</0> (or its equivalent) into their Deriv account, either all at once or over time._t_"
                        components={[<strong key={0} />]}
                    />
                </Header>
                <Header as="p" type="paragraph-1" mb="0.8rem" mt="2.4rem">
                    <Localize translate_text="_t_Disclaimer: Affiliates residing outside the EU can sign up for the CPA plan and can refer clients residing in the EU except Portugal and Spain._t_" />
                </Header>
            </div>
        </StyledCard>
    )
}

export default DefaultCard
