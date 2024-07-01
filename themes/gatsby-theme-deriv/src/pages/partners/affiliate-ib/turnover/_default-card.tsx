import React from 'react'
import {
    StyledCard,
    StyledTrap,
    StyledText,
} from '../_style'
import { Table, TRAPREVERSE, TC } from '../_table'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const turnover_data: AffiliateType = [
    {
        title: '_t_Instruments_t_',
        data: ['_t_Options_t_','_t_Multipliers_t_', '_t_Lookbacks<br>(Only on<br> Smart Trader)_t_'],
    },
    {
        title: '_t_Revenue based on_t_',
        data: ["_t_Varies as per<br> probability of return_t_", "_t_Based on your<br> client's trades_t_", "_t_Based on the<br> stake of each trade_t_"],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_Up to 1.5%_t_', '_t_40%_t_', '_t_0.8%_t_'],
    },
]

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="70rem" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Turnover_t_" />
                </Header>
                <Header as="p" type="paragraph-1" weight="normal">
                    <Localize
                        translate_text="_t_Earn as your clients explore a range of trading opportunities with a commission structure that reflects the diverse outcomes of their trades._t_"
                    />
                </Header>
                <Table grid_col_number={3}>
                    {turnover_data.map(({ title, data }, index) => (
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
                    <Localize translate_text="_t_Disclaimer:_t_" />
                </Header>
                <Header as="p" type="paragraph-1">
                    <Localize translate_text="_t_Affiliates residing in the EU can sign up for the Turnover plan but can only refer clients residing outside the EU._t_" />
                </Header>
            </div>
        </StyledCard>
    )
}

export default DefaultCard
