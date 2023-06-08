import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQueryParam, StringParam } from 'use-query-params'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { SEO } from 'components/containers'
import Logo from 'images/svg/ctrader/logo.svg'
import Watermark from 'images/svg/ctrader/watermark.svg'
import { Header } from 'components/elements'
import device from 'themes/device'
import LinkButton from 'features/components/atoms/link-button'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import { isBrowser } from 'common/utility'

type ContentType = {
    title: TString
    url: LinkUrlType
    button_text: TString
}

const Wrapper = styled.div`
    display: flex;
    gap: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: 80vh;
`
const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    @media ${device.tabletL} {
        margin-bottom: 3rem;
    }
`
const Title = styled.h2`
    font-size: 16px;
    max-inline-size: 30rem;
    line-height: 3rem;
    text-align: center;
`

const data = (page: string): ContentType => {
    if (page === 'add-account') {
        return {
            title: '_t_To add an account please click on the button below_t_',
            url: {
                type: 'non-company',
                target: '_self',
                href: 'https://app.deriv.com/appstore/traders-hub',
            },
            button_text: '_t_Add a new account_t_',
        }
    }
    if (page === 'change-password') {
        return {
            title: '_t_To change your password please click on the button below_t_',
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/account/passwords',
            },
            button_text: '_t_Change your password_t_',
        }
    }
    if (page === 'close-account') {
        return {
            title: '_t_To close your account please click on the button below_t_',
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/account/cloing-account',
            },
            button_text: '_t_Close your account_t_',
        }
    }
}

const CtraderManage = () => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const page = url_params.get('q')

    const content = data(page)

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_')}
                description={localize(
                    '_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_',
                )}
            />
            <Wrapper>
                <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                    <img src={Logo} alt="ctrader" width="43" height="43" />
                    <img src={Watermark} alt="deriv-ctrader" width="160" height="22" />
                </StyledHeader>
                {page && (
                    <>
                        <Title>
                            <Localize translate_text={content.title} />
                        </Title>
                        <LinkButton.Primary url={content.url}>
                            <Localize translate_text={content.button_text} />
                        </LinkButton.Primary>
                    </>
                )}
            </Wrapper>
        </Layout>
    )
}

export default CtraderManage
