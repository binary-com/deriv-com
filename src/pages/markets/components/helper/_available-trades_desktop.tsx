import React, { ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { useIsRtl } from 'components/hooks/use-isrtl'

type CardProps = {
    active_tab: string
    display_name: ReactElement
    name: string
    onTabChange: (name: string) => void
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
    is_rtl: boolean
}

const StyledSection = styled(SectionContainer)`
    padding: 0;
    background-color: var(--color-white);
    margin-bottom: 80px;
    @media ${device.tabletL} {
        padding: 20px 0;
        margin-bottom: 0;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 320px;
        font-size: 24px;
        margin: 0 auto;
    }
`

const StyledContainer = styled(Container)`
    margin-top: 4rem;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const CardWrapper = styled(Flex)`
    max-width: 99.6rem;
    justify-content: center;
    z-index: 1;
    align-items: center;
    overflow: hidden;
    margin: 0;

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
    font-size: 20px;
    height: 68px;
    font-weight: 400;
    cursor: pointer;
    z-index: ${(props) => (props.active_tab === props.name ? '4 !important' : '')};

    ${Flex} {
        img {
            width: 32px;
            height: 32px;
            margin: 0 8px 0 0;
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.48')};
        }
        h4 {
            width: 15vw;
            text-align: center;
            color: ${(props) =>
                props.active_tab === props.name ? 'var(--color-red)' : 'var(--color-black-3)'};
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.48')};
            font-weight: ${(props) => (props.active_tab === props.name ? '300' : '400')};
            border-bottom: ${(props) =>
                props.active_tab === props.name
                    ? '2px solid var(--color-red)'
                    : '2px solid var(--color-black-3    )'};

            @media (min-width: 320px) and (max-width: 992px) {
                width: 30vw;
            }
        }
        @media ${device.tabletL} {
            width: 25vw;
            height: 100%;
            text-align: center;
            justify-content: flex-start;

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
        width: 100%;
        position: absolute;
        top: 1px;
        right: 0;
        bottom: 0;
        left: 1px;
        z-index: -1;
        border-bottom: none;
        border-radius: 8px 16px 0 0;
        background: var(--color-grey-36);
        transform: perspective(8px) rotateX(0.8deg);
        transform-origin: ${({ is_rtl }) => (is_rtl ? 'bottom right' : 'bottom left')};
        ${(props) => {
            if (props.active_tab === props.name)
                return css`
                    font-weight: bold;
                    background-color: var(--color-white);
                `
        }}
    }
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 99.6rem;
    display: block;
    background: var(--color-white);
    border-radius: 0.15em;

    @media ${device.tabletL} {
        padding: 0 2rem;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    }
`

const CardHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`

const Card = ({ display_name, active_tab, onTabChange, name }: CardProps) => {
    const is_rtl = useIsRtl()

    return (
        <CardContainer
            name={name}
            active_tab={active_tab}
            onClick={() => onTabChange(name)}
            className={name.toLowerCase()}
            is_rtl={is_rtl}
        >
            <Flex height="fit-content" jc="flex-start" ai="center" style={{ overflow: 'visible' }}>
                {name === 'CFDs'}
                {name === 'Options'}
                {name === 'Multipliers'}
                <CardHeader as="h4" width="auto">
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
    const { is_non_eu } = useRegion()
    const [active_tab, SetActiveTab] = useState('CFDs')
    const handleTabChange = (new_tab: string) => {
        if (new_tab !== active_tab) return SetActiveTab(new_tab)
    }

    return (
        <StyledSection>
            <StyledHeader as="h2" size="var(--text-size-l)" align="center">
                {display_title}
            </StyledHeader>
            <StyledContainer direction="column">
                <CardWrapper position="relative" id="available-trades">
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
