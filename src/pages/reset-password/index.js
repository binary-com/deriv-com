import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { BinarySocketBase } from 'common/websocket/socket_base'
import Login from 'common/login'

const StyledContainer = styled(Container)`
    text-align: center;
    margin-top: 8rem;
`

const ButtonContainer = styled.div`
    margin-top: 2rem;
`

const SecondaryHeader = styled(Header)`
    margin-top: 0.5rem;
    margin-bottom: 3.8rem;
`

const InputGroup = styled.div`
    margin-bottom: 3.4rem;
`

const StyledButton = styled(Button)`
    margin: 0 0.4rem;
`

const StyledForm = styled(Form)`
    width: 40rem;
`

const resetValidation = values => {
    let errors = {}

    const email_error = validation.email(values.email)

    if (email_error) {
        errors.email = email_error
    }

    return errors
}

const resetSubmission = (values, actions) => {
    BinarySocketBase.send({
        verify_email: values.email,
        type: 'reset_password',
    }).then(response => {
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

const ResetPassword = () => (
    <Layout is_static>
        <SEO title={localize('Reset password')} description={localize('Reset password')} />
        <StyledContainer justify="center" align="center" direction="column">
            <Header as="h2" align="center">
                {localize('Reset password')}
            </Header>
            <SecondaryHeader as="h4" align="center" weight="500">
                {localize("We'll email you instructions to reset your password.")}
            </SecondaryHeader>
            <Formik
                initialValues={{ email: '' }}
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
                    <StyledForm noValidate>
                        <InputGroup>
                            <Input
                                id="email"
                                name="email"
                                error={errors.email}
                                value={values.email}
                                handleError={resetForm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                                type="text"
                                label={localize('Email')}
                                background="white"
                                placeholder={'example@mail.com'}
                                data-lpignore="true"
                                required
                            />
                        </InputGroup>
                        <Text align="center" color="red">
                            {status.error && status.error}
                        </Text>
                        <Text align="center" color="green">
                            {status.success && status.success}
                        </Text>
                        <ButtonContainer>
                            <StyledButton tertiary onClick={Login.redirectToLogin} type="button">
                                {localize('Return to log in')}
                            </StyledButton>
                            <StyledButton secondary disabled={isSubmitting} type="submit">
                                {localize('Reset my password')}
                            </StyledButton>
                        </ButtonContainer>
                    </StyledForm>
                )}
            </Formik>
        </StyledContainer>
    </Layout>
)

export default WithIntl()(ResetPassword)
