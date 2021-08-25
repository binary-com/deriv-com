import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SideTab from './components/_side-tab'
import { Localize, localize } from 'components/localization'
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
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const ImageWrapper = styled.div`
    width: 287px;
    height: 576px;
    @media ${device.tabletL} {
        width: 192px;
        height: 386px;
    }
`

const StartDerivGo = () => {
    const data = useStaticQuery(query)
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
                        <ImageWrapper>
                            <QueryImage data={data['sign_up']} alt="create account image" />
                        </ImageWrapper>
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Fund your account" />}
                        description={
                            <Localize translate_text="Fund your account with your preferred payment method." />
                        }
                    >
                        <ImageWrapper>
                            <QueryImage data={data['fund']} alt="fund account image" />
                        </ImageWrapper>
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Get Trading" />}
                        description={
                            <Localize translate_text="Download the app and trade anytime, anywhere.." />
                        }
                    >
                        <ImageWrapper>
                            <QueryImage data={data['trading']} alt="get trading image" />
                        </ImageWrapper>
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default StartDerivGo
