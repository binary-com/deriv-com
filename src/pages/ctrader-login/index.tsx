import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from 'components/containers'
import { Button } from 'components/form'
import { Localize, LocalizedLink, WithIntl } from 'components/localization'
import device from 'themes/device'
import Login, { TSocialProvider } from 'common/login'
import { Header, QueryImage } from 'components/elements'
import useScreenSize from 'components/hooks/use-screen-size'
import AgreementLabel from 'components/custom/_agreement-label'

const query = graphql`
    {
        ctrader_desktop: file(relativePath: { eq: "ctrader/ctrader_desktop.png" }) {
            ...fadeIn
        }
        ctrader_mobile: file(relativePath: { eq: "ctrader/ctrader_mobile.png" }) {
            ...fadeIn
        }
        password_icon: file(relativePath: { eq: "ctrader/password_icon.png" }) {
            ...fadeIn
        }
    }
`
const ResponsiveStyle = css`
    width: 100%;
    max-width: 406px;
    min-width: 328px;
`
const PageLayout = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
    padding: 0 80px;
`
const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    width: 100%;
    max-width: 486px;
    min-width: 360px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.05), 0 24px 24px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    @media ${device.tabletL} {
        padding: 24px 16px;
    }
`
const StyledQueryImage = styled(QueryImage)`
    margin: 0 auto 24px;
`
const StyledHeader = styled(Header)<{ mh?: string }>`
    font-weight: normal;
    white-space: nowrap;
    min-height: ${({ mh }) => mh};
`
const StyledSocial = styled(Header)`
    inline-size: unset;
    padding-left: 10px;
`
const StyledInput = styled.input`
    font-size: 14px;
    height: 40px;
    width: 100%;
    border: 1px solid var(--color-grey-7);
    border-radius: 15px;
    display: block;
    padding: 10px 16px;
    ${ResponsiveStyle}

    &::placeholder {
        color: var(--color-grey-5);
        opacity: 1;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
`
const PasswordBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 20px 0 28px;
`
const PasswordIcon = styled(QueryImage)`
    position: absolute;
    left: 88%;
    cursor: pointer;
`
const AgreementBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    ${ResponsiveStyle}
`
const StyledButton = styled(Button)`
    height: 40px;
    border-radius: 16px;
    width: 100%;
    ${ResponsiveStyle}
`
const Line = styled.div`
    width: 100%;
    max-width: 137.5px;
    min-width: 104.5px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const AlternativeLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SocialButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SocialButton = styled.button<{ color?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: ${({ color }) => color || 'var(--color-white)'};
    border: 0.5px solid ${({ color }) => color || '#414652'};
    border-radius: 16px;
    height: 40px;
    padding: 10px 16px;
    margin-bottom: 8px;
    ${ResponsiveStyle}

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)<{ pt?: boolean; no_decor?: boolean }>`
    color: var(--color-red);
    align-self: center;
    padding-top: ${({ pt }) => (pt ? '16px' : '')};
    text-decoration: ${({ no_decor }) => (no_decor ? 'none' : 'underline')};

    ${Header} {
        color: var(--color-red);
    }

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const CTraderLogin = () => {
    const { is_mobile_or_tablet } = useScreenSize()
    const [is_checked, setChecked] = useState(false)
    const [error_msg, setErrorMsg] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [is_password_visible, setPasswordVisible] = useState(false)

    const data = useStaticQuery(query)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleCheck = (e) => {
        setChecked(e.currentTarget.checked)
    }
    const handleSocialSignup = (e) => {
        e.preventDefault()

        const data_provider: TSocialProvider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(data_provider)
    }
    const header_style = {
        width: '100%',
        'max-width': '406px',
        'min-width': '328px',
    }
    return (
        <PageLayout>
            <SEO
                title={'_t_CTrader | Sign up/Log in | Deriv_t_'}
                description={'_t_CTrader Sign up/Log in._t_'}
            />
            <LoginForm>
                <StyledQueryImage
                    data={data[is_mobile_or_tablet ? 'ctrader_mobile' : 'ctrader_desktop']}
                    alt="ctrader image"
                />
                <Header as="h1" type="subtitle-1" pb="8px" style={header_style}>
                    <Localize translate_text="_t_Welcome back!_t_" />
                </Header>
                <StyledHeader as="h2" type="paragraph-1" pb="8px" style={header_style}>
                    <Localize translate_text="_t_It's good to see you again. Log in to start trading._t_" />
                </StyledHeader>
                <StyledHeader as="p" type="paragraph-1" color="red" mh="24px">
                    {error_msg && <Localize translate_text="_t_Error_t_" />}
                </StyledHeader>
                <StyledInput
                    type="text"
                    value={email}
                    placeholder={'Enter your email or cTrader ID'}
                    onChange={handleEmailChange}
                    onBlur={handleEmailChange}
                    required
                />
                <PasswordBox>
                    <StyledInput
                        type={is_password_visible ? 'text' : 'password'}
                        value={password}
                        placeholder={'Enter your password'}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordChange}
                        required
                    />
                    <PasswordIcon
                        data={data['password_icon']}
                        alt="show password"
                        loading="eager"
                        onClick={() => setPasswordVisible(!is_password_visible)}
                    />
                </PasswordBox>
                <AgreementBlock>
                    <AgreementLabel
                        link_text="_t_Keep me logged in_t_"
                        handleChangeCheckbox={handleCheck}
                        isChecked={is_checked}
                    />
                    <StyledLocalizedLink to="/reset" no_decor>
                        <StyledHeader as="p" type="paragraph-2" pt="5px">
                            <Localize translate_text="_t_Forgot password?_t_" />
                        </StyledHeader>
                    </StyledLocalizedLink>
                </AgreementBlock>
                <StyledButton secondary>
                    <Localize translate_text="_t_Log in_t_" />
                </StyledButton>
                <AlternativeLogin>
                    <Line />
                    <StyledHeader
                        as="h4"
                        type="paragraph-2"
                        align="center"
                        color="grey-5"
                        p="24px"
                        width="fit-content"
                    >
                        <Localize translate_text="_t_Or log in with_t_" />
                    </StyledHeader>
                    <Line />
                </AlternativeLogin>
                <SocialButtonsWrapper>
                    <SocialButton
                        onClick={handleSocialSignup}
                        data-provider="google"
                        id="dm-signup-google"
                        type="button"
                    >
                        <StaticImage
                            src="../../images/svg/custom/google.svg"
                            alt="google"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={50}
                            objectFit="contain"
                            placeholder="none"
                        />
                        <StyledSocial as="p">Google</StyledSocial>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        data-provider="facebook"
                        id="dm-signup-facebook"
                        type="button"
                        color="#1877F2;"
                    >
                        <StaticImage
                            src="../../images/svg/custom/facebook-40.svg"
                            alt="facebook"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={50}
                            objectFit="contain"
                            placeholder="none"
                        />
                        <StyledSocial as="p" type="paragraph-2" color="white">
                            Facebook
                        </StyledSocial>
                    </SocialButton>
                </SocialButtonsWrapper>
                <StyledLocalizedLink to="/responsible" pt>
                    <StyledHeader as="p" type="paragraph-1">
                        <Localize translate_text="_t_Privacy Policy_t_" />
                    </StyledHeader>
                </StyledLocalizedLink>
            </LoginForm>
        </PageLayout>
    )
}

export default WithIntl()(CTraderLogin)
