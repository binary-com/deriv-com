import React, { ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
//SVG
import CFDIcon from 'images/svg/trade-types/cfds-new.svg'
import MultipliersIcon from 'images/svg/custom/multipliers-nav.svg'
import OptionsIcon from 'images/svg/custom/options-nav.svg'
import Minus from 'images/svg/elements/minus.svg'
import Plus from 'images/svg/elements/plus.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

type CardProps = {
    active_tab: string[]
    display_name: ReactElement
    name: string
}

type TabIconProps = {
    active_tab: string[]
    name: string
}

type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    display_title: ReactElement
}

type CardContainerProps = {
    active_tab: string[]
    name: string
}

const StyledSection = styled(SectionContainer)`
    background-color: rgba(229, 229, 229, 0.25);
    padding: 40px 0;
`

const StyledHeader = styled(Header)`
    max-width: 280px;
    font-size: 4rem;
    margin: 0 auto;
`

const StyledContainer = styled(Container)`
    width: 100%;
    margin-top: 0;
`

const CardWrapper = styled(Flex)`
    width: 100%;
    height: 40px;
    justify-content: flex-start;
    z-index: 1;
    align-items: flex-end;
    overflow: hidden;
`
const StyledDiv = styled.div`
    border-bottom: 1px solid var(--color-grey-22);
    width: 100%;
`
const CardContainer = styled(Flex)<CardContainerProps>`
    position: relative;
    width: 100%;
    padding: 0 25px 0 0;
    margin: 0;
    cursor: pointer;
    z-index: 4;
    height: 40px;
    min-width: unset;

    ${Flex} {
        width: 100%;
        justify-content: flex-start;
        height: 40px;
        min-width: unset;

        img {
            width: 24px;
            height: 24px;
            margin: 8px 8px 8px 24px;
        }
        h4 {
            color: var(--color-black);
        }
        ::before {
            content: ''; /* To generate the box */
            width: 100%;
            position: absolute;
            top: -10px;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            border-bottom: none;
            background-color: var(--color-white);
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
            ${(props) => {
                if (props.active_tab.includes(props.name))
                    return css`
                        border-radius: 12px 16px 0 0;
                        transform: perspective(7px) rotateX(0.8deg);
                        transform-origin: bottom left;
                    `
            }}
        }
        &:last-child {
            padding-right: 40px;
        }
    }
`

const TabIcon = styled.img<TabIconProps>`
    min-width: 16px;
    ${(props) => {
        if (props.active_tab.includes(props.name))
            return css`
                margin-left: 5px;
            `
    }}
`

const ContentWrapper = styled.div`
    width: 100%;
    display: block;
    background: var(--color-white);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 0 2rem;
`
const StyledSvg = styled.img`
    position: absolute;
    z-index: 10;
    top: 15px;
    right: 33px;
`

const Card = ({ display_name, active_tab, name }: CardProps) => {
    return (
        <CardContainer name={name} active_tab={active_tab}>
            <Flex height="fit-content" jc="flex-start" ai="center" style={{ overflow: 'hidden' }}>
                {name === 'CFDs' && (
                    <TabIcon src={CFDIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {name === 'Options' && (
                    <TabIcon src={OptionsIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {name === 'Multipliers' && (
                    <TabIcon src={MultipliersIcon} alt="" name={name} active_tab={active_tab} />
                )}
                <Header as="h4" type="unset" size="18px" width="auto">
                    {display_name}
                </Header>
            </Flex>
        </CardContainer>
    )
}

const AvailableTradesMobile = ({
    CFDs,
    DigitalOptions,
    Multipliers,
    display_title,
}: AvailableTradesProps) => {
    const { is_non_eu } = useCountryRule()
    const [active_tab, SetActiveTab] = useState(['CFDs'])
    const handleTabChange = (new_tab: string) => {
        if (active_tab.includes(new_tab)) {
            SetActiveTab(active_tab.filter((active) => active !== new_tab))
        } else SetActiveTab([...active_tab, new_tab])
    }

    return (
        <StyledSection>
            <StyledHeader size="var(--text-size-l)" align="center">
                {display_title}
            </StyledHeader>
            <StyledContainer direction="column">
                <StyledDiv>
                    <CardWrapper
                        margin="0"
                        position="relative"
                        onClick={() => handleTabChange('CFDs')}
                    >
                        {CFDs && (
                            <Card
                                name="CFDs"
                                display_name={<Localize translate_text="CFDs" />}
                                active_tab={active_tab}
                            />
                        )}
                        {active_tab.includes('CFDs') ? (
                            <StyledSvg src={Minus} alt="Minus" height="16" width="16" />
                        ) : (
                            <StyledSvg src={Plus} alt="Plus" height="16" width="16" />
                        )}
                    </CardWrapper>
                    <ContentWrapper>{active_tab.includes('CFDs') && CFDs}</ContentWrapper>
                </StyledDiv>
                {DigitalOptions && is_non_eu && (
                    <StyledDiv>
                        <CardWrapper
                            margin="0"
                            position="relative"
                            onClick={() => handleTabChange('Options')}
                        >
                            <Card
                                name="Options"
                                display_name={<Localize translate_text="Options" />}
                                active_tab={active_tab}
                            />

                            {active_tab.includes('Options') ? (
                                <StyledSvg src={Minus} alt="Minus" height="16" width="16" />
                            ) : (
                                <StyledSvg src={Plus} alt="Plus" height="16" width="16" />
                            )}
                        </CardWrapper>
                        <ContentWrapper>
                            {active_tab.includes('Options') && DigitalOptions}
                        </ContentWrapper>
                    </StyledDiv>
                )}
                {Multipliers && (
                    <StyledDiv>
                        <CardWrapper
                            margin="0"
                            position="relative"
                            onClick={() => handleTabChange('Multipliers')}
                        >
                            <Card
                                name="Multipliers"
                                display_name={<Localize translate_text="Multipliers" />}
                                active_tab={active_tab}
                            />

                            {active_tab.includes('Multipliers') ? (
                                <StyledSvg src={Minus} alt="Minus" height="16" width="16" />
                            ) : (
                                <StyledSvg src={Plus} alt="Plus" height="16" width="16" />
                            )}
                        </CardWrapper>

                        <ContentWrapper>
                            {active_tab.includes('Multipliers') && Multipliers}
                        </ContentWrapper>
                    </StyledDiv>
                )}
            </StyledContainer>
        </StyledSection>
    )
}

export default AvailableTradesMobile
