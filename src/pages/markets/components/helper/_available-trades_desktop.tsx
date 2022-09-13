import React, { ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
//SVG
import CFDIcon from 'images/svg/trade-types/cfds-new.svg'
import MultipliersIcon from 'images/svg/custom/multipliers-nav.svg'
import OptionsIcon from 'images/svg/custom/options-nav.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

type CardProps = {
    active_tab: string
    display_name: ReactElement
    name: string
    onTabChange: (name: string) => void
}

type TabIconProps = {
    active_tab: string
    name: string
}

type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    display_title: ReactElement
}

type CardContainerProps = {
    active_tab: string
    name: string
}

const StyledSection = styled(SectionContainer)`
    padding: 120px 0;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding: 40px 0;
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
    }
    div:nth-child(2) {
        z-index: 2;
    }
    div:last-child {
        z-index: 1;
    }
`

const CardContainer = styled(Flex)<CardContainerProps>`
    position: relative;
    width: fit-content;
    min-width: 240px;
    height: 68px;
    padding: 0;
    margin: 0 -0.6rem;
    cursor: pointer;
    z-index: ${(props) => (props.active_tab === props.name ? '4 !important' : '')};
    padding-right: 5rem;

    ${Flex} {
        padding: 16px 24px;

        img {
            width: 32px;
            height: 32px;
            margin: 0 8px 0 0;
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.48')};
        }
        h4 {
            color: ${(props) =>
                props.active_tab === props.name ? 'var(--color-black)' : 'var(--color-black-3)'};
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.48')};
        }
        @media ${device.tabletL} {
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            padding: 10px 0 0 0;

            img {
                width: 16px;
                height: 16px;
                margin: 0 8px 0 23px;
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
        top: -10px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-bottom: none;
        border-radius: 8px 16px 0 0;
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
        height: 35px;
        min-width: unset;
        padding-right: 25px;

        &:last-child {
            padding-right: 40px;
        }
    }
`

const TabIcon = styled.img<TabIconProps>`
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

const Card = ({ display_name, active_tab, onTabChange, name }: CardProps) => {
    return (
        <CardContainer name={name} active_tab={active_tab} onClick={() => onTabChange(name)}>
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
                <CardHeader as="h4" type="sub-section-title" width="auto">
                    {display_name}
                </CardHeader>
            </Flex>
        </CardContainer>
    )
}

const AvailableTradesDesctop = ({
    CFDs,
    DigitalOptions,
    Multipliers,
    display_title,
}: AvailableTradesProps) => {
    const { is_non_eu } = useCountryRule()
    const [active_tab, SetActiveTab] = useState('CFDs')
    const handleTabChange = (new_tab: string) => {
        if (new_tab !== active_tab) return SetActiveTab(new_tab)
    }

    return (
        <StyledSection>
            <StyledHeader size="var(--text-size-l)" align="center">
                {display_title}
            </StyledHeader>
            <StyledContainer direction="column">
                <CardWrapper margin="0" position="relative">
                    {CFDs && (
                        <Card
                            name="CFDs"
                            display_name={<Localize translate_text="CFDs" />}
                            onTabChange={() => handleTabChange('CFDs')}
                            active_tab={active_tab}
                        />
                    )}
                    {is_non_eu && DigitalOptions && (
                        <Card
                            name="Options"
                            display_name={<Localize translate_text="Options" />}
                            onTabChange={() => handleTabChange('Options')}
                            active_tab={active_tab}
                        />
                    )}

                    {Multipliers && (
                        <Card
                            name="Multipliers"
                            display_name={<Localize translate_text="Multipliers" />}
                            onTabChange={() => handleTabChange('Multipliers')}
                            active_tab={active_tab}
                        />
                    )}
                </CardWrapper>
                <ContentWrapper>
                    {active_tab === 'CFDs' && CFDs}
                    {active_tab === 'Options' && DigitalOptions}
                    {active_tab === 'Multipliers' && Multipliers}
                </ContentWrapper>
            </StyledContainer>
        </StyledSection>
    )
}

export default AvailableTradesDesctop
