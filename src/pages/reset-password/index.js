import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import Login from 'common/login'
import { trimSpaces } from 'common/utility'
import validation from 'common/validation'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Button, Input } from 'components/form'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'

const StyledContainer = styled(Container)`
    text-align: center;
    height: 72rem;
    padding: 7rem 0 0;
`

const FullwidthStyledContainer = styled(StyledContainer)`
    max-width: 100%;
    width: 100%;
`

const ButtonContainer = styled.div`
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`

const InputGroup = styled.div`
    width: 40rem;
    margin: 0 auto 2rem;
`

const StyledButton = styled(Button)`
    &:first-child {
        justify-self: end;
    }

    margin: 0.8rem 0.4rem;
    width: max-content;
`

const resetValidation = (values) => {
    let errors = {}

    const email_error = validation.email(trimSpaces(values.email))

    if (email_error) {
        errors.email = email_error
    }

    return errors
}

const resetSubmission = (values, actions) => {
    const binary_socket = BinarySocketBase.init()

    binary_socket.onopen = () => {
        binary_socket.send(
            JSON.stringify({ verify_email: trimSpaces(values.email), type: 'reset_password' }),
        )
    }
    binary_socket.onmessage = (msg) => {
        const response = JSON.parse(msg.data)
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
        binary_socket.close()
    }
}

const ResetPassword = () => {
    const [has_prompt, setOnePasswordPrompt] = React.useState(true)
    let body
    if (!has_prompt) {
        body = (
            <StyledContainer justify="center" align="center" direction="column">
                <Header as="h2" type="page-title" align="center">
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
                        <Form noValidate>
                            <InputGroup>
                                <Input
                                    id="email"
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
                                <StyledButton
                                    tertiary
                                    onClick={Login.redirectToLogin}
                                    type="button"
                                >
                                    {localize('Return to log in')}
                                </StyledButton>
                                <StyledButton
                                    secondary="true"
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
        )
    } else {
        body = (
            <FullwidthStyledContainer background="var(--color-grey-31);" mt="7rem">
                <StyledContainer justify="flex-start" align="center" direction="column">
                    <Header as="h2" type="section-title" align="center" mb="2rem">
                        {localize('All you’ll need from now is one password')}
                    </Header>
                    <Text align="center" mb="2rem">
                        <Localize translate_text="We’ve upgraded our system to support a single, more secure password across all of Deriv/Binary.com. Once you’ve set a new password, you can use it to log into all your Deriv/Binary.com, and DMT5/MT5 accounts." />
                    </Text>
                    <ButtonContainer>
                        <StyledButton tertiary onClick={Login.redirectToLogin} type="button">
                            {localize('Return to log in')}
                        </StyledButton>
                        <StyledButton
                            secondary="true"
                            type="button"
                            onClick={() => setOnePasswordPrompt(false)}
                        >
                            {localize('Reset my password')}
                        </StyledButton>
                    </ButtonContainer>
                </StyledContainer>
            </FullwidthStyledContainer>
        )
    }
    return (
        <Layout type="static" is_fullpage margin_top="7">
            <SEO
                title={localize('Reset password | Deriv')}
                description={localize(
                    'Forgot your Deriv password? Want to reset your password? Send us your email address and we’ll email you the instructions.',
                )}
                no_index
            />
            {body}
        </Layout>
    )
}

export default WithIntl()(ResetPassword)
