import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer, StartTradingBg } from '../components/_style'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import useRegion from 'components/hooks/use-region'
import useScreenSize from 'components/hooks/use-screen-size'

const StartTrading = () => {
    const { is_eu } = useRegion()
    const { is_mobile_or_tablet } = useScreenSize()
    return (
        <>
            <StartTradingBg>
                <SmallContainer direction="column" ai="flex-start">
                    {is_mobile_or_tablet ? (
                        <Header as="h3" type="section-title" mb="4rem">
                            <Localize translate_text="_t_Start trading CFDs on Deriv_t_" />
                        </Header>
                    ) : (
                        <Header as="h3" type="section-title" mb="4rem">
                            <Localize
                                translate_text="Start trading CFDs on <0/>Deriv<0/>"
                                components={[<br key={0} />]}
                            />
                        </Header>
                    )}
                    <Timeline>
                        <Timeline.Item title={<Localize translate_text="_t_Practise_t_" />}>
                            {is_eu ? (
                                <Localize translate_text="_t_Open a demo CFDs account and practise with an unlimited amount of virtual funds._t_" />
                            ) : (
                                <Localize translate_text="_t_Open a demo Deriv MT5 or demo Deriv X account and practise with an unlimited amount of virtual funds._t_" />
                            )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="_t_Trade_t_" />}>
                            {is_eu ? (
                                <Localize translate_text="_t_Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital._t_" />
                            ) : (
                                <Localize translate_text="_t_Trade with a real Deriv MT5 or real Deriv X account and get access to high leverage to trade positions larger than your existing capital._t_" />
                            )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Withdraw" />}>
                            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
                        </Timeline.Item>
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
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </LinkButton>
                </SmallContainer>
            </StartTradingBg>
        </>
    )
}

export default StartTrading
