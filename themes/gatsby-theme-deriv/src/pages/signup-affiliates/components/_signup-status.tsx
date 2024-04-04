import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import affiliate_validation from '../validations/_affilaite_validation'
import AffiliateInput from '../utils/_affiliate-input'
import { SignUpStatusProps } from '../_types'
import { trackEvent } from '../utils/_utils'
import Image from 'features/components/atoms/image'
import { localize, Localize } from 'components/localization'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { Button } from 'components/form'
import { Background } from 'pages/signup-affiliates/components/wizard-component'
import { Header } from 'components/elements'
import device from 'themes/device'
import Success from 'images/svg/signup-affiliates/success.svg'
import Failed from 'images/svg/signup-affiliates/failed.svg'
import CloseSVG from 'images/svg/custom/close-2.svg'

const StyledButton = styled(Button)`
    inline-size: fit-content;
    gap: 8px;
    margin-block-start: 12px;
`
const ButtonComposition = styled.div`
    display: flex;
    flex-direction: row;
`
const ProgressModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
`
const Modal = styled.div<{ ai?: string; is_rtl?: boolean }>`
    z-index: 101;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: ${({ ai }) => ai || 'center'};
    justify-content: center;
    inline-size: 100%;
    max-inline-size: 486px;
    border-radius: 8px;
    padding: 24px;
    gap: 24px;
    transform: ${({ is_rtl }) => (is_rtl ? 'unset' : 'translate(-50%, -50%)')};
    position: fixed;
    top: ${({ is_rtl }) => (is_rtl ? '30%' : '50%')};
    left: ${({ is_rtl }) => (is_rtl ? 'unset' : '50%')};
    background-color: white;
    box-shadow: 0 20px 24px -4px #0e0e0e14;

    @media ${device.tabletL} {
        padding: 16px;
        gap: 16px;
    }
    @media ${device.tabletS} {
        max-inline-size: 328px;
    }
