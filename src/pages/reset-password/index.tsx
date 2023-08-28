import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { trimSpaces } from 'common/utility'
import Login from 'common/login'
import apiManager from 'common/websocket'
import device from 'themes/device'
import { TGatsbyHead } from 'features/types'

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
    @media ${device.tabletL} {
        width: auto;
    }
`

const StyledButton = styled(Button)`
    margin: 0.8rem 0.4rem;
`

const ResetPassword = () => {
    const [apiError, setApiError] = useState<string | null>('')
    const initialValues: EmailType = { email: '' }

    const resetSubmission = (values: EmailType, actions) => {
        apiManager
            .augmentedSend('verify_email', {
                verify_email: trimSpaces(values.email),
                type: 'reset_password',
            })
            .then((response) => {
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
                        '_t_Please check your email and click on the link provided to reset your password._t_',
                    ),
                })
            })
            .catch((error) => {
                if (error.msg_type === 'verify_email') {
                    const errorString = error.error.message.split(':')
                    setApiError(errorString[0])
                }
            })
    }

    const resetValidation = (values: EmailType) => {
        const errors: ErrorType = {}
        const email = trimSpaces(values.email)
        const email_error = validation.required(email) || validation.email(email)
        setApiError('')
        if (email_error) {
            errors.email = email_error
        }

        return errors
    }

    return (
        <Layout type="static" padding_top="0">
            <StyledContainer justify="center" align="center" direction="column">
                <Header as="h2" type="page-title" align="center" mt="80px">
                    <Localize translate_text="_t_Reset password_t_" />
                </Header>
                <Header
                    as="h4"
                    type="sub-section-title"
                    align="center"
                    weight="500"
                    mt="0.5rem"
                    mb="3.8rem"
                >
                    <Localize translate_text="_t_We'll email you instructions to reset your password._t_" />
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
                                    label={localize('_t_Email_t_')}
                                    background="white"
                                    placeholder="example@email.com"
                                    data-lpignore="true"
                                    required
                                />
                            </InputGroup>
                            <Text align="center" color="red">
                                {apiError ? apiError : status.error}
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
                                    <Localize translate_text="_t_Return to log in_t_" />
                                </StyledButton>
                                <StyledButton
                                    id="dm-pass-reset-button"
                                    secondary
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    <Localize translate_text="_t_Reset my password_t_" />
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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Reset password | Deriv_t_"
        description="_t_Forgot your Deriv password? Want to reset your password? Send us your email address and we’ll email you the instructions._t_"
        no_index
        pageContext={pageContext}
    />
)
