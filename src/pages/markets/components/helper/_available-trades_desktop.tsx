import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { isBrowser } from 'common/utility'
import { TString } from 'types/generics'
import { isActiveLink } from 'features/components/atoms/link/internal'

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
    is_active_tab: boolean
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
    z-index: ${({ is_active_tab }) => (is_active_tab ? '4 !important' : '')};

    ${Flex} {
        img {
            width: 32px;
            height: 32px;
            margin: 0 8px 0 0;
            opacity: ${({ is_active_tab }) => (is_active_tab ? '1' : '0.48')};
        }
        h4 {
            width: 20rem;
            text-align: center;
            padding-bottom: 1rem;
            color: ${({ is_active_tab }) =>
                is_active_tab ? 'var(--color-red)' : 'var(--color-black-3)'};
            opacity: ${({ is_active_tab }) => (is_active_tab ? '1' : '0.48')};
            font-weight: ${({ is_active_tab }) => (is_active_tab ? '300' : '400')};
            border-bottom: ${({ is_active_tab }) =>
                is_active_tab ? '2px solid var(--color-red)' : '2px solid var(--color-black-3)'};

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
        ${({ is_active_tab }) => {
            if (is_active_tab)
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
            is_active_tab={name === active_tab}
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
    const { is_non_eu } = useRegion()
    const params = new URLSearchParams(isBrowser() && location.search)
    const tab = params.get('tab') || 'cfds'

    return (
        <StyledSection>
            <StyledHeader as="h2" size="var(--text-size-l)" align="center">
                <Localize translate_text={display_title} />
            </StyledHeader>
            <StyledContainer direction="column">
                <CardWrapper position="relative" id="available-trades">
                    {CFDs && (
                        <Link to="?tab=cfds#cfds">
                            <Card name="cfds" display_name="_t_CFDs_t_" active_tab={tab} />
                        </Link>
                    )}
                    {is_non_eu && DigitalOptions && (
                        <Link to="?tab=options#options">
                            <Card name="options" display_name="_t_Options_t_" active_tab={tab} />
                        </Link>
                    )}
                    {Multipliers && (
                        <Link to="?tab=multipliers#multipliers">
                            <Card
                                name="multipliers"
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
