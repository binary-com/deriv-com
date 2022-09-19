import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TextWrapper } from './_common'
import { addScriptForCIO } from './_utility'
import AgreementLabel from 'components/custom/_agreement-label'
import validation from 'common/validation'
import { localize, Localize } from 'components/localization'
import { Button } from 'components/form'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { DerivStore } from 'store'
import EmailSubscriptionSVG from 'images/svg/blog/articles/blog-article-email-subscription.svg'
import CrossIcon from 'images/svg/help/cross.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

const SubscribeBannerWrapper = styled(Flex)`
    max-width: 282px;
    padding: 32px 16px;
    background: var(--color-grey-42);
    border-radius: 8px;
    margin: 40px 0;
    @media ${device.laptop} {
        max-width: 328px;
        padding: 32px 18.5px;
    }
    @media ${device.mobileS} {
        max-width: 100%;
    }
`
const ImageWrapper = styled.img`
    width: 167.49px;
`
const StyledHeader = styled(Header)`
    margin-bottom: 16px;
    @media ${device.tabletL} {
        margin-bottom: 8px;
    }
`
const StyledSmallHeader = styled(Header)`
    margin-bottom: 24px;
`
const EmailForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    .link-text {
        color: var(--color-grey-19);
        font-weight: bold;
    }
