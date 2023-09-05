import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import Button from 'features/components/atoms/button'
import { localize, Localize } from 'components/localization'
import Input from 'features/components/atoms/input'
import Link from 'features/components/atoms/link'
import useCtraderEmailForm from 'features/hooks/use-ctrader-email-form'

const CtraderEmailForm = () => {
    const { onEnterEmail, enterEmailForm } = useCtraderEmailForm()

    const {
        register,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
    } = enterEmailForm
    const values = watch()

    const is_button_disabled =
        values.email === '' || !values.terms || !isValid || isSubmitting || isSubmitSuccessful

    return (
        <Flex.Box as="form" direction="col" onSubmit={handleSubmit(onEnterEmail)} gap="8x">
            <Input.Text
                autoComplete="none"
                autoCapitalize="none"
                id="email_address"
                formId="email"
                label={'_t_Email_t_'}
                clearErrors={clearErrors}
                setValue={setValue}
                error={errors?.email?.message ? localize(errors?.email?.message as TString) : null}
                {...register('email')}
            />
            <Flex.Item padding_block="4x">
                <Input.Checkbox {...register('terms')} id="terms_and_conditions">
                    <Localize
                        translate_text="_t_I agree to the <0>terms and conditions</0>_t_"
                        components={[
                            <Link
                                textcolor="brand"
                                key={0}
                                target="_blank"
                                url={{
                                    type: 'non-company',
                                    target: '_blank',
                                    href: '/terms-and-conditions/#clients',
                                }}
                            />,
                        ]}
                    />
                </Input.Checkbox>
            </Flex.Item>
            <Button.Primary fluid disabled={is_button_disabled}>
                <Localize translate_text="_t_Create demo account_t_" />
            </Button.Primary>
        </Flex.Box>
    )
}

export default CtraderEmailForm
