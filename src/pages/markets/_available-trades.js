import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
//SVG
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon-green.svg'
import DBot from 'images/svg/dbot-icon-green.svg'

const CardWrapper = styled(Flex)`
    height: 27.6rem;
    position: relative;

    div:first-child {
        left: 0;
    }

    ${(props) => {
        if (props.tab_counts === 2)
            return css`
                div:last-child {
                    left: 33.3%;
                }
            `
        if (props.tab_counts === 3)
            return css`
                div:last-child {
                    right: 0;
                }
            `
    }}
`

const CardContainer = styled(Flex)`
    width: 40.8rem;
    height: 27.6rem;
    padding: 2.4rem 2.8rem 2.8rem 2.8rem;
    position: absolute;
    border-radius: 15px 15px 0 0;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) =>
        props.active_tab === props.name ? 'var(--color-white)' : 'var(--color-grey-8)'};
    cursor: pointer;
    box-shadow: -20px 0 20px -20px rgba(0, 0, 0, 0.1), 20px 0 20px -20px rgba(0, 0, 0, 0.1);
    z-index: ${(props) => (props.active_tab === props.name ? '30' : props.z_index)};

    ${Header} {
        color: ${(props) =>
            props.active_tab === props.name ? 'var(--color-red)' : 'var(--color-black-3)'};
        opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.5')};
    }
    ${Text} {
        opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.4')};
    }
`
const IconContainer = styled(Flex)`
    * {
        margin-right: 1.6rem;
    }
    svg {
        opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.5')};
    }
    svg:last-child {
        margin-right: 0;
    }
`
const ContentWrapper = styled.div`
    width: 100%;
`

const Card = ({ name, content, active_tab, onTabChange }) => {
    let Icons
    switch (name) {
        case 'Margin':
            Icons = [DMT5]
            break
        case 'Options':
            Icons = [DTrader, DBot]
            break
        case 'Multipliers':
            Icons = [DTrader]
            break
        default:
            Icons = []
            break
    }
    return (
        <CardContainer
            name={name}
            active_tab={active_tab}
            onClick={() => onTabChange(name)}
            z_index={name === 'Options' ? '20' : '10'}
        >
            <div>
                <Header as="h4" align="center">
                    {name}
                </Header>
                <Text align="center">{content}</Text>
            </div>
            {Icons.length === 0 ? null : (
                <IconContainer ai="center" height="auto" name={name} active_tab={active_tab}>
                    <Text>{localize('Available on:')}</Text>
                    {Icons.map((Icon, index) => (
                        <Icon key={index} />
                    ))}
                </IconContainer>
            )}
        </CardContainer>
    )
}

Card.propTypes = {
    active_tab: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    onTabChange: PropTypes.func,
}
class AvailableTrades extends React.Component {
    state = {
        active_tab: 'Margin',
    }
    handleTabChange = (new_tab) => {
        if (new_tab === this.state.active_tab) return
        this.setState({ active_tab: new_tab })
    }
    render() {
        const { Margin, DigitalOptions, Multipliers, name } = this.props
        const tab_counts = Multipliers ? 3 : 2
        return (
            <SectionContainer>
                <Header size="var(--text-size-header-1)" align="center">
                    {localize(name + ' trades available on Deriv')}
                </Header>
                <Container
                    direction="column"
                    style={{
                        boxShadow:
                            '0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05)',
                        marginTop: '4rem',
                    }}
                >
                    <CardWrapper tab_counts={tab_counts}>
                        {Margin && (
                            <Card
                                name="Margin"
                                content="Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss."
                                onTabChange={this.handleTabChange}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {DigitalOptions && (
                            <Card
                                name="Options"
                                content="Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options and call/put spreads on Forex."
                                onTabChange={this.handleTabChange}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {Multipliers && (
                            <Card
                                name="Multipliers"
                                content="Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment."
                                onTabChange={this.handleTabChange}
                                active_tab={this.state.active_tab}
                            />
                        )}
                    </CardWrapper>
                    <ContentWrapper>
                        {this.state.active_tab === 'Margin' && <Margin />}
                        {this.state.active_tab === 'Options' && <DigitalOptions />}
                        {this.state.active_tab === 'Multipliers' && <Multipliers />}
                    </ContentWrapper>
                </Container>
            </SectionContainer>
        )
    }
}

AvailableTrades.propTypes = {
    DigitalOptions: PropTypes.func,
    Margin: PropTypes.func,
    Multipliers: PropTypes.func,
    name: PropTypes.string,
}

export default AvailableTrades
