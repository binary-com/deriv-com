import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { trading_btn, signup_form_line } from './signup-academy.module.scss'
import AcademyPasswordInput from './academy-input'
import { academy_validation } from './password-validation'
import { isBrowser } from 'common/utility'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize, localize } from 'components/localization'
import { Button } from 'components/form'
import apiManager from 'common/websocket'

type AcademyPasswordFormProps = {
    residence: string
}

const AcademyPasswordForm = ({ residence }: AcademyPasswordFormProps) => {
    const [password, setPassword] = useState('')
    const [form_errors, setFormErrors] = useState('')
    const [submit_status, setSubmitStatus] = useState('')
    const GoTrading = styled(Button)`
        border-radius: 4px;
    `

    const handleInput = (e) => {
        e.preventDefault()
        const { value } = e.target

        setPassword(value)
        if (academy_validation) {
            const error_msg = academy_validation.password(value)
            setFormErrors(error_msg)
        }
    }

    const handleError = () => {
        setFormErrors('')
    }

    const params = new URLSearchParams(isBrowser() && location.search)
    const codeValue = params.get('code')

    const handleNavigation = () => {
        window.location.href =
            'https://oauth.deriv.com/oauth2/session/thinkific/create?app_id=37228'
    }

    const GetDerivAcademy = () => {
        apiManager
            .augmentedSend('new_account_virtual', {
                new_account_virtual: 1,
                type: 'trading',
                client_password: password,
                residence: residence,
                verification_code: codeValue,
            })
            .then((response) => {
                console.log(response)
                if (response.error) {
                    setSubmitStatus('error')
                    setSubmitErrorMsg(response.error.message)
                } else {
                    setSubmitStatus('success')
                    handleNavigation()
                }
            })
    }

    return (
        <Flex.Box direction="col" padding="12x">
            <Typography.Paragraph weight="bold" pb="12x" align="center">
                <Localize translate_text="_t_Keep your account secure with a password_t_" />
            </Typography.Paragraph>

            <Flex.Item>
                <AcademyPasswordInput
                    id="dm-password"
                    name="password"
                    type="password"
                    label="Create a password"
                    value={password}
                    error={form_errors}
                    placeholder="Create a password"
                    password_icon={true}
                    onChange={handleInput}
                    handleError={() => handleError()}
                />
            </Flex.Item>
            <Typography.Paragraph size="xs" align="center" pb="12x">
                <Localize
                    translate_text={localize(
                        '_t_Strong passwords contain at least 8 characters. combine uppercase and lowercase letters, numbers, and symbols._t_',
                    )}
                />
            </Typography.Paragraph>

            <Flex.Item className={signup_form_line} />
            <div className={trading_btn} onClick={GetDerivAcademy}>
                <GoTrading secondary disabled={form_errors || !password}>
                    <Localize translate_text="_t_Go to Deriv Academy_t_" />
                </GoTrading>
            </div>
        </Flex.Box>
    )
}

export default AcademyPasswordForm
