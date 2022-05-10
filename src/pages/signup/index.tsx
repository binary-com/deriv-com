import React, { useState } from 'react'
import styled from 'styled-components'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import Graph from 'images/svg/landing/graph.svg'

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
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

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--color-red);
    margin-top: 4rem;
`

const StyledDiv = styled.div`
    padding: 6rem 0;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledGraph = styled.img`
    overflow: initial;

    @media ${device.laptop} {
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
                        <StyledGraph src={Graph} alt="graph" />
                        <Header mt="2.4rem" as="h3" type="section-title">
                            {localize('Start trading with Deriv')}
                        </Header>
                        <br />
                        <Text>
                            {localize(
                                'Join over 1 million people who trade with Deriv.com and Binary.com — the award-winning platform that’s been trusted for over 20 years.',
                            )}
                        </Text>
                        <Line />
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
            <StyledDiv />
        </Layout>
    )
}

export default WithIntl()(NewSignup)
