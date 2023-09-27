import React, { useState } from 'react'
import styled from 'styled-components'
import affiliate_validation from '../validations/_affilaite_validation'
import AffiliateInput from '../utils/_affiliate-input'
import { SignUpStatusProps } from '../_types'
import Image from 'features/components/atoms/image'
import { localize, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { Background } from 'pages/signup-affiliates/components/wizard-component'
import { Header } from 'components/elements'
import device from 'themes/device'
import Success from 'images/svg/signup-affiliates/success.svg'
import Failed from 'images/svg/signup-affiliates/failed.svg'

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
    box-shadow: 0 12px 16px -4px #0e0e0e14;
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
    z-index: 101;
`
const Modal = styled.div`
    z-index: 102;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 546px;
    border-radius: 8px;
    padding: 40px;
    transform: translate(-50%, -50%);
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    box-shadow: 0 20px 24px -4px #0e0e0e14;

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

const AffiliateSignupStatus = ({
    signup_status,
    setSignupStatus,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
}: SignUpStatusProps) => {
    const [username_error, setUsernameError] = useState()
    const [website_url_error, setWebsiteUrlError] = useState()

    return (
        <>
            {signup_status == 'success' && (
                <ProgressModal>
                    <Modal>
                        <Image src={Success} alt="email" width="64" height="64" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text={'_t_Thank you for signing up_t_'} />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="400" pt="8px">
                            <Localize translate_text="_t_We've sent you an email about your application status._t_" />
                        </Header>
                        <StyledButton
                            secondary
                            onClick={() => {
                                setSignupStatus('')
                            }}
                        >
                            <Localize translate_text={'_t_Got it_t_'} />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'lost connection' && (
                <ProgressModal>
                    <Modal>
                        <img src={Failed} alt="email" width="64" height="64" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text={'_t_Signup failed_t_'} />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="400" pt="8px">
                            <Localize translate_text="_t_We've having trouble signing you up right now. Please try again in 2 minutes_t_" />
                        </Header>
                        <StyledButton
                            secondary
                            onClick={() => {
                                setSignupStatus('')
                            }}
                        >
                            <Localize translate_text={'_t_Try again_t_'} />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'Username not available' && (
                <ProgressModal>
                    <Modal>
                        <Image src={Failed} alt="email" width="64" height="64" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text={'_t_Signup failed_t_'} />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="400" pt="8px" pb="12px">
                            <Localize translate_text="_t_Username already exists. Please enter another:_t_" />
                        </Header>
                        <AffiliateInput
                            type={'text'}
                            value={affiliate_account.personal_details.username}
                            error={username_error}
                            label={localize('_t_User name_t_')}
                            placeholder={'Username'}
                            extra_info={' '}
                            onChange={(e) => {
                                setUsernameError(affiliate_validation.username(e.target.value))
                                setAffiliateAccount({
                                    ...affiliate_account,
                                    personal_details: {
                                        ...affiliate_account.personal_details,
                                        username: e.target.value,
                                    },
                                })
                            }}
                            handleError={() => {
                                setAffiliateAccount({
                                    ...affiliate_account,
                                    personal_details: {
                                        ...affiliate_account.personal_details,
                                        username: '',
                                    },
                                })
                            }}
                            required
                        />
                        <StyledButton
                            secondary
                            onClick={() => {
                                setSignupStatus('')
                                onSubmit()
                            }}
                        >
                            <Localize translate_text={'_t_Change username_t_'} />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'Your website is not a valid entry' && (
                <ProgressModal>
                    <Modal>
                        <Image src={Failed} alt="email" width="64" height="64" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text={'_t_Signup failed_t_'} />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="400" pt="8px" pb="12px">
                            <Localize translate_text="_t_Your website is not a valid entry. Please enter another:_t_" />
                        </Header>
                        <AffiliateInput
                            type={'text'}
                            value={affiliate_account.personal_details.website_url}
                            error={website_url_error}
                            label={localize('_t_Website url_t_')}
                            placeholder={'Username'}
                            extra_info={' '}
                            onChange={(e) => {
                                setWebsiteUrlError(affiliate_validation.website_url(e.target.value))
                                setAffiliateAccount({
                                    ...affiliate_account,
                                    personal_details: {
                                        ...affiliate_account.personal_details,
                                        website_url: e.target.value,
                                    },
                                })
                            }}
                            handleError={() => {
                                setAffiliateAccount({
                                    ...affiliate_account,
                                    personal_details: {
                                        ...affiliate_account.personal_details,
                                        website_url: '',
                                    },
                                })
                            }}
                            required
                        />
                        <StyledButton
                            secondary
                            onClick={() => {
                                setSignupStatus('')
                                onSubmit()
                            }}
                        >
                            <Localize translate_text={'_t_Change website url_t_'} />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
        </>
    )
}

export default AffiliateSignupStatus
