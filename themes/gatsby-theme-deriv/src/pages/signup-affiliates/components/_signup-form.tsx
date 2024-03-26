import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import affiliate_validation from '../validations/_affilaite_validation'
import AffiliateInput from '../utils/_affiliate-input'
import { SignUpFormProps } from '../_types'
import { trackEvent } from '../utils/_utils'
import { localize, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { Header, LinkText } from 'components/elements'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import { getLanguage } from 'common/utility'
import device from 'themes/device'

const StyledNote = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 8px 0;
    margin: 24px 16px;
    inline-size: 406px;
    border-radius: 8px;
    background-color: #f8f8f9;

    @media ${device.tabletL} {
        inline-size: 100%;
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
    inline-size: 100%;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-block-end: 24px;

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const LoginContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`
const StyledFlex = styled(Container)`
    display: flex;
    flex-direction: column;
    block-size: 510px;
    inline-size: 100%;
    max-inline-size: 486px;
    margin: 0;

    @media ${device.tabletL} {
        justify-content: flex-start;
        max-inline-size: 328px;
        block-size: 100%;
        padding-block: 24px;
    }
`
export const SignUpWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 24px 34px;
    margin: 0;
    inline-size: 100%;
    max-inline-size: 486px;
    background: var(--color-white);
    border-radius: 6px;
    box-shadow: 0 12px 16px -4px #0e0e0e14;

    @media ${device.tabletS} {
        box-shadow: unset;
        justify-content: flex-end;
        padding: 0;
    }
`
const email = localize('_t_Email_t_')
let language = getLanguage()
language = language !== 'en' ? '/' + language : ''

const AffiliateSignupForm = ({
    affiliate_account,
    setAffiliateAccount,
    setShowWizard,
}: SignUpFormProps) => {
    const [email_error_msg, setEmailErrorMsg] = useState('')

    const handleStateChange = useCallback(
        ({ e, field }: { e?: React.ChangeEvent<HTMLInputElement>; field: string }) => {
            e?.preventDefault()
            const value = e?.target?.value ?? ''
            setAffiliateAccount({ ...affiliate_account, [field]: value })
            setEmailErrorMsg(affiliate_validation.email(value))
        },
        [],
    )

    return (
        <>
            <StyledFlex jc="center" fd="column">
                <Header mb="8px" as="h3" type="heading-3">
                    <Localize translate_text="_t_Deriv Affiliate_t_" />
                </Header>
                <Header mb="24px" as="div" type="paragraph-1" weight="normal">
                    <Localize
                        translate_text={
                            '_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ from option trading platforms._t_'
                        }
                    />
                </Header>
                <Header mb="8px" as="h3" type="heading-3">
                    <Localize translate_text="_t_Deriv IB Programme_t_" />
                </Header>
                <Header as="div" type="paragraph-1" weight="normal">
                    <Localize
                        translate_text={
                            "_t_Our introducing broker programme is available to all Deriv affiliates. Earn commission from your clients' trades on Deriv's CFD trading platforms._t_"
                        }
                    />
                </Header>
            </StyledFlex>
            <SignUpWrapper>
                <Header as="h3" type="heading-3" mb="24px">
                    <Localize translate_text="_t_Sign up_t_" />
                </Header>
                <Header as="div" type="subtitle-1" weight="normal">
                    <Localize translate_text="_t_Enter your email address to begin_t_" />
                </Header>
                <StyledNote>
                    <Header
                        as="div"
                        type="paragraph-2"
                        weight="normal"
                        align="center"
                        color="black-3"
                    >
                        <Localize translate_text="_t_Want to sign up as a trader?_t_" />
                        <Typography.Link href={`${language}/signup`} textcolor="brand" ml="2x">
                            <Localize translate_text="_t_Create a Deriv account_t_" />
                        </Typography.Link>
                    </Header>
                </StyledNote>
                <InputGroup>
                    <AffiliateInput
                        required
                        id="dm-email-input"
                        type="text"
                        error={email_error_msg}
                        value={affiliate_account.email}
                        label={email}
                        placeholder={email}
                        onChange={(e) => handleStateChange({ e, field: 'email' })}
                        handleError={() => handleStateChange({ field: 'email' })}
                    />
                </InputGroup>
                <EmailButton
                    type="submit"
                    secondary
                    onClick={() => {
                        window.scrollTo(0, 0)
                        trackEvent({ action: 'open_wizard', email: affiliate_account.email })
                        setShowWizard(true)
                    }}
                    disabled={!(affiliate_account.email && !email_error_msg)}
                >
                    <Localize translate_text="_t_Create partner account_t_" />
                </EmailButton>
                <LoginContainer>
                    <Typography.Paragraph>
                        <Localize translate_text="_t_Already have a Deriv affiliate account? _t_" />
                    </Typography.Paragraph>
                    <Link
                        url={{ type: 'company', url_name: 'affiliate_sign_in' }}
                        align="center"
                        no_hover
                    >
                        <Typography.Paragraph textcolor="brand" ml="2x">
                            <Localize translate_text="_t_Log in_t_" />
                        </Typography.Paragraph>
                    </Link>
                </LoginContainer>
            </SignUpWrapper>
        </>
    )
}

export default AffiliateSignupForm
