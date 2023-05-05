import React, { ReactElement, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useQueryParamString } from 'react-use-query-param-string'
import { navigate } from 'gatsby'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
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
    justify-content: flex-start;
    z-index: 1;
    align-items: flex-end;
    overflow: hidden;
    background-color: #f2f3f4;
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
    padding: 16px 24px;
    font-weight: 400;
    cursor: pointer;
    z-index: ${(props) =>
        props.active_tab === props.name.toLocaleLowerCase() ? '4 !important' : ''};

    ${Flex} {
        img {
            width: 32px;
            height: 32px;
            margin: 0 8px 0 0;
            opacity: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase() ? '1' : '0.48'};
        }
        h4 {
            color: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase()
                    ? 'var(--color-black)'
                    : 'var(--color-black-3)'};
            opacity: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase() ? '1' : '0.48'};
            font-weight: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase() ? 'bold' : '400'};
        }
        @media ${device.tabletL} {
            width: 100%;
            height: 100%;
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
        content: ''; /* To generate the box */
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
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
        ${(props) => {
            if (props.active_tab === props.name.toLocaleLowerCase())
                return css`
                    font-weight: bold;
                    background-color: var(--color-white);
                    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.08);
                `
        }}
    }

    @media ${device.tabletL} {
        height: 48px;
        min-width: unset;
        padding: 8px 16px;
    }
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
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    }
`

const CardHeader = styled(Header)`
    line-height: 44px;
    @media ${device.tabletL} {
        font-size: 1.75rem;
        line-height: 20px;
    }
`

const Link = styled(LocalizedLink)`
    text-decoration: none;
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
            <Flex height="fit-content" jc="flex-start" ai="center" style={{ overflow: 'hidden' }}>
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

const AvailableTradesDesktop = ({
    CFDs,
    DigitalOptions,
    Multipliers,
    display_title,
}: AvailableTradesProps) => {
    const { is_non_eu, is_region_loading } = useRegion()
    const [tab, setTab] = useQueryParamString('tab', '')

    useEffect(() => {
        if (window.location.hash && !is_region_loading) {
            const id = window.location.hash.substring(1)
            const element = document.getElementById(id)
            const headerOffset = 170
            const elementPosition = element?.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    })
                }, 1000)
            }
        }
    }, [is_region_loading])

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
                            onTabChange={() => {
                                setTab('cfds')
                                navigate(`?tab=cfds#cfds`)
                            }}
                            active_tab={tab || 'cfds'}
                        />
                    )}
                    {is_non_eu && DigitalOptions && (
                        <Card
                            name="Options"
                            display_name={<Localize translate_text="Options" />}
                            onTabChange={() => {
                                setTab('options')
                                navigate(`?tab=options#options`)
                            }}
                            active_tab={tab || 'cfds'}
                        />
                    )}

                    {Multipliers && (
                        <Card
                            name="Multipliers"
                            display_name={<Localize translate_text="Multipliers" />}
                            onTabChange={() => {
                                setTab('multipliers')
                                navigate(`?tab=multipliers#multipliers`)
                            }}
                            active_tab={tab || 'cfds'}
                        />
                    )}
                </CardWrapper>
                <ContentWrapper>
                    {(tab === 'cfds' || !tab) && CFDs}
                    {tab === 'options' && DigitalOptions}
                    {tab === 'multipliers' && Multipliers}
                </ContentWrapper>
            </StyledContainer>
        </StyledSection>
    )
}

export default AvailableTradesDesktop
