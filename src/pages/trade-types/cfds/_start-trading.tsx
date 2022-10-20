import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer, StartTradingBg } from '../components/_style'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import { Show } from 'components/containers'
import { TString } from 'types/generics'
import { useCountryRule } from 'components/hooks/use-country-rule'

type TTimelineContent = {
    title: TString
    description: TString
}[]

const timeline_content_row: TTimelineContent = [
    {
        title: '_t_Practise_t_',
        description:
            '_t_Open a demo Deriv MT5 (DMT5) or demo Deriv X account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        title: '_t_Trade_t_',
        description:
            '_t_Trade with a real Deriv MT5 (DMT5) or real Deriv X account and get access to high leverage to trade positions larger than your existing capital._t_',
    },
    {
        title: '_t_Withdraw_t_',
        description:
            '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const timeline_content_eu_uk: TTimelineContent = [
    {
        title: '_t_Practise_t_',
        description:
            '_t_Open a demo CFDs account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        title: '_t_Trade_t_',
        description:
            '_t_Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital._t_',
    },
    {
        title: '_t_Withdraw_t_',
        description:
            '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const StartTrading = () => {
    const { is_row } = useCountryRule()
    const timeline_content = is_row ? timeline_content_row : timeline_content_eu_uk
    return (
        <>
            <StartTradingBg>
                <SmallContainer direction="column" ai="flex-start">
                    <Show.Desktop>
                        <Header as="h3" type="section-title" mb="4rem">
                            {localize('Start trading CFDs on Deriv')}
                        </Header>
                    </Show.Desktop>
                    <Show.Mobile>
                        <Header as="h3" type="section-title" mb="4rem">
                            <Localize
                                translate_text="Start trading CFDs on <0/>Deriv<0/>"
                                components={[<br key={0} />]}
                            />
                        </Header>
                    </Show.Mobile>

                    <Timeline>
                        {timeline_content.map((item) => (
                            <Timeline.Item
                                key={item.title}
                                title={<Localize translate_text={item.title} />}
                            >
                                {localize(item.description)}
                            </Timeline.Item>
                        ))}
                    </Timeline>
                    <LinkButton
                        id="dm-dmt5-signup"
                        mt="4rem"
                        external
                        type="mt5"
                        to="#demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        secondary
                    >
                        {localize('Create free demo account')}
                    </LinkButton>
                </SmallContainer>
            </StartTradingBg>
        </>
    )
}

export default StartTrading