`
const StyledSpinner = styled.svg`
    animation: rotate 1s linear infinite;
    margin: 40px;
    width: 200px;
    height: 200px;
    z-index: 105;

    & .path {
        stroke: var(--color-red-5);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`
const CloseButton = styled.img`
    z-index: 102;
    &:hover {
        cursor: pointer;
    }
`

const user_name = localize('_t_Username*_t_')
const web_site = localize('_t_Website/social media URL*_t_')

const AffiliateSignupStatus = ({
    signup_status,
    setSignupStatus,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
}: SignUpStatusProps) => {
    const [username_error, setUsernameError] = useState<string>(' ')
    const [website_url_error, setWebsiteUrlError] = useState<string>(' ')
    const is_rtl = useIsRtl()

    const handleStateChange = useCallback(
        ({ e, field }: { e?: React.ChangeEvent<HTMLInputElement>; field: string }) => {
            e?.preventDefault()
            const value = e?.target?.value ?? ''
            setAffiliateAccount((prev) => ({
                ...prev,
                account_details: {
                    ...prev.account_details,
                    [field]: value,
                },
            }))
            field === 'username' && setUsernameError(affiliate_validation.username(value))
            field === 'website_url' && setWebsiteUrlError(affiliate_validation.website_url(value))
        },
        [],
    )

    const handleSuccess = useCallback((action: 'close_wizard' | 'success_popup_cta') => {
        trackEvent({ action })
        window.location.href = ' https://deriv.com/partners/affiliate-ib/'
    }, [])

    const handleIssue = useCallback(() => {
        trackEvent({ action: 'failed_popup_cta' })
        setSignupStatus('')
    }, [])

    const handleTryAgain = useCallback(() => {
        setSignupStatus('loading')
        onSubmit()
    }, [signup_status, onSubmit])

    return (
        <>
            {signup_status == 'success' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <Image src={Success} alt="email" width="100" height="100" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text="_t_Thank you for signing up_t_" />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="normal">
                            <Localize translate_text="_t_Your application has been received. We’re processing your application. You can expect to hear back from us within 3 to 5 business days._t_" />
                        </Header>
                        <StyledButton secondary onClick={() => handleSuccess('success_popup_cta')}>
                            <Localize translate_text="_t_Got it_t_" />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status === 'closing wizard' && (
                <ProgressModal>
                    <Modal ai="flex-end" is_rtl={is_rtl}>
                        <Header type="subtitle-1" align="left">
                            <Localize
                                translate_text={
                                    '_t_Are you sure you want to cancel your registration?_t_'
                                }
                            />
                        </Header>
                        <Header type="paragraph-1" align="left" weight="normal">
                            <Localize
                                translate_text="_t_If you hit <0>Yes</0>, the details you entered will be lost, and you’ll need to restart the registration process._t_"
                                components={[<strong key={0} />]}
                            />
                        </Header>
                        <ButtonComposition>
                            <StyledButton
                                tertiary
                                mr="8px"
                                onClick={() => handleSuccess('close_wizard')}
                            >
                                <Localize translate_text="_t_Yes_t_" />
                            </StyledButton>
                            <StyledButton secondary onClick={() => setSignupStatus('')}>
                                <Localize translate_text="_t_No, continue_t_" />
                            </StyledButton>
                        </ButtonComposition>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'loading' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <CloseButton src={CloseSVG} onClick={handleIssue} />
                        <StyledSpinner viewBox="0 0 50 50">
                            <circle
                                className="path"
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="2"
                            />
                        </StyledSpinner>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'lost connection' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <Image src={Failed} alt="email" width="100" height="100" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text="_t_Signup failed_t_" />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="normal">
                            <Localize translate_text="_t_We’re unable to process your sign-up request at this time. Please try again._t_" />
                        </Header>
                        <StyledButton secondary onClick={handleIssue}>
                            <Localize translate_text="_t_Try again_t_" />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'unhandled error' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <Image src={Failed} alt="email" width="100" height="100" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text="_t_Signup failed_t_" />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="normal">
                            <Localize translate_text="_t_Something went wrong. Please check your details and try again._t_" />
                        </Header>
                        <StyledButton secondary onClick={handleIssue}>
                            <Localize translate_text="_t_Try again_t_" />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'Username not available' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <Image src={Failed} alt="email" width="100" height="100" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text="_t_Signup failed_t_" />
                        </Header>
                        <Header
                            type="paragraph-1"
                            align="center"
                            weight="normal"
                            pt="8px"
                            pb="12px"
                        >
                            <Localize translate_text="_t_Username already exists. Please enter another:_t_" />
                        </Header>
                        <AffiliateInput
                            type="text"
                            label={user_name}
                            placeholder={user_name}
                            value={affiliate_account.account_details.username}
                            error={username_error}
                            onChange={(e) => handleStateChange({ e, field: 'username' })}
                            handleError={() => handleStateChange({ field: 'username' })}
                            required
                        />
                        <StyledButton
                            disabled={!!username_error}
                            secondary
                            onClick={handleTryAgain}
                        >
                            <Localize translate_text="_t_Change username_t_" />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
            {signup_status == 'Your website is not a valid entry' && (
                <ProgressModal>
                    <Modal is_rtl={is_rtl}>
                        <Image src={Failed} alt="email" width="100" height="100" />
                        <Header type="subtitle-1" align="center">
                            <Localize translate_text="_t_Signup failed_t_" />
                        </Header>
                        <Header type="paragraph-1" align="center" weight="normal">
                            <Localize translate_text="_t_Your website is not a valid entry. Please enter another:_t_" />
                        </Header>
                        <AffiliateInput
                            type="text"
                            label={web_site}
                            placeholder={web_site}
                            value={affiliate_account.account_details.website_url}
                            error={website_url_error}
                            onChange={(e) => handleStateChange({ e, field: 'website_url' })}
                            handleError={() => handleStateChange({ field: 'website_url' })}
                            required
                        />
                        <StyledButton
                            disabled={!!website_url_error}
                            secondary
                            onClick={handleTryAgain}
                        >
                            <Localize translate_text="_t_Change website url_t_" />
                        </StyledButton>
                    </Modal>
                    <Background />
                </ProgressModal>
            )}
        </>
    )
}

export default AffiliateSignupStatus
