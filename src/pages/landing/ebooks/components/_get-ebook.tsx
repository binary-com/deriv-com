import React from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Login from 'common/login'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import validation from 'common/validation'
import { Input, Button } from 'components/form'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device'
import Apple from 'images/svg/custom/apple.svg'
import Facebook from 'images/svg/custom/facebook-blue.svg'
import Google from 'images/svg/custom/google.svg'
import ViewEmailImage from 'images/common/sign-up/view-email.png'
import { useDerivWS } from 'store'

type GetEbookProps = {
    color?: string
    ebook_utm_code: string
    onSubmit?: (submit_status: string, email: string) => void
}

const SignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    justify-content: initial;

    @media ${device.tabletS} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const InputWrapper = styled.div`
    width: 400px;

    @media ${device.tabletL} {
        margin-right: 10px;
    }

    @media ${device.tablet} {
        margin-right: 0;
        width: 100%;
    }
`
const InputGroupForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`
const EmailButton = styled(Button)`
    min-width: 400px;
    height: 4rem;
    padding: 10px 28px;
    border-radius: 4px;
    margin: 12px 0 0;
    @media ${device.tabletL} {
        margin: 22px 0 0;
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        height: 40px;
        width: auto;
    }
`

const SocialButton = styled(Button)`
    width: 12.5rem;
    min-width: 116px;
    line-height: 30px;
    padding: 5px;
    border-radius: 4px;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    min-height: 4rem;
    height: 40px;
    font-weight: 500;

    &:nth-of-type(1) {
        margin-left: 0;
    }
    img {
        padding-right: 0;
        object-fit: contain;
        position: relative;
    }

    @media ${device.desktopL} {
        width: 11rem;
    }

    @media ${device.tabletS} {
        width: 100%;
        height: 43px;
        padding: 0;
        line-height: 14px;
        margin-bottom: 10px;
    }
`
const SocialButtonText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    span {
        display: block;
        text-align: left;
        padding-left: 5px;
        font-weight: bold;
    }
    @media ${device.tablet} {
        width: 100%;

        span {
            width: 50px;
        }
        img {
            width: 30px;
            height: 30px;
        }
    }
`

const SignupWithContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    @media ${device.tabletL} {
        margin-top: 2rem;
    }
`

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: ${(props) => (props.color ? props.color : 'var(--color-grey-6)')};
`

const StyledText = styled(Text)`
    color: ${(props) => (props.color ? props.color : 'var(--color-grey-6)')};

    @media ${(props) => device.tabletL && props.notedBox} {
        width: 13rem;
    }
    @media (max-width: 340px) {
        width: 17rem;
    }
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
    }
`

const StyledLocalizedLink = styled(LocalizedLinkText)`
    @media ${device.tabletL} {
        font-size: 10px;
    }
`

const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 330px;
    flex-direction: column;
    text-align: center;
    border: 1px solid var(--color-white);
    padding: 20px;
    position: relative;
    border-radius: 10px;
    margin: 30px 0;

    h3,
    p {
        margin: 2rem 0;
        color: white;
    }
`

const EmailImage = styled.img`
    margin: 0 auto;
    width: 20rem;
