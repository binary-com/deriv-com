import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title, TextWrapper } from './_common'
import paperPlane from 'images/common/blog/paperplanes.png'
import validation from 'common/validation'
import { Input, Button } from 'components/form'
import { Localize, localize } from 'components/localization'
import { LocalizedLinkText } from 'components/elements'
import { Flex } from 'components/containers'
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device.js'
import { DerivStore } from 'store'

const SignupFormWrapper = styled(Flex)`
    width: 100%;
    align-items: initial;
    justify-content: initial;
    background: var(--color-blue-3);
    padding: 40px 80px;
    border-radius: 8px;
    position: relative;

    @media ${device.tabletL} {
        padding: 200px 20px 40px;
    }
    @media ${device.tabletS} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`
const PaperPlaneImage = styled.img`
    position: absolute;
    right: 50px;
    bottom: 0;

    @media screen and (max-width: 1330px) and (min-width: 991px) {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 240px;
    }

    @media ${device.tabletL} {
        position: absolute;
        top: 20px;
        width: 280px;
        left: 50%;
        transform: translateX(-50%);
    }
`
const StyledFormContent = styled.div`
    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;

        h3,
        p {
            width: 100%;
            max-width: 100%;
        }
    }
`
const InputWrapper = styled.div`
    display: flex;

    > div:last-child {
        margin-left: 10px;
    }
    input {
        text-transform: none;
        font-size: 12px;
    }
    input#name {
        width: 212px;
    }
    p {
        padding-left: 0;
        margin-top: 5px;
    }
    input#email {
        width: 300px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    @media screen and (max-width: 1330px) and (min-width: 991px) {
        input#name {
            width: 100%;
        }
        input#email {
            width: 200px;
        }
    }
    @media screen and (max-width: 991px) {
        > div:last-child {
            margin-left: 0;
        }
    }
    @media ${device.tabletL} {
        margin-right: 0;
        flex-direction: column;

        input {
            margin-left: 0 !important;
            width: 100% !important;
        }
        input#email {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
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

    .link-text {
        color: var(--color-grey-19);
        font-weight: bold;
    }

    @media ${device.tabletL} {
        > div {
            flex-direction: column;
        }
    }
`
const EmailButton = styled(Button)`
    padding: 9px 28px;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        margin-left: 0;
        height: 40px;
        width: auto;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`
