import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import { getLanguage } from '../../common/utility'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO, Flex } from 'components/containers'
import device from 'themes/device'
import { Header, QueryImage, StyledLink } from 'components/elements'

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
const ResponseWrapper = styled(Flex)`
    justify-content: center;
    max-width: 24rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 12px;
    margin-top: -100px;
    @media ${device.mobileL} {
        max-width: 40rem;
    }
`
const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 14px;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`

const query = graphql`
    query {
        view_email: file(relativePath: { eq: "sign-up/response-email.png" }) {
            ...fadeIn
        }
    }
`

const SignupSuccess = () => {
    const data = useStaticQuery(query)
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
                    <Header as="p" type="subtitle-1" align="center" weight="700">
                        {localize('Check your email')}
                    </Header>
                    <Flex jc="center" height="128px">
                        <QueryImage
                            data={data.view_email}
                            alt="Email image"
                            height="128px"
                            width="128px"
                        />
                    </Flex>
                    <Header type="paragraph-1" weight="normal" align="center">
                        <Localize
                            translate_text="We've sent a message to {{email}} with a link to activate your account."
                            values={{ email: registeredEmail }}
                        />
                    </Header>
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
