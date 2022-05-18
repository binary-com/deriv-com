import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { Flex } from '../containers'
import {
    getSignupAffiliateValue,
    resetSignupAffiliateDetails,
} from '../../pages/signup-affiliates-details/common/_utility'
import AffiliateDatePicker from '../elements/affiliate-date-picker'
import { DropdownSearch } from '../elements'
import { useResidenceList } from '../hooks/use-residence-list'
import { useAffiliateData } from '../hooks/use-affiliate-data'
import CurrencySelect from '../form/currency-select'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import { StyledLink } from 'components/elements/link'
import device from 'themes/device'

const StyledContentFlex = styled(Flex)`
    width: fit-content;
    max-width: 486px;
    height: auto;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    @media ${device.mobileL} {
        width: 100%;
        padding: 40px 16px;
    }
`
const Line = styled.div`
    min-width: 126.5px;
    width: fit-content;
    height: 1px;
    background-color: var(--color-grey-8);
    @media ${device.mobileL} {
        min-width: 97.5px;
    }
`

const InputGroup = styled.div`
    width: 100%;
    position: relative;
    margin: 40px 0 4px;
    @media ${device.mobileL} {
        margin: 32px 0 16px;
    }
`
const SignupButton = styled(Button)`
    margin-top: 40px;
    @media ${device.mobileL} {
        margin-top: 32px;
    }
`
// style for confirm links
const StyledLinkText = styled(LinkText)`
    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const DropdownSearchWrapper = styled.div`
    margin-bottom: -20px;
