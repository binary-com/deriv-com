import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { Analytics } from '@deriv/analytics'
import AffiliateSignupForm from './components/_signup-form'
import { AffiliateAccountTypes, SignUpStatusTypes, SubmitTypes } from './_types'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import { Container } from 'components/containers'
import Layout from 'components/layout/layout'
import useWS from 'components/hooks/useWS'
import AtomicContainer from 'features/components/atoms/container'
import device from 'themes/device'
import Map from 'images/svg/signup-affiliates/map.svg'

const AffiliateSignupStatus = Loadable(() => import('./components/_signup-status'))
const Wizard = Loadable(() => import('./components/_wizard'))

const customSlugify = (text: string): string =>
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/'/g, '')
        .replace(/--+/g, '-')
const Submit = ({ is_online, affiliate_account, setSignupStatus, affiliateSend }: SubmitTypes) => {
    if (!is_online) {
        setSignupStatus('lost connection')
        Analytics?.trackEvent('ce_partner_account_signup_form', {
            action: 'partners_signup_error',
            partner_signup_error_message: 'lost connection',
            form_source: window?.location.hostname,
            form_name: 'default_diel_deriv',
        })
    } else
        affiliateSend({
            address_city: affiliate_account.address_details.city,
            address_postcode: affiliate_account.address_details.postal_code,
            address_state: customSlugify(affiliate_account.address_details.state.name),
            address_street: affiliate_account.address_details.street,
            commission_plan: affiliate_account.account_plan,
            country: affiliate_account.address_details.country.symbol,
            date_of_birth: affiliate_account.personal_details.date_birth
                ?.toISOString()
                .slice(0, 10),
            email: affiliate_account.email,
            first_name: affiliate_account.personal_details.first_name,
            last_name: affiliate_account.personal_details.last_name,
            non_pep_declaration: affiliate_account.terms_of_use.non_pep_declaration_accepted && 1,
            over_18_declaration: 1,
            phone: `+${
                affiliate_account.personal_details.prefix + affiliate_account.personal_details.phone
            }`,
            phone_code: Number(affiliate_account.personal_details.prefix),
            tnc_accepted: affiliate_account.terms_of_use.tnc_accepted && 1,
            tnc_affiliate_accepted: affiliate_account.terms_of_use.is_partner_checked && 1,
            type_of_account: affiliate_account.account_type,
            user_name: affiliate_account.personal_details.username,
            website_url: affiliate_account.personal_details?.website_url.includes('www.')
                ? affiliate_account.personal_details?.website_url
                : `www.${affiliate_account.personal_details?.website_url}`,
            whatsapp_number: `+${
                affiliate_account.personal_details.prefix + affiliate_account.personal_details.phone
            }`,
            whatsapp_number_phoneCode: Number(affiliate_account.personal_details.prefix),
            ...(affiliate_account.personal_details?.company_name !== '' && {
                company_name: affiliate_account.personal_details?.company_name,
            }),
            ...(affiliate_account.personal_details?.company_registration_number !== '' && {
                company_registration_number: Number(
                    affiliate_account.personal_details?.company_registration_number,
                ),
            }),
        })
}

const ParentWrapper = styled.div`
    block-size: 100vh;
    background-image: url(${Map});
    background-repeat: no-repeat;
    background-position: bottom;
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 120px;
    inline-size: 100%;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding-top: 70px;
    }
`

