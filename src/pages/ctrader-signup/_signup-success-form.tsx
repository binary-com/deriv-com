import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import {
    form_style,
    input_style,
    dropdown_style,
    paragraph_style,
} from './ctrader-form.module.scss'
import { localize, Localize } from 'components/localization'
import { DropdownSearch } from 'components/elements'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import { useResidenceList } from 'components/hooks/use-residence-list'
import useCtraderSubmitForm from 'features/hooks/use-ctrader-submit-form'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'

const SignupSuccessForm = ({ email }: { email: string }) => {
    const [residence_list] = useResidenceList()
    const { submitForm, onSubmit, loading } = useCtraderSubmitForm()

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
        !isValid ||
        loading

    return (
        <Flex.Box
            as="form"
            justify="center"
            align="center"
            direction="col"
            gap="10x"
            className={form_style}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography.Paragraph className={paragraph_style} align="center">
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
                <Localize translate_text={loading ? '_t_Loading_t_' : '_t_Submit_t_'} />
            </Button.Primary>
        </Flex.Box>
    )
}
export default SignupSuccessForm
