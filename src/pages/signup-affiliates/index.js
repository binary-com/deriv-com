import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/containers'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import { Header } from 'components/elements'
import Map from 'images/svg/landing/map.svg'

const StyledFlexWrapper = styled(Flex)`
    height: ${(props) => (props.email ? '100vh' : '326px')};
    background-color: rgba(200, 214, 215, 0.22);
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
const StyledDiv = styled.div`
    height: 100%;
    background-color: rgba(200, 214, 215, 0.22);
`

const StyledMap = styled.img`
    width: 100vw;
    height: 55vh;
    overflow: initial;

    @media ${device.tabletL} {
        width: 100%;
        height: 214px;
        margin-top: 320px;
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
            <StyledFlexWrapper fd="row" fw="wrap" jc="space-evenly" email={email}>
                {submit_state !== 'success' && (
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
