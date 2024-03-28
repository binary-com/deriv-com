import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { trading_btn, signup_form_line } from '../signup-academy-complete.module.scss'
import { passwordRegex } from './password-constants'
import { PasswordInput } from '.'
import { isBrowser } from 'common/utility'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize, localize } from 'components/localization'
import { Button } from 'components/form'
import apiManager from 'common/websocket'
import device from 'themes/device'
import { getCookiesFields, getCookiesObject, getDataObjFromCookies } from 'common/cookies'

type AcademyPasswordFormProps = {
    residence: string
}

const AcademyPasswordForm = ({ residence }: AcademyPasswordFormProps) => {
    const [password, setPassword] = useState('')
    const [submit_status, setSubmitStatus] = useState()

    const GoTrading = styled(Button)`
        border-radius: 4px;
        font-family: 'Ubuntu';
        text-align: center;

        @media ${device.tabletL} {
            width: 100%;
        }
    `
    const validPassword = (value: string) => passwordRegex.isPasswordValid.test(value)

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.target
        setPassword(value)
    }, [])

    const params = new URLSearchParams(isBrowser() && location.search)
    const codeValue = params.get('code')
    const utm_source = params.get('utm_source')
    const utm_campaign = params.get('utm_campaign')
    const utm_medium = params.get('utm_medium')
    // const affiliate_token = params.get('affiliate_token')
    const date_first_contact = params.get('ate_first_contact')
    const signup_device = params.get('signup_device')
    const affiliate_token = Cookies.getJSON('affiliate_tracking')
    const cookies = getCookiesFields()
    const cookies_objects = getCookiesObject(cookies)
    const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const gclid = url_params.get('gclid')

    type requestDataProps = {
        new_account_virtual: number
        type: 'trading' | 'wallet'
        client_password: string
        residence: string
        verification_code: string
        utm_source?: string
        utm_campaign?: string
        utm_medium?: string
        affiliate_token?: string
        date_first_contact?: string
        signup_device?: string
    }
    const GetDerivAcademy = () => {
        const requestData: requestDataProps = {
            new_account_virtual: 1,
            type: 'trading',
            client_password: password,
            residence: residence,
            verification_code: codeValue,
            date_first_contact: date_first_contact,
            signup_device: signup_device,
            ...(affiliate_token && { affiliate_token: affiliate_token }),
            ...(cookies_value && { ...cookies_value }),
            ...(gclid && { gclid_url: gclid }),
        }
        if (utm_source !== null) {
            requestData.utm_source = utm_source
        }
        if (utm_campaign !== null) {
            requestData.utm_campaign = utm_campaign
        }
        if (utm_medium !== null) {
            requestData.utm_medium = utm_medium
        }
        console.log('requestdata', requestData)
        apiManager.augmentedSend('new_account_virtual', requestData).then((response) => {
            console.log(response)
            if (response.error) {
                setSubmitStatus('error')
                setSubmitErrorMsg(response.error.message)
            } else {
                const auth_token = response.new_account_virtual.oauth_token
                apiManager.augmentedSend('authorize', {
                    authorize: auth_token,
                })
                setSubmitStatus('success')

                //setting the session token
                window.location.href = `https://oauth.deriv.com/oauth2/session/thinkific/create?app_id=37228&token1=${auth_token}`
            }
        })
    }

    return (
        <Flex.Box direction="col" md={{ padding: '12x' }} padding="8x">
            <Typography.Paragraph weight="bold" pb="12x" align="center" textcolor="black">
                <Localize translate_text="_t_Keep your account secure with a password_t_" />
            </Typography.Paragraph>

            <Flex.Item>
                <PasswordInput
                    className="z-10 text-body-sm"
                    isFullWidth
                    label="Create a password"
                    onChange={handleInput}
                    value={password}
                />
            </Flex.Item>
            <Typography.Paragraph
                size="xs"
                align="center"
                pt="12x"
                padding_inline="8x"
                md={{ pb: '12x', padding_inline: '0x' }}
            >
                <Localize
                    translate_text={localize(
                        '_t_Strong passwords contain at least 8 characters. combine uppercase and lowercase letters, numbers, and symbols._t_',
                    )}
                />
            </Typography.Paragraph>

            <Flex.Item className={signup_form_line} />
            <div className={trading_btn} onClick={GetDerivAcademy}>
                <GoTrading secondary disabled={!validPassword(password) || !password}>
                    <Localize translate_text="_t_Go to Deriv Academy_t_" />
                </GoTrading>
            </div>
        </Flex.Box>
    )
}

export default AcademyPasswordForm
