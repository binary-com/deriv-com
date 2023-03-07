import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { localize, Localize } from 'components/localization'
import Pattern from 'images/common/trade-types/pattern-section-small.png'
import useHandleSignup from 'components/hooks/use-handle-signup'

const PatternContainer = styled(SectionContainer)`
    background: url(${Pattern});
    background-size: contain;
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
                <Header as="h3" size="3.2rem" mb="4rem">
                    <Localize translate_text="_t_Start trading multipliers on Deriv_t_" />
                </Header>
                <FixTimeline>
                    <FixTimeline.Item title={localize('_t_Practise_t_')}>
                        <Localize translate_text="_t_Open a demo account on Deriv and practise with an unlimited amount of virtual funds on our award-winning platforms._t_" />
                    </FixTimeline.Item>
                    <FixTimeline.Item title={localize('_t_Trade_t_')}>
                        <Localize translate_text="_t_Open a real account, make a deposit, and start trading multipliers for real._t_" />
                    </FixTimeline.Item>
                    <FixTimeline.Item title={localize('_t_Withdraw_t_')}>
                        <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
                    </FixTimeline.Item>
                </FixTimeline>
                <Button onClick={handleSignup} id="dm-multipliers-signup-2" secondary>
                    <Localize translate_text="_t_Create free demo account_t_" />
                </Button>
            </SmallContainer>
        </PatternContainer>
    )
}

export default StartTrading
