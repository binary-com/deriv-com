import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLanguage } from '../../common/utility'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device'
import { Header, StyledLink, Text } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { Button, Input } from 'components/form'

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledDiv = styled.div`
    padding: 6rem 0;

    @media ${device.mobileL} {
        padding: 0;
    }
`
const ResponseWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`
const SubmitButton = styled(Button)`
    margin: 1rem auto;
    cursor: pointer;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    background-color: #ff444f;
    color: #ffffff;
    font-size: 14;
    font-weight: bold;
`
const StyledInput = styled(Input)`
    width: 406px;
`

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
    const [code, setCode] = useState('')
    const [code_error_message, setCodeErrorMessage] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        const success_url = `/${getLanguage()}/signup-success`

        setRegisteredEmail(email?.replaceAll(' ', '+'))
        console.log(email)
        // navigate(email ? success_url : `/${getLanguage()}/`, { replace: true })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(code)
    }
    const clearCode = () => {
        setCode('')
        setCodeErrorMessage('')
    }
    const handleValidation = (value) => {
        console.log(value.length)
        if (value.length !== 4) {
            setCodeErrorMessage('Code should be 4 digits')
        } else setCodeErrorMessage('')
    }
    const handleInputChange = (e) => {
        const { value } = e.target
        setCode(value)
        handleValidation(value)
    }

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_')}
                description={localize(
                    '_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_',
                )}
                no_index
            />
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <ResponseWrapper>
                        <Header as="h3" type="section-title" align="center" weight="bold" mb="2rem">
                            <Localize translate_text="_t_Check your email_t_" />
                        </Header>
                        <img src={EmailIcon} alt="email" width="128px" height="128px" />
                        <Text align="center" pt="20px" pb="20px">
                            <Localize
                                translate_text="Please enter the 4-digit verification code that was sent to {{email}} to activate your account."
                                values={{ email: registeredEmail }}
                            />
                        </Text>
                        <StyledInput
                            type="text"
                            border="solid 1.5px var(--color-grey-7)"
                            border_radius="18px"
                            label_color="grey-5"
                            label_hover_color="grey-5"
                            background="white"
                            error={code_error_message}
                            value={code}
                            label={localize('_t_Verification code_t_')}
                            placeholder={'Verification code'}
                            handleError={clearCode}
                            onChange={handleInputChange}
                            autoFocus={true}
                            autoComplete="off"
                            required
                        />
                        <SubmitButton disabled={code_error_message !== '' || !code} type="submit">
                            Submit
                        </SubmitButton>
                        <EmailLink to="/check-email/" align="center">
                            <Localize translate_text="Didn't receive the code?" />
                        </EmailLink>
                    </ResponseWrapper>
                </form>
            </Wrapper>
            <StyledDiv />
        </Layout>
    )
}

export default WithIntl()(SignupSuccess)
