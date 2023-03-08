import React, { useState, ReactNode, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import StepperView from 'components/custom/_stepper_view'
import { Flex, SectionContainer, Mobile } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Button } from 'components/form'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { mobileOSDetect } from 'common/os-detect'
import { derivx_android_url, derivx_ios_url } from 'common/constants'
import useBreakpoints from 'components/hooks/use-breakpoints'

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
        demo_step1_mobile: file(relativePath: { eq: "deriv-x/mobile-demo-1.png" }) {
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
        real_step1: file(relativePath: { eq: "deriv-x/real-1.png" }) {
            ...fadeIn
        }
        real_step1_mobile: file(relativePath: { eq: "deriv-x/mobile-real-1.png" }) {
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

const handleExternalLink = () => {
    let link = ''
    if (mobileOSDetect() === 'Android') {
        link = derivx_android_url
    }
    if (mobileOSDetect() === 'iOS') {
        link = derivx_ios_url
    }
    window.open(link, '_blank')
}
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
const ButtonDp2p = styled(Button)`
    padding: 10px 16px;
    height: 40px;
    min-width: 25rem;
    white-space: nowrap;
    margin-top: 24px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ff444f;
    border-radius: 4px;
`
const TabItem = styled.div<StartDerivXProps>`
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
    const { is_mobile_or_tablet } = useBreakpoints()

    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    const demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: 'Sign in to your Deriv account. If you don’t have one, sign up for free.',
                image: data[is_mobile_or_tablet ? 'demo_step1_mobile' : 'demo_step1'],
                alt: <Localize translate_text="Deriv X demo account signup page" />,
            },
            {
                title: 'Add a Deriv X demo account.',
                image: data[is_mobile_or_tablet ? 'demo_step2_mobile' : 'demo_step2'],
                alt: (
                    <Localize translate_text="Deriv X dashboard showing demo account comparison" />
                ),
            },
            {
                title: 'Start trading on the mobile app or through your web browser.',
                image: data[is_mobile_or_tablet ? 'demo_step3_mobile' : 'demo_step3'],
                alt: <Localize translate_text="Deriv X trading dashboard" />,
            },
        ],
        [data, is_mobile_or_tablet],
    )

    const real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: 'Sign in to your Deriv account. If you don’t have one, sign up for free.',
                image: data[is_mobile_or_tablet ? 'real_step1_mobile' : 'real_step1'],
                alt: <Localize translate_text="Sign in" />,
            },
            {
                title: 'Add a Deriv real account.',
                image: data[is_mobile_or_tablet ? 'real_step2_mobile' : 'real_step2'],
                alt: <Localize translate_text="real account" />,
            },
            {
                title: 'Add a Deriv X real account.',
                image: data[is_mobile_or_tablet ? 'real_step3_mobile' : 'real_step3'],
                alt: <Localize translate_text="Download the app" />,
            },
            {
                title: 'Start trading on the mobile app or through your web browser.',
                image: data[is_mobile_or_tablet ? 'real_step4_mobile' : 'real_step4'],
                alt: <Localize translate_text="Trading" />,
            },
        ],
        [data, is_mobile_or_tablet],
    )

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                {localize('How to get started with a Deriv X account')}
            </StyledHeader>
            <Flex mb="8rem" p="0 16px" tablet={{ mb: '32px', height: 'unset' }} id="account-pick">
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'demo'}
                    onClick={() => onTabClick('demo')}
                    className="demo-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Demo account')}
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding="12px 24px"
                    active={tab === 'real'}
                    onClick={() => onTabClick('real')}
                    className="real-account"
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Real money account')}
                    </StyledText>
                </TabItem>
            </Flex>

            <Flex max_width="1200px">
                <StepperView items={tab === 'demo' ? demo : real} contentWidth="385px" />
            </Flex>
            <Mobile>
                <ButtonDp2p secondary onClick={handleExternalLink}>
                    {localize('Download Deriv X app')}
                </ButtonDp2p>
            </Mobile>
        </Section>
    )
}

export default StartDerivX
