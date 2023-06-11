import React, { useState } from 'react'
import styled from 'styled-components'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

type SignupCtraderProps = {
    autofocus?: boolean
    clearEmail?: () => void
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleSocialSignup?: (event) => void
    handleValidation?: (event) => void
    is_ppc?: boolean
    is_submitting?: boolean
}
const SignupContent = styled.div`
    margin-top: 8rem;
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 6rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;

    @media ${device.mobileL} {
        width: 100%;
        padding: 0;
    }
`

const SubTitle = styled(Text)`
    padding: 1.5rem 0;
`

const InputGroup = styled.div`
    position: relative;
    width: 100%;
`
const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    width: 100%;
    height: 40px;
    border-radius: 16px;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        margin-top: ${(props) => props.mt};
        margin-bottom: ${(props) => props.mb};
        font-size: 2rem;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`

const Title = styled.h2`
    font-size: 24px;
`

const SignupCtrader = ({
    autofocus,
    clearEmail,
    email,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleValidation,
    is_submitting,
}: SignupCtraderProps) => {
    const [is_checked, setChecked] = useState(false)
    const { is_eu } = useRegion()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    return (
        <SignupContent>
            <Title>Let’s start!</Title>
            <SubTitle>
                <Localize translate_text="_t_Enter your email address to begin_t_" />
            </SubTitle>
            <InputGroup>
                <Input
                    id="dm-email-input"
                    name="email"
                    type="text"
                    border="solid 1.5px var(--color-grey-7)"
                    label_color="grey-5"
                    label_hover_color="grey-5"
                    background="white"
                    error={email_error_msg}
                    value={email}
                    label={localize('_t_Email_t_')}
                    placeholder={'Email'}
                    handleError={clearEmail}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    autoFocus={autofocus}
                    autoComplete="off"
                    required
                />
            </InputGroup>
            <AgreementLabel isChecked={is_checked} handleChangeCheckbox={handleChange} />
            <EmailButton
                isChecked={is_checked}
                type="submit"
                secondary
                disabled={is_submitting || !is_checked || email_error_msg !== '' || !email}
                id="dm-new-signup"
            >
                <Localize translate_text="_t_Create demo account_t_" />
            </EmailButton>
            <Header as="p" type="small" weight="400" color="grey-5" mt="0.8rem" mb="2rem">
                <Localize
                    translate_text="_t_By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy</0>._t_"
                    components={[
                        <LocalizedLinkText
                            key={0}
                            to={`/tnc${is_eu ? '/eu' : ''}/security-and-privacy.pdf`}
                            size="1.2rem"
                            color="red"
                            rel="noopener noreferrer"
                            target="_blank"
                            external
                        />,
                    ]}
                />
            </Header>
            <LoginText mt="3.75rem" mb={is_eu ? '100px' : '0'}>
                <Localize translate_text="_t_Already have an account?_t_" />
                <StyledLinkText
                    id="dm-new-login-button"
                    ml="0.4rem"
                    size="16px"
                    color="red"
                    onClick={handleLogin}
                >
                    <Localize translate_text="_t_Log in_t_" />
                </StyledLinkText>
            </LoginText>
        </SignupContent>
    )
}

export default SignupCtrader
