import React from 'react'
import {
    StyledCard,
    StyledCalculatedButton,
    StyledTrap,
    StyledText,
    StyledButtonWrap,
    CPAContent,
} from '../_style'
import { Table, TRAPREVERSE, TC } from '../_table'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const cpa_data: AffiliateType = [
    {
        title: '_t_Revenue_t_',
        data: ['_t_Based on each successful referral with deposit of USD 100_t_'],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_USD 100_t_'],
    },
]

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_CPA (EU only)_t_" />
                </Header>
                <Header as="p" type="paragraph-1" weight="normal" mb="1.6rem">
                    <Localize translate_text="_t_Earn based on each successful referral who makes a deposit of USD 100 in one or more transactions._t_" />
                </Header>
                <CPAContent>
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
                </CPAContent>
                    <Header as="p" type="paragraph-1" mb="0.8rem" mt="2.4rem">
                        <Localize translate_text="_t_Disclaimer:_t_" />
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal">
                        <Localize
                            translate_text="_t_<0>Affiliates residing outside the EU can sign up for the CPA plan and can refer clients residing in the EU except Portugal and Spain.</0>_t_"
                            components={[<strong key={0} />]}
                        />
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
