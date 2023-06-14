import React, { useState } from 'react'
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { DropdownSearch, Header, StyledLink, Text } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { Button } from 'components/form'
import { useResidenceList } from 'components/hooks/use-residence-list'
import { isBrowser } from 'common/utility'
import { eu_countries } from 'common/country-base'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import useCtraderSignupForm from 'features/hooks/use-ctrader-signup-form'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'

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
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileL} {
        padding: 0;
    }
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
// const StyledInput = styled(Input)`
//     width: 100%;
// `

const CtraderSignupSuccess = () => {
    const [verification_code, setVerificationCode] = useState('')
    const [code_error_message, setCodeErrorMessage] = useState('')
    const [residence_list] = useResidenceList()
    const [residence, setResidence] = useState(null)
    const [residence_error_message, setResidenceErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [password_error_message, setPasswordErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const email = url_params.get('email')

    const { submitForm, onSubmit } = useCtraderSignupForm()

    const {
        register,
        formState: { errors, isValid },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
    } = submitForm
    const values = watch()
    console.log(values)
    console.log(submitForm)

    const isButtonDisabled = values.verification_code === '' || values.password === '' || !isValid

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
    const handleResidenceValidation = (residence) => {
        const eu_country = eu_countries.includes(residence)
        if (eu_country) {
            setResidenceErrorMessage('Ctrader is not available in Europe')
        } else setResidenceErrorMessage('')
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
    const handleResidenceChange = (e) => {
        setResidence(e.symbol)
        handleResidenceValidation(e.symbol)
    }

    return (
        <CtraderWrapper>
            <Wrapper>
                <Flex.Box
                    as="form"
                    justify="center"
                    align="center"
                    direction="col"
                    onSubmit={handleSubmit(onSubmit)}
                    gap="8x"
                >
                    <Header as="h3" type="section-title" align="center" weight="bold" mb="2rem">
                        <Localize translate_text="_t_Check your email_t_" />
                    </Header>
                    <img src={EmailIcon} alt="email" width="128px" height="128px" />
                    <Text align="center" pt="20px" pb="20px">
                        <Localize
                            translate_text="_t_Please enter the 8 character verification code that was sent to {{email}} to activate your account._t_"
                            values={{ email }}
                        />
                    </Text>
                    <Input.Text
                        autoComplete="none"
                        autoCapitalize="none"
                        id="verification_code"
                        label={'_t_Verification code_t_'}
                        clearErrors={clearErrors}
                        setValue={setValue}
                        error={
                            errors?.verification_code?.message
                                ? localize(errors?.verification_code?.message as TString)
                                : null
                        }
                        {...register('verification_code')}
                    />
                    {/* <StyledInput
                        type="text"
                        id="verification_code"
                        border="solid 1.5px var(--color-grey-7)"
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
                    /> */}
                    <Input.Text
                        type="password"
                        autoComplete="none"
                        autoCapitalize="none"
                        id="password"
                        label={'_t_Password_t_'}
                        clearErrors={clearErrors}
                        setValue={setValue}
                        error={
                            errors?.password?.message
                                ? localize(errors?.password?.message as TString)
                                : null
                        }
                        {...register('password')}
                    />
                    {/* <StyledInput
                        type="password"
                        id="password"
                        border="solid 1.5px var(--color-grey-7)"
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
                    /> */}
                    {residence_list.length > 0 && (
                        <Controller
                            name="residence"
                            render={({ field }) => (
                                <DropdownSearch
                                    {...field}
                                    id="residence"
                                    key="residence"
                                    label={localize('_t_Residence_t_')}
                                    default_item={{
                                        name: 'default',
                                        display_name: '',
                                        key: '14',
                                        icon: '',
                                        market: '',
                                    }}
                                    items={residence_list}
                                    // onChange={handleResidenceChange}
                                    error={residence_error_message}
                                    selected_item={residence}
                                    disabled={residence_list.length < 1}
                                />
                            )}
                        />
                    )}
                    <SubmitButton type="submit" disabled={isButtonDisabled}>
                        {loading ? 'Loading' : 'Submit'}
                    </SubmitButton>
                    <EmailLink to="/check-email/" align="center">
                        <Localize translate_text="_t_Didn't receive the code?_t_" />
                    </EmailLink>
                </Flex.Box>
            </Wrapper>
        </CtraderWrapper>
    )
}

export default CtraderSignupSuccess
