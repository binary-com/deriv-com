import React, { useState, ReactNode, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import StepperView from 'components/custom/_stepper_view'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

interface StartDerivXProps {
    children?: ReactNode
    active?: boolean
    mobile_padding?: string
}

const query = graphql`
    query {
        demo_step1: file(relativePath: { eq: "deriv-x/demo-1.png" }) {
            ...fadeIn
        }
        demo_step2: file(relativePath: { eq: "deriv-x/demo-2.png" }) {
            ...fadeIn
        }
        demo_step2_mobile: file(relativePath: { eq: "deriv-x/mobile-demo-2.png" }) {
            ...fadeIn
        }
        demo_step3: file(relativePath: { eq: "deriv-x/demo-3.png" }) {
            ...fadeIn
        }
        demo_step3_mobile: file(relativePath: { eq: "deriv-x/mobile-start-trading.png" }) {
            ...fadeIn
        }
        step1_mobile: file(relativePath: { eq: "deriv-x/mobile-1.png" }) {
            ...fadeIn
        }
        real_step2: file(relativePath: { eq: "deriv-x/real-2.png" }) {
            ...fadeIn
        }
        real_step2_mobile: file(relativePath: { eq: "deriv-x/mobile-real-2.png" }) {
            ...fadeIn
        }
        real_step3: file(relativePath: { eq: "deriv-x/real-3.png" }) {
            ...fadeIn
        }
        real_step3_mobile: file(relativePath: { eq: "deriv-x/mobile-real-3.png" }) {
            ...fadeIn
        }
        real_step4: file(relativePath: { eq: "deriv-x/real-4.png" }) {
            ...fadeIn
        }
        real_step4_mobile: file(relativePath: { eq: "deriv-x/mobile-start-trading.png" }) {
            ...fadeIn
        }
        qr_code: file(relativePath: { eq: "deriv-x/derivx-footer-qr.png" }) {
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
const TabItem = styled.div<StartDerivXProps>`
    padding: 2.4rem 4rem;
    width: fit-content;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    cursor: pointer;
    ${(props) => (props.active ? demoActive : realActive)}

    @media ${device.tablet} {
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
        font-size: 24px;
        margin-bottom: 24px;
        padding: 0 16px;
    }
`
const StyledText = styled(Text)`
    font-family: Ubuntu, sans-serif;

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const StartDerivX = () => {
    const data = useStaticQuery(query)

    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    const demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () =>
                    '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
                image: () => (
                    <QueryImage
                        data={data['demo_step1']}
                        alt={localize('_t_Deriv X demo account signup page_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['step1_mobile']}
                        alt={localize('_t_Deriv X demo account signup page_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Add a Deriv X demo account._t_',
                image: () => (
                    <QueryImage
                        data={data['demo_step2']}
                        alt={localize('_t_Deriv X dashboard showing demo account comparison_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['demo_step2_mobile']}
                        alt={localize('_t_Deriv X dashboard showing demo account comparison_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Start trading on the mobile app or through your web browser._t_',
                image: () => (
                    <QueryImage
                        data={data['demo_step3']}
                        alt={localize('_t_Deriv X trading dashboard_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['demo_step3_mobile']}
                        alt={localize('_t_Deriv X trading dashboard_t_')}
                    />
                ),
            },
        ],
        [data],
    )

    const real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () =>
                    '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
                image: () => (
                    <QueryImage
                        data={data['demo_step1']}
                        alt={localize('_t_Sign in_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['step1_mobile']}
                        alt={localize('_t_Sign in_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Add a Deriv real account._t_',
                image: () => (
                    <QueryImage
                        data={data['real_step2']}
                        alt={localize('_t_real account_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['real_step2_mobile']}
                        alt={localize('_t_real account_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Add a Deriv X real account._t_',
                image: () => (
                    <QueryImage
                        data={data['real_step3']}
                        alt={localize('_t_Download the app_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['real_step3_mobile']}
                        alt={localize('_t_Download the app_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Start trading on the mobile app or through your web browser._t_',
                image: () => (
                    <QueryImage
                        data={data['real_step4']}
                        alt={localize('_t_Trading_t_')}
                    />
                ),
                image_mobile:  () => (
                    <QueryImage
                        data={data['real_step4_mobile']}
                        alt={localize('_t_Trading_t_')}
                    />
                ),
            },
        ],
        [data],
    )

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                <Localize translate_text="_t_How to get started with a Deriv X account_t_" />
            </StyledHeader>
            <Flex mb="8rem" p="0 16px" tablet={{ mb: '32px', height: 'unset' }} id="account-pick">
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'demo'}
                    onClick={() => onTabClick('demo')}
                    className="demo-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text="_t_Demo account_t_" />
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'real'}
                    onClick={() => onTabClick('real')}
                    className="real-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text="_t_Real account_t_" />
                    </StyledText>
                </TabItem>
            </Flex>

            <Flex max_width="1200px">
                <StepperView items={tab === 'demo' ? demo : real} contentWidth="385px" />
            </Flex>
        </Section>
    )
}

export default StartDerivX
