import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import AffiliateSignupForm from './components/_signup-form'
import { AffiliateAccountTypes, SignUpStatusTypes, SubmitTypes } from './_types'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import { Container } from 'components/containers'
import useWS from 'components/hooks/useWS'
import Layout from 'components/layout/layout'
import AtomicContainer from 'features/components/atoms/container'
import { useAnalyticsEvents } from 'features/hooks/analytic/use-analytic-events'
import device from 'themes/device'
import Map from 'images/svg/signup-affiliates/map.svg'

const AffiliateSignupStatus = Loadable(() => import('./components/_signup-status'))
const Wizard = Loadable(() => import('./components/_wizard'))

const Submit = ({ is_online, affiliate_account, setSignupStatus, affiliateSend }: SubmitTypes) => {
    if (!is_online) {
        setSignupStatus('lost connection')
    } else
        affiliateSend({
            address_city: affiliate_account.address_details.city,
            address_postcode: affiliate_account.address_details.postal_code,
            address_state: affiliate_account.address_details.state.name,
            address_street: affiliate_account.address_details.street,
            commission_plan: affiliate_account.account.plan,
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
                affiliate_account.phone_number.prefix + affiliate_account.phone_number.phone
            }`,
            phone_code: Number(affiliate_account.phone_number.prefix),
            tnc_accepted: affiliate_account.terms_of_use.tnc_accepted && 1,
            tnc_affiliate_accepted: affiliate_account.terms_of_use.is_partner_checked && 1,
            type_of_account: affiliate_account.account.type,
            user_name: affiliate_account.personal_details.username,
            website_url: affiliate_account.personal_details?.website_url,
            whatsapp_number: `+${
                affiliate_account.phone_number.phone + affiliate_account.phone_number.prefix
            }`,
            whatsapp_number_phoneCode: Number(affiliate_account.phone_number.prefix),
        })
}

const StyledFlexWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    background: url(${Map}) no-repeat fixed bottom;
    block-size: 100vh;
    inline-size: 100vw;
    padding-top: 120px;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        padding-top: 0;
    }
`

const AffiliateSignup = () => {
    const [show_wizard, setShowWizard] = useState<boolean>(false)
    const [is_online, setIsOnline] = useState(isBrowser() && navigator.onLine)
    const [signup_status, setSignupStatus] = useState<SignUpStatusTypes>()
    const { onAnalyticEvent } = useAnalyticsEvents('ce_affiliate_signup_form')

    useEffect(() => {
        onAnalyticEvent('affiliates: registration started')
    }, [])

    const [affiliate_account, setAffiliateAccount] = useState<AffiliateAccountTypes>({
        email: '',
        account: {
            type: 0,
            plan: 0,
        },
        address_details: {
            country: {},
            state: {},
            city: '',
            street: '',
            postal_code: '',
        },
        phone_number: {
            phone: '',
            prefix: '',
        },
        personal_details: {
            username: '',
            first_name: '',
            last_name: '',
            date_birth: null,
            website_url: 'www.',
            social_media_url: '',
            password: '',
            company_name: '',
            company_registration_number: '',
            currency: '',
        },
        terms_of_use: {
            non_pep_declaration_accepted: false,
            tnc_accepted: false,
            general_terms_accepted: false,
            is_eu_checked: false,
            is_partner_checked: false,
        },
    })

    console.log('affiliate_account', affiliate_account.terms_of_use)

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
        if (affiliate_api_error?.error.message == 'Username not available') {
            setSignupStatus(affiliate_api_error?.error.message)
        } else if (
            affiliate_api_error?.error.message == 'Your website is not a valid entry' ||
            affiliate_api_error?.error.message ==
                "String does not match '^[0-9A-Za-z.-]{5,250}$'" ||
            affiliate_api_error?.error.message == 'Input validation failed: website_url'
        ) {
            setSignupStatus('Your website is not a valid entry')
        }
        if (affiliate_api_data) {
            setSignupStatus('success')
        }
    }, [affiliate_api_data, affiliate_api_error, affiliateSend])
    useEffect(() => {
        setAffiliateAccount({
            ...affiliate_account,
            phone_number: {
                ...affiliate_account.phone_number,
                prefix: affiliate_account.address_details.country?.prefix,
            },
        })
    }, [affiliate_account.address_details.country])
    const onSubmit = () => {
        signup_status == 'success' && onAnalyticEvent('affiliates: registration done')
        Submit({ is_online, affiliate_account, setSignupStatus, affiliateSend })
    }

    return (
        <Layout type="affiliates">
            <AtomicContainer.Fluid dir={'row'}>
                <StyledFlexWrapper>
                    <AffiliateSignupForm
                        affiliate_account={affiliate_account}
                        setAffiliateAccount={setAffiliateAccount}
                        setShowWizard={setShowWizard}
                    />
                    {show_wizard && (
                        <Wizard
                            show_wizard={show_wizard}
                            setShowWizard={setShowWizard}
                            affiliate_account={affiliate_account}
                            setAffiliateAccount={setAffiliateAccount}
                            onSubmit={onSubmit}
                            onAnalyticEvent={onAnalyticEvent}
                        />
                    )}
                    <AffiliateSignupStatus
                        signup_status={signup_status}
                        setSignupStatus={setSignupStatus}
                        affiliate_account={affiliate_account}
                        setAffiliateAccount={setAffiliateAccount}
                        onSubmit={onSubmit}
                    />
                </StyledFlexWrapper>
            </AtomicContainer.Fluid>
        </Layout>
    )
}

export default WithIntl()(AffiliateSignup)
