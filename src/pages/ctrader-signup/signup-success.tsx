import React, { useState } from 'react'
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { localize, Localize } from 'components/localization'
import { DropdownSearch, Header, StyledLink, Text } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { Button } from 'components/form'
import { useResidenceList } from 'components/hooks/use-residence-list'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import useCtraderSignupForm from 'features/hooks/use-ctrader-signup-form'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import CtraderCheckEmail from 'components/custom/_ctrader-check-email'

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
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

const CtraderSignupSuccess = () => {
    const [residence_list] = useResidenceList()
    const [loading, setLoading] = useState(false)
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const email = url_params.get('email')
    const [show_check_email, setShowCheckEmail] = useState(true)

    const showCheckEmailHandler = () => {
        setShowCheckEmail(false)
    }

    const { submitForm, onSubmit } = useCtraderSignupForm()

    const {
        register,
        formState: { errors, isValid },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
        control,
    } = submitForm
    const values = watch()

    const isButtonDisabled =
        values.verification_code === '' ||
        values.password === '' ||
        values.residence === '' ||
        !isValid

    return (
        <CtraderWrapper>
            {show_check_email ? (
                <CtraderCheckEmail handleSuccess={showCheckEmailHandler} email={email} />
            ) : (
                <Flex.Box
                    as="form"
                    justify="center"
                    align="center"
                    direction="col"
                    onSubmit={handleSubmit(onSubmit)}
                    gap="12x"
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
                    <div>
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
                        {residence_list.length > 0 && (
                            <Controller
                                name="residence"
                                defaultValue={''}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DropdownSearch
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
                                        onChange={(e) => onChange(e.symbol)}
                                        error={
                                            errors?.residence?.message
                                                ? localize(errors?.residence?.message as TString)
                                                : null
                                        }
                                        value={value}
                                        disabled={residence_list.length < 1}
                                    />
                                )}
                            />
                        )}
                    </div>
                    <SubmitButton
                        onClick={() => setLoading(true)}
                        type="submit"
                        disabled={isButtonDisabled}
                    >
                        {loading ? 'Loading' : 'Submit'}
                    </SubmitButton>
                    <EmailLink to="/check-email/" align="center">
                        <Localize translate_text="_t_Didn't receive the code?_t_" />
                    </EmailLink>
                </Flex.Box>
            )}
        </CtraderWrapper>
    )
}

export default CtraderSignupSuccess
