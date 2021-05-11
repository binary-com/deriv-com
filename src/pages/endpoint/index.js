import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Layout from 'components/layout/layout'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { trimSpaces } from 'common/utility'
import { default_server_url } from 'common/constants'
import { getAppId } from 'common/websocket/config'
import { useStickyState } from 'components/hooks/use-sticky-state'

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

const endpointValidation = (values) => {
    let errors = {}

    const server_url_error = validation.text(trimSpaces(values.server_url))
    const app_id_error = validation.text(trimSpaces(values.app_id))

    if (server_url_error) {
        errors.server_url = server_url_error
    }

    if (app_id_error) {
        errors.app_id = app_id_error
    }

    return errors
}

const endpointSubmission = (values, actions) => {
    console.log(values)
}

const Endpoint = () => {
    const [server_url, setServerUrl] = useStickyState(default_server_url, 'config.server_url')
    const [app_id, setAppId] = useStickyState(getAppId(), 'config.app_id')

    const resetEndpointSettings = (setValue) => {}
    return (
        <Layout type="static" margin_top={'0'}>
            <SEO title="Endpoint" description="Change deriv API endpoint." no_index />
            <StyledContainer justify="center" align="center" direction="column">
                <Header as="h2" type="page-title" align="center" mt="80px">
                    Change API endpoint
                </Header>
                <Header
                    as="h4"
                    type="sub-section-title"
                    align="center"
                    weight="500"
                    mt="0.5rem"
                    mb="3.8rem"
                >
                    Update configuration for API endpoint and other settings
                </Header>
                <Formik
                    initialValues={{
                        server_url: '',
                        app_id: '',
                        enable_eu: false,
                        enable_uk: false,
                        enable_p2p: false,
                    }}
                    validate={endpointValidation}
                    onSubmit={endpointSubmission}
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
                                    label="Email"
                                    background="white"
                                    placeholder={'example@email.com'}
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
                                    onClick={resetEndpointSettings}
                                    type="button"
                                >
                                    Reset to original settings
                                </StyledButton>
                                <StyledButton
                                    secondary="true"
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    Submit changes
                                </StyledButton>
                            </ButtonContainer>
                        </Form>
                    )}
                </Formik>
            </StyledContainer>
        </Layout>
    )
}

export default Endpoint
