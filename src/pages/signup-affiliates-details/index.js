import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/containers'
import SignupAffiliateDetails from '../../components/custom/_signup-affiliate-details'
import Benefits from './_benefits'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import Map from 'images/svg/landing/map.svg'

const StyledFlex = styled(Flex)`
    height: 70vh;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding-top: 40px;
    }
`
const StyledDiv = styled.div`
    padding-top: 20rem;
    background-color: rgba(200, 214, 215, 0.22);
    @media ${device.mobileL} {
        padding-top: 40rem;
    }
`
const StyledMap = styled.img`
    width: 100%;
    overflow: initial;
    @media ${device.laptop} {
        width: 100%;
    }
`

const affiliateSignupDetails = () => {
    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
            />
            <StyledFlex jc="center" fd="row" ai="flex-start">
                <Benefits />
                <SignupAffiliateDetails />
            </StyledFlex>
            <StyledDiv>
                <StyledMap src={Map} alt="map" />
            </StyledDiv>
        </Layout>
    )
}

export default WithIntl()(affiliateSignupDetails)