`

const GetEbook = ({ color = 'var(--color-white)', ebook_utm_code, onSubmit }: GetEbookProps) => {
    const { send } = useDerivWS()
    const [is_checked, setChecked] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const handleInputChange = (e) => {
        const { value } = e.target

        setEmail(value)
        handleValidation(value)
    }

    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param

        setEmailErrorMsg(validateEmail(message.replace(/\s/g, '')))
    }

    const validateEmail = (enteredEmail) => {
        const error_message = validation.email(enteredEmail) || submit_error_msg

        if (submit_error_msg) {
            setSubmitErrorMsg('')
            setSubmitStatus('')
        }

        return error_message
    }

    const clearEmail = () => {
        setEmail('')
        setEmailErrorMsg('')
    }

    const getVerifyEmailRequest = (enteredEmail) => {
        const affiliate_token = Cookies.getJSON('affiliate_tracking')

        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

        return {
            verify_email: enteredEmail,
            type: 'account_opening',
            url_parameters: {
                ...(affiliate_token && { affiliate_token: affiliate_token }),
                ...(cookies_value && { ...cookies_value }),
                ...(ebook_utm_code && { utm_content: ebook_utm_code }),
            },
        }
    }

    const handleSocialSignup = (e) => {
        e.preventDefault()

        const data_provider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(`${data_provider}&utm_content=${ebook_utm_code}`)
    }

    const handleEmailSignup = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formattedEmail = email.replace(/\s/g, '')
        handleValidation(email)
        const has_error_email = validateEmail(formattedEmail)

        if (has_error_email || email_error_msg) {
            return setIsSubmitting(false)
        }

        const verify_email_req = getVerifyEmailRequest(formattedEmail)

        send(verify_email_req, (response) => {
            if (response.error) {
                setIsSubmitting(false)
                setSubmitStatus('error')
                setSubmitErrorMsg(response.error.message)
                handleValidation(formattedEmail)
            } else {
                setIsSubmitting(false)
                setSubmitStatus('success')
                if (onSubmit) onSubmit(submit_status, email)
            }
        })
    }

    return submit_status === 'success' ? (
        <ResponseWrapper>
            <EmailImage src={ViewEmailImage} alt="Email" />
            <Header as="h3" type="section-title" align="center" weight="normal">
                {localize('Check your email')}
            </Header>
            <Text align="center">
                <Localize
                    translate_text="We've sent a message to {{email}} with a link to activate your account."
                    values={{ email: email }}
                />
            </Text>
        </ResponseWrapper>
    ) : (
        <SignupFormWrapper>
            <div>
                <InputGroupForm onSubmit={handleEmailSignup} noValidate>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            error={email_error_msg}
                            value={email}
                            background="white"
                            tablet_background="green-1"
                            input_background="grey-8"
                            label_focus_color="grey-7"
                            label_color="black-3"
                            placeholder={localize('email address')}
                            handleError={clearEmail}
                            onChange={handleInputChange}
                            onBlur={handleValidation}
                            autoFocus={true}
                            autoComplete="off"
                            required
                            border="unset"
                            height="40px"
                            focus_border="var(--color-grey-7)"
                        />
                    </InputWrapper>
                    <AgreementLabel
                        isChecked={is_checked}
                        handleChangeCheckbox={handleChange}
                        color={color}
                    />
                    <EmailButton
                        id="dm-ebook-download-signup"
                        type="submit"
                        secondary
                        disabled={
                            is_submitting || !is_checked || Boolean(email_error_msg) || !email
                        }
                    >
                        {localize('Get your free ebook now!')}
                    </EmailButton>
                    <Header as="p" type="small" weight="regular" color="grey-5" mt="0.8rem">
                        <Localize
                            translate_text="By pressing “Get your free ebook now!”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy</0>."
                            components={[
                                <StyledLocalizedLink
                                    key={0}
                                    to="/tnc/security-and-privacy.pdf"
                                    size="1.2rem"
                                    color="red"
                                    external
                                    rel="noopener noreferrer"
                                    target="_blank"
                                />,
                            ]}
                        />
                    </Header>
                </InputGroupForm>
                <SignupWithContainer>
                    <Line color={color} />
                    <StyledText color={color} align="center" tabletFontSize="12px">
                        {localize('Or sign up with')}
                    </StyledText>
                    <Line color={color} />
                </SignupWithContainer>
                <Flex
                    width="100%"
                    mt="1.6rem"
                    wrap="wrap"
                    jc="space-between"
                    ai="center"
                    tabletS={{ fd: 'column' }}
                >
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="google"
                        data-provider="google"
                        id="dm-signup-google"
                        type="button"
                    >
                        <SocialButtonText>
                            <img src={Google} alt="google" width="24" height="24" />
                            <span>Google</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="facebook"
                        data-provider="facebook"
                        id="dm-signup-facebook"
                        type="button"
                    >
                        <SocialButtonText>
                            <img src={Facebook} alt="facebook" width="24" height="24" />
                            <span>Facebook</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="apple"
                        data-provider="apple"
                        id="dm-signup-apple"
                        type="button"
                    >
                        <SocialButtonText>
                            <img src={Apple} alt="apple" width="24" height="24" />
                            <span>Apple</span>
                        </SocialButtonText>
                    </SocialButton>
                </Flex>
            </div>
        </SignupFormWrapper>
    )
}

export default GetEbook
