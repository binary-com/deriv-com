import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'

const StartTrading = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('Start trading on margin with Deriv')}
                    </Header>

                    <Timeline>
                        <Timeline.Item title="Practise">
                            {localize(
                                'Open a demo MetaTrader 5 account on Deriv and practise with an unlimited amount of virtual funds.',
                            )}
                        </Timeline.Item>
                        <Timeline.Item title="Trade">
                            {localize(
                                'Trade with a real Deriv MT5 (DMT5) account and get access to high leverage to trade positions larger than your existing capital.',
                            )}
                        </Timeline.Item>
                        <Timeline.Item title="Withdraw">
                            {localize(
                                'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                            )}
                        </Timeline.Item>
                    </Timeline>
                    <LinkButton mt="1.6rem" to="/signup/" secondary="true">
                        {localize('Create free demo account')}
                    </LinkButton>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default StartTrading
