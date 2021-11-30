import React, { useState } from 'react'
import styled from 'styled-components'
import Benefits from './_benefits'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import Map from 'images/svg/landing/map.svg'

const Wrapper = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledDiv = styled.div`
    padding-top: 30rem;
    height: 80vh;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 60rem;
    }
`

const StyledMap = styled.img`
    width: 100%;
    overflow: initial;

    @media ${device.laptop} {
        width: auto;
    }
`

const affiliateSignupDetails = () => {
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
            <Wrapper>
                {submit_state !== 'success' && <Benefits />}

                <Signup
                    appearance={Appearances.affiliateSignupDetails}
                    bgColor="grey-14"
                    onSubmit={updateSubmitState}
                    submit_state={submit_state}
                    email={email}
                    autofocus={true}
                />
            </Wrapper>
            <StyledDiv>{submit_state !== 'success' && <StyledMap src={Map} alt="map" />}</StyledDiv>
        </Layout>
    )
}

export default WithIntl()(affiliateSignupDetails)
