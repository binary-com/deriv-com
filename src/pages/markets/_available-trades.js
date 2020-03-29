import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
//SVG
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon-green.svg'
import DBot from 'images/svg/dbot-icon-green.svg'

// const ContentWrapper = styled(SectionContainer)`
//     max-width: 99.6rem;
// `
const CardWrapper = styled(Flex)`
    width: 120rem;
    height: 27.6rem;
    margin: 4rem auto 0 auto;
    position: relative;

    div:first-child {
        left: 0;
    }
    div:last-child {
        right: 0;
    }
`

const CardContainer = styled(Flex)`
    width: 40.8rem;
    height: 27.6rem;
    padding: 2.4rem 2.8rem 2.8rem 2.8rem;
    position: absolute;
    border-radius: 15px 15px 0 0;
    border: 1px solid var(--color-grey-15);
    flex-direction: column;
    justify-content: space-between;
    background: var(--color-grey-8);
    cursor: pointer;
    z-index: ${props => props.title === 'Digital options' ? '20' : '10'};

    ${Header} {
        color: ${props => props.active_tab === props.title ? ('var(--color-red)') : ('var(--color-black-3)')};
        opacity: 0.5;
    }
    ${Text} {
        opacity: 0.4;
    }
`
const IconContainer = styled(Flex)`
    * {
        margin-right: 1.6rem;
    }
    svg {
        opacity: 0.5;
    }
    svg:last-child {
        margin-right: 0;
    }
`
const Card = ({ title, content, active_tab, onTabChange }) => {
    let Icons;
    switch (title) {
        case 'Margin':
            Icons = [DMT5]
            break;
        case 'Digital options':
            Icons = [DTrader, DBot]
            break;
        case 'Multipliers':
            Icons = [DTrader]
            break;
        default:
            Icons = []
            break;
    }
    return (
        <CardContainer title={title} active_tab={active_tab} onClick={() => onTabChange(title)}>
            <div>
                <Header as='h4' align='center'>{title}</Header>
                <Text align='center'>{content}</Text>
            </div>
            {Icons.length === 0 ? (null) : (
                <IconContainer ai='center' height='auto'>
                    <Text>{localize('Available on:')}</Text>
                    {Icons.map((Icon, index) => <Icon key={index} />)}
                </IconContainer>
            )}
        </CardContainer>
    )
}
class AvailableTrades extends React.Component {
    state = {
        active_tab: 'Margin',
    }
    handleTabChange = new_tab => {
        if (new_tab === this.state.active_tab) return
        this.setState({ active_tab: new_tab })
    }
    render() {
        const { Margin, DigitalOptions, Multipliers, title } = this.props;
        return (
            <SectionContainer>
                <Header size='var(--text-size-header-1)' align='center'>{localize(title + ' trades available on Deriv')}</Header>
                <CardWrapper>
                    {Margin &&
                        <Card
                            title='Margin'
                            content='Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                    {DigitalOptions &&
                        <Card
                            title='Digital options'
                            content='Digital options allow you to trade on the future value of an asset without needing to buy the asset. You stand a chance to win a fixed payout, and your potential loss never exceeds the amount you paid to open the position.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                    {Multipliers &&
                        <Card
                            title='Multipliers'
                            content='Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                </CardWrapper>
                {/* <ContentWrapper>
                {active_tab === 'margin' && <Margin />}
                {active_tab === 'digital options' && <DigitalOptions />}
                {active_tab === 'multipliers' && <Multipliers />}
            </ContentWrapper> */}
            </SectionContainer>
        )
    }
}

export default AvailableTrades