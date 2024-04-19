import React, { useEffect, useState } from 'react'
import { Analytics } from '@deriv-com/analytics'
import styled from 'styled-components'
import { Submit, trackEvent } from './utils/_utils'
import { AffiliateAccountTypes, SignUpStatusTypes } from './_types'
import { AffiliateSignupForm, AffiliateSignupStatus, Wizard } from './_lazy-loading'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import { Container, SEO, TMetaAttributes } from 'components/containers'
import Layout from 'components/layout/layout'
import useWS from 'components/hooks/useWS'
import AtomicContainer from 'features/components/atoms/container'
import { TGatsbyHead } from 'features/types'
import device from 'themes/device'
import Map from 'images/common/affiliate/map.png'

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Partner Signup Page | Deriv_t_',
    og_description:
        '_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on Deriv Trader, Deriv Bot, and SmartTrader._t_',
}

const ParentWrapper = styled.div<{ isPopupOpen?: boolean }>`
    block-size: calc(100svh - 70px);
    background-image: url(${Map});
    background-repeat: no-repeat;
    background-position: bottom;
    overflow: ${({ isPopupOpen }) => (isPopupOpen ? 'hidden' : 'auto')};

    @media ${device.tabletL} {
        background-image: unset;
    }
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
        padding-top: unset;
    }
`

const AffiliateSignup = ({ pageContext }: TGatsbyHead) => {
    const { region } =  pageContext
    const [show_wizard, setShowWizard] = useState<boolean>(false)
    const [is_online, setIsOnline] = useState(isBrowser() && navigator.onLine)
    const [signup_status, setSignupStatus] = useState<SignUpStatusTypes>('')

    const [affiliate_account, setAffiliateAccount] = useState<AffiliateAccountTypes>({
        email: '',
        account_type: 0,
        account_plan: 0,
        account_address: {
            country: {},
            state: {},
            city: '',
            street: '',
            postal_code: '',
        },
        account_details: {
            first_name: '',
            last_name: '',
            date_birth: null,
            phone: '',
            website_url: '',
            second_website_url: '',
            company_name: '',
            company_registration_number: '',
            username: '',
            password: '',
        },
        terms_of_use: {
            non_pep_declaration_accepted: false,
            tnc_accepted: false,
            tnc_affiliate_accepted: false,
            promote_eu: false,
        },
    })

    const {
        data: affiliate_api_data,
        error: affiliate_api_error,
        send: affiliateSend,
    } = useWS('affiliate_register_person')

    useEffect(() => {
        const handleStatusChange = () => {
            if (!navigator.onLine) trackEvent({ action: 'other_error' })
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
        if (affiliate_api_data) {
            trackEvent({
                action: 'success_popup_opened',
                user_choice:
                    JSON.stringify(affiliate_api_error?.echo_req) ||
                    'success, but without echo_req',
                success_source: partner_signup_error_message ? 'failed_popup' : 'last_step',
                affiliate_id: affiliate_api_data?.affiliate_user_id,
            })
            setSignupStatus('success')
        } else if (partner_signup_error_message == 'Username not available') {
            trackEvent({ action: 'partners_signup_error', partner_signup_error_message })
            setSignupStatus(partner_signup_error_message)
        } else if (
            partner_signup_error_message == 'Your website is not a valid entry' ||
            partner_signup_error_message == "String does not match '^[0-9A-Za-z.-]{5,250}$'" ||
            partner_signup_error_message?.includes('website_url')
        ) {
            trackEvent({ action: 'partners_signup_error', partner_signup_error_message })
            setSignupStatus('Your website is not a valid entry')
        } else if (partner_signup_error_message) {
            trackEvent({ action: 'other_error', partner_signup_error_message })
            setSignupStatus('unhandled error')
        }
    }, [affiliate_api_data, affiliate_api_error])

    useEffect(() => {
        setAffiliateAccount({
            ...affiliate_account,
            account_details: {
                ...affiliate_account.account_details,
                phone: '+' + affiliate_account.account_address.country?.prefix,
            },
        })
    }, [affiliate_account.account_address.country])

    const onSubmit = () => {
        trackEvent({ action: 'try_submit' })
        setSignupStatus('loading')
        Submit({ is_online, affiliate_account, setSignupStatus, affiliateSend })
    }

    return (
        <Layout type="affiliates" padding_top="7" show_footer={false} region={region}>
            <ParentWrapper isPopupOpen={!!signup_status}>
                <AtomicContainer.Fluid dir="row">
                    <StyledContainer>
                        {show_wizard ? (
                            <Wizard
                                show_wizard={show_wizard}
                                setSignupStatus={setSignupStatus}
                                affiliate_account={affiliate_account}
                                setAffiliateAccount={setAffiliateAccount}
                                onSubmit={onSubmit}
                            />
                        ) : (
                            <AffiliateSignupForm
                                affiliate_account={affiliate_account}
                                setAffiliateAccount={setAffiliateAccount}
                                setShowWizard={setShowWizard}
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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Be our partner | Partnership programmes | Deriv_t_"
        description="_t_Explore Deriv’s partnership programmes and team up with a trusted online trading broker to earn extra income._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
export default WithIntl()(AffiliateSignup)