const AffiliateSignup = () => {
    const [show_wizard, setShowWizard] = useState<boolean>()
    const [is_online, setIsOnline] = useState(isBrowser() && navigator.onLine)
    const [signup_status, setSignupStatus] = useState<SignUpStatusTypes>('')

    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window?.location.hostname,
        form_name: 'default_diel_deriv',
    }

    useEffect(() => {
        Analytics?.trackEvent('ce_partner_account_signup_form', {
            action: 'open',
            ...analyticsData,
        })

        return () => {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'close',
                ...analyticsData,
            })
        }
    }, [])

    const [affiliate_account, setAffiliateAccount] = useState<AffiliateAccountTypes>({
        email: 'test@gmail.com',
        account_type: 1,
        account_plan: 2,
        address_details: {
            country: {},
            state: {},
            city: 'test',
            street: 'test',
            postal_code: 'test1234',
        },
        personal_details: {
            first_name: 'test',
            last_name: 'test',
            date_birth: null,
            phone: '123123123',
            prefix: '',
            website_url: 'www.test.com',
            second_website_url: '',
            company_name: 'testers',
            company_registration_number: '123345678',
            username: 'Test',
            password: 'Test12 ',
        },
        terms_of_use: {
            non_pep_declaration_accepted: true,
            tnc_accepted: true,
            general_terms_accepted: true,
            is_partner_checked: true,
        },
    })
    const {
        data: affiliate_api_data,
        error: affiliate_api_error,
        send: affiliateSend,
    } = useWS('affiliate_register_person')

    useEffect(() => {
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine)
        }
        window.addEventListener('online', handleStatusChange)
        window.addEventListener('offline', handleStatusChange)
        return () => {
            window.removeEventListener('online', handleStatusChange)
            window.removeEventListener('offline', handleStatusChange)
        }
    }, [is_online])
    useEffect(() => {
        const partner_signup_error_message = affiliate_api_error?.error.message
        if (partner_signup_error_message == 'Username not available') {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'partners_signup_error',
                partner_signup_error_message,
                ...analyticsData,
            })
            setSignupStatus(partner_signup_error_message)
        } else if (
            partner_signup_error_message == 'Your website is not a valid entry' ||
            partner_signup_error_message == "String does not match '^[0-9A-Za-z.-]{5,250}$'" ||
            partner_signup_error_message == 'Input validation failed: website_url'
        ) {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'partners_signup_error',
                partner_signup_error_message,
                ...analyticsData,
            })
            setSignupStatus('Your website is not a valid entry')
        } else if (partner_signup_error_message) {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'other_error',
                partner_signup_error_message,
                ...analyticsData,
            })
        }
        if (affiliate_api_data) {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'real_signup_finished',
                ...analyticsData,
            })
            setSignupStatus('success')
        }
    }, [affiliate_api_data, affiliate_api_error, affiliateSend])
    useEffect(() => {
        setAffiliateAccount({
            ...affiliate_account,
            personal_details: {
                ...affiliate_account.personal_details,
                prefix: affiliate_account.address_details.country?.prefix,
            },
        })
    }, [affiliate_account.address_details.country])
    const onSubmit = () => {
        setSignupStatus('loading')
        Submit({ is_online, affiliate_account, setSignupStatus, affiliateSend })
    }

    return (
        <Layout type="affiliates" show_footer={false}>
            <ParentWrapper>
                <AtomicContainer.Fluid dir={'row'}>
                    <StyledContainer>
                        <AffiliateSignupForm
                            affiliate_account={affiliate_account}
                            setAffiliateAccount={setAffiliateAccount}
                            setShowWizard={setShowWizard}
                        />
                        {show_wizard && (
                            <Wizard
                                show_wizard={show_wizard}
                                setSignupStatus={setSignupStatus}
                                affiliate_account={affiliate_account}
                                setAffiliateAccount={setAffiliateAccount}
                                onSubmit={onSubmit}
                            />
                        )}
                        <AffiliateSignupStatus
                            signup_status={signup_status}
                            setSignupStatus={setSignupStatus}
                            affiliate_account={affiliate_account}
                            setAffiliateAccount={setAffiliateAccount}
                            onSubmit={onSubmit}
                        />
                    </StyledContainer>
                </AtomicContainer.Fluid>
            </ParentWrapper>
        </Layout>
    )
}

export default WithIntl()(AffiliateSignup)
