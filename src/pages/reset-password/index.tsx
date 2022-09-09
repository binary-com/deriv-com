import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { trimSpaces } from 'common/utility'
import Login from 'common/login'
import { useDerivWS } from 'store'

type EmailType = { email: string }

type ErrorType = Partial<EmailType>

const StyledContainer = styled(Container)`
    text-align: center;
    height: 100vh;
    padding: auto 0;
    justify-content: start;
`

const ButtonContainer = styled.div`
    margin-top: 2rem;
`

const InputGroup = styled.div`
    width: 40rem;
    margin: 0 auto 3.4rem;
`

const StyledButton = styled(Button)`
    margin: 0.8rem 0.4rem;
`

const resetValidation = (values: EmailType) => {
    const errors: ErrorType = {}
    const email = trimSpaces(values.email)
    const email_error = validation.required(email) || validation.email(email)

    if (email_error) {
        errors.email = email_error
    }

    return errors
}

const ResetPassword = () => {
    const initialValues: EmailType = { email: '' }

    const { send } = useDerivWS()

    const resetSubmission = (values: EmailType, actions) => {
        send({ verify_email: trimSpaces(values.email), type: 'reset_password' }, (response) => {
            actions.setSubmitting(false)

            if (response.error) {
                actions.setStatus({
                    error: response.error.message,
                })
                return
            }

            actions.resetForm({ email: '' })
            actions.setStatus({
                success: localize(
                    'Please check your email and click on the link provided to reset your password.',
                ),
            })
        })
    }

    return (
        <Layout type="static" margin_top="0">
            <SEO
                title={localize('Reset password | Deriv')}
                description={localize(
                    'Forgot your Deriv password? Want to reset your password? Send us your email address and we’ll email you the instructions.',
                )}
                no_index
            />
            <StyledContainer justify="center" align="center" direction="column">
                <Header as="h2" type="page-title" align="center" mt="80px">
                    {localize('Reset password')}
                </Header>
                <Header
                    as="h4"
                    type="sub-section-title"
                    align="center"
                    weight="500"
                    mt="0.5rem"
                    mb="3.8rem"
                >
                    {localize("We'll email you instructions to reset your password.")}
                </Header>
                <Formik
                    initialValues={initialValues}
                    initialStatus={{}}
                    validate={resetValidation}
                    onSubmit={resetSubmission}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                        resetForm,
                        status,
                    }) => (
                        <Form noValidate>
                            <InputGroup>
                                <Input
                                    id="dm-email-input"
                                    name="email"
                                    error={errors.email}
                                    value={trimSpaces(values.email)}
                                    handleError={resetForm}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    type="text"
                                    label={localize('Email')}
                                    background="white"
                                    placeholder="example@email.com"
                                    data-lpignore="true"
                                    required
                                />
                            </InputGroup>
                            <Text align="center" color="red">
                                {status.error}
                            </Text>
                            <Text align="center" color="green">
                                {status.success}
                            </Text>
                            <ButtonContainer>
                                <StyledButton
                                    id="dm-pass-reset-login-link"
                                    tertiary
                                    onClick={Login.redirectToLogin}
                                    type="button"
                                >
                                    {localize('Return to log in')}
                                </StyledButton>
                                <StyledButton
                                    id="dm-pass-reset-button"
                                    secondary
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    {localize('Reset my password')}
                                </StyledButton>
                            </ButtonContainer>
                        </Form>
                    )}
                </Formik>
            </StyledContainer>
        </Layout>
    )
}

export default WithIntl()(ResetPassword)
