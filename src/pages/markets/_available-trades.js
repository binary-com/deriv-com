import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
//SVG
import MarginIcon from 'images/svg/margin.svg'
import OptionsIcon from 'images/svg/options.svg'
import MultipliersIcon from 'images/svg/multipliers.svg'

const StyledSection = styled(SectionContainer)`
    padding: 5rem 0;
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 35.75rem;
        font-size: 4rem;
        margin: 0 auto;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`
const CardWrapper = styled(Flex)`
    max-width: 100.6rem;
    justify-content: flex-start;
    z-index: 1;
    height: 8rem;
    align-items: flex-end;
    padding-left: 0.8rem;
    overflow: hidden;

    div:first-child {
        z-index: 3;
        margin: 0 -0.3rem;
    }
    div:nth-child(2) {
        z-index: 2;
    }
    div:last-child {
        z-index: 1;
    }
`
const CardContainer = styled(Flex)`
    position: relative;
    width: 25rem;
    height: 7.72rem;
    padding: 0;
    margin: 0 -0.8rem;
    cursor: pointer;
    z-index: ${(props) => (props.active_tab === props.name ? '4 !important' : '')};

    ${Flex} {
        padding: 2.71rem 0 0 3.2rem;

        svg {
            width: 32px;
            height: 32px;
            margin-right: 1.6rem;
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0')};
        }
        h4 {
            color: ${(props) =>
                props.active_tab === props.name ? 'var(--color-red)' : 'var(--color-black-3)'};
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.56')};
        }

        @media ${device.tabletL} {
            height: 100%;
            justify-content: flex-start;
            padding: 1rem 0 0 1.5rem;

            svg {
                width: 16px;
                height: 16px;
                margin-right: 1rem;
            }
        }
    }
    ::before {
        content: ''; /* To generate the box */
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1rem;
        left: 0;
        z-index: -1;
        border-bottom: none;
        border-radius: 10px 30px 0 0;
        background: #f3f3f3;
        transform: perspective(14px) rotateX(1.4deg);
        transform-origin: bottom left;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
        ${(props) => {
            if (props.active_tab === props.name)
                return css`
                    background-color: #ffffff;
                    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
                `
        }}
    }
    @media ${device.tabletL} {
        width: 15.5rem;
        height: 6rem;
    }
`
const ContentWrapper = styled.div`
    width: 100%;
    max-width: 99.6rem;
    display: block;
    background: #ffffff;
    border-radius: 0.15em;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

    @media ${device.tabletL} {
        padding: 0 2rem;
    }
`
const CardHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const Card = ({ name, active_tab, onTabChange }) => {
    return (
        <CardContainer name={name} active_tab={active_tab} onClick={() => onTabChange(name)}>
            <Flex height="fit-content" jc="flex-start" ai="center">
                {active_tab === 'Margin' && <MarginIcon />}
                {active_tab === 'Options' && <OptionsIcon />}
                {active_tab === 'Multipliers' && <MultipliersIcon />}
                <CardHeader as="h4" width="auto">
                    {name}
                </CardHeader>
            </Flex>
        </CardContainer>
    )
}

Card.propTypes = {
    active_tab: PropTypes.string,
    name: PropTypes.string,
    onTabChange: PropTypes.func,
}
const TabsContent = {
    Forex: {
        margin: localize(
            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
        ),
        options: localize(
            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options and call/put spreads on forex.',
        ),
        multipliers: localize(
            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
        ),
    },
    Commodity: {
        margin: localize(
            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
        ),
        options: localize(
            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on Commodities.',
        ),
    },
    'Stock indices': {
        margin: localize(
            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
        ),
        options: localize(
            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on stock indices',
        ),
    },
    'Synthetic Indices': {
        margin: localize(
            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment',
        ),
        options: localize(
            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options, lookbacks, and call/put spreads on Synthetic Indices.',
        ),
        multipliers: localize(
            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment',
        ),
    },
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
        return (
            <StyledSection>
                <StyledHeader size="var(--text-size-header-1)" align="center">
                    {localize(name + ' trades available on Deriv')}
                </StyledHeader>
                <StyledContainer
                    direction="column"
                    style={{
                        marginTop: '2.8rem',
                    }}
                >
                    <CardWrapper position="relative">
                        {Margin && (
                            <Card
                                name={localize('Margin')}
                                content={TabsContent[name].margin}
                                onTabChange={() => this.handleTabChange('Margin')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {DigitalOptions && (
                            <Card
                                name={localize('Options')}
                                content={TabsContent[name].options}
                                onTabChange={() => this.handleTabChange('Options')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {Multipliers && (
                            <Card
                                name={localize('Multipliers')}
                                content={TabsContent[name].multipliers}
                                onTabChange={() => this.handleTabChange('Multipliers')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                    </CardWrapper>
                    <ContentWrapper>
                        {this.state.active_tab === 'Margin' && <Margin />}
                        {this.state.active_tab === 'Options' && <DigitalOptions />}
                        {this.state.active_tab === 'Multipliers' && <Multipliers />}
                    </ContentWrapper>
                </StyledContainer>
            </StyledSection>
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
