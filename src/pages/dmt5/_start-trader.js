import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import SideTab from './components/_side-tab'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device, { size } from 'themes/device'
import { isBrowser } from 'common/utility'
// import MobileBackground from 'images/svg/dmt5-start-mobile-background.svg'

const query = graphql`
    query {
        demo_step1: file(relativePath: { eq: "dmt5-demo-step1.png" }) {
            ...fadeIn
        }
        demo_step1_mobile: file(relativePath: { eq: "dmt5-demo-step1-mobile.png" }) {
            ...fadeIn
        }
        demo_step2: file(relativePath: { eq: "dmt5-demo-step2.png" }) {
            ...fadeIn
        }
        demo_step2_mobile: file(relativePath: { eq: "dmt5-demo-step2-mobile.png" }) {
            ...fadeIn
        }
        demo_step3: file(relativePath: { eq: "dmt5-demo-step3.png" }) {
            ...fadeIn
        }
        demo_step3_mobile: file(relativePath: { eq: "dmt5-demo-step3-mobile.png" }) {
            ...fadeIn
        }
        real_step1: file(relativePath: { eq: "dmt5-real-step1.png" }) {
            ...fadeIn
        }
        real_step1_mobile: file(relativePath: { eq: "dmt5-real-step1-mobile.png" }) {
            ...fadeIn
        }
        real_step2: file(relativePath: { eq: "dmt5-real-step2.png" }) {
            ...fadeIn
        }
        real_step2_mobile: file(relativePath: { eq: "dmt5-real-step2-mobile.png" }) {
            ...fadeIn
        }
        real_step3: file(relativePath: { eq: "dmt5-real-step3.png" }) {
            ...fadeIn
        }
        real_step3_mobile: file(relativePath: { eq: "dmt5-real-step3-mobile.png" }) {
            ...fadeIn
        }
        real_step4: file(relativePath: { eq: "dmt5-real-step4.png" }) {
            ...fadeIn
        }
        real_step4_mobile: file(relativePath: { eq: "dmt5-real-step4-mobile.png" }) {
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
    height: 80rem;

    @media ${device.laptopM} {
        padding: 8rem 6rem;
    }
    @media ${device.mobileL} {
        padding: 40px 16px;
    }
`
const ImageWrapper = styled.div`
    max-width: ${(props) => (props.is_mobile ? '24.6rem' : '79.2rem')};
    width: 100%;
    height: 43.4rem;
    position: relative;
    margin: -3.2rem auto;

    div {
        width: 100%;
    }
`
const TabItem = styled.div`
    padding: 2.4rem 4rem;
    max-width: 30.8rem;
    width: 100%;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    cursor: pointer;
    ${(props) =>
        props.active
            ? css`
                  box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
                  border: unset;
                  ${Text} {
                      font-weight: bold;
                  }
              `
            : css`
                  box-shadow: unset;
                  ${Text} {
                      font-weight: unset;
                  }
              `}
`
const Span = styled.span`
    color: red;
`

const StartTrader = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }
    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    const data = useStaticQuery(query)
    const [tab, setTab] = useState('Demo')

    const onTabClick = (tab) => {
        setTab(tab)
    }
    return (
        <Section>
            <Header align="center" mb="4rem" as="h2">
                {localize('How to get started with a DMT5 account')}
            </Header>
            <Flex>
                <TabItem active={tab === 'Demo'} onClick={() => onTabClick('Demo')}>
                    <Text size="var(--text-size-m)" align="center">
                        {localize('Demo account')}
                    </Text>
                </TabItem>
                <TabItem active={tab === 'Real'} onClick={() => onTabClick('Real')}>
                    <Text size="var(--text-size-m)" align="center">
                        {localize('Real money account')}
                    </Text>
                </TabItem>
            </Flex>

            <Flex max_width="1200px" mt="8rem">
                {tab === 'Demo' ? (
                    <SideTab>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize
                                    translate_text="Sign up for a free <0>Deriv demo account</0>"
                                    components={[<Span color="red" key={0} />]}
                                />
                            }
                            item_width="24rem"
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'demo_step1_mobile' : 'demo_step1']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Add a DMT5 demo account and choose what you want to trade" />
                            }
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'demo_step2_mobile' : 'demo_step2']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Practise trading from the mobile app, desktop app, or through your web browser" />
                            }
                            item_width="36rem"
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'demo_step3_mobile' : 'demo_step3']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                    </SideTab>
                ) : (
                    <SideTab>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize
                                    translate_text="Create or <0>sign in</0> to your Deriv account"
                                    components={[<Span color="red" key={0} />]}
                                />
                            }
                            item_width="27rem"
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step1_mobile' : 'real_step1']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Create a Deriv real money account" />
                            }
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step2_mobile' : 'real_step2']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Create a DMT5 real money account based on your trade preference" />
                            }
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step3_mobile' : 'real_step3']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Fund your account. Start trading on the mobile app, desktop app, or web browser" />
                            }
                        >
                            <ImageWrapper is_mobile={is_mobile}>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step4_mobile' : 'real_step4']}
                                    alt="Trade types option market"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                    </SideTab>
                )}
            </Flex>
        </Section>
    )
}

export default StartTrader
