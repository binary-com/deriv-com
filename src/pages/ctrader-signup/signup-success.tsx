import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { form_style, input_style, dropdown_style } from './ctrader-form.module.scss'
import { localize, Localize } from 'components/localization'
import { DropdownSearch } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { useResidenceList } from 'components/hooks/use-residence-list'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import useCtraderSubmitForm from 'features/hooks/use-ctrader-submit-form'

const CtraderSignupSuccess = () => {
    const [show_check_email, setShowCheckEmail] = useState(true)
    const [residence_list] = useResidenceList()
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const email = url_params.get('email')
    const { submitForm, onSubmit } = useCtraderSubmitForm()

    const {
        register,
        formState: { errors, isValid },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
        setError,
        control,
    } = submitForm
    const values = watch()

    useEffect(() => {
        const response_error = errors.root?.serverError
        if (response_error?.type === 'InvalidToken') {
            clearErrors()
            setError('verification_code', { message: response_error.message })
        }
    }, [clearErrors, errors.root?.serverError, setError])

    const isButtonDisabled =
        values.verification_code === '' ||
        values.password === '' ||
        values.residence === '' ||
        !isValid

    return (
        <CtraderWrapper>
            <Flex.Box
                as="form"
                justify="center"
                align="center"
                direction="col"
                gap="10x"
                onSubmit={handleSubmit(onSubmit)}
                className={form_style}
            >
                <Typography.Heading as="h3" size="small" align="center" weight="bold">
                    <Localize translate_text="_t_Check your email_t_" />
                </Typography.Heading>
                <img src={EmailIcon} alt="email" width="128px" height="128px" />
                {show_check_email ? (
                    <>
                        <Typography.Paragraph align="center">
                            <Localize
                                translate_text="_t_Verification code was sent to {{email}}. If you have received the code please continue. If you didn't receive the code please make sure you didn't have any account already._t_"
                                values={{ email }}
                            />
                        </Typography.Paragraph>
                        <Button.Primary onClick={() => setShowCheckEmail(false)}>
                            <Localize translate_text="_t_Continue_t_" />
                        </Button.Primary>
                    </>
                ) : (
                    <>
                        <Typography.Paragraph align="center">
                            <Localize
                                translate_text="_t_Please enter the 8 character verification code that was sent to {{email}} to activate your account._t_"
                                values={{ email }}
                            />
                        </Typography.Paragraph>
                        <Input.Text
                            className={input_style}
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
                            className={input_style}
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
                                        className={dropdown_style}
                                        mb="-5px"
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
                        <Button.Primary type="submit" disabled={isButtonDisabled}>
                            <Localize translate_text="_t_Submit_t_" />
                        </Button.Primary>
                    </>
                )}
                <Link
                    url={{ type: 'internal', to: '/check-email/' }}
                    textcolor="brand"
                    size="medium"
                >
                    <Localize translate_text="_t_Didn't receive your email?_t_" />
                </Link>
            </Flex.Box>
        </CtraderWrapper>
    )
}

export default CtraderSignupSuccess