`

const SignupAffiliateDetails = ({ autofocus, handleLogin, showModal, setErrorMessage }) => {
    const [is_pep_checked, setPepChecked] = useState(false)
    const [is_terms_checked, setTermsChecked] = useState(false)
    const [is_eu_checked, setEuChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const residence_list = useResidenceList()
    const [is_checked, setChecked] = useState(false)

    useEffect(() => {
        if (residence_list.length > 0) {
            setDisabled(false)
        }
    }, [residence_list])

    const { first_name, last_name, date_of_birth, country, address_line_1, address_line_2, phone } =
        useAffiliateData()

    const handleCheckChange = (event, func) => func(event.currentTarget.checked)

    const submitValues = (values, callback) => {
        Object.keys(values).forEach((el) => {
            callback(el, getSignupAffiliateValue(values[el]))
        })
    }

    return (
        <StyledContentFlex jc="flex-start" fd="column" p="40px">
            <Formik
                enableReinitialize
                initialValues={{
                    firstName: first_name || '',
                    lastName: last_name || '',
                    date: date_of_birth || '',
                    country: country || '',
                    residenceList: residence_list,
                    address: address_line_1 || address_line_2 || '',
                    mobileNumber: phone || '',
                    password: '',
                    currency: '',
                }}
                validateOnBlur={false}
                validate={(values) => resetSignupAffiliateDetails(values)}
                onSubmit={(values, { setFieldValue }) => submitValues(values, setFieldValue)}
            >
                {({
                    values,
                    setFieldValue,
                    setFieldError,
                    setFieldTouched,
                    handleBlur,
                    errors,
                    touched,
                    isValid,
                    dirty,
                }) => {
                    const fieldsSelected = () =>
                        !(is_pep_checked && is_terms_checked && is_checked) || !isValid || !dirty

                    const form_inputs = [
                        {
                            id: 'dm-first-name-input',
                            name: 'firstName',
                            type: 'text',
                            error: errors.firstName,
                            value: values.firstName,
                            touch: touched.firstName,
                            label: localize('First Name'),
                            placeholder: 'First Name',
                            required: true,
                        },
                        {
                            id: 'dm-last-name-input',
                            name: 'lastName',
                            type: 'text',
                            error: errors.lastName,
                            value: values.lastName,
                            touch: touched.lastName,
                            label: localize('Last Name'),
                            placeholder: 'Last Name',
                            required: true,
                        },
                        {
                            id: 'dm-date-input',
                            name: 'date',
                            type: 'text',
                            error: errors.date,
                            value: values.date,
                            touch: touched.date,
                            label: localize('Date of Birth'),
                            placeholder: 'Date of Birth',
                            required: true,
                        },
                        {
                            id: 'dm-country-select',
                            name: 'country',
                            type: 'select',
                            error: errors.country,
                            touch: touched.selected_dropdown,
                            list: values.residenceList,
                            label: localize('Country of residence'),
                            placeholder: 'Country of residence',
                            required: true,
                        },
                        {
                            id: 'dm-address',
                            name: 'address',
                            type: 'text',
                            error: errors.address,
                            value: values.address,
                            touch: touched.address,
                            label: localize('Address'),
                            placeholder: 'Address',
                            required: true,
                        },
                        {
                            id: 'dm-mobile-number',
                            name: 'mobileNumber',
                            type: 'tel',
                            error: errors.mobileNumber,
                            value: values.mobileNumber,
                            touch: touched.mobileNumber,
                            label: localize('Mobile number'),
                            placeholder: 'Mobile number',
                            required: true,
                        },
                        {
                            id: 'dm-password',
                            name: 'password',
                            type: 'password',
                            error: errors.password,
                            value: values.password,
                            touch: touched.password,
                            label: localize('Password'),
                            placeholder: 'Password',
                            required: true,
                        },
                    ]
                    return (
                        <form style={{ display: 'block' }}>
                            <Header as="h3" type="heading-3" mb="8px">
                                {localize('We’re glad you’re here')}
                            </Header>
                            <Header as="p" type="subtitle-2" weight="normal">
                                {localize(
                                    'Complete this form to sign up for our partnership programme.',
                                )}
                            </Header>
                            <InputGroup>
                                {form_inputs.map((item) => {
                                    return item.name === 'country' ? (
                                        <DropdownSearchWrapper key={item.id}>
                                            <DropdownSearch
                                                id={item.id}
                                                label_position={0.8}
                                                selected_item={values.country}
                                                default_item={''}
                                                error={item.touch && item.error}
                                                items={item.list}
                                                label={localize('Country of residence')}
                                                onChange={(value) =>
                                                    setFieldValue('country', value)
                                                }
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                            />
                                        </DropdownSearchWrapper>
                                    ) : item.name === 'date' ? (
                                        <AffiliateDatePicker
                                            id={item.id}
                                            top_shift="1.5rem"
                                            error={item.touch && item.error}
                                            error_shift="0.8rem"
                                            disabled={disabled}
                                            label={item.label}
                                            setFieldValue={setFieldValue}
                                            setFieldTouched={setFieldTouched}
                                            placeholder={item.placeholder}
                                            handleError={() => {
                                                setFieldValue(item.name, '', false)
                                                setFieldError(item.name, '')
                                                setFieldTouched(item.name, false, false)
                                            }}
                                            htmlFor={item.id}
                                        />
                                    ) : (
                                        <Field
                                            name={item.name}
                                            key={item.id}
                                            onChange={(value) => {
                                                setFieldValue(item.name, value)
                                            }}
                                        >
                                            {({ field }) => (
                                                <Input
                                                    {...field}
                                                    id={item.id}
                                                    error_shift="0.8rem"
                                                    type={item.type}
                                                    border="solid 1px var(--color-grey-7)"
                                                    label_focus_color="black"
                                                    background="white"
                                                    error={item.touch && item.error}
                                                    label={localize(item.label)}
                                                    placeholder={item.placeholder}
                                                    password_icon={item.name === 'password'}
                                                    handleError={(current_input) => {
                                                        setFieldValue(item.name, '', false)
                                                        setFieldError(item.name, '')
                                                        setFieldTouched(item.name, false, false)
                                                        if (item.name !== 'date') {
                                                            current_input.current.focus()
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    setFieldValue={setFieldValue}
                                                    setFieldTouched={setFieldTouched}
                                                    autoFocus={autofocus}
                                                    autoComplete="off"
                                                    required={item.required}
                                                    disabled={disabled}
                                                />
                                            )}
                                        </Field>
                                    )
                                })}
                            </InputGroup>
                            <Flex fd="row" jc="space-between" ai="center" mt="24px">
                                <Line />
                                <Flex fd="row" ai="center" width="40%">
                                    <Header
                                        as="p"
                                        type="paragraph-2"
                                        align="center"
                                        weight="normal"
                                    >
                                        {localize('Choose your currency')}
                                    </Header>
                                </Flex>
                                <Line />
                            </Flex>
                            <Field name="currency-select">
                                {({ field }) => (
                                    <CurrencySelect
                                        {...field}
                                        setFieldValue={setFieldValue}
                                        current_select={values.currency}
                                        error={errors.currency_error}
                                    />
                                )}
                            </Field>
                            <Flex fd="column">
                                <AgreementLabel
                                    is_checked={is_pep_checked}
                                    handleChangeCheckbox={(e) =>
                                        handleCheckChange(e, setPepChecked)
                                    }
                                    link_text={localize(
                                        'I declare that I am not a politically exposed person.',
                                    )}
                                ></AgreementLabel>
                                <AgreementLabel
                                    is_affiliate
                                    is_checked={is_terms_checked}
                                    handleChangeCheckbox={(e) =>
                                        handleCheckChange(e, setTermsChecked)
                                    }
                                    link_text={localize(
                                        'I have read and accepted Deriv’s <0>General business terms</0> and ',
                                    )}
                                >
                                    <StyledLink
                                        external="true"
                                        size="1.5rem"
                                        to="/tnc/business-partners-affiliates-and-introducing-brokers.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Affiliates and introducing brokers’ terms.
                                    </StyledLink>
                                </AgreementLabel>
                                <AgreementLabel
                                    is_checked={is_eu_checked}
                                    handleChangeCheckbox={(e) => handleCheckChange(e, setEuChecked)}
                                    link_text={localize(
                                        'Are you going to promote in EU and/or UK?',
                                    )}
                                ></AgreementLabel>
                                <AgreementLabel
                                    is_checked={is_checked}
                                    handleChangeCheckbox={(e) => handleCheckChange(e, setChecked)}
                                ></AgreementLabel>
                            </Flex>
                            <Flex fd="column" ai="center">
                                <div
                                    onClick={() => {
                                        if (fieldsSelected()) {
                                            showModal(true)
                                            setErrorMessage(true)
                                        }
                                    }}
                                >
                                    <SignupButton
                                        id="dm-new-signup"
                                        secondary
                                        type="submit"
                                        disabled={fieldsSelected()}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            submitValues(values, setFieldValue)
                                            showModal(true)
                                            setErrorMessage(false)
                                        }}
                                    >
                                        {localize('Sign up')}
                                    </SignupButton>
                                </div>
                                <Header
                                    as="p"
                                    type="paragraph-1"
                                    weight="normal"
                                    align="center"
                                    mt="8px"
                                >
                                    {localize('Already have an affiliate account?')}
                                    <StyledLinkText
                                        id="dm-new-login-button"
                                        ml="6px"
                                        size="1.6rem"
                                        color="red"
                                        onClick={handleLogin}
                                    >
                                        {localize('Log in')}
                                    </StyledLinkText>
                                </Header>
                            </Flex>
                        </form>
                    )
                }}
            </Formik>
        </StyledContentFlex>
    )
}

SignupAffiliateDetails.propTypes = {
    address: PropTypes.string,
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.func,
    country: PropTypes.string,
    date: PropTypes.string,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    first_name: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_ppc: PropTypes.bool,
    last_name: PropTypes.string,
    mobile_number: PropTypes.number,
    password: PropTypes.string,
    setErrorMessage: PropTypes.func,
    showModal: PropTypes.func,
}

export default SignupAffiliateDetails
