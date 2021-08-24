import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SideTab from './components/_side-tab'
import { Localize, localize } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

// const query = graphql`
//     query {
//         create_account: file(relativePath: { eq: "deriv-go/create-account.png" }) {
//             ...fadeIn
//         }
//         fund_account: file(relativePath: { eq: "deriv-go/fund-account.png" }) {
//             ...fadeIn
//         }
//         get-trading: file(relativePath: { eq: "deriv-go/get-trading.png" }) {
//             ...fadeIn
//         }
//     }
// `

const StyledSectionContainer = styled(SectionContainer)`
    height: 887px;
    padding-top: 40px;

    @media ${device.tablet} {
        height: 824px;
        padding-top: 20px;
    }
`
const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const StartDerivGo = () => {
    // const data = useStaticQuery(query)
    return (
        <StyledSectionContainer>
            <SmallContainer direction="column" ai="flex-start">
                <Header type="heading-2">{localize('How to get started with Deriv GO')}</Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Create your Deriv account" />}
                        description={
                            <Localize translate_text="Sign up with your email, Facebook, or Google account." />
                        }
                    >
                        {/* <QueryImage data={data['create_account']} alt="Sign up screen" /> */}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Fund your account" />}
                        description={
                            <Localize translate_text="Fund your account with your preferred payment method." />
                        }
                    >
                        {/* <QueryImage data={data['fund_account']} alt="cashier image" /> */}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Get Trading" />}
                        description={
                            <Localize translate_text="Download the app and trade anytime, anywhere.." />
                        }
                    >
                        {/* <QueryImage data={data['get_trading']} alt="trading image" /> */}
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default StartDerivGo
