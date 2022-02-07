import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/containers'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'
import Map from 'images/svg/landing/map.svg'

const StyledFlexWrapper = styled(Flex)`
    height: 35rem;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`
const StyledFlex = styled(Flex)`
    @media ${device.tabletL} {
        margin-right: 4rem;
    }

    @media ${device.tablet} {
        margin-top: 13.4rem;
        order: 2;
    }

    @media ${device.mobileL} {
        margin-top: 18rem;
        padding: 5rem 2rem;
    }
`
const StyledDiv = styled.div`
    height: 100%;
    background-color: rgba(200, 214, 215, 0.22);
`

const StyledMap = styled.img`
    width: 100%;
    height: 52vh;
    overflow: initial;

    @media ${device.laptop} {
        width: auto;
        height: 62vh;
    }
    @media ${device.tablet} {
        width: 100%;
        padding-top: 46rem;
    }
`

const affiliateSignup = () => {
    const [submit_state, setSubmitState] = useState('')
    const [email, setEmail] = useState('')

    const updateSubmitState = (status_arg, email_arg) => {
        setSubmitState(status_arg)
        setEmail(email_arg)
    }

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
            />
            <StyledFlexWrapper fd="row" fw="wrap" ai="flex-start" jc="center">
                {submit_state !== 'success' && (
                    <StyledFlex jc="flex-start" fd="column" mt="6.4rem" mr="15rem" width="43.8rem">
                        <Header mt="2.4rem" mb="0.8rem" as="h3" type="section-title">
                            {localize('Deriv Affiliate')}
                        </Header>
                        <Text>
                            {localize(
                                'Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader and DBot.',
                            )}
                        </Text>
                        <Header mt="2.4rem" mb="0.8rem" as="h3" type="section-title">
                            {localize('Deriv IB Programme')}
                        </Header>
                        <Text>
                            {localize(
                                'Our introducing broker programme is available to all Deriv affiliates. Earn commission from your clients’ trades on Deriv MT5.',
                            )}
                        </Text>
                    </StyledFlex>
                )}
                <Signup
                    appearance={Appearances.affiliateSignup}
                    bgColor="grey-14"
                    onSubmit={updateSubmitState}
                    submit_state={submit_state}
                    email={email}
                    autofocus={true}
                />
            </StyledFlexWrapper>
            <StyledDiv>{submit_state !== 'success' && <StyledMap src={Map} alt="map" />}</StyledDiv>
        </Layout>
    )
}

export default WithIntl()(affiliateSignup)
