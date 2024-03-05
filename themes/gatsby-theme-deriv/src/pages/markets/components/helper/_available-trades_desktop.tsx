import React, { ReactElement, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { isBrowser } from 'common/utility'
import { TString } from 'types/generics'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import useBuildVariant from 'features/hooks/use-build-variant'

type CardProps = {
    active_tab: string
    display_name: TString
    name: string
}

type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    display_title: TString
}

type CardContainerProps = {
    active_tab: string
    name: string
    is_rtl: boolean
}

const StyledSection = styled(SectionContainer)`
    padding: 0;
    background-color: var(--color-white);
    @media ${device.tabletL} {
        padding: 40px 0;
        margin-bottom: 0;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 326px;
        font-size: 24px;
        margin: 0 auto;
    }
`
const StyledContainer = styled(Container)`
    margin-top: 9.6rem;

    @media ${device.tabletL} {
        margin-top: 4rem;
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
            width: 20rem;
            text-align: center;
            padding-bottom: 1rem;
            color: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase()
                    ? 'var(--color-red)'
                    : 'var(--color-black-3)'};
            opacity: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase() ? '1' : '0.48'};
            font-weight: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase() ? '300' : '400'};
            border-bottom: ${(props) =>
                props.active_tab === props.name.toLocaleLowerCase()
                    ? '2px solid var(--color-red)'
                    : '2px solid var(--color-black-3)'};

            @media (min-width: 320px) and (max-width: 992px) {
                width: 30vw;
                height: 6rem;
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
            if (props.active_tab === props.name.toLocaleLowerCase())
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
    @media ${device.mobileL} {
        font-size: 1.5rem;
    }
`
const Link = styled(AnchorLink)`
    text-decoration: none;
`

const Card = ({ display_name, active_tab, name }: CardProps) => {
    const is_rtl = useIsRtl()

    return (
        <CardContainer
            name={name}
            active_tab={active_tab}
            className={name.toLowerCase()}
            is_rtl={is_rtl}
        >
            <Flex height="fit-content" jc="flex-start" ai="center" style={{ overflow: 'visible' }}>
                <CardHeader as="h4" width="auto">
                    <Localize translate_text={display_name} />
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
    const { region } = useBuildVariant()
    const [tab, setTab] = useState('cfds')
    const params = new URLSearchParams(isBrowser() && location.search)
    const show_digital_options = region === 'row' ? true : false

    useEffect(() => {
        setTab(params.get('tab') || 'cfds')
    }, [params])

    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <StyledSection>
            <StyledHeader as="h2" size="var(--text-size-l)" align="center">
                <Localize translate_text={display_title} />
            </StyledHeader>
            <StyledContainer direction="column">
                <CardWrapper position="relative" id="available-trades">
                    {CFDs && (
                        <Link
                            to={is_deriv_go ? '?tab=cfds&platform=derivgo#cfds' : '?tab=cfds#cfds'}
                        >
                            <Card name="CFDs" display_name="_t_CFDs_t_" active_tab={tab} />
                        </Link>
                    )}
                    {show_digital_options && DigitalOptions && (
                        <Link
                            to={
                                is_deriv_go
                                    ? '?tab=options&platform=derivgo#options'
                                    : '?tab=options#options'
                            }
                        >
                            <Card name="Options" display_name="_t_Options_t_" active_tab={tab} />
                        </Link>
                    )}
                    {Multipliers && (
                        <Link
                            to={
                                is_deriv_go
                                    ? '?tab=multipliers&platform=derivgo#multipliers'
                                    : '?tab=multipliers#multipliers'
                            }
                        >
                            <Card
                                name="Multipliers"
                                display_name="_t_Multipliers_t_"
                                active_tab={tab}
                            />
                        </Link>
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
