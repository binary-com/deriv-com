import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import Pattern from 'images/common/trade-types/pattern-section.png'

const PatternContainer = styled(SectionContainer)`
    background: url(${Pattern});
    background-size: cover;
`

const FixTimeline = styled(Timeline)`
    margin-left: 1.2rem;
    margin-bottom: 5rem;
`

const StartTrading = () => {
    return (
        <PatternContainer background="white" padding="4rem 0">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" mb="4rem">
                    {localize('Start trading multipliers on Deriv')}
                </Header>
                <FixTimeline>
                    <FixTimeline.Item title={<Localize translate_text="Practise" />}>
                        {localize(
                            'Open a demo account on Deriv and practise with an unlimited amount of virtual funds on our award-winning platforms.',
                        )}
                    </FixTimeline.Item>
                    <FixTimeline.Item title={<Localize translate_text="Trade" />}>
                        {localize(
                            'Open a real account, make a deposit, and start trading multipliers for real.',
                        )}
                    </FixTimeline.Item>
                    <FixTimeline.Item title={<Localize translate_text="Withdraw" />}>
                        {localize(
                            'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                        )}
                    </FixTimeline.Item>
                </FixTimeline>
                <LinkButton secondary to="/signup/">
                    {localize('Create free demo account')}
                </LinkButton>
            </SmallContainer>
        </PatternContainer>
    )
}

export default StartTrading
