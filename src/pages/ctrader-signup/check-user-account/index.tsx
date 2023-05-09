import React, { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import styled from 'styled-components'
import apiManager from 'common/websocket'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import Graph from 'images/svg/landing/graph.svg'
import device from 'themes/device'

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

const CheckCtraderAccount = () => {
    const [has_ctrader_account, setHasCtraderAccount] = useState(false)
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)
    const [token] = useQueryParam('api_token', StringParam)
    // API_TOKEN Sample: a1-tzAF6PBTnHkOH97ooBdSYvY26oFSm

    apiManager
        .augmentedSend('authorize', {
            authorize: token,
        })
        .then((response) => {
            if (!response.error) {
                setAuthorized(true)
            }
        })

    useEffect(() => {
        if (authorized) {
            apiManager
                .augmentedSend('trading_platform_accounts', {
                    trading_platform_accounts: 1,
                    platform: 'dxtrade',
                })
                .then((response) => {
                    if (!response.error) {
                        if (response.trading_platform_accounts.length) {
                            setHasCtraderAccount(true)
                            setLoading(false)
                        }
                    }
                })
        }
    }, [authorized])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_')}
                description={localize(
                    '_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_',
                )}
            />
            <Wrapper>
                {loading ? (
                    <Content>
                        <StyledGraph src={Graph} alt="graph" />

                        <Header mt="2.4rem" as="h3" type="section-title">
                            {localize('_t_Loading_t_')}
                        </Header>
                    </Content>
                ) : (
                    <Content>
                        <StyledGraph src={Graph} alt="graph" />
                        {has_ctrader_account ? (
                            <Header mt="2.4rem" as="h3" type="section-title">
                                {localize('_t_You Have cTrader Account_t_')}
                            </Header>
                        ) : (
                            <Header mt="2.4rem" as="h3" type="section-title">
                                {localize('_t_You Do not Have cTrader Account!_t_')}
                            </Header>
                        )}
                    </Content>
                )}
            </Wrapper>
            <StyledDiv />
        </Layout>
    )
}

export default CheckCtraderAccount
