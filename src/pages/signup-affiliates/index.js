import React, { useState } from 'react'
import styled from 'styled-components'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'
import Map from 'images/svg/landing/map.svg'

const Wrapper = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`
const Content = styled.div`
    width: 43.8rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 4.7rem;
    margin-top: 9.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledDiv = styled.div`
    padding: 10rem 0;
    height: 80vh;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledMap = styled.img`
    width: 100%;
    overflow: initial;

    @media ${device.laptop} {
        width: auto;
    }
`

const NewSignup = () => {
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
                {submit_state !== 'success' && (
                    <Content>
                        <Header mt="2.4rem" as="h3" type="section-title">
                            {localize('Deriv Affiliate')}
                        </Header>
                        <Text>
                            {localize(
                                "Partner with us as an affiliate. Earn commission from your clients' trades on DTrader and DBot.",
                            )}
                        </Text>
                        <Header mt="2.4rem" as="h3" type="section-title">
                            {localize('Deriv IB Programme')}
                        </Header>
                        <Text>
                            {localize(
                                'Our introducing broker programme is available to all Deriv affiliates. Earn commission from your clients’ trades on Deriv MT5.',
                            )}
                        </Text>
                    </Content>
                )}

                <Signup
                    appearance={Appearances.newSignup}
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

export default WithIntl()(NewSignup)
