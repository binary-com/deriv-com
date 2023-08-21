import React from 'react'
import { get_in_touch_form_container, get_in_touch_form } from './get-in-touch.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import useContactForm from 'features/hooks/use-contact-form'

const ContactFormGetInTouch = () => {
    const { contact_us_form, on_submit, form_state } = useContactForm()

    const {
        register,
        formState: { errors },
        watch,
        clearErrors,
        setValue,
        handleSubmit,
    } = contact_us_form
    const values = watch()

    return (
        <Flex.Box direction="col" basis="5-12" className={get_in_touch_form_container}>
            <Flex.Box
                direction={'col'}
                justify="around"
                className={get_in_touch_form}
                padding={'8x'}
                gap="5x"
                as="form"
                bgcolor="primary"
                id="contact-form"
                onSubmit={handleSubmit(on_submit)}
                md={{
                    padding: '14x',
                }}
            >
                <Typography.Heading size="small" textcolor="black" mt="5x">
                    <Localize translate_text="_t_Get in touch_t_" />
                </Typography.Heading>
                <Flex.Box
                    direction="col"
                    gap={'15x'}
                    md={{
                        direction: 'col',
                    }}
                >
                    <Flex.Item>
                        <Input.Text
                            label={'_t_Full name*_t_'}
                            id="full_name"
                            autoCapitalize="none"
                            clearErrors={() => clearErrors('full_name')}
                            setValue={setValue}
                            error={
                                errors?.full_name?.message
                                    ? localize(errors?.full_name?.message as TString)
                                    : null
                            }
                            {...register('full_name')}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Input.Text
                            label={'_t_Company name*_t_'}
                            id="company_name"
                            autoCapitalize="none"
                            clearErrors={() => clearErrors('company_name')}
                            setValue={setValue}
                            error={
                                errors?.company_name?.message
                                    ? localize(errors?.company_name?.message as TString)
                                    : null
                            }
                            {...register('company_name')}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Input.Text
                            label={'_t_Corporate email*_t_'}
                            id="email_address"
                            autoCapitalize="none"
                            clearErrors={() => clearErrors('email')}
                            setValue={setValue}
                            error={
                                errors?.email?.message
                                    ? localize(errors?.email?.message as TString)
                                    : null
                            }
                            {...register('email')}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Input.Text
                            label={'_t_Mobile number*_t_'}
                            id="mobile_number"
                            autoCapitalize="none"
                            type="tel"
                            clearErrors={() => clearErrors('mobile_number')}
                            setValue={setValue}
                            error={
                                errors?.mobile_number?.message
                                    ? localize(errors?.mobile_number?.message as TString)
                                    : null
                            }
                            {...register('mobile_number')}
                        />
                    </Flex.Item>
                    <Flex.Box>
                        <Flex.Item basis="full" md={{ basis: '1-3' }}>
                            <Button.Primary fluid disabled={form_state.is_loading_form}>
                                <Localize translate_text="_t_Submit_t_" />
                            </Button.Primary>
                        </Flex.Item>
                    </Flex.Box>
                    <Flex.Item>
                        {form_state.is_submitted ? (
                            <Typography.Paragraph size="xs" textcolor="black">
                                <Localize translate_text="_t_Thank you for submitting your details. Our team will be in touch with you soon._t_" />
                            </Typography.Paragraph>
                        ) : (
                            <Typography.Paragraph size="xs" textcolor="gray-shade">
                                <Localize translate_text='_t_ By clicking "Submit", you give your consent to be contacted by Deriv by email and telephone for marketing purposes._t_' />
                            </Typography.Paragraph>
                        )}
                    </Flex.Item>
                </Flex.Box>
            </Flex.Box>
        </Flex.Box>
    )
}

export default ContactFormGetInTouch
