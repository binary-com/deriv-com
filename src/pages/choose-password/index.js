import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import SEO from 'components/containers/seo'
import LayoutStatic from 'components/layout/layout-static'
import { localize, WithIntl } from 'components/localization'
import Container from 'components/containers/container'
import { Header, Text } from 'components/elements/typography'
import Input from 'components/form/input'
import Button from 'components/form/button'
import { BinarySocketBase } from 'common/websocket/socket_base'
import Modal, { useModal } from 'components/elements/modal'

const StyledContainer = styled(Container)`
    text-align: center;
    margin-top: 8rem;
`

const ButtonContainer = styled.div`
    margin-top: 2rem;
`

const StyledHeader = styled(Header)`
    margin-bottom: 3.5rem;
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

const validationInput = values => {
    let errors = {}

    if (!values.password) {
        errors.password = localize('Password is required')
    }

    return errors
}

const ChoosePassword = () => {
    const [token, setToken] = useState('')
    const [show_modal, toggleModal, closeModal] = useModal()

    useEffect(() => {
        const config = queryString.parseUrl(location.href)
        const { token } = config.query

        if (!token) {
            navigate('/')
            return
        }

        setToken(token)
    })

    return (
        <LayoutStatic>
            <SEO
                title={localize('Choose a new password')}
                description={localize('Reset new password')}
            />
            <StyledContainer justify="center" align="center" direction="column">
                <StyledHeader as="h2" align="center">
                    {localize('Choose a new password')}
                </StyledHeader>
                <Formik
                    initialValues={{ password: '' }}
                    initialStatus={{}}
                    validate={validationInput}
                    onSubmit={(values, actions) => {
                        BinarySocketBase.send({
                            reset_password: 1,
                            verification_code: token,
                            new_password: values.password,
                        }).then(response => {
                            if (response.error) {
                                actions.setSubmitting(false)
                                actions.setStatus({
                                    error: response.error.message,
                                })
                                return
                            }

                            actions.setSubmitting(false)
                            actions.setStatus({
                                success: localize(
                                    'Please check your email and click on the link provided to reset your password.',
                                ),
                            })
                        })
                    }}
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
                                    id="password"
                                    name="password"
                                    error={errors.password}
                                    value={values.password}
                                    handleError={() =>
                                        resetForm({ password: '' })
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    type="password"
                                    label={localize('password')}
                                    background="white"
                                    data-lpignore="true"
                                    required
                                />
                            </InputGroup>
                            <Text align="center" color="red">
                                {status.error && status.error}
                            </Text>
                            {status.success && (
                                <Modal
                                    toggle={toggleModal}
                                    is_open={show_modal}
                                    closeModal={closeModal}
                                >
                                    {status.success}
                                </Modal>
                            )}

                            <ButtonContainer>
                                <StyledButton secondary disabled={isSubmitting}>
                                    {localize('Reset my password')}
                                </StyledButton>
                            </ButtonContainer>
                        </StyledForm>
                    )}
                </Formik>
            </StyledContainer>
        </LayoutStatic>
    )
}

export default WithIntl()(ChoosePassword)
