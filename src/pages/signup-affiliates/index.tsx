import React, { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components'
import AffiliateSignupForm from './components/_signup-form'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import { Container } from 'components/containers'
import InitialLoader from 'components/elements/dot-loader'
import useWS from 'components/hooks/useWS'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import AtomicContainer from 'features/components/atoms/container'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import NavTemplate from 'features/components/templates/navigation/template'
import { partners_nav_logo } from 'features/components/templates/navigation/payment-agent-nav/payment-agent-nav.module.scss'
import device from 'themes/device'
import Map from 'images/svg/signup-affiliates/map.svg'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'

const AffiliateSignupStatus = React.lazy(() => import('./components/_signup-status'))
const WizardComponent = React.lazy(() => import('./components/_wizard-component'))

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
        padding-top: 0;
    }
`

const AffiliateSignup = () => {
    const [show_wizard, setShowWizard] = useState<boolean>(false)
    const [isOnline, setIsOnline] = useState(isBrowser() && navigator.onLine)
    const [signup_status, setSignupStatus] = useState<
        | 'Username not available'
        | 'lost connection'
        | 'success'
        | 'Your website is not a valid entry'
        | ''
    >()

    const [affiliate_account, setAffiliateAccount] = useState({
        email: '',
        account: {
            type: 0,
            plan: 0,
        },
        address_details: {
            country: {},
            state: '',
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
            date_birth: '',
            website_url: '',
            social_media_url: '',
            password: '',
            company_name: '',
            company_registration_number: '',
            currency: '',
        },
        terms_of_use: {
            non_pep_declaration: true,
            tnc_accepted: true,
            general_terms: true,
            is_eu_checked: true,
            is_partner_checked: true,
        },
    })

    const {
        data: data_register,
        error: error_register,
        send: send_register,
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
    }, [isOnline])

    useEffect(() => {
        if (error_register?.error.message == 'Username not available') {
            setSignupStatus(error_register?.error.message)
        } else if (error_register?.error.message == 'Your website is not a valid entry') {
            setSignupStatus(error_register?.error.message)
        }
        if (data_register) {
            setSignupStatus('success')
        }
    }, [data_register, error_register, send_register])

    useEffect(() => {
        setAffiliateAccount({
            ...affiliate_account,
            phone_number: {
                ...affiliate_account.phone_number,
                prefix: affiliate_account.address_details.country?.prefix,
            },
        })
    }, [affiliate_account.address_details.country])

    // doesn't work in vercel due serverlsess features
    // const { data, send } = useWS('residence_list')
    // const [list, setList] = useState()
    // useEffect(() => {
    //     send({})
    // }, [send])
    //
    // useEffect(() => {
    //     if (data) {
    //         const country_list = data?.map(({ text, value, phone_idd }) => {
    //             return {
    //                 name: text,
    //                 display_name: text,
    //                 value: value,
    //                 prefix: phone_idd,
    //             }
    //         })
    //         setList(country_list)
    //     }
    // }, [data])
    // console.log(JSON.stringify(list))

    // const { data, send } = useWS('verify_email_cellxpert')
    //
    // useEffect(() => {
    //     // console.log({ ...user_data })
    //     send({ ...user_data })
    // }, [user_data])
    // console.log(data)

    const onSubmit = () => {
        if (!isOnline) {
            setSignupStatus('lost connection')
        } else
            send_register({
                address_city: affiliate_account.address_details.city,
                address_postcode: affiliate_account.address_details.postal_code,
                address_state: affiliate_account.address_details.state,
                address_street: affiliate_account.address_details.street,
                commission_plan: affiliate_account.account.plan,
                country: affiliate_account.address_details.country?.value,
                date_of_birth: affiliate_account.personal_details.date_birth
                    ?.toISOString()
                    .slice(0, 10),
                email: affiliate_account.email,
                first_name: affiliate_account.personal_details.first_name,
                last_name: affiliate_account.personal_details.last_name,
                non_pep_declaration: affiliate_account.terms_of_use.non_pep_declaration && 1,
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

    return (
        <>
            <NavTemplate
                renderLogo={() => (
                    <Link url={{ type: 'internal', to: '/partners/' }}>
                        <Image src={PartnerNavLogo} className={partners_nav_logo} />
                    </Link>
                )}
                has_centered_items
            >
                <LanguageSwitcher />
            </NavTemplate>
            <AtomicContainer.Fluid dir={'row'}>
                <StyledFlexWrapper>
                    <AffiliateSignupForm
                        affiliate_account={affiliate_account}
                        setAffiliateAccount={setAffiliateAccount}
                        setShowWizard={setShowWizard}
                    />
                    <Suspense fallback={<InitialLoader style={{ position: 'absolute' }} />}>
                        {show_wizard && (
                            <WizardComponent
                                show_wizard={show_wizard}
                                setShowWizard={setShowWizard}
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
                    </Suspense>
                </StyledFlexWrapper>
            </AtomicContainer.Fluid>
        </>
    )
}

export default WithIntl()(AffiliateSignup)