`
const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`
const Input = styled.input`
    width: 100%;
    height: 46.5px;
    border-radius: 4px;
    padding: 16px 18px 14px;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-grey-5);
    border: 1px solid var(--color-grey-6);
    background-color: var(--color-white);

    &:hover,
    &:focus-within {
        border-color: var(--color-grey-5);
    }
    &:focus {
        outline: none;
    }
`
const EmailButton = styled(Button)`
    padding: 9px 28px;
    border-radius: 4px;
    margin-bottom: 8px;
    height: 46px;
    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        margin-left: 0;
        width: auto;
    }
`
const AdditionalFlex = styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const ErrorMessages = styled(Text)`
    font-size: 11px;
    min-height: 16px;
    margin-top: -4px;
    margin-bottom: 4px;
    color: var(--color-red-1);
`
const StyledError = styled.img`
    position: absolute;
    right: 8px;
    top: 16px;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
`
const StyledLocalizedLink = styled(LocalizedLinkText)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
`

const SideSubscriptionBanner = () => {
    const [is_checked, setChecked] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState<boolean | string>('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [name_error_msg, setNameErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')
    const { user_country } = React.useContext(DerivStore)
    const { is_eu } = useCountryRule()

    useEffect(() => {
        if (!window._cio) {
            addScriptForCIO(is_eu)
        }
        const url = 'https://assets.customer.io/assets/track.js'
        fetch(url, {
            headers: { 'Content-type': 'application/json' },
            mode: 'no-cors',
        })
            .then(() => {
                setSubmitStatus(true)
            })
            .catch(() => {
                setSubmitStatus(false)
            })
    }, [])

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const handleInputNameChange = (e) => {
        const { value } = e.target

        setName(value)
        handleValidation(value, 'name')
    }

    const handleInputChange = (e) => {
        const { value } = e.target

        setEmail(value)
        handleValidation(value, 'email')
    }

    const handleValidation = (param, type) => {
        const message = typeof param === 'object' ? param.target.value : param

        if (type === 'email') {
            setEmailErrorMsg(validateEmail(message))
        }

        if (type === 'name') {
            setNameErrorMsg(validateName(message.replace(/\s/g, '')))
        }
    }

    const validateEmail = (email_str) => {
        const error_message = validation.email(email_str) || submit_error_msg

        if (submit_error_msg) {
            setSubmitErrorMsg('')
            setSubmitStatus('')
        }

        return error_message
    }

    const validateName = (name_str) => {
        const error_message = validation.name(name_str) || submit_error_msg

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

    const clearName = () => {
        setName('')
        setNameErrorMsg('')
    }

    const customerioData = () => {
        window._cio.identify({
            id: email,
            email,
            country: user_country,
            created_at: Math.round(Date.now() / 1000),
            name,
            type: 'Academy',
            unsubscribed: true,
        })
        window._cio.track('academy_subscription', {
            id: email,
        })
    }

    const handleEmailSignup = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formattedEmail = email.replace(/\s/g, '')
        handleValidation(email, 'email')
        handleValidation(name, 'name')
        const has_error_email = validateEmail(formattedEmail)
        const has_error_name = validateName(formattedEmail)

        if (has_error_email || has_error_name || email_error_msg || name_error_msg) {
            return setIsSubmitting(false)
        }

        customerioData()
        submit_status && setSubmitStatus('success')
        clearName()
        clearEmail()
    }

    return (
        <SubscribeBannerWrapper fd="column">
            <Flex>
                <ImageWrapper src={EmailSubscriptionSVG} />
            </Flex>
            <StyledHeader as="h3" type="subtitle-1">
                {localize('Subscribe to our academy via email')}
            </StyledHeader>
            <StyledSmallHeader as="h3" type="paragraph-2" weight="normal">
                {localize(
                    'Be among the first to get new content delivered to your inbox once a month by subscribing to our blog updates.  ',
                )}
            </StyledSmallHeader>
            <EmailForm onSubmit={handleEmailSignup} noValidate>
                <Flex fd="column">
                    <InputWrapper>
                        <Input
                            placeholder="Your name"
                            autoComplete="off"
                            id="name"
                            name="text"
                            type="text"
                            value={name}
                            maxLength={70}
                            required
                            onChange={handleInputNameChange}
                        />

                        {name_error_msg && (
                            <>
                                <ErrorMessages lh="1.4" align="left">
                                    {name_error_msg}
                                </ErrorMessages>

                                <StyledError
                                    src={CrossIcon}
                                    alt="error icon"
                                    onClick={() => {
                                        clearName()
                                    }}
                                />
                            </>
                        )}
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Your email address"
                            autoComplete="off"
                            id="email"
                            name="email"
                            type="text"
                            maxLength={254}
                            value={email}
                            required
                            onChange={handleInputChange}
                        />
                        {email_error_msg && (
                            <>
                                <ErrorMessages lh="1.4" align="left">
                                    {email_error_msg}
                                </ErrorMessages>

                                <StyledError
                                    src={CrossIcon}
                                    alt="error icon"
                                    onClick={() => {
                                        clearEmail()
                                    }}
                                />
                            </>
                        )}
                        <EmailButton
                            id="gtm-signup-email"
                            type="submit"
                            secondary
                            disabled={Boolean(
                                is_submitting ||
                                    email_error_msg ||
                                    !email ||
                                    name_error_msg ||
                                    !name,
                            )}
                        >
                            {localize('Subscribe')}
                        </EmailButton>
                        {submit_status === true && (
                            <>
                                <AgreementLabel
                                    isChecked={is_checked}
                                    handleChangeCheckbox={handleChange}
                                    color="#C2C2C2"
                                    link_text={localize('Send me marketing materials too!')}
                                />
                                <AdditionalFlex color="#C2C2C2">
                                    <Localize
                                        translate_text="We respect your privacy and protect your information. Read our <0>Privacy policy</0> to find out more."
                                        components={[
                                            <StyledLocalizedLink
                                                key={0}
                                                type="tnc/security-and-privacy.pdf"
                                                external
                                                rel="noopener noreferrer"
                                                size="14px"
                                                color="red"
                                            />,
                                        ]}
                                    />
                                </AdditionalFlex>
                            </>
                        )}
                    </InputWrapper>
                </Flex>

                {submit_status === 'success' && (
                    <TextWrapper
                        color={'var(--color-green)'}
                        font_size={'12px'}
                        margin_top={'10px'}
                    >
                        <Localize translate_text="Thanks for subscribing. We've sent a confirmation email to your inbox" />
                    </TextWrapper>
                )}
                {submit_status === false && (
                    <TextWrapper color={'var(--color-red)'} font_size={'12px'} margin_top={'10px'}>
                        <Localize translate_text="If you have AdBlock installed, please disable it in order to subscribe" />
                    </TextWrapper>
                )}
            </EmailForm>
        </SubscribeBannerWrapper>
    )
}

export default SideSubscriptionBanner
