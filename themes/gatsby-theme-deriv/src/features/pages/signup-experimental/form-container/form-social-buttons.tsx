import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import {
    SocialAppleWhiteIcon,
    SocialFacebookBrandIcon,
    SocialGoogleBrandIcon,
} from '@deriv/quill-icons'
import { Button } from '@deriv/quill-design'
import { signup_apple_btn, signup_fb_btn, signup_login_redirect } from '../signup.module.scss'
import Login from 'common/login'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { isBrowser } from 'common/utility'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const FormSocialButtons = () => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        action: 'started',
        form_source: isBrowser() && window.location.hostname,
        form_name: 'default_diel_deriv',
    }
    const google_signup = useThirdPartyFlags('google_signup')
    const facebook_signup = useThirdPartyFlags('facebook_signup')
    const apple_signup = useThirdPartyFlags('apple_signup')

    return (
        <>
            {google_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    colorStyle="white"
                    icon={SocialGoogleBrandIcon}
                    fullWidth={true}
                    iconPosition="start"
                    id="dm-signup-google"
                    // className={signup_fb_btn}
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'google',
                            ...analyticsData,
                        })
                        Login.initOneAll('google')
                    }}
                >
                    <Localize translate_text={'_t_Google_t_'} />
                </Button>
            )}
            {facebook_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    colorStyle="white"
                    icon={SocialFacebookBrandIcon}
                    fullWidth={true}
                    iconPosition="start"
                    className={signup_fb_btn}
                    id="dm-signup-facebook"
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'facebook',
                            ...analyticsData,
                        })
                        Login.initOneAll('facebook')
                    }}
                >
                    <Localize translate_text={'_t_Facebook_t_'} />
                </Button>
            )}
            {apple_signup && (
                <Button
                    size="lg"
                    variant="secondary"
                    colorStyle="white"
                    icon={SocialAppleWhiteIcon}
                    fullWidth={true}
                    iconPosition="start"
                    className={signup_apple_btn}
                    id="dm-signup-apple"
                    onClick={() => {
                        Analytics?.trackEvent('ce_virtual_signup_form', {
                            signup_provider: 'apple',
                            ...analyticsData,
                        })
                        Login.initOneAll('apple')
                    }}
                >
                    <Localize translate_text={'_t_Apple_t_'} />
                </Button>
            )}
            <Typography.Paragraph mt='2x' textcolor="white" align="center">
                <Localize
                    translate_text="_t_Already have an account? <0>Log in</0>_t_"
                    components={[
                        <Typography.Paragraph
                            as="span"
                            textcolor="white"
                            key={0}
                            className={signup_login_redirect}
                            onClick={(event) => {
                                event.preventDefault()
                                Analytics?.trackEvent('ce_virtual_signup_form', {
                                    action: 'go_to_login',
                                    form_source: isBrowser() && window.location.hostname,
                                    form_name: 'default_diel_deriv',
                                })
                                Login.redirectToLogin()
                            }}
                        />,
                    ]}
                />
            </Typography.Paragraph>
        </>
    )
}

export default FormSocialButtons
