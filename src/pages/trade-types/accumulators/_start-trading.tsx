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
                    {localize('Start trading options on Deriv')}
                </Header>
                <FixTimeline>
                    <FixTimeline.Item title={<Localize translate_text="Practise" />}>
                        {localize(
                            'Open a demo account and get unlimited virtual funds to practice on our platforms – DTrader, SmartTrader, and DBot.',
                        )}
                    </FixTimeline.Item>
                    <FixTimeline.Item title={<Localize translate_text="Trade" />}>
                        {localize(
                            'Open a real account, make a deposit, and start trading options for real.',
                        )}
                    </FixTimeline.Item>
                    <FixTimeline.Item title={<Localize translate_text="Withdraw" />}>
                        {localize(
                            'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                        )}
                    </FixTimeline.Item>
                </FixTimeline>
                <Button onClick={handleSignup} id="dm-options-signup-2" secondary>
                    {localize('Create free demo account')}
                </Button>
            </SmallContainer>
        </PatternContainer>
    )
}

export default StartTrading
