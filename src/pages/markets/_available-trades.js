import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Container } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Header } from 'components/elements'
//SVG
import MarginIcon from 'images/svg/margin.svg'
import OptionsIcon from 'images/svg/options.svg'
import MultipliersIcon from 'images/svg/multipliers.svg'

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
`
const ContentWrapper = styled.div`
    width: 100%;
    max-width: 99.6rem;
    display: block;
    background: #ffffff;
    border-radius: 0.15em;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
`

const Card = ({ name, active_tab, onTabChange }) => {
    return (
        <CardContainer name={name} active_tab={active_tab} onClick={() => onTabChange(name)}>
            <Flex height="fit-content" p="2.71rem 0 0 3.2rem" jc="flex-start" ai="center">
                {active_tab === 'Margin' && <MarginIcon />}
                {active_tab === 'Options' && <OptionsIcon />}
                {active_tab === 'Multipliers' && <MultipliersIcon />}
                <Header as="h4" width="auto">
                    {name}
                </Header>
            </Flex>
        </CardContainer>
    )
}

Card.propTypes = {
    active_tab: PropTypes.string,
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
        return (
            <SectionContainer>
                <Header size="var(--text-size-header-1)" align="center">
                    {name + ' ' + localize('trades available on Deriv')}
                </Header>
                <Container
                    direction="column"
                    style={{
                        marginTop: '2.8rem',
                    }}
                >
                    <CardWrapper position="relative">
                        {Margin && (
                            <Card
                                name={<Localize translate_text="Margin" />}
                                onTabChange={() => this.handleTabChange('Margin')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {DigitalOptions && (
                            <Card
                                name={<Localize translate_text="Options" />}
                                onTabChange={() => this.handleTabChange('Options')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {Multipliers && (
                            <Card
                                name={<Localize translate_text="Multipliers" />}
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
