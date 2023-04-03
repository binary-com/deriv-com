import React, { useState } from 'react'
import styled from 'styled-components'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Flex, SEO } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'

const Wrapper = styled(Flex)`
    padding: 5rem 0;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        padding: 0;
        height: 110vh;
    }
`
const Content = styled.div`
    width: 48.6rem;
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    flex-direction: column;
    height: 48vh;
    @media ${device.tabletL} {
        display: none;
        width: auto;
    }
`

const NewSignup = () => {
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
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
            />
            <Wrapper>
                {submit_state !== 'success' && (
                    <Content>
                        <Header as="h3" type="heading-3" align="center">
                            {localize(
                                'Unique trade types. Hundreds of instruments. Financial and derived markets.',
                            )}
                        </Header>

                        <Header as="p" type="subtitle-2" align="center" weight="normal">
                            {localize('Trade anywhere, anytime.')}
                        </Header>
                        <Header as="p" type="paragraph-1" align="center" weight="normal">
                            {localize(
                                'Ready to join over 2.5 million traders who have chosen Deriv as their trusted broker? Enter your email address to create a free demo account.',
                            )}
                        </Header>
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
        </Layout>
    )
}

export default WithIntl()(NewSignup)
