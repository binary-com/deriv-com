import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO, Box } from 'components/containers'
import device from 'themes/device.js'
import { Header, QueryImage, StyledLink, Text } from 'components/elements'

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.tabletL} {
        height: 120vh;
    }
    @media ${device.mobileL} {
        height: 100vh;
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
                                view_email: file(relativePath: { eq: "view-email.png" }) {
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
                        <Localize translate_text="We've sent a message to the entered email with a link to activate your account." />
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

SignupSuccess.propTypes = {
    autofocus: PropTypes.bool,
}

export default WithIntl()(SignupSuccess)
