import React from 'react'
import { StyledCard, StyledCalculatedButton, StyledTrap, StyledText } from './_style'
import { Table, TRAPREVERSE, TC } from './_table'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import { Li, Ul } from 'components/elements'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const turnover_data: AffiliateType = [
    {
        title: '_t_Probability of return_t_',
        data: [
            '_t_0–19.999%_t_',
            '_t_20–39.999%_t_',
            '_t_40–59.999%_t_',
            '_t_60–79.999%_t_',
            '_t_80–94.999%_t_',
            '_t_95% and above_t_',
        ],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_1.5%_t_', '_t_1%_t_', '_t_0.75%_t_', '_t_0.5%_t_', '_t_0.4%_t_', '_t_0%_t_'],
    },
]

const Turnover = () => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Turnover_t_" />
                </Header>
                <Text>
                    <Localize
                        translate_text="_t_<0>Options:</0> Earn based on each contract’s payout probability._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Table grid_col_number={2}>
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
                <Text mt="2.4rem">
                    <Localize
                        translate_text="_t_<0>Multipliers:</0> Earn 40% of the commissions generated from your clients’ trades._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Text mt="2.4rem">
                    <Localize
                        translate_text="_t_<0>Lookbacks:</0> Earn 0.8% on the stake of each lookbacks trade on SmartTrader._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Text mb="0.8rem" mt="2.4rem">
                    <Localize
                        translate_text="_t_<0>Disclaimer:</0>_t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <Ul>
                    <Li>
                        <Text>
                            <Localize
                                translate_text="_t_<0>This plan is not available for affiliates who promote to clients residing in the EU.</0>_t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </Li>
                    <Li>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Affiliates residing in the EU may sign up for the Turnover plan. However, only clients residing outside of the EU can be referred under this plan.</0>_t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </Li>
                </Ul>
            </div>
            <div>
                <StyledCalculatedButton secondary>
                    <Localize translate_text="_t_How it’s calculated_t_" />
                </StyledCalculatedButton>
            </div>
        </StyledCard>
    )
}

export default Turnover
