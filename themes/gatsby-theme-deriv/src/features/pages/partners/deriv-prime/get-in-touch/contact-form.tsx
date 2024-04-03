import React, { useEffect, useMemo, useState } from 'react'
import { get_in_touch_form_container, get_in_touch_form } from './get-in-touch.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import useContactForm from 'features/hooks/use-contact-form'
import { TTypographyColor } from 'features/types'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const ContactFormGetInTouch = () => {
    const [is_mounted] = usePageLoaded()
    const { contact_us_form, on_submit, form_state } = useContactForm()
    const [text_values, setTextValues] = useState<{ color: TTypographyColor; text: TString }>({
        color: 'gray-shade',
        text: '_t_By clicking "Submit", you give your consent to be contacted by Deriv by email and telephone for marketing purposes._t_',
    })

    const {
        register,
        formState: { errors },
        clearErrors,
        setValue,
        handleSubmit,
    } = contact_us_form

    useEffect(() => {
        const { is_submission_fail, is_submitted } = form_state
        let text_values: { color: TTypographyColor; text: TString }
        if (!is_submission_fail && !is_submitted)
            text_values = {
                color: 'gray-shade',
                text: '_t_By clicking "Submit", you give your consent to be contacted by Deriv by email and telephone for marketing purposes._t_',
            }
        if (is_submitted)
            text_values = {
                color: 'black',
                text: '_t_Thank you for submitting your details. Our team will be in touch with you soon._t_',
            }
        if (is_submission_fail)
            text_values = {
                color: 'brand',
                text: '_t_Form submission error. Please submit the form again._t_',
            }
        setTextValues(text_values)
    }, [form_state])

    if (!is_mounted) return null

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
                </Flex.Box>
                <Flex.Item>
                    <Typography.Paragraph
                        className={'at-visible-phone-only'}
                        size={'xs'}
                        textcolor={text_values?.color}
                    >
                        <Localize translate_text={text_values?.text} />
                    </Typography.Paragraph>

                    <Typography.Paragraph
                        className={'at-visible-larger-than-phone'}
                        size={'small'}
                        textcolor={text_values?.color}
                    >
                        <Localize translate_text={text_values?.text} />
                    </Typography.Paragraph>
                </Flex.Item>
            </Flex.Box>
        </Flex.Box>
    )
}

export default ContactFormGetInTouch
