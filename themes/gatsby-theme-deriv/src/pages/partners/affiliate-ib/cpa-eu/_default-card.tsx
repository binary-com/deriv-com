import React from 'react'
import {
    StyledCard,
    StyledTrap,
    StyledText,
} from '../_style'
import { Table, TRAPREVERSE, TC, TRAPREVERSECUSTOM } from '../_table'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const cpa_data: AffiliateType = [
    {
        title: '_t_Revenue_t_',
        data: ['_t_Based on each<br /> successful referral with<br /> deposit of USD 100_t_'],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_USD 100_t_'],
    },
]

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
                <Table grid_col_number={2}>
                    {cpa_data.map(({ title, data }, index) => (
                        <TC grid_area={'area' + index} key={index}>
                            <StyledTrap isTitle="true">
                                <StyledText weight="bold">
                                    <Localize translate_text={title} />
                                </StyledText>
                            </StyledTrap>
                            {data.map((data, id) => (
                                <TRAPREVERSE even={id % 2 ? 'true' : ''} key={id}>
                                    <StyledText>
                                        <Localize translate_text={data} />
                                    </StyledText>
                                </TRAPREVERSE>
                            ))}
                        </TC>
                    ))}
                </Table>
                <Header as="p" type="paragraph-1" mb="0.8rem" mt="2.4rem">
                    <Localize translate_text="_t_Disclaimer: Affiliates residing outside the EU can sign up for the CPA plan and can refer clients residing in the EU except Portugal and Spain._t_" />
                </Header>
            </div>
        </StyledCard>
    )
}

export default DefaultCard
