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
    const affiliate_token = Cookies.getJSON('affiliate_tracking')
    const cookies = getCookiesFields()
    const cookies_objects = getCookiesObject(cookies)
    const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

    const getSignupParams = () => {
        const param_list = [
            'date_first_contact',
            'signup_device',
            'gclid_url',
            'utm_source',
            'utm_ad_id',
            'utm_adgroup_id',
            'utm_adrollclk_id',
            'utm_campaign_id',
            'utm_campaign',
            'utm_fbcl_id',
            'utm_gl_client_id',
            'utm_msclk_id',
            'utm_medium',
            'utm_term',
            'utm_content',
            'affiliate_token',
        ]
        const signup_params = {
            new_account_virtual: 1,
            type: 'trading',
            client_password: password,
            residence: residence,
            verification_code: codeValue,
        }
        const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')

        param_list.forEach((key) => {
            if (url_params.get(key)) {
                signup_params[key] = url_params.get(key)
            }
        })

        return signup_params
    }

    const GetDerivAcademy = () => {
        apiManager.augmentedSend('new_account_virtual', getSignupParams()).then((response) => {
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
