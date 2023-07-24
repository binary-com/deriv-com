import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import AccountType from './components/_account-type'
import AccountDetails from './components/_account-details'
import PhoneNumber from './components/_phone_number'
import AffiliateInput from './utils/_affiliate-input'
import AccountTerms from './components/_account-terms'
import PersonalDetails from './components/_account-personal-details'
import { localize, Localize, WithIntl } from 'components/localization'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { TSocketRequestCleaned } from 'common/websocket/types'
import Wizard, { Background } from 'pages/signup-affiliates/components/wizard'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import useWS from 'components/hooks/useWS'
import validation from 'common/validation'
import Login from 'common/login'
import { getCookiesFields, getCookiesObject, getDataObjFromCookies } from 'common/cookies'
import { queryParams } from 'common/utility'
import device from 'themes/device'
import NavTemplate from 'features/components/templates/navigation/template'
import { partners_nav_logo } from 'features/components/templates/navigation/payment-agent-nav/payment-agent-nav.module.scss'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import AtomicContainer from 'features/components/atoms/container'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Map from 'images/svg/signup-affiliates/map.svg'
import Success from 'images/svg/signup-affiliates/success.svg'
import Failed from 'images/svg/signup-affiliates/failed.svg'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'

const StyledNote = styled.div`
    padding: 8px 0;
    margin: 24px 0 16px;
    height: 36px;
    width: 406px;
    border-radius: 4px;
    background-color: #f8f8f9;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;

    @media ${device.mobileL} {
        height: 54px;
        padding: 8px 7px;
        width: 100%;
    }
`
const StyledLinkText = styled(LinkText)`
    margin-left: 3px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const InputGroup = styled.div`
    width: 100%;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const StyledText = styled(LinkText)`
    font-size: 16px;
    line-height: 20px;
`
const EmailText = styled(LinkText)`
    font-size: 16px;
    line-height: 24px;
    padding-top: 24px;
`
const LoginText = styled(LinkText)`
    text-align: center;
    align-self: center;
    margin-right: 5px;
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;
`
const ImageWrapper = styled.div`
    margin: auto;
`
const StyledFlex = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 510px;
    width: 100%;
    max-width: 486px;
    margin: 0;

    @media ${device.tabletL} {
        padding-top: 30px;
        width: 328px;
        height: 250px;
        margin-top: 0;
    }
    @media ${device.mobileS} {
        margin-left: 8px;
    }
`
export const SignUpWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin: 0;
    height: 510px;
    width: 100%;
    max-width: 486px;
    background: var(--color-white);
    border-radius: 6px;
    box-shadow: 0px 12px 16px -4px #0e0e0e14;
`

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
const StyledButton = styled(Button)`
    inline-size: fit-content;
    gap: 8px;
    margin-block-start: 12px;
`
const ProgressModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 486px;
    border-radius: 8px;
    padding: 40px;
    transform: translate(-50%, -50%);
    z-index: 100;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    box-shadow: 0px 20px 24px -4px #0e0e0e14;

    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.tabletL} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 80%;
    }
