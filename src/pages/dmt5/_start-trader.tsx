import React, { useState, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import StepperView from 'components/custom/_stepper_view'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useHandleLogin from 'components/hooks/use-handle-login'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'

type TabProps = {
    active?: boolean
    mobile_padding?: string
}

const query = graphql`
    query {
        demo_step1: file(relativePath: { eq: "dmt5/dmt5-demo-step1.png" }) {
            ...fadeIn
        }
        demo_step1_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step1-eu.png" }) {
            ...fadeIn
        }
        demo_step1_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step1-mobile.png" }) {
            ...fadeIn
        }
        demo_step1_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step1-mobile-eu.png" }) {
            ...fadeIn
        }
        demo_step2: file(relativePath: { eq: "dmt5/dmt5-demo-step2.png" }) {
            ...fadeIn
        }
        demo_step2_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step2-eu.png" }) {
            ...fadeIn
        }
        demo_step2_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step2-mobile.png" }) {
            ...fadeIn
        }
        demo_step2_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step2-mobile-eu.png" }) {
            ...fadeIn
        }
        demo_step3: file(relativePath: { eq: "dmt5/dmt5-demo-step3.png" }) {
            ...fadeIn
        }
        demo_step3_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step3-eu.png" }) {
            ...fadeIn
        }
        demo_step3_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step3-mobile.png" }) {
            ...fadeIn
        }
        demo_step3_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step3-mobile-eu.png" }) {
            ...fadeIn
        }
        real_step1: file(relativePath: { eq: "dmt5/dmt5-real-step1.png" }) {
            ...fadeIn
        }
        real_step1_eu: file(relativePath: { eq: "dmt5/dmt5-real-step1-eu.png" }) {
            ...fadeIn
        }
        real_step1_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step1-mobile.png" }) {
            ...fadeIn
        }
        real_step1_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-real-step1-mobile-eu.png" }) {
            ...fadeIn
        }
        real_step2: file(relativePath: { eq: "dmt5/dmt5-real-step2.png" }) {
            ...fadeIn
        }
        real_step2_eu: file(relativePath: { eq: "dmt5/dmt5-real-step2-eu.png" }) {
            ...fadeIn
        }
        real_step2_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step2-mobile.png" }) {
            ...fadeIn
        }
        real_step2_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-real-step2-mobile-eu.png" }) {
            ...fadeIn
        }
        real_step3: file(relativePath: { eq: "dmt5/dmt5-real-step3.png" }) {
            ...fadeIn
        }
        real_step3_eu: file(relativePath: { eq: "dmt5/dmt5-real-step3-eu.png" }) {
            ...fadeIn
        }
        real_step3_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step3-mobile.png" }) {
            ...fadeIn
        }
        real_step3_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-real-step3-mobile-eu.png" }) {
            ...fadeIn
        }
        real_step4: file(relativePath: { eq: "dmt5/dmt5-real-step4.png" }) {
            ...fadeIn
        }
        real_step4_eu: file(relativePath: { eq: "dmt5/dmt5-real-step4-eu.png" }) {
            ...fadeIn
        }
        real_step4_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step4-mobile.png" }) {
            ...fadeIn
        }
        real_step4_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-real-step4-mobile-eu.png" }) {
            ...fadeIn
        }
    }
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 8rem 6rem;
    }
    @media ${device.tabletS} {
        padding: 40px 0;
        height: auto;
    }
`
const demoActive = css`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border: unset;

    ${Text} {
        font-weight: bold;
    }
`
const realActive = css`
    box-shadow: unset;

    ${Text} {
        font-weight: unset;
    }
`
const TabItem = styled.div<TabProps>`
    padding: 2.4rem 4rem;
    width: fit-content;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    cursor: pointer;
    ${(props) => (props.active ? demoActive : realActive)}

    @media ${device.tabletS} {
        padding: 17px 20px;
    }
    @media ${device.mobileL} {
        max-width: 164px;
        width: 100%;
        padding: ${(props) => props.mobile_padding};
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    @media ${device.mobileL} {
        font-size: 28px;
        margin-bottom: 24px;
        padding: 0 16px;
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)<{ id?: string }>`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`

const StartTrader = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const data = useStaticQuery(query)
    const [tab, setTab] = useState('Demo')

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup()

    const { is_eu } = useRegion()
    const isDemo = tab === 'Demo'
    const isReal = tab === 'Real'

    const row_demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => '_t_Sign up for a free <0>Deriv demo account</0>._t_',
                title_components: () => [
                    <StyledLocalizedLink
                        key={0}
                        to=""
                        onClick={(e) => {
                            e.preventDefault()
                            handleSignup()
                        }}
                    />,
                ],
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step1_mobile' : 'demo_step1']}
                        alt={localize('_t_Sign up for a free_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Add a Deriv MT5 demo account and choose what you want to trade._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step2_mobile' : 'demo_step2']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Practise trading from the mobile app, desktop app, or through your web browser._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step3_mobile' : 'demo_step3']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
        ],
        [data, is_mobile_or_tablet, handleSignup],
    )

    const row_real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => '_t_Create or <0>sign in</0> to your demo Deriv account_t_',
                title_components: () => [
                    <StyledLocalizedLink
                        key={0}
                        to=""
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                    />,
                ],
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step1_mobile' : 'real_step1']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Create a Deriv real money account._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step2_mobile' : 'real_step2']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Create a Deriv MT5 real money account based on your trade preference._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step3_mobile' : 'real_step3']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Fund your account. Start trading on the mobile app, desktop app, or web browser._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step4_mobile' : 'real_step4']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
        ],
        [data, is_mobile_or_tablet, handleLogin],
    )

    const eu_demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => '_t_Sign up for a free <0>Deriv demo account</0>._t_',
                title_components: () => [
                    <StyledLocalizedLink
                        key={0}
                        to=""
                        onClick={(e) => {
                            e.preventDefault()
                            handleSignup()
                        }}
                    />,
                ],
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step1_mobile_eu' : 'demo_step1_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Add a CFDs demo account._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step2_mobile_eu' : 'demo_step2_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Practise trading from the mobile app, desktop app, or through your web browser._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'demo_step3_mobile_eu' : 'demo_step3_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
        ],
        [data, is_mobile_or_tablet, handleSignup],
    )

    const eu_real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => '_t_Create or <0>sign in</0> to your demo Deriv account_t_',
                title_components: () => [
                    <StyledLocalizedLink
                        key={0}
                        to=""
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                    />,
                ],
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step1_mobile_eu' : 'real_step1_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Create a Deriv real money account_t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step2_mobile_eu' : 'real_step2_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Create a CFDs real account._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step3_mobile_eu' : 'real_step3_eu']}
                        alt={localize('_t_Deriv MT5 demo account_t_')}
                    />
                ),
            },
            {
                title: () =>
                    '_t_Fund your account. Start trading on the mobile app, desktop app, or web browser._t_',
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'real_step4_mobile_eu' : 'real_step4_eu']}
                        alt={localize('_t_Trading_t_')}
                    />
                ),
            },
        ],
        [data, is_mobile_or_tablet, handleLogin],
    )

    const demo = is_eu ? eu_demo : row_demo
    const real = is_eu ? eu_real : row_real

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                <Localize translate_text="_t_How to get started with a Deriv MT5 account_t_" />
            </StyledHeader>
            <Flex
                mb={is_mobile_or_tablet ? '0' : '8rem'}
                p="0 16px"
                tablet={{ height: 'unset' }}
                id="account-pick"
            >
                <TabItem
                    mobile_padding="21px 12px"
                    active={isDemo}
                    onClick={() => onTabClick('Demo')}
                    className="demo-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text="_t_Demo account_t_" />
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding={'21px 12px'}
                    active={isReal}
                    onClick={() => onTabClick('Real')}
                    className="real-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text="_t_Real account_t_" />
                    </StyledText>
                </TabItem>
            </Flex>

            <Flex max_width="1200px">
                <StepperView items={tab === 'Demo' ? demo : real} contentWidth="385px" />
            </Flex>
        </Section>
    )
}

export default StartTrader
