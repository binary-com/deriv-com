import React from 'react'
import Timeline from '../components/_timeline'
import { SmallContainer, StartTradingBg } from '../components/_style'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { Visibility } from 'components/containers/visibility'

const StartTrading = () => {
    const { is_eu } = useCountryRule()
    return (
        <>
            <StartTradingBg>
                <SmallContainer direction="column" ai="flex-start">
                    <Visibility device_key="laptopS">
                        <Header as="h3" type="section-title" mb="4rem">
                            {localize('Start trading CFDs on Deriv')}
                        </Header>
                    </Visibility>
                    <Visibility device_key="tabletL">
                        <Header as="h3" type="section-title" mb="4rem">
                            <Localize
                                translate_text="Start trading CFDs 111 on <0/>Deriv<0/>"
                                components={[<br key={0} />]}
                            />
                        </Header>
                    </Visibility>
                    <Timeline>
                        <Timeline.Item title={<Localize translate_text="Practise" />}>
                            {is_eu
                                ? localize(
                                      'Open a demo CFDs account and practise with an unlimited amount of virtual funds.',
                                  )
                                : localize(
                                      'Open a demo Deriv MT5 or demo Deriv X account and practise with an unlimited amount of virtual funds.',
                                  )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Trade" />}>
                            {is_eu
                                ? localize(
                                      'Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital.',
                                  )
                                : localize(
                                      'Trade with a real Deriv MT5 or real Deriv X account and get access to high leverage to trade positions larger than your existing capital.',
                                  )}
                        </Timeline.Item>
                        <Timeline.Item title={<Localize translate_text="Withdraw" />}>
                            {localize(
                                'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                            )}
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
                        {localize('Create free demo account')}
                    </LinkButton>
                </SmallContainer>
            </StartTradingBg>
        </>
    )
}

export default StartTrading
