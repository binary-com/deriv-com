import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import {
    SocialAppleWhiteIcon,
    SocialAppleBlackIcon,
    SocialFacebookBrandIcon,
    SocialGoogleBrandIcon,
} from '@deriv/quill-icons'
import { Button } from '@deriv/quill-design'
import { signup_login_redirect } from '../signup.module.scss'
import Login from 'common/login'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { isBrowser } from 'common/utility'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const FormSocialButtons = ({ theme }: { theme: 'dark' | 'plain' }) => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        action: 'started',
        form_source: isBrowser() && window.location.hostname,
        form_name: 'virtual_signup_web_mobile_exp003',
    }
    const google_signup = useThirdPartyFlags('google_signup')
    const facebook_signup = useThirdPartyFlags('facebook_signup')
    const apple_signup = useThirdPartyFlags('apple_signup')

    const textStyleOverrides = theme === 'dark' ? ({ textcolor: 'white' } as const) : {}
    const buttonStyleOverrides =
        theme === 'dark' ? ({ colorStyle: 'white' } as const) : ({ colorStyle: 'black' } as const)

    return (
        <>
            {google_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    icon={SocialGoogleBrandIcon}
                    fullWidth={true}
                    iconPosition="start"
                    id="dm-signup-google"
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'google',
                            ...analyticsData,
                        })
                        Login.initOneAll('google')
                    }}
                    {...buttonStyleOverrides}
                >
                    <Localize translate_text={'_t_Google_t_'} />
                </Button>
            )}
            {facebook_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    icon={SocialFacebookBrandIcon}
                    fullWidth={true}
                    iconPosition="start"
                    // className={signup_fb_btn}
                    id="dm-signup-facebook"
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'facebook',
                            ...analyticsData,
                        })
                        Login.initOneAll('facebook')
                    }}
                    {...buttonStyleOverrides}
                >
                    <Localize translate_text={'_t_Facebook_t_'} />
                </Button>
            )}
            {apple_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    icon={theme === 'dark' ? SocialAppleWhiteIcon : SocialAppleBlackIcon}
                    fullWidth={true}
                    iconPosition="start"
                    // className={signup_apple_btn}
                    id="dm-signup-apple"
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'apple',
                            ...analyticsData,
                        })
                        Login.initOneAll('apple')
                    }}
                    {...buttonStyleOverrides}
                >
                    <Localize translate_text={'_t_Apple_t_'} />
                </Button>
            )}
            <Typography.Paragraph mt="2x" align="center" {...textStyleOverrides}>
                <Localize
                    translate_text="_t_Already have an account? <0>Log in</0>_t_"
                    components={[
                        <Typography.Paragraph
                            as="span"
                            key={0}
                            weight="bold"
                            className={signup_login_redirect}
                            onClick={(event) => {
                                event.preventDefault()
                                Analytics?.trackEvent('ce_virtual_signup_form', {
                                    action: 'go_to_login',
                                    form_source: isBrowser() && window.location.hostname,
                                    form_name: 'virtual_signup_web_mobile_exp003',
                                })
                                Login.redirectToLogin()
                            }}
                            {...textStyleOverrides}
                        />,
                    ]}
                />
            </Typography.Paragraph>
        </>
    )
}

export default FormSocialButtons