`
const steps = [
    'Account type',
    'Address details',
    'Phone number',
    'Personal details',
    'Terms of use',
]
type UserData = TSocketRequestCleaned<'verify_email_cellxpert'>
const AffiliateSignup = () => {
    const [user_data, setUseData] = useState<UserData>()
    const [email, setEmail] = useState('')
    const [email_error_msg, setEmailErrorMsg] = useState('')
    const [submit_error_msg, setSubmitErrorMsg] = useState('')
    const [captcha_status, setCaptchaStatus] = useState(false)
    const [show_wizard, setShowWizard] = useState<boolean | number>(false)
    const [is_going_well, setIsGoing] = useState(false)

    const [next_btn_enabled, setNextBtnEnabled] = useState(false)

    const [affiliate_account, setAffiliateAccount] = useState({
        account: {
            type: '',
            plan: '',
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
            prefix: '44',
        },
        personal_details: {
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
            non_pep_declaration: false,
            tnc_accepted: false,
            general_terms: false,
            is_eu_checked: false,
            is_partner_checked: false,
        },
    })
    // doesn't work in vercel due serverlsess features
    // const { data, send } = useWS('residence_list')
    // useEffect(() => {
    //     send({})
    // }, [send])
    //
    // useEffect(() => {
    //     if (data) {
    //         const country_list = data?.map(({ text, value }) => {
    //             return {
    //                 name: text,
    //                 display_name: text,
    //                 value: value,
    //             }
    //         })
    //         setCountryList(country_list)
    //     }
    // }, [data])

    const { data, send } = useWS('verify_email_cellxpert')

    useEffect(() => {
        // console.log({ ...user_data })
        send({ ...user_data })
    }, [user_data])
    // console.log(data)

    const updateAffiliateValues = (value, type) => {
        switch (type) {
            case 'account-type':
                setAffiliateAccount({
                    ...affiliate_account,
                    account: { type: value.type, plan: value.plan },
                })
                break

            case 'account-details':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    address_details: {
                        country: value.country,
                        state: value.state,
                        city: value.city,
                        street: value.street,
                        postal_code: value.postal_code,
                    },
                })
                break
            case 'phone-number':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    phone_number: {
                        phone: value.phone,
                        prefix: value.prefix,
                    },
                })
                break
            case 'personal-details':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    personal_details: {
                        first_name: value.first_name,
                        last_name: value.last_name,
                        date_birth: value.date_birth,
                        social_media_url: value.social_media_url,
                        website_url: value.website_url,
                        password: value.password,
                        company_name: value.company_name,
                        company_registration_number: value.company_registration_number,
                        currency: value.currency,
                    },
                })
                break
            case 'terms-of-use':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    terms_of_use: {
                        non_pep_declaration: value.non_pep_declaration,
                        tnc_accepted: value.tnc_accepted,
                        general_terms: value.general_terms,
                        is_eu_checked: value.is_eu_checked,
                        is_partner_checked: value.is_partner_checked,
                    },
                })
                break
        }
    }

    const getVerifyEmailRequest = (formatted_email): UserData => {
        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
        const token = queryParams.get('t') as string

        if (token && cookies_value.utm_campaign === 'CellXpert') {
            cookies_value.utm_medium = 'affiliate'
        }

        return {
            verify_email_cellxpert: formatted_email,
            type: 'partner_account_opening',
            url_parameters: {
                affiliate_token: token,
                ...cookies_value,
            },
        }
    }
    const validateEmail = (error_address) => {
        const error_message =
            validation.required(error_address) ||
            validation.email(error_address) ||
            submit_error_msg
        if (submit_error_msg) {
            setSubmitErrorMsg('')
        }
        return error_message
    }
    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param
        setEmailErrorMsg(validateEmail(message.replace(/\s/g, '')))
    }
    const handleInputValidation = (e) => {
        const { value } = e.target
        setEmail(value)
        handleValidation(value)
    }

    const clearEmail = () => {
        setEmail('')
        setEmailErrorMsg('')
    }
    const handleLogin = (e) => {
        e.preventDefault()
        Login.redirectTologin()
    }

    const handleEmailSignUp = (e) => {
        e.preventDefault()
        handleValidation(email)
        const formatted_email = email.replace(/\s/g, '')
        const has_error_email = validateEmail(formatted_email)

        if (has_error_email || email_error_msg) {
            return setShowWizard(false)
        }
        const verify_email = getVerifyEmailRequest(formatted_email)
        setUseData(verify_email)
        setShowWizard(true)
    }

    return (
        <div>
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
                    <StyledFlex jc="center" fd="column" width="486px">
                        <Header mb="8px" as="h3" type="heading-3">
                            <Localize translate_text={'_t_Deriv Affiliate_t_'} />
                        </Header>
                        <Header mb="24px" as="p" type="paragraph-1" weight="normal">
                            <Localize
                                translate_text={
                                    '_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader and DBot._t_'
                                }
                            />
                        </Header>
                        <Header mb="8px" as="h3" type="heading-3">
                            <Localize translate_text={'_t_Deriv IB Programmet_t_'} />
                        </Header>
                        <Header as="p" type="paragraph-1" weight="normal">
                            <Localize
                                translate_text={
                                    '_t_Our introducing broker programme is available to all Deriv affiliates. Earn commission from your clients’ trades on Deriv MT5._t_'
                                }
                            />
                        </Header>
                    </StyledFlex>
                    <SignUpWrapper>
                        <Header as="h3" type="heading-3" mb="0.8rem">
                            <Localize translate_text={'_t_Sign up_t_'} />
                        </Header>
                        <Header as="p" type="subtitle-1" weight="normal">
                            <Localize translate_text={'_t_Enter your email address to begin_t_'} />
                        </Header>
                        <StyledNote>
                            <Header
                                as="p"
                                type="paragraph-2"
                                weight="normal"
                                align="center"
                                color="grey-5"
                            >
                                <Localize translate_text={'_t_Want to sign up as a trader?_t_'} />
                                <LocalizedLinkText to="/signup">
                                    <StyledLinkText
                                        id="dm-new-login-button"
                                        size="14px"
                                        color="grey-5"
                                    >
                                        <Localize translate_text={'_t_Create a Deriv account_t_'} />
                                    </StyledLinkText>
                                </LocalizedLinkText>
                            </Header>
                        </StyledNote>
                        <InputGroup>
                            <AffiliateInput
                                id="dm-email-input"
                                name="email"
                                type="text"
                                border="solid 1px var(--color-grey-7)"
                                label_color="grey-5"
                                label_hover_color="grey-5"
                                background="white"
                                error={email_error_msg}
                                value={email}
                                label={localize('_t_Email_t_')}
                                placeholder={'Email'}
                                autoComplete="off"
                                handleError={clearEmail}
                                onChange={handleInputValidation}
                                onBlur={handleValidation}
                                required
                            />
                        </InputGroup>
                        <ImageWrapper>
                            <ReCAPTCHA
                                sitekey="6Ld_EwIhAAAAAI8eRUeCN9RtKzn5oKsHKKwwPaXf"
                                onChange={(value) => {
                                    setCaptchaStatus(!!value)
                                }}
                            />
                        </ImageWrapper>
                        <EmailButton
                            type="submit"
                            secondary
                            onClick={handleEmailSignUp}
                            // disabled={!(captcha_status && email && !email_error_msg)}
                            disabled={!(email && !email_error_msg)}
                        >
                            <Localize translate_text={'_t_Create partner account_t_'} />
                        </EmailButton>
                        <LoginContainer>
                            <LoginText>
                                <Localize
                                    translate_text={
                                        '_t_Already have a Deriv affiliate account? _t_'
                                    }
                                />
                            </LoginText>
                            <StyledText align="center" color="red" onClick={handleLogin}>
                                <Localize translate_text={'_t_Log in_t_'} />
                            </StyledText>
                        </LoginContainer>
                    </SignUpWrapper>
                    {show_wizard && (
                        <Wizard
                            title={localize('_t_Add an affiliate account_t_')}
                            steps_names={steps}
                            enable_next_button={next_btn_enabled}
                            setShowWizard={setShowWizard}
                            show_wizard={show_wizard}
                        >
                            <AccountType
                                card_selected={affiliate_account.account}
                                updateData={(account) => {
                                    updateAffiliateValues(account, 'account-type')
                                }}
                                onValidate={(valid) => {
                                    setNextBtnEnabled(valid)
                                }}
                            />
                            <AccountDetails
                                affiliate_address_data={affiliate_account.address_details}
                                updateData={(value) => {
                                    updateAffiliateValues(value, 'account-details')
                                }}
                                onValidate={(valid) => {
                                    setNextBtnEnabled(valid)
                                }}
                            />
                            <PhoneNumber
                                affiliate_phone_number={affiliate_account.phone_number}
                                updatedData={(value) => {
                                    updateAffiliateValues(value, 'phone-number')
                                }}
                                onValidate={(valid) => {
                                    setNextBtnEnabled(valid)
                                }}
                            />
                            <PersonalDetails
                                affiliate_personal_data={affiliate_account.personal_details}
                                is_individual={
                                    affiliate_account.account.type === 'Individual' ? true : false
                                }
                                updateData={(value) => {
                                    updateAffiliateValues(value, 'personal-details')
                                }}
                                onValidate={(valid) => {
                                    setNextBtnEnabled(valid)
                                }}
                            />
                            <AccountTerms
                                affiliate_terms_of_use={affiliate_account.terms_of_use}
                                updateData={(value) => {
                                    updateAffiliateValues(value, 'terms-of-use')
                                }}
                                onValidate={(valid) => {
                                    setNextBtnEnabled(valid)
                                }}
                            />
                        </Wizard>
                    )}
                    {show_wizard === 0 && (
                        <div>
                            {is_going_well ? (
                                <ProgressModal>
                                    <Modal>
                                        <ImageWrapper>
                                            <img src={Success} alt="email" width="64" height="64" />
                                        </ImageWrapper>
                                        <Header type="subtitle-1" align="center">
                                            <Localize
                                                translate_text={'_t_Thank you for signing up_t_'}
                                            />
                                        </Header>
                                        <Header
                                            type="paragraph-1"
                                            align="center"
                                            weight="400"
                                            pt="8px"
                                        >
                                            <Localize translate_text="_t_We've sent you an email about your application status._t_" />
                                        </Header>
                                    </Modal>
                                    <Background />
                                </ProgressModal>
                            ) : (
                                <ProgressModal>
                                    <Modal>
                                        <ImageWrapper>
                                            <img src={Failed} alt="email" width="64" height="64" />
                                        </ImageWrapper>
                                        <Header type="subtitle-1" align="center">
                                            <Localize translate_text={'_t_Signup failed_t_'} />
                                        </Header>
                                        <Header
                                            type="paragraph-1"
                                            align="center"
                                            weight="400"
                                            pt="8px"
                                        >
                                            <Localize translate_text="_t_We've having trouble signing you up right now. Please try again in 2 minutes_t_" />
                                        </Header>
                                        <StyledButton
                                            secondary
                                            onClick={() => {
                                                setIsGoing(true)
                                            }}
                                        >
                                            <Localize translate_text={'_t_Try again_t_'} />
                                        </StyledButton>
                                    </Modal>
                                    <Background />
                                </ProgressModal>
                            )}
                        </div>
                    )}
                </StyledFlexWrapper>
            </AtomicContainer.Fluid>
        </div>
    )
}

export default WithIntl()(AffiliateSignup)
