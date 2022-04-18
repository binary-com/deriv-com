import * as React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import device from 'themes/device'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Container, SEO } from 'components/containers'
import { Dropdown, Header, Text } from 'components/elements'
import { Input, Button } from 'components/form'
import validation from 'common/validation'
import { trimSpaces, isBrowser } from 'common/utility'
import { default_server_url } from 'common/constants'
import { getAppId } from 'common/websocket/config'
import { DerivStore } from 'store'
import { useLocalStorageState } from 'components/hooks/use-localstorage-state'
import { Dev, getCountryRule } from 'components/containers/visibility'

type ValuesType = {
    server_url?: string
    app_id?: string
    clients_country?: string
    is_eu_content?: boolean
    testlink_url?: { name: string; display_name: string; key: string; icon: string }
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

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
`

const StyledCheckbox = styled(Field)`
    height: 16px;
    width: 16px;
`

const StyledSpan = styled.div`
    font-size: 15px;
    padding-left: 5px;
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

const testlink_urls = [
    { name: '', display_name: 'No Redirection', key: '0', icon: '' },
    { name: 'deriv.com', display_name: 'deriv.com', key: '1', icon: '' },
    { name: 'eu.deriv.com', display_name: 'eu.deriv.com', key: '2', icon: '' },
]

const Endpoint = () => {
    const { is_dev } = getCountryRule()
    const [server_url, setServerUrl] = useLocalStorageState(default_server_url, 'config.server_url')
    const [app_id, setAppId] = useLocalStorageState(getAppId(), 'config.app_id')
    const [is_eu_content, setIsEuContent] = useLocalStorageState(
        isBrowser() && localStorage.getItem('config.is_eu_content') === 'true' ? true : false,
        'config.is_eu_content',
    )
    const [reset_loading, setResetLoading] = React.useState(false)
    const { website_status, setWebsiteStatus, website_status_loading } =
        React.useContext(DerivStore)
    const [testlink_url, setTestlinkUrl] = useLocalStorageState(
        testlink_urls[0],
        'config.testlink_url',
    )
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
        setIsEuContent()
        setTestlinkUrl()

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
        if (is_dev && isBrowser()) {
            setIsEuContent(values.is_eu_content)
        }
        setTestlinkUrl(values.testlink_url.name)

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
                        is_eu_content: is_eu_content || false,
                        testlink_url: testlink_url ? testlink_url : '',
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
                                <Dev>
                                    <>
                                        <Dropdown
                                            option_list={testlink_urls}
                                            id="Test Link Domain"
                                            label="Test Link Domain"
                                            default_option="No Redirection"
                                            selected_option={values.testlink_url}
                                            onChange={(value) => {
                                                setFieldValue('testlink_url', value)
                                            }}
                                            onBlur={handleBlur}
                                            autoComplete="off"
                                            data-lpignore="true"
                                        />
                                        <CheckboxContainer>
                                            <StyledCheckbox
                                                name="is_eu_content"
                                                value={values.is_eu_content}
                                                checked={
                                                    values.is_eu_content === true ? true : false
                                                }
                                                disabled={website_status_loading}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="checkbox"
                                            />
                                            <StyledSpan>Show EU Content</StyledSpan>
                                        </CheckboxContainer>
                                    </>
                                </Dev>
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
                                    secondary="true"
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
