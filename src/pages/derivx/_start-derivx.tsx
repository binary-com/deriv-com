import React, { useState, useEffect, useCallback, ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import SideTab from '../dmt5/components/_side-tab'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device, { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { derivx_android_url, derivx_ios_url } from 'common/constants'

interface StartDerivXProps {
    children?: ReactNode
    active?: boolean
    mobile_padding?: string
}

type RealOrDemoShowType = {
    description: ReactElement
    image_data: string
    image_alt: string
}

type DownloadLinkType = {
    android: string
    ios: string
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
    }
`

const demo: RealOrDemoShowType[] = [
    {
        description: (
            <Localize translate_text="Sign in to your Deriv account. If you don’t have one, sign up for free." />
        ),
        image_data: 'demo_step1',
        image_alt: localize('Deriv X demo account signup page'),
    },
    {
        description: <Localize translate_text="Add a Deriv X demo account." />,
        image_data: 'demo_step2',
        image_alt: localize('Deriv X dashboard showing demo account comparison'),
    },
    {
        description: (
            <Localize translate_text="Start trading on the mobile app or through your web browser." />
        ),
        image_data: 'demo_step3',
        image_alt: localize('Deriv X trading dashboard'),
    },
]

const real: RealOrDemoShowType[] = [
    {
        description: (
            <Localize translate_text="Sign in to your Deriv account. If you don’t have one, sign up for free." />
        ),
        image_data: 'real_step1',
        image_alt: 'real_step1',
    },
    {
        description: <Localize translate_text="Add a Deriv real account." />,
        image_data: 'real_step2',
        image_alt: 'real_step2',
    },
    {
        description: <Localize translate_text="Add a Deriv X real account." />,
        image_data: 'real_step3',
        image_alt: 'real_step3',
    },
    {
        description: (
            <Localize translate_text="Start trading on the mobile app or through your web browser." />
        ),
        image_data: 'real_step4',
        image_alt: 'real_step4',
    },
]

const download_links: DownloadLinkType = {
    android: derivx_android_url,
    ios: derivx_ios_url,
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
const ImageWrapper = styled.div`
    max-width: 79.2rem;
    width: 100%;
    height: 43.4rem;
    position: relative;
    margin: -3.2rem auto;

    div {
        width: 100%;
    }
    @media ${device.tabletS} {
        max-width: 576px;
        width: 100%;
        margin: 0 0 24px;
        height: unset;

        div {
            max-width: 576px;
            width: 100%;
        }
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
    @media ${device.mobileL} {
        font-size: 24px;
        margin-bottom: 24px;
        padding: 0 16px;
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const StartDerivX = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }, [setMobile])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    const data = useStaticQuery(query)
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                {localize('How to get started with a Deriv X account')}
            </StyledHeader>
            <Flex mb="8rem" p="0 16px" tablet={{ mb: '32px', height: 'unset' }}>
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'demo'}
                    onClick={() => onTabClick('demo')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Demo account')}
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding="12px 24px"
                    active={tab === 'real'}
                    onClick={() => onTabClick('real')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Real money account')}
                    </StyledText>
                </TabItem>
            </Flex>

            <Flex max_width="1200px">
                <SideTab parent_tab={tab} has_download_button download_links={download_links}>
                    {(tab === 'demo' ? demo : real).map((currentTab, index) => {
                        return (
                            <SideTab.Panel
                                key={index}
                                label=""
                                description={currentTab.description}
                                mobile_item_width="35rem"
                            >
                                <ImageWrapper>
                                    <QueryImage
                                        data={
                                            data[
                                                is_mobile
                                                    ? `${currentTab.image_data}_mobile`
                                                    : currentTab.image_data
                                            ]
                                        }
                                        alt={currentTab.image_alt}
                                    />
                                </ImageWrapper>
                            </SideTab.Panel>
                        )
                    })}
                </SideTab>
            </Flex>
        </Section>
    )
}

export default StartDerivX
