import React, { Component } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { Formik } from 'formik'
import Button from './button'
import Input from './input'
import Row from '../containers/row'
import Facebook from 'images/svg/facebook.svg'
import Google from 'images/svg/google.svg'
import { Header, Text } from '../elements/topography'
import ErrorIcon from 'images/svg/error-icon.svg'
import { localize } from '../localization'

const Title = styled(Header)`
    font-weight: bold;
    color: var(--color-black);
    text-align: center;
    margin: 10rem 0 3rem 0;
`
const Form = styled.form`
    max-width: 90%;
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: var(--text-size-m) 0;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: var(--text-size-s);
    margin-bottom: 4rem;
`

const StyledError = styled(ErrorIcon)`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
`

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
`
const SocialButton = styled(Button)`
    box-shadow: none;
    flex: inherit !important;
    width: 49%;
    background: ${props => {
        if (props.provider === 'google') return 'var(--color-white)'
        if (props.provider === 'facebook') return 'var(--color-blue)'
    }};
    padding: 1rem;
`
const MutedText = styled(Text)`
    text-align: left;
    color: var(--color-grey);
    align-self: start;
`
const SocialWrapper = styled(Row)`
    width: 100%;
    justify-content: space-between;
    margin-top: var(--text-size-s);
    margin-bottom: 4rem;
`
const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-bottom: 8rem;
`
const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
`

const signup_schema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is Required.'),
})

class Signup extends Component {
    handleEmailSignup = email => {
        // eslint-disable-next-line no-console
        console.log(email)
    }

    handleSocialSignup = e => {
        // eslint-disable-next-line no-console
        console.log(e.target.id)
    }

    handleLogin = () => {
        // eslint-disable-next-line no-console
        console.log('Hi login')
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '' }}
                validationSchema={signup_schema}
                onSubmit={(values, actions) => {
                    this.handleEmailSignup(values.email)
                    actions.setSubmitting(false)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit} noValidate>
                        <Title as="h3">Sign up for free now!</Title>
                        <InputGroup>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                value={values.email}
                                label={localize('Email')}
                                placeholder={localize('example@mail.com')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.email && touched.email && (
                                <>
                                    <ErrorMessages
                                        lh="1.4"
                                        align="left"
                                        color="red-1"
                                    >
                                        {errors.email}
                                    </ErrorMessages>
                                    <StyledError />
                                </>
                            )}
                        </InputGroup>
                        <EmailButton type="submit" secondary>
                            {localize('Create a free account')}
                        </EmailButton>
                        <Text color="grey">{localize('Or sign up with')}</Text>
                        <SocialWrapper>
                            <SocialButton
                                onClick={this.handleSocialSignup}
                                provider="google"
                                id="google"
                                type="button"
                                secondary
                            >
                                <span>
                                    <Google />
                                </span>
                            </SocialButton>
                            <SocialButton
                                onClick={this.handleSocialSignup}
                                provider="facebook"
                                id="facebook"
                                type="button"
                                secondary
                            >
                                <span>
                                    <Facebook />
                                </span>
                            </SocialButton>
                        </SocialWrapper>
                        <LoginText>
                            {localize('Already have an account?')}
                            <LoginLink onClick={this.handleLogin}>
                                {' '}
                                {localize('Log in.')}
                            </LoginLink>
                        </LoginText>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default Signup
