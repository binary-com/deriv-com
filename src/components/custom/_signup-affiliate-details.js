import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { Flex } from '../containers'
import {
    getSignupAffiliateValue,
    resetSignupAffiliateDetails,
} from '../../pages/signup-affiliates-details/common/_utility'
import { DropdownSearch } from '../elements'
import { useResidenceList } from '../hooks/use-residence-list'
import { useAffiliateData } from '../hooks/use-affiliate-data'
import CurrencySelect from '../form/currency-select'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device.js'

const StyledContentFlex = styled(Flex)`
    width: 486px;
    height: auto;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    @media ${device.mobileL} {
        width: 100%;
        min-width: 360px;
        padding: 40px 16px;
    }
`
const Line = styled.div`
    width: 126.5px;
    height: 1px;
    background-color: var(--color-grey-8);
    @media ${device.mobileL} {
        width: 97.5px;
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
    width: 81px;
    font-size: 14px;
    margin-top: 40px;
    @media ${device.mobileL} {
        margin-top: 32px;
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: '14px';
    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const DropdownSearchWrapper = styled.div`
    margin-bottom: -16px;
`
const StyledLocalizedLink = styled(LocalizedLink)`
    color: var(--color-red);
    text-decoration: none;
`

const SignupAffiliateDetails = ({ autofocus, handleLogin }) => {
    const [is_pep_checked, setPepChecked] = useState(false)
    const [is_terms_checked, setTermsChecked] = useState(false)
    const residence_list = useResidenceList()
    const { first_name, last_name, date_of_birth, country, address_line_1, address_line_2, phone } =
        useAffiliateData()

    const handlePepChange = (event) => {
        setPepChecked(event.currentTarget.checked)
    }

    const handleTermsChange = (event) => {
        setTermsChecked(event.currentTarget.checked)
    }

    const checksSelected = () => is_pep_checked && is_terms_checked

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
                    plan: '',
                    currency: '',
                }}
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
                    const form_inputs = [
                        {
                            id: 'dm-user-name-input',
                            name: 'userName',
                            type: 'text',
                            error: errors.userName,
                            value: values.userName,
                            touch: touched.userName,
                            label: localize('Username'),
                            placeholder: 'Username',
                            required: true,
                        },
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
                                                is_affiliate
                                                selected_item={values.country}
                                                default_item={''}
                                                error={item.touch && item.error}
                                                items={item.list}
                                                label={localize('Country of residence')}
                                                onChange={(value) =>
                                                    setFieldValue('country', value)
                                                }
                                                onBlur={handleBlur}
                                            />
                                        </DropdownSearchWrapper>
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
                                                    is_date={item.name === 'date'}
                                                    is_affiliate
                                                    type={item.type}
                                                    border="solid 1px var(--color-grey-7)"
                                                    labelColor="grey-5"
                                                    labelHoverColor="grey-5"
                                                    labelFocusColor="black"
                                                    background="white"
                                                    error={item.touch && item.error}
                                                    label={localize(item.label)}
                                                    placeholder={item.placeholder}
                                                    handleError={(current_input) => {
                                                        setFieldValue(item.name, '', false)
                                                        setFieldError(item.name, '')
                                                        setFieldTouched(item.name, false, false)
                                                        if (item.name !== 'date') {
                                                            current_input.focus()
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    setFieldValue={setFieldValue}
                                                    setFieldTouched={setFieldTouched}
                                                    autoFocus={autofocus}
                                                    autoComplete="off"
                                                    required={item.required}
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
                                    handleChangeCheckbox={handlePepChange}
                                    link_text={localize(
                                        'I declare that I am not a politically exposed person.',
                                    )}
                                ></AgreementLabel>
                                <AgreementLabel
                                    is_affiliate
                                    is_checked={is_terms_checked}
                                    handleChangeCheckbox={handleTermsChange}
                                    link_text={localize(
                                        'I have read and accepted Deriv’s <0>General business terms</0> and ',
                                    )}
                                >
                                    <StyledLocalizedLink
                                        external="true"
                                        to="/tnc/business-partners-affiliates-and-introducing-brokers.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        secondary
                                    >
                                        Affiliates and introducing brokers’ terms.
                                    </StyledLocalizedLink>
                                </AgreementLabel>
                            </Flex>
                            <Flex fd="column" ai="center">
                                <SignupButton
                                    id="dm-new-signup"
                                    secondary
                                    type="submit"
                                    disabled={!isValid || !dirty || !checksSelected()}
                                >
                                    {localize('Signup')}
                                </SignupButton>
                                <Header
                                    as="p"
                                    type="paragraph-1"
                                    weight="normal"
                                    align="center"
                                    mt="8px"
                                >
                                    {localize('Already have an account?')}
                                    <StyledLinkText
                                        id="dm-new-login-button"
                                        ml="6px"
                                        size="16px"
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
    is_submitting: PropTypes.bool,
    last_name: PropTypes.string,
    mobile_number: PropTypes.number,
    password: PropTypes.string,
}

export default SignupAffiliateDetails
