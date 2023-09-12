import React, { useState } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import affiliate_validation from '../validations/_affilaite_validation'
import AffiliateInput from '../utils/_affiliate-input'
import { localize, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'

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

type AffiliateSignupFormProps = {
    affiliate_account: any
    setAffiliateAccount: any
    setShowWizard: any
}
const AffiliateSignupForm = ({
    affiliate_account,
    setAffiliateAccount,
    setShowWizard,
}: AffiliateSignupFormProps) => {
    const [email_error_msg, setEmailErrorMsg] = useState('')
    const [captcha_status, setCaptchaStatus] = useState(false)
    const handleInput = (e) => {
        const { value } = e.target
        setAffiliateAccount({ ...affiliate_account, email: value })
        setEmailErrorMsg(affiliate_validation.email(value))
    }

    return (
        <>
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
                    <Localize translate_text={'_t_Deriv IB Programme_t_'} />
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
                    <Header as="p" type="paragraph-2" weight="normal" align="center" color="grey-5">
                        <Localize translate_text={'_t_Want to sign up as a trader?_t_'} />
                        <LocalizedLinkText to="/signup">
                            <StyledLinkText id="dm-new-login-button" size="14px" color="grey-5">
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
                        value={affiliate_account.email}
                        label={localize('_t_Email_t_')}
                        placeholder={'Email'}
                        autoComplete="off"
                        handleError={() => setAffiliateAccount({ ...affiliate_account, email: '' })}
                        onChange={handleInput}
                        onBlur={handleInput}
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
                    onClick={() => setShowWizard(true)}
                    // disabled={!(captcha_status && email && !email_error_msg)}
                    disabled={!(affiliate_account.email && !email_error_msg)}
                >
                    <Localize translate_text={'_t_Create partner account_t_'} />
                </EmailButton>
                <LoginContainer>
                    <Typography.Paragraph>
                        <Localize
                            translate_text={'_t_Already have a Deriv affiliate account? _t_'}
                        />
                    </Typography.Paragraph>
                    <Link
                        url={{ type: 'company', url_name: 'affiliate_sign_in' }}
                        align={'center'}
                        no_hover
                    >
                        <Typography.Paragraph textcolor={'brand'} ml={'2x'}>
                            <Localize translate_text={'_t_Log in_t_'} />
                        </Typography.Paragraph>
                    </Link>
                </LoginContainer>
            </SignUpWrapper>
        </>
    )
}

export default AffiliateSignupForm
