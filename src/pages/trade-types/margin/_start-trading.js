import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'

const StartTrading = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="4rem">
                        {localize('Start trading on margin with Deriv')}
                    </Header>

                    <Timeline>
                        <Timeline.Item title={<Localize translate_text="Practise" />}>
                            {localize(
                                'Open a demo MetaTrader 5 account on Deriv and practise with an unlimited amount of virtual funds.',
                            )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Trade" />}>
                            {localize(
                                'Trade with a real Deriv MT5 (DMT5) account and get access to high leverage to trade positions larger than your existing capital.',
                            )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Withdraw" />}>
                            {localize(
                                'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                            )}
                        </Timeline.Item>
                    </Timeline>
                    <LinkButton mt="4rem" to="/dmt5/" secondary="true">
                        {localize('Create a demo DMT5 account')}
                    </LinkButton>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default StartTrading
