import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SideTab from './components/_tabs'
import { Localize, LocalizedLink } from 'components/localization'
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
                    <Localize translate_text="_t_How to get started with Deriv GO_t_" />
                </StyledHeader>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="_t_1. Create your Deriv account_t_" />}
                        description={
                            <Localize
                                translate_text="_t_<0>Sign up</0> with your email, Facebook, or Google account._t_"
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
                        label={<Localize translate_text="_t_2. Fund your account_t_" />}
                        description={
                            <Localize translate_text="_t_Fund your account with your preferred payment method._t_" />
                        }
                    >
                        <QueryImage
                            data={data['fund']}
                            alt="Fund your account and start trading on Deriv GO"
                            className="content-wrapper"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="_t_3. Get Trading_t_" />}
                        description={
                            <Localize translate_text="_t_Download the app and trade anytime, anywhere._t_" />
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
