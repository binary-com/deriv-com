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
import BasicModal from 'components/elements/basic-modal'
import Login from 'common/login'

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
    const [message, setMessage] = useState('')
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
                                setMessage(response.error.message)
                                toggleModal()
                                return
                            }

                            actions.setSubmitting(false)
                            setMessage(
                                localize(
                                    'Your password has been changed. We will now redirect you to the login page.',
                                ),
                            )
                            actions.resetForm()
                            toggleModal()
                            setTimeout(() => {
                                window.open(Login.loginUrl(), '_blank')
                            }, 3000)
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
                            <ButtonContainer>
                                <StyledButton secondary disabled={isSubmitting}>
                                    {localize('Reset my password')}
                                </StyledButton>
                            </ButtonContainer>
                        </StyledForm>
                    )}
                </Formik>
                <Modal
                    toggle={toggleModal}
                    is_open={show_modal}
                    closeModal={closeModal}
                >
                    <BasicModal>
                        <Text align="center">{message}</Text>
                    </BasicModal>
                </Modal>
            </StyledContainer>
        </LayoutStatic>
    )
}

export default WithIntl()(ChoosePassword)
