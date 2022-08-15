import * as React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import device from 'themes/device'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Container, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { trimSpaces } from 'common/utility'
import { default_server_url } from 'common/constants'
import { getAppId } from 'common/websocket/config'
import { DerivStore } from 'store'
import { useLocalStorageState } from 'components/hooks/use-localstorage-state'

type ValuesType = {
    server_url?: string
    app_id?: string
    clients_country?: string
}

type ActionsType = {
    setSubmitting: (arg0: boolean) => void
    setStatus: (arg0: { message?: string }) => void
}

const StyledInput = styled(Input)`
    & ~ label {
        transform: translate(-0.6rem, -2rem) scale(0.7);
        color: var(--color-black-3);
        background-color: ${({ background }) =>
            background ? `var(--color-${background})` : 'var(--color-grey-1)'};

        @media ${device.tabletL} {
            top: 9px;
        }
    }
`

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

    & > div {
        margin-bottom: 1rem;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    margin: 0.8rem 0.4rem;
`

const endpointValidation = (values: ValuesType) => {
    const errors: ValuesType = {}

    const server_url = trimSpaces(values ? values.server_url : '')
    const app_id = trimSpaces(values ? values.app_id.toString() : '')
    const clients_country = trimSpaces(values ? values.clients_country.toString() : '')
    const server_url_error =
        validation.required(server_url) ||
        validation.url(server_url, 'Please enter a valid server URL')
    const app_id_error =
        validation.required(app_id) || validation.number(app_id, 'Please enter a valid app ID')
    const clients_country_error =
        validation.required(clients_country) || validation.alphabetic(clients_country)

    if (server_url_error) {
        errors.server_url = server_url_error
    }

    if (app_id_error) {
        errors.app_id = app_id_error
    }

    if (clients_country_error) {
        errors.clients_country = clients_country_error
    }

    return errors
}

const Endpoint = () => {
    const [server_url, setServerUrl] = useLocalStorageState(default_server_url, 'config.server_url')
    const [app_id, setAppId] = useLocalStorageState(getAppId(), 'config.app_id')
    const [reset_loading, setResetLoading] = React.useState(false)
    const { website_status, setWebsiteStatus, website_status_loading } =
        React.useContext(DerivStore)
    const STATUS_TIMEOUT_DELAY = 1500
    const RESET_TIMEOUT_DELAY = 500

    const handleStatus = (setStatus: (arg0: { message?: string }) => void, message: string) => {
        setStatus({ message })
        setTimeout(() => {
            setStatus({})
        }, STATUS_TIMEOUT_DELAY)
    }
    const resetEndpointSettings = (setStatus: (status?: unknown) => void) => {
        // reset local storage values
        setResetLoading(true)
        setServerUrl()
        setAppId()
        // adding the default storage values
        setTimeout(() => {
            setServerUrl(default_server_url)
            setAppId(getAppId())
            setResetLoading(false)
        }, RESET_TIMEOUT_DELAY)
        // reset website status values
        setWebsiteStatus()
        handleStatus(setStatus, 'Config has been reset successfully')
        // TODO: if there is a change requires reload in the future
        // window.location.reload()
    }
    const endpointSubmission = (values: ValuesType, actions: ActionsType) => {
        actions.setSubmitting(true)
        setServerUrl(values.server_url)
        setAppId(values.app_id)

        // handle website status changes
        const new_website_status = { ...website_status, clients_country: values.clients_country }
        setWebsiteStatus(new_website_status)
        actions.setSubmitting(false)
        handleStatus(actions.setStatus, 'Config has been updated')
        // TODO: if there is a change requires reload in the future
        window.location.reload()
    }

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
                    Update configuration for API endpoint or other settings
                </Header>
                <Formik
                    initialValues={{
                        server_url: server_url ? server_url : '',
                        app_id: app_id ? app_id : '',
                        // this implicit check is required by formik for `enableReinitialize` to work
                        clients_country: website_status?.clients_country
                            ? website_status?.clients_country
                            : '',
                    }}
                    enableReinitialize={true}
                    validate={endpointValidation}
                    onSubmit={endpointSubmission}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                        setStatus,
                        setFieldValue,
                        isValid,
                        dirty,
                        touched,
                        status,
                    }) => (
                        <Form noValidate>
                            <InputGroup>
                                <StyledInput
                                    name="server_url"
                                    error={errors.server_url}
                                    value={values.server_url}
                                    disabled={reset_loading}
                                    handleError={() => setFieldValue('server_url', '')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    label="Server URL"
                                    background="white"
                                    placeholder={'e.g. green.binaryws.com'}
                                />
                                <StyledInput
                                    name="app_id"
                                    error={errors.app_id}
                                    value={values.app_id}
                                    disabled={reset_loading}
                                    handleError={() => setFieldValue('app_id', '')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    label="App ID"
                                    background="white"
                                    placeholder={'e.g. 9999'}
                                />
                                <StyledInput
                                    name="clients_country"
                                    error={errors.clients_country}
                                    value={values.clients_country}
                                    disabled={website_status_loading}
                                    handleError={() => setFieldValue('clients_country', '')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    label="Clients country"
                                    background="white"
                                    placeholder={'e.g. mt (for EU) or gb (for UK) or za (for P2P)'}
                                />
                            </InputGroup>
                            <Text align="center" color="green">
                                {status?.message && status.message}
                            </Text>
                            <ButtonContainer>
                                <StyledButton
                                    tertiary
                                    onClick={() => resetEndpointSettings(setStatus)}
                                    type="button"
                                >
                                    Reset to original settings
                                </StyledButton>
                                <StyledButton
                                    secondary
                                    disabled={isSubmitting || !dirty || !touched || !isValid}
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

export default WithIntl()(Endpoint)