const AdditionalFlex = styled.div`
    margin-top: 10px;
    font-size: var(--text-size-xs);
    line-height: 20px;
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const Subscribe = () => {
    const [is_checked, setChecked] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [name_error_msg, setNameErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')

    const { is_eu_country, user_country } = React.useContext(DerivStore)

    useEffect(() => {
        addScriptForCIO()
        const options = {
            headers: new Headers({ 'content-type': 'application/json' }),
            mode: 'no-cors',
        }
        const url = 'https://assets.customer.io/assets/track.js'
        fetch(url, options)
            .then(() => {
                setSubmitStatus(true)
            })
            .catch(() => {
                setSubmitStatus(false)
            })
    }, [])

    const addScriptForCIO = () => {
        const addScript = (settings) => {
            const script = document.createElement('script')
            const { async, text, src, id } = settings

            if (async) script.async = settings['async']
            if (text) script.text = settings['text']
            if (src) script.src = settings['src']
            if (id) script.id = settings['id']
            document.body.appendChild(script)
        }
        const site_id = process.env.GATSBY_ENV_CIO_SITE_ID

        let cio_url = 'https://assets.customer.io/assets/track.js'
        if (is_eu_country) {
            cio_url = 'https://assets.customer.io/assets/track-eu.js'
        }

        addScript({
            text: `
            var _cio = _cio || [];
            var a,b,c;a=function(f){return function(){_cio.push([f].
            concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
            "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
            var t = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
            t.async = true;
            t.id    = 'cio-tracker';
            t.setAttribute('data-site-id', '${site_id}');
            t.src = '${cio_url}' 
            //If your account is in the EU, use:
            s.parentNode.insertBefore(t, s);`,
        })
    }

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
            created_at: Math.round(Date.now() / 1000),
            name,
            type: 'Academy',
            country: user_country,
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
        <SignupFormWrapper>
            <PaperPlaneImage src={paperPlane} alt="Paper Plane" />
            <StyledFormContent>
                <Title
                    as="h3"
                    color={'white'}
                    text_align={'left'}
                    font_size={['24px', '18px']}
                    line_height={['36px', '26px']}
                >
                    {localize('Subscribe to our academy via email')}
                </Title>
                <TextWrapper
                    color={'white'}
                    font_size={['16px', '14px']}
                    line_height={['22px', '18px']}
                    max_width={['684px', '291px']}
                >
                    {localize(
                        'Be among the first to get new content delivered to your inbox once a month by subscribing to our blog updates.',
                    )}
                </TextWrapper>
                <InputGroupForm onSubmit={handleEmailSignup} noValidate>
                    <Flex jc="flex-start">
                        <InputWrapper>
                            <Input
                                required
                                id="name"
                                name="text"
                                type="text"
                                error={name_error_msg}
                                value={name}
                                background="white"
                                tabletBackground="green-1"
                                inputBackground="grey-8"
                                labelFocusColor="grey-7"
                                labelColor="black-3"
                                labelSize="16px"
                                labelTop="1.2rem"
                                placeholder={'Your name'}
                                handleError={clearName}
                                onChange={handleInputNameChange}
                                autoComplete="off"
                                border="unset"
                                maxLength="70"
                                height="40px"
                                focusBorder="var(--color-grey-7)"
                            />
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                error={email_error_msg}
                                value={email}
                                background="white"
                                tabletBackground="green-1"
                                inputBackground="grey-8"
                                labelFocusColor="grey-7"
                                labelColor="black-3"
                                labelSize="16px"
                                labelTop="1.2rem"
                                placeholder={'Your email address'}
                                handleError={clearEmail}
                                onChange={handleInputChange}
                                autoComplete="off"
                                required
                                border="unset"
                                height="40px"
                                maxLength="254"
                                focusBorder="var(--color-grey-7)"
                            />
                        </InputWrapper>
                        <EmailButton
                            isChecked={is_checked}
                            id="gtm-signup-email"
                            type="submit"
                            secondary="true"
                            disabled={
                                is_submitting ||
                                !is_checked ||
                                email_error_msg ||
                                !email ||
                                name_error_msg ||
                                !name
                            }
                        >
                            {localize('Subscribe')}
                        </EmailButton>
                    </Flex>
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
                                    fontSize="var(--text-size-xs)"
                                    translate_text="We respect your privacy and protect your information. Read our <0>Privacy policy</0> to find out more."
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            type="tnc/security-and-privacy.pdf"
                                            external="true"
                                            rel="noopener noreferrer"
                                            size="14px"
                                            color="red"
                                        />,
                                    ]}
                                />
                            </AdditionalFlex>
                        </>
                    )}
                    {submit_status === 'success' && (
                        <TextWrapper color={'#01a79f'} font_size={15} margin_top={'10px'}>
                            <Localize translate_text="Thanks for subscribing. We've sent a confirmation email to your inbox" />
                        </TextWrapper>
                    )}
                    {submit_status === false && (
                        <TextWrapper color={'#ff444f'} font_size={15} margin_top={'10px'}>
                            <Localize translate_text="If you have AdBlock installed, please disable it in order to subscribe" />
                        </TextWrapper>
                    )}
                </InputGroupForm>
            </StyledFormContent>
        </SignupFormWrapper>
    )
}

Subscribe.propTypes = {
    ebook_utm_code: PropTypes.string,
    onSubmit: PropTypes.func,
}

export default Subscribe
