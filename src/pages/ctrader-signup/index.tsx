import React, { useState } from 'react'
import styled from 'styled-components'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { SEO } from 'components/containers'

const Wrapper = styled.section`
    padding: 8rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`

const CtraderSignup = () => {
    const [submit_state, setSubmitState] = useState('')
    const [email, setEmail] = useState('')

    const updateSubmitState = (
        status_arg: React.SetStateAction<string>,
        email_arg: React.SetStateAction<string>,
    ) => {
        setSubmitState(status_arg)
        setEmail(email_arg)
    }

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_')}
                description={localize(
                    '_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_',
                )}
            />
            <Wrapper>
                <Signup
                    appearance={Appearances.cTrader}
                    bgColor="grey-14"
                    onSubmit={updateSubmitState}
                    submit_state={submit_state}
                    email={email}
                    autofocus={true}
                />
            </Wrapper>
        </Layout>
    )
}

export default CtraderSignup
