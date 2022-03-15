import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const InternetIssuesContainer = styled.div`
    text-align: center;
    font-size: 16px;
    display: block;
    line-height: 26px;
    background: white;
`

const IndexPage = () => (
    <Layout>
        <SEO title="Internet Issues" />
        <InternetIssuesContainer>
            <Header as="h3" type="heading-3" align="center">
                {localize('Internet Issues - Troubleshooting')}
            </Header>
            <Header as="p" type="p" align="center">
                {localize(
                    'Having issues connecting to the internet? Here are some things to try in our house.',
                )}
            </Header>
            <ul>
                <li>
                    Your Device
                    <ul>
                        <li>Is airplane mode on? Is WiFi enabled?</li>
                        <li>
                            Is the device within range of the router or physically connected to the
                            network via ethernet?
                        </li>
                        <li>Are you connected to the correct network?</li>
                    </ul>
                </li>
                <br />
                <li>
                    The Router / Modem
                    <ul>
                        <li>
                            Have you checked the ISPs status page to check for an outage? You can
                            use your smartphone and mobile data to check this.
                        </li>
                        <li>Have you tried rebooting the router and/or modem?</li>
                        <li>
                            Have you checked to make sure that all physical connections to and from
                            the router and modem are secure?
                        </li>
                    </ul>
                </li>
            </ul>
            <br />
            <p>
                <Link to="/">Back to homepage</Link> <br />
            </p>
        </InternetIssuesContainer>
    </Layout>
)

export default IndexPage
