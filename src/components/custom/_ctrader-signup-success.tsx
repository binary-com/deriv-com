import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StringParam, useQueryParam } from 'use-query-params'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Dropdown, Header, StyledLink, Text } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { Button, Input } from 'components/form'
import apiManager from 'common/websocket'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { useResidenceList } from 'components/hooks/use-residence-list'
import { optionItemDefault } from 'pages/trader-tools/common/_underlying-data'
import { isBrowser } from 'common/utility'

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`

const Wrapper = styled.section`
    background-color: white;
    min-height: 80vh;
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileL} {
        padding: 0;
    }
`

const ResponseWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`
const SubmitButton = styled(Button)`
    margin: 1rem auto;
    cursor: pointer;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    background-color: #ff444f;
    color: #ffffff;
    font-size: 14;
    font-weight: bold;
`
const StyledInput = styled(Input)`
    width: 406px;
`
const StyledDropdown = styled(Dropdown)`
    width: 406px;
    border-radius: 18px;
`
const CtraderSignupSuccess = ({ email }: { email: string }) => {
    const [verification_code, setVerificationCode] = useState('')
    const [code_error_message, setCodeErrorMessage] = useState('')
    const [residence_list] = useResidenceList()
    const [residence, setResidence] = useState(null)
    const [password, setPassword] = useState('')
    const [password_error_message, setPasswordErrorMessage] = useState('')
    const [error, setError] = useState(null)
    const [submit_status, setSubmitStatus] = useState('')
    const [token, setToken] = useState('')
    const [service_token, setServiceToken] = useState('')
    const { has_account, account_loading } = useCheckExistingAccount('ctrader', token)
    const [loading, setLoading] = useState(false)
    const [affiliate_token] = useQueryParam('partnerId', StringParam)

    if (has_account) {
        if (isBrowser()) {
            window.location.href = 'https://oauth.deriv.com/oauth2/authorize?app_id=12345'
        }
    }

    useEffect(() => {
        if (!account_loading && !has_account) {
            apiManager
                .augmentedSend('trading_platform_new_account', {
                    trading_platform_new_account: 1,
                    account_type: 'demo',
                    market_type: 'all',
                    platform: 'ctrader',
                })
                .then((response) => {
                    if (response.error) {
                        setError(response.error.message)
                    } else {
                        setSubmitStatus('ctrader-account-created')
                    }
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [account_loading, has_account])

    useEffect(() => {
        if (submit_status === 'ctrader-account-created') {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: 'ctrader',
                })
                .then((response) => {
                    setServiceToken(response.service_token.ctrader.token)
                    setSubmitStatus('success')
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [submit_status])

    useEffect(() => {
        if (error?.code === 'InvalidToken') {
            setCodeErrorMessage(error.message)
        }
        if (error?.details?.client_password?.length > 0) {
            setPasswordErrorMessage(error.message)
        }
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        apiManager
            .augmentedSend('new_account_virtual', {
                type: 'trading',
                client_password: password,
                residence: residence.name,
                verification_code,
                ...(affiliate_token && { affiliate_token: affiliate_token }),
            })
            .then((response) => {
                setToken(response.new_account_virtual.oauth_token)
            })
            .catch((reason) => {
                setError(reason.error)
                setLoading(false)
            })
    }
    const clearCode = () => {
        setVerificationCode('')
        setCodeErrorMessage('')
    }
    const clearPassword = () => {
        setPassword('')
        setPasswordErrorMessage('')
    }
    const handleCodeValidation = (value) => {
        if (value.length !== 8) {
            setCodeErrorMessage('Code should be 8 characters')
        } else setCodeErrorMessage('')
    }
    const handlePasswordValidation = (value) => {
        if (!/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[ -~]{8,25}$/.test(value)) {
            setPasswordErrorMessage(
                'Password should be more than 8 characters including 1 uppercase and 1 number',
            )
        } else setPasswordErrorMessage('')
    }
    const handleCodeChange = (e) => {
        const { value } = e.target
        setVerificationCode(value)
        handleCodeValidation(value)
    }
    const handlePasswordChange = (e) => {
        const { value } = e.target
        setPassword(value)
        handlePasswordValidation(value)
    }

    if (submit_status === 'success') {
        if (service_token) {
            if (isBrowser()) {
                window.location.href = `https://id-ct-uat.deriv.com/brokeroauth/success?token=${service_token}`
            }
        }
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <ResponseWrapper>
                    <Header as="h3" type="section-title" align="center" weight="bold" mb="2rem">
                        <Localize translate_text="_t_Check your email_t_" />
                    </Header>
                    <img src={EmailIcon} alt="email" width="128px" height="128px" />
                    <Text align="center" pt="20px" pb="20px">
                        <Localize
                            translate_text="Please enter the 8 character verification code that was sent to {{email}} to activate your account."
                            values={{ email }}
                        />
                    </Text>
                    <StyledInput
                        type="text"
                        id="verification_code"
                        border="solid 1.5px var(--color-grey-7)"
                        border_radius="18px"
                        label_color="grey-5"
                        label_hover_color="grey-5"
                        background="white"
                        error={code_error_message}
                        value={verification_code}
                        label={localize('_t_Verification code_t_')}
                        placeholder={'Verification code'}
                        handleError={clearCode}
                        onChange={handleCodeChange}
                        autoFocus={true}
                        autoComplete="off"
                        required
                    />
                    <StyledInput
                        type="password"
                        id="password"
                        border="solid 1.5px var(--color-grey-7)"
                        border_radius="18px"
                        label_color="grey-5"
                        label_hover_color="grey-5"
                        background="white"
                        error={password_error_message}
                        value={password}
                        label={localize('_t_Password_t_')}
                        placeholder={'Password'}
                        handleError={clearPassword}
                        onChange={handlePasswordChange}
                        autoComplete="off"
                        required
                    />
                    {residence_list.length > 0 && (
                        <StyledDropdown
                            default_option={optionItemDefault}
                            option_list={residence_list}
                            onChange={(e) => {
                                setResidence(e)
                            }}
                            id="residence"
                            label={localize('_t_Residence_t_')}
                            selected_option={residence}
                        />
                    )}
                    <SubmitButton
                        disabled={
                            code_error_message !== '' ||
                            !verification_code ||
                            !password ||
                            !residence ||
                            loading
                        }
                        type="submit"
                    >
                        {loading ? 'Loading' : 'Submit'}
                    </SubmitButton>
                    <EmailLink to="/check-email/" align="center">
                        <Localize translate_text="Didn't receive the code?" />
                    </EmailLink>
                </ResponseWrapper>
            </form>
        </Wrapper>
    )
}

export default CtraderSignupSuccess
