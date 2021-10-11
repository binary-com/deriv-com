import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
//SVG
import ForexIcon from 'images/svg/market-forex.svg'
import SyntheticIcon from 'images/svg/market-synthetic-indices.svg'
import CryptocurrencyIcon from 'images/svg/crypto-pairs.svg'

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
    overflow: hidden;

    div:first-child {
        z-index: 3;
        margin: 0;
        padding-left: 0;
    }
    div:nth-child(2) {
        z-index: 2;
        margin-left: -2.5rem;
    }
    div:last-child {
        z-index: 1;
        margin-left: -1.2rem;
        margin-right: 0;
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
        padding-top: 2.71rem;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
            margin-right: 1.2rem;
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
                    background-color: var(--color-white);
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
    background: var(--color-white);
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
                {active_tab === 'Forex' && (
                    <TabIcon src={ForexIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {active_tab === 'Synthetic Indices' && (
                    <TabIcon src={SyntheticIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {active_tab === 'CryptoCurrencies' && (
                    <TabIcon src={CryptocurrencyIcon} alt="" name={name} active_tab={active_tab} />
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
        active_tab: 'Forex',
    }
    handleTabChange = (new_tab) => {
        if (new_tab === this.state.active_tab) return
        this.setState({ active_tab: new_tab })
    }
    render() {
        const { display_title, Forex, SyntheticIndices, CryptoCurrencies } = this.props
        return (
            <StyledSection>
                <StyledHeader size="var(--text-size-header-1)" align="center" as="h2">
                    {display_title}
                </StyledHeader>
                <StyledContainer direction="column">
                    <CardWrapper position="relative">
                        {Forex && (
                            <Card
                                name="Forex"
                                display_name={<Localize translate_text="Forex" />}
                                onTabChange={() => this.handleTabChange('Forex')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {SyntheticIndices && (
                            <Card
                                name="Synthetic Indices"
                                display_name={<Localize translate_text="Synthetic&nbsp;Indices" />}
                                onTabChange={() => this.handleTabChange('Synthetic Indices')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                        {CryptoCurrencies && (
                            <Card
                                name="CryptoCurrencies"
                                display_name={<Localize translate_text="Cryptocurrencies" />}
                                onTabChange={() => this.handleTabChange('CryptoCurrencies')}
                                active_tab={this.state.active_tab}
                            />
                        )}
                    </CardWrapper>
                    <ContentWrapper>
                        {this.state.active_tab === 'Forex' && <Forex />}
                        {this.state.active_tab === 'Synthetic Indices' && <SyntheticIndices />}
                        {this.state.active_tab === 'CryptoCurrencies' && <CryptoCurrencies />}
                    </ContentWrapper>
                </StyledContainer>
            </StyledSection>
        )
    }
}

AvailableTrades.propTypes = {
    CryptoCurrencies: PropTypes.func,
    display_title: PropTypes.object,
    Forex: PropTypes.func,
    SyntheticIndices: PropTypes.func,
}

export default AvailableTrades
