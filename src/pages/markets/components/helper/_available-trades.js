import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
//SVG
import MarginIcon from 'images/svg/margin.svg'
import MultipliersIcon from 'images/svg/multipliers.svg'
import OptionsIcon from 'images/svg/options.svg'

const StyledSection = styled(SectionContainer)`
    padding: 8rem 0;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding: 48px 0 40px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 280px;
        font-size: 4rem;
        margin: 0 auto;
    }
`
const StyledContainer = styled(Container)`
    margin-top: 4rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 0;
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

    @media ${device.mobileL} {
        overflow-x: auto;
    }
`
const CardContainer = styled(Flex)`
    position: relative;
    width: fit-content;
    min-width: 29rem;
    height: 7.72rem;
    padding: 0;
    margin: 0 -0.6rem;
    cursor: pointer;
    z-index: ${(props) => (props.active_tab === props.name ? '4 !important' : '')};
    padding-right: 5rem;

    ${Flex} {
        padding: 2.71rem 0 0 3.2rem;

        img {
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
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            padding: 10px 0 0 0;

            img {
                width: 16px;
                height: 16px;
                margin-right: 1rem;
            }
        }
        @media ${device.mobileL} {
            img {
                margin-right: 5px;
            }
        }
    }
    ::before {
        content: ''; /* To generate the box */
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1rem;
        left: 0;
        z-index: -1;
        border-bottom: none;
        border-radius: 8px 8px 0 0;
        background: var(--color-grey-36);
        transform: perspective(8px) rotateX(0.8deg);
        transform-origin: bottom left;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
        ${(props) => {
            if (props.active_tab === props.name)
                return css`
                    background-color: #ffffff;
                `
        }}
    }
    @media ${device.tabletL} {
        height: 6rem;
        min-width: unset;
        padding-right: 25px;

        &:last-child {
            padding-right: 40px;
        }
    }
`
const TabIcon = styled.img`
    min-width: 16px;
    ${(props) => {
        if (props.active_tab === props.name)
            return css`
                margin-left: 16px;
                @media ${device.mobileL} {
                    margin-left: 5px;
                }
            `
    }}
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
const Card = ({ display_name, active_tab, onTabChange, name }) => {
    return (
        <CardContainer name={name} active_tab={active_tab} onClick={() => onTabChange(name)}>
            <Flex height="fit-content" jc="flex-start" ai="center">
                {active_tab === 'Margin' && (
                    <TabIcon
                        src={MarginIcon}
                        alt="margin icon"
                        name={name}
                        active_tab={active_tab}
                    />
                )}
                {active_tab === 'Options' && (
                    <TabIcon
                        src={OptionsIcon}
                        alt="option icon"
                        name={name}
                        active_tab={active_tab}
                    />
                )}
                {active_tab === 'Multipliers' && (
                    <TabIcon
                        src={MultipliersIcon}
                        alt="multiplier icon"
                        name={name}
                        active_tab={active_tab}
                    />
                )}
                <CardHeader as="h4" type="sub-section-title" width="auto">
                    {display_name}
                </CardHeader>
            </Flex>
        </CardContainer>
    )
}

Card.propTypes = {
    active_tab: PropTypes.string,
    display_name: PropTypes.object,
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
        const { Margin, DigitalOptions, Multipliers, display_title } = this.props
        return (
            <StyledSection>
                <StyledHeader size="var(--text-size-header-1)" align="center">
                    {display_title}
                </StyledHeader>
                <StyledContainer direction="column">
                    <CardWrapper position="relative">
                        {Margin && (
                            <Card
                                name="Margin"
                                display_name={<Localize translate_text="Margin" />}
                                onTabChange={() => this.handleTabChange('Margin')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {DigitalOptions && (
                            <Card
                                name="Options"
                                display_name={<Localize translate_text="Options" />}
                                onTabChange={() => this.handleTabChange('Options')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {Multipliers && (
                            <Card
                                name="Multipliers"
                                display_name={<Localize translate_text="Multipliers" />}
                                onTabChange={() => this.handleTabChange('Multipliers')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                    </CardWrapper>
                    <ContentWrapper>
                        {this.state.active_tab === 'Margin' && Margin}
                        {this.state.active_tab === 'Options' && DigitalOptions}
                        {this.state.active_tab === 'Multipliers' && Multipliers}
                    </ContentWrapper>
                </StyledContainer>
            </StyledSection>
        )
    }
}

AvailableTrades.propTypes = {
    DigitalOptions: PropTypes.object,
    display_title: PropTypes.object,
    Margin: PropTypes.object,
    Multipliers: PropTypes.object,
}

export default AvailableTrades
