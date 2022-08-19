import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SideTab from './components/_tabs'
import { Localize, localize, LocalizedLink } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        sign_up: file(relativePath: { eq: "deriv-go/create-account.png" }) {
            ...fadeIn
        }
        fund: file(relativePath: { eq: "deriv-go/fund-account.png" }) {
            ...fadeIn
        }
        trading: file(relativePath: { eq: "deriv-go/get-trading.png" }) {
            ...fadeIn
        }
    }
`

const SmallContainer = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        width: 90%;
        padding: 0;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    text-decoration: none;
    color: rgba(255, 68, 79, 1);

    &:hover {
        text-decoration: underline;
    }
`

const StartDerivGo = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer height="887px" tabletL={{ height: 'fit-content', p: '40px 0 0' }}>
            <SmallContainer direction="column">
                <StyledHeader as="h2" type="heading-2" align="center" mb="4rem">
                    {localize('How to get started with Deriv GO')}
                </StyledHeader>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Create your Deriv account" />}
                        description={
                            <Localize
                                translate_text="<0>Sign up</0> with your email, Facebook, or Google account."
                                components={[<StyledLocalizedLink to="/signup/" key={0} />]}
                            />
                        }
                    >
                        <QueryImage
                            data={data['sign_up']}
                            alt="Create account on Deriv GO"
                            className="content-wrapper"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Fund your account" />}
                        description={
                            <Localize translate_text="Fund your account with your preferred payment method." />
                        }
                    >
                        <QueryImage
                            data={data['fund']}
                            alt="Fund your account and start trading on Deriv GO"
                            className="content-wrapper"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Get Trading" />}
                        description={
                            <Localize translate_text="Download the app and trade anytime, anywhere." />
                        }
                    >
                        <QueryImage
                            data={data['trading']}
                            alt="Start trading on Deriv GO"
                            className="content-wrapper"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </SectionContainer>
    )
}

export default StartDerivGo
