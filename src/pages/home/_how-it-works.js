import React from 'react'
import styled from 'styled-components'
import TradingAnimation from '../../images/lotties/trading.json'
import WithdrawAnimation from '../../images/lotties/withdraw.json'
import DemoAnimation from '../../images/lotties/demo.json'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { Header, Text, Lottie } from 'components/elements'
import { localize } from 'components/localization'

const options = {
    practice: 'practice',
    trade: 'trade',
    withdraw: 'withdraw',
}
const OptionWrapper = styled.div`
    position: relative;
    opacity: ${props => (props.is_selected ? '1' : '0.33')};
    transition: opacity 0.25s;

    &:hover {
        cursor: pointer;
    }
`

const Border = styled.div`
    position: absolute;
    display: ${props => (props.is_selected ? '' : 'none')};
    transition: display 0.25s;
    height: 100%;
    border-left: 4px solid red;
    left: -1.6rem;
`

const LottieWrapper = styled.div`
    position: absolute;
    top: -3.8rem;
    right: -6.1rem;
    width: 80%;
`

const HowItWorks = () => {
    const [selected, setSelected] = React.useState(options.practice)
    const is_practice = selected === options.practice
    const is_trade = selected === options.trade
    const is_withdraw = selected === options.withdraw

    return (
        <SectionContainer>
            <Container direction="column">
                <Flex>
                    <div style={{ width: '40%' }}>
                        <div style={{ marginBottom: '4rem' }}>
                            <Header font_size="3.6rem" as="h2">
                                {localize('How it works')}
                            </Header>
                        </div>
                        <CssGrid rowgap="1.6rem" height="0%">
                            <div onClick={() => setSelected(options.practice)}>
                                <OptionWrapper is_selected={is_practice}>
                                    <Border is_selected={is_practice} />
                                    <Header as="h4" lh="1.5">
                                        {localize('Practise')}
                                    </Header>
                                    <Text>
                                        {localize(
                                            'Open a demo account with unlimited funds. Start trading for free and practise to hone your skills.',
                                        )}
                                    </Text>
                                </OptionWrapper>
                            </div>
                            <div onClick={() => setSelected(options.trade)}>
                                <OptionWrapper is_selected={is_trade}>
                                    <Border is_selected={is_trade} />
                                    <Header as="h4" lh="1.5">
                                        {localize('Trade')}
                                    </Header>
                                    <Text>
                                        {localize(
                                            'Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.',
                                        )}
                                    </Text>
                                </OptionWrapper>
                            </div>
                            <div onClick={() => setSelected(options.withdraw)}>
                                <OptionWrapper is_selected={is_withdraw}>
                                    <Border is_selected={is_withdraw} />
                                    <Header as="h4" lh="1.5">
                                        {localize('Withdraw')}
                                    </Header>
                                    <Text>
                                        {localize(
                                            'Get funds quickly and easily. We support many deposit and withdrawal options.',
                                        )}
                                    </Text>
                                </OptionWrapper>
                            </div>
                        </CssGrid>
                    </div>
                    <div style={{ width: '60%', position: 'relative' }}>
                        <LottieWrapper>
                            {is_practice && <Lottie animationData={DemoAnimation} />}
                            {is_trade && (
                                <div style={{ marginTop: '-2rem', marginRight: '2rem' }}>
                                    <Lottie animationData={TradingAnimation} />
                                </div>
                            )}
                            {is_withdraw && <Lottie animationData={WithdrawAnimation} />}
                        </LottieWrapper>
                    </div>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default HowItWorks
