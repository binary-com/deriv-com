import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { localize, Localize } from 'components/localization'
import Pattern from 'images/common/trade-types/pattern-section.png'
import useHandleSignup from 'components/hooks/use-handle-signup'

const PatternContainer = styled(SectionContainer)`
    background: url(${Pattern});
    background-size: cover;
`

const FixTimeline = styled(Timeline)`
    margin-left: 1.2rem;
    margin-bottom: 5rem;
`

const StartTrading = () => {
    const handleSignup = useHandleSignup()

    return (
        <PatternContainer background="white" padding="4rem 0">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="4rem">
                    <Localize translate_text="_t_Start trading options on Deriv_t_" />
                </Header>
                <FixTimeline>
                    <FixTimeline.Item title="_t_Practise_t_">
                        <Localize translate_text="_t_Open a demo account and get unlimited virtual funds to practice on our platforms – DTrader, SmartTrader, and DBot._t_" />
                    </FixTimeline.Item>
                    <FixTimeline.Item title="_t_Trade_t_">
                        <Localize translate_text="_t_Open a real account, make a deposit, and start trading options for real._t_" />
                    </FixTimeline.Item>
                    <FixTimeline.Item title="_t_Withdraw_t_">
                        <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
                    </FixTimeline.Item>
                </FixTimeline>
                <Button onClick={handleSignup} id="dm-options-signup-2" secondary>
                    <Localize translate_text="_t_Create free demo account_t_" />
                </Button>
            </SmallContainer>
        </PatternContainer>
    )
}

export default StartTrading
