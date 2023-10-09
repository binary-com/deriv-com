import React from 'react'
import { StyledCard, StyledCalculatedButton, StyledTrap, StyledText } from '../_style'
import { Table, TRAPREVERSE, TC } from '../_table'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import { Li, Ul } from 'components/elements'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const revenue_data: AffiliateType = [
    {
        title: '_t_Net revenue_t_',
        data: ['_t_USD ≤ 20,000 per month_t_', '_t_USD > 20,000 per month_t_'],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_30%_t_', '_t_45%_t_'],
    },
]

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Master affiliate_t_" />
                </Header>
                <Header as="p" weight="normal" type="paragraph-1">
                    <Localize translate_text="_t_Earn based on your sub-affiliate’s commission._t_" />
                </Header>
                <Header as="p" weight="normal" type="paragraph-1" mt="2.4rem">
                    <Localize translate_text="_t_You will earn 20% flat rate of what your sub-affiliate generates from their commission._t_" />
                </Header>
                <Text mb="0.8rem" mt="2.4rem">
                    <Localize
                        translate_text="_t_<0>Disclaimer:</0>_t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Header as="p" type="paragraph-1">
                    <Localize translate_text="_t_Only affiliates with Revenue share and/or Turnover plans are eligible to apply to become Master Affiliate._t_" />
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
