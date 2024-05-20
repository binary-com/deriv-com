import React from 'react'
import { link_text, sign_up_content } from '../signup.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import Button from 'features/components/atoms/button'
import { localize, Localize } from 'components/localization'
import Input from 'features/components/atoms/input'
import Link from 'features/components/atoms/link'
import useSignupForm from 'features/hooks/use-signup-form'
import useGrowthbookFeatureFlag from 'components/hooks/use-growthbook-feature-flag'
import useBuildVariant from 'features/hooks/use-build-variant'
import Typography from 'features/components/atoms/typography'

const SignUpPageForm = () => {
    const { onSignup, signUpForm } = useSignupForm()
    const { region } = useBuildVariant()

    const security_pdf_link = `/tnc${region === 'eu' ? '/eu' : ''}/security-and-privacy.pdf`

    const growthbook_feature_flag_signup_without_checkbox = useGrowthbookFeatureFlag({
        featureFlag: 'signup-without-checkbox',
    })

    const {
        register,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
    } = signUpForm
    const values = watch()

    const is_button_disabled =
        values.email === '' ||
        (growthbook_feature_flag_signup_without_checkbox ? false : !values.terms) ||
        !isValid ||
        isSubmitting ||
        isSubmitSuccessful

    return (
        <Flex.Box as="form" direction="col" onSubmit={handleSubmit(onSignup)} gap="8x">
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
            {growthbook_feature_flag_signup_without_checkbox ? (
                <Typography.Paragraph textcolor="secondary" className={sign_up_content}>
                    <Localize
                        translate_text="_t_By creating a demo account, you accept our <0>Terms and conditions</0> and <1>Privacy policy</1> and agree to receive updates on new products and company news, which you can unsubscribe from at any time._t_"
                        components={[
                            <Link
                                className={link_text}
                                textcolor="primary"
                                key={0}
                                href="/terms-and-conditions/#clients"
                                url={{
                                    type: 'internal',
                                    to: '/terms-and-conditions/#clients',
                                }}
                            />,
                            <Link
                                className={link_text}
                                textcolor="primary"
                                key={0}
                                url={{
                                    target: '_blank',
                                    type: 'non-company',
                                    href: security_pdf_link,
                                }}
                            />,
                        ]}
                    />
                </Typography.Paragraph>
            ) : (
                <Flex.Item padding_block="4x">
                    <Input.Checkbox {...register('terms')} id="terms_and_conditions">
                        <Localize
                            translate_text="_t_I agree to the <0>terms and conditions</0>_t_"
                            components={[
                                <Link
                                    className={link_text}
                                    textcolor="primary"
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
            )}
            <Button.Primary fluid disabled={is_button_disabled}>
                <Localize translate_text="_t_Create demo account_t_" />
            </Button.Primary>
        </Flex.Box>
    )
}

export default SignUpPageForm
