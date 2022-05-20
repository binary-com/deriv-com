import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery, navigate } from 'gatsby'
import { getLanguage } from '../../common/utility'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO, Box } from 'components/containers'
import device from 'themes/device'
import { Header, QueryImage, StyledLink, Text } from 'components/elements'

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledDiv = styled.div`
    padding: 6rem 0;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        padding: 0;
    }
`
const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        const success_url = `/${getLanguage()}/signup-success`

        setRegisteredEmail(email?.replaceAll(' ', '+'))
        navigate(email ? success_url : `/${getLanguage()}/`, { replace: true })
    }, [])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
                no_index
            />
            <Wrapper>
                <ResponseWrapper>
                    <Header as="h3" type="section-title" align="center" weight="normal">
                        {localize('Check your email')}
                    </Header>
                    <StaticQuery
                        query={graphql`
                            query {
                                view_email: file(relativePath: { eq: "sign-up/view-email.png" }) {
                                    ...fadeIn
                                }
                            }
                        `}
                        render={(data) => (
                            <Box m="3.2rem 0">
                                <QueryImage data={data.view_email} alt="Email image" />
                            </Box>
                        )}
                    />
                    <Text align="center">
                        <Localize
                            translate_text="We've sent a message to {{email}} with a link to activate your account."
                            values={{ email: registeredEmail }}
                        />
                    </Text>
                    <EmailLink to="/check-email/" align="center">
                        {localize("Didn't receive your email?")}
                    </EmailLink>
                </ResponseWrapper>
            </Wrapper>
            <StyledDiv />
        </Layout>
    )
}

export default WithIntl()(SignupSuccess)
