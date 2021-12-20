import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import SideTab from './components/_side-tab'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import Login from 'common/login'
import device, { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { DerivStore } from 'store'

const query = graphql`
    query {
        demo_step1: file(relativePath: { eq: "dmt5/dmt5-demo-step1.png" }) {
            ...fadeIn
        }
        demo_step1_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step1-mobile.png" }) {
            ...fadeIn
        }
        demo_step2: file(relativePath: { eq: "dmt5/dmt5-demo-step2.png" }) {
            ...fadeIn
        }
        demo_step2_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step2-mobile.png" }) {
            ...fadeIn
        }
        demo_step2_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step2-eu.png" }) {
            ...fadeIn
        }
        demo_step2_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-demo-step2-mobile-eu.png" }) {
            ...fadeIn
        }
        demo_step3: file(relativePath: { eq: "dmt5/dmt5-demo-step3.png" }) {
            ...fadeIn
        }
        demo_step3_mobile: file(relativePath: { eq: "dmt5/dmt5-demo-step3-mobile.png" }) {
            ...fadeIn
        }
        real_step1: file(relativePath: { eq: "dmt5/dmt5-real-step1.png" }) {
            ...fadeIn
        }
        real_step1_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step1-mobile.png" }) {
            ...fadeIn
        }
        real_step2: file(relativePath: { eq: "dmt5/dmt5-real-step2.png" }) {
            ...fadeIn
        }
        real_step2_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step2-mobile.png" }) {
            ...fadeIn
        }
        real_step3: file(relativePath: { eq: "dmt5/dmt5-real-step3.png" }) {
            ...fadeIn
        }
        real_step3_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step3-mobile.png" }) {
            ...fadeIn
        }
        real_step3_eu: file(relativePath: { eq: "dmt5/dmt5-real-step3-eu.png" }) {
            ...fadeIn
        }
        real_step3_mobile_eu: file(relativePath: { eq: "dmt5/dmt5-real-step3-mobile-eu.png" }) {
            ...fadeIn
        }
        real_step4: file(relativePath: { eq: "dmt5/dmt5-real-step4.png" }) {
            ...fadeIn
        }
        real_step4_mobile: file(relativePath: { eq: "dmt5/dmt5-real-step4-mobile.png" }) {
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
const TabItem = styled.div`
    padding: 2.4rem 4rem;
    width: fit-content;
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
        font-size: 32px;
        margin-bottom: 24px;
        padding: 0 16px;
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`
const StartTrader = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }
    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)
    })

    const data = useStaticQuery(query)
    const [tab, setTab] = useState('Demo')

    const onTabClick = (tab) => {
        setTab(tab)
    }
    const handleLogin = () => {
        return Login.loginUrl()
    }

    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                {localize('How to get started with a Deriv MT5 account')}
            </StyledHeader>
            <Flex mb="8rem" p="0 16px" tablet={{ mb: '32px', height: 'unset' }}>
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'Demo'}
                    onClick={() => onTabClick('Demo')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Demo account')}
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding={is_eu_country ? '21px 12px' : '10px'}
                    active={tab === 'Real'}
                    onClick={() => onTabClick('Real')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {is_eu_country ? localize('Real account') : localize('Real money account')}
                    </StyledText>
                </TabItem>
            </Flex>

            <Flex max_width="1200px">
                {tab === 'Demo' ? (
                    <SideTab parent_tab={tab}>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize
                                    translate_text="Sign up for a free <0>Deriv demo account</0>"
                                    components={[
                                        <StyledLocalizedLink
                                            id="dm-dmt5-signup-link"
                                            to="/signup/"
                                            key={0}
                                        />,
                                    ]}
                                />
                            }
                            item_width="24rem"
                            mobile_item_width="36rem"
                        >
                            <ImageWrapper>
                                <QueryImage
                                    data={data[is_mobile ? 'demo_step1_mobile' : 'demo_step1']}
                                    alt="Demo DMT5 account- step 2"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                is_eu_country ? (
                                    <Localize translate_text="Add a CFDs demo account and choose what you want to trade." />
                                ) : (
                                    <Localize translate_text="Add a Deriv MT5 demo account and choose what you want to trade." />
                                )
                            }
                        >
                            <ImageWrapper>
                                {is_eu_country ? (
                                    <QueryImage
                                        data={
                                            data[
                                                is_mobile ? 'demo_step2_mobile_eu' : 'demo_step2_eu'
                                            ]
                                        }
                                        alt="demo_step2_eu"
                                    />
                                ) : (
                                    <QueryImage
                                        data={data[is_mobile ? 'demo_step2_mobile' : 'demo_step2']}
                                        alt="Demo DMT5 account- step 2"
                                    />
                                )}
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Practise trading from the mobile app, desktop app, or through your web browser." />
                            }
                            item_width="36rem"
                        >
                            <ImageWrapper>
                                <QueryImage
                                    data={data[is_mobile ? 'demo_step3_mobile' : 'demo_step3']}
                                    alt="Demo DMT5 account- step 3"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                    </SideTab>
                ) : (
                    <SideTab parent_tab={tab}>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize
                                    translate_text="Create or <0>sign in</0> to your Deriv account"
                                    components={[
                                        <StyledLocalizedLink
                                            external="true"
                                            key={0}
                                            to={handleLogin()}
                                        />,
                                    ]}
                                />
                            }
                            item_width="27rem"
                        >
                            <ImageWrapper>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step1_mobile' : 'real_step1']}
                                    alt="Real DMT5 account- step 1"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                is_eu_country ? (
                                    <Localize translate_text="Create a Deriv real account." />
                                ) : (
                                    <Localize translate_text="Create a Deriv real money account." />
                                )
                            }
                        >
                            <ImageWrapper>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step2_mobile' : 'real_step2']}
                                    alt="Real DMT5 account- step 2"
                                />
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                is_eu_country ? (
                                    <Localize translate_text="Create a CFDs real account based on your trade preference." />
                                ) : (
                                    <Localize translate_text="Create a Deriv MT5 real money account based on your trade preference." />
                                )
                            }
                        >
                            <ImageWrapper>
                                {is_eu_country ? (
                                    <QueryImage
                                        data={
                                            data[
                                                is_mobile ? 'real_step3_mobile_eu' : 'real_step3_eu'
                                            ]
                                        }
                                        alt="Real DMT5 account- step 3"
                                    />
                                ) : (
                                    <QueryImage
                                        data={data[is_mobile ? 'real_step3_mobile' : 'real_step3']}
                                        alt="Real DMT5 account- step 3"
                                    />
                                )}
                            </ImageWrapper>
                        </SideTab.Panel>
                        <SideTab.Panel
                            label=""
                            description={
                                <Localize translate_text="Fund your account. Start trading on the mobile app, desktop app, or web browser." />
                            }
                        >
                            <ImageWrapper>
                                <QueryImage
                                    data={data[is_mobile ? 'real_step4_mobile' : 'real_step4']}
                                    alt="Real DMT5 account- step 4"
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
