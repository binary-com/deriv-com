import React from 'react'
import styled from 'styled-components'
import { SEO, Container, Flex } from 'components/containers'
import Map from 'images/svg/landing/map.svg'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'
import { ComponentProps } from 'types/generics'

export const SignUpWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin: 0;
    width: 100%;
    max-width: 486px;
    background: var(--color-white);
    border-radius: 6px;
`

const StyledFlexWrapper = styled(Flex)`
    height: 326px;
    background-color: rgba(200, 214, 215, 0.22);
    position: relative;
    z-index: 2;

    @media ${device.tabletL} {
        flex-direction: row-reverse;
    }
`
const StyledFlex = styled(Flex)`
    @media ${device.tabletL} {
        width: 328px;
        margin-top: 81px;
        order: 2;
    }
    @media ${device.mobileS} {
        margin-left: 8px;
    }
`
const BackgroundContainer = styled.div`
    height: 100%;
    background-color: rgba(200, 214, 215, 0.22);
`

const MapBackground = styled.img`
    width: 100vw;
    height: 55vh;
    overflow: initial;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 320px;
    }
`

const AffiliateSignupLayout = ({ children }: ComponentProps) => {
    return (
        <Layout type="partners-plain" nav_label="Partners">
            <SEO
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
            />
            <StyledFlexWrapper fd="row" fw="wrap" jc="space-evenly">
                <StyledFlex jc="flex-start" fd="column" mt="64px" width="438px">
                    <Header mb="8px" as="h3" type="heading-3">
                        {localize('Deriv Affiliate')}
                    </Header>
                    <Header mb="24px" as="p" type="paragraph-1" weight="normal">
                        {localize(
                            'Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader and DBot.',
                        )}
                    </Header>
                    <Header mb="8px" as="h3" type="heading-3">
                        {localize('Deriv IB Programme')}
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal">
                        {localize(
                            'Our introducing broker programme is available to all Deriv affiliates. Earn commission from your clients’ trades on Deriv MT5.',
                        )}
                    </Header>
                </StyledFlex>

                {children}
            </StyledFlexWrapper>
            <BackgroundContainer>
                <MapBackground src={Map} alt="map" />
            </BackgroundContainer>
        </Layout>
    )
}

export default WithIntl()(AffiliateSignupLayout)
