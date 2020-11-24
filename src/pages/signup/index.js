import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'
import Graph from 'images/svg/graph.svg'

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: calc(100vh - 10.4rem);
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-color: rgba(200, 214, 215, 0.22);

    @media ${device.mobileL} {
        height: 100%;
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
    const [submitState, setSubmitState] = useState('')

    function getSubmitState(submitStatus) {
        setSubmitState(submitStatus)
    }
    return (
        <Layout type="static" margin_top="0">
            <SEO
                title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
            />
            <Wrapper>
                {!(submitState === 'success') && (
                    <Content>
                        <StyledGraph src={Graph} alt="graph" />
                        <Header mt="2.4rem" size="3.2rem">
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
                    onSubmit={getSubmitState}
                    autofocus={true}
                />
            </Wrapper>
            <StyledDiv />
        </Layout>
    )
}

NewSignup.propTypes = {
    autofocus: PropTypes.bool,
}

export default WithIntl()(NewSignup)
