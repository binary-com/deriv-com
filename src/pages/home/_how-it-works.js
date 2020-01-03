import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TradingAnimation from '../../images/lotties/trading.json'
import WithdrawAnimation from '../../images/lotties/withdraw.json'
import DemoAnimation from '../../images/lotties/demo.json'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { Header, Text, Lottie } from 'components/elements'
import { localize } from 'components/localization'

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
    top: ${props => (props.top ? props.top : '0')};
    right: ${props => (props.right ? props.right : '0')};
    width: 80%;
`

const options = Object.freeze({
    practice: 'practice',
    trade: 'trade',
    withdraw: 'withdraw',
})

const Option = ({ is_selected, onClick, header, sub_header }) => (
    <div onClick={onClick}>
        <OptionWrapper is_selected={is_selected}>
            <Border is_selected={is_selected} />
            <Header as="h4" lh="1.5">
                {header}
            </Header>
            <Text>{sub_header}</Text>
        </OptionWrapper>
    </div>
)

Option.propTypes = {
    header: PropTypes.string,
    is_selected: PropTypes.bool,
    onClick: PropTypes.func,
    sub_header: PropTypes.string,
}

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
                        <CssGrid row_gap="2.4rem" height="0%">
                            <Option
                                onClick={() => setSelected(options.practice)}
                                is_selected={is_practice}
                                header={localize('Practise')}
                                sub_header={localize(
                                    'Open a demo account with unlimited funds. Start trading for free and practise to hone your skills.',
                                )}
                            />
                            <Option
                                onClick={() => setSelected(options.trade)}
                                is_selected={is_trade}
                                header={localize('Trade')}
                                sub_header={localize(
                                    'Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.',
                                )}
                            />
                            <Option
                                onClick={() => setSelected(options.withdraw)}
                                is_selected={is_withdraw}
                                header={localize('Withdraw')}
                                sub_header={localize(
                                    'Get funds quickly and easily. We support many deposit and withdrawal options.',
                                )}
                            />
                        </CssGrid>
                    </div>
                    <div style={{ width: '60%', position: 'relative' }}>
                        {is_practice && (
                            <LottieWrapper top="-3.8rem" right="-6.1rem">
                                <Lottie animationData={DemoAnimation} />
                            </LottieWrapper>
                        )}
                        {is_trade && (
                            <LottieWrapper top="-5.5rem" right="-4.8rem">
                                <Lottie animationData={TradingAnimation} />
                            </LottieWrapper>
                        )}
                        {is_withdraw && (
                            <LottieWrapper top="-3.7rem" right="-5.4rem">
                                <Lottie animationData={WithdrawAnimation} />{' '}
                            </LottieWrapper>
                        )}
                    </div>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default HowItWorks
