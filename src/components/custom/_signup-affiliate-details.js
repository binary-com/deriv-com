/* eslint-disable no-debugger */

import React, { useState } from 'react'
import { Tooltip } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import { Flex } from '../containers'
import {
    getSignupAffiliateValue,
    resetSignupAffiliateDetails,
} from '../../pages/signup-affiliates-details/common/_utility'
import { DropdownSearch, LocalizedLinkText } from '../elements'
import { useResidenceList } from '../hooks/use-residence-list'
import { useAffiliateData } from '../hooks/use-affiliate-data'
import Info from '../../images/svg/signup-affiliate-details/info.svg'
import RadioInput from '../form/radio-input'
import CurrencySelect from '../form/currency-select'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, Text, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const AffiliateForm = styled(Form)`
    display: block;
`
const StyledContentFlex = styled(Flex)`
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    @media ${device.tablet} {
        width: 53rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        padding: 6rem 2rem;
    }
`
const SubTitle = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`
const Line = styled.div`
    width: 110px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.5rem 0 0.6rem;
    @media ${device.mobileL} {
        margin: 25px 0 16px 0;
    }
`
const SignupButton = styled(Button)`
    width: 120px;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;
    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const LoginText = styled(Text)`
    text-align: left;
    margin-top: 1.6rem;
    @media ${device.tabletL} {
        margin-top: 3.75rem;
    }
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`
const DropdownSearchWrapper = styled.div`
    margin-bottom: -16px;
`

const SignupAffiliateDetails = ({ autofocus, handleLogin }) => {
    const [is_pep_checked, setPepChecked] = useState(false)
    const [is_terms_checked, setTermsChecked] = useState(false)
    const [is_revenue, setRevenue] = useState(false)
    const [is_turnover, setTurnover] = useState(false)
    const [is_input_country, setCountryInput] = useState(true)
    const residence_list = useResidenceList()
    const countries = residence_list.map((el) => el.name)
    const { first_name, last_name, date_of_birth, country, address_line_1, address_line_2, phone } =
        useAffiliateData()

    const handlePepChange = (event) => {
        setPepChecked(event.currentTarget.checked)
    }

    const handleTermsChange = (event) => {
        setTermsChecked(event.currentTarget.checked)
    }

    const checksSelected = () => is_pep_checked && is_terms_checked && (is_revenue || is_turnover)

    const checkCountryInput = (value) => {
        setCountryInput(countries.includes(value))
    }

    const submitValues = (values, callback) => {
        console.log(values, 'wtf')
        Object.keys(values).forEach((el) => {
            callback(el, getSignupAffiliateValue(values[el]))
        })
    }

    return (
        <StyledContentFlex jc="flex-start" fd="column" p="4rem" width="48rem" height="auto">
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
                }}
                validate={(values) => resetSignupAffiliateDetails(values, is_input_country)}
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
                        <AffiliateForm>
                            <Header as="h4" type="sub-section-title" mb="0.8rem">
                                {localize('We’re glad you’re here')}
                            </Header>
                            <SubTitle>
                                {localize(
                                    'Complete this form to sign up for our partnership programme.',
                                )}
                            </SubTitle>
                            <InputGroup>
                                {form_inputs.map((item) => {
                                    return item.name === 'country' ? (
                                        <DropdownSearchWrapper key={item.id}>
                                            <DropdownSearch
                                                id={item.id}
                                                isAffiliate
                                                selected_item={values.country}
                                                default_item={''}
                                                error={item.touch && item.error}
                                                items={item.list}
                                                label={localize('Country of residence')}
                                                onChange={(value) => {
                                                    checkCountryInput(value.name)
                                                    setFieldValue('country', value)
                                                }}
                                                checkCountryInput={checkCountryInput}
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
                                                    isDate={item.name === 'date'}
                                                    isAffiliate
                                                    type={item.type}
                                                    border="solid 1px var(--color-grey-7)"
                                                    labelColor="grey-5"
                                                    labelHoverColor="grey-5"
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
                            <Flex fd="row" jc="space-between" ai="center" mt="2.4">
                                <Line />
                                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                                    {localize('Choose a plan')}
                                </StyledText>
                                <Tooltip
                                    title={
                                        <div style={{ color: 'black' }}>
                                            {localize(
                                                'Choose which plan you would like to subscribe to.',
                                            )}{' '}
                                            <LocalizedLinkText
                                                to="/partners/affiliate-ib#deriv-ap"
                                                external="true"
                                                color="red"
                                                target="_blank"
                                                is_anchor
                                                style={{ fontSize: '14px' }}
                                            >
                                                {localize('Learn more')}
                                            </LocalizedLinkText>
                                        </div>
                                    }
                                    color={'#d6dadb'}
                                >
                                    <img
                                        style={{ marginLeft: '5px', cursor: 'pointer' }}
                                        src={Info}
                                        alt="info"
                                    />
                                </Tooltip>
                                <Line />
                            </Flex>
                            <Flex fd="row" jc="space-between" m="2rem 0">
                                <Field name="revenue">
                                    {({ field }) => (
                                        <RadioInput
                                            {...field}
                                            onChange={(e) => {
                                                setRevenue(e.target.value)
                                                setTurnover(false)
                                                setFieldValue('plan', 'Revenue share')
                                            }}
                                            checked={is_revenue}
                                            label={localize('Revenue share')}
                                            description="Earn based on the monthly net revenue generated by your clients."
                                        />
                                    )}
                                </Field>
                                <Field name="turnover">
                                    {({ field }) => (
                                        <RadioInput
                                            {...field}
                                            onChange={(e) => {
                                                setTurnover(e.target.value)
                                                setRevenue(false)
                                                setFieldValue('plan', 'Turnover')
                                            }}
                                            checked={is_turnover}
                                            label={localize('Turnover')}
                                            description="Earn based on each contract’s payout probability."
                                        />
                                    )}
                                </Field>
                            </Flex>
                            <Flex fd="row" jc="space-between" ai="center" mt="2.4">
                                <Line />
                                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                                    {localize('Choose your currency')}
                                </StyledText>
                                <Line />
                            </Flex>
                            <CurrencySelect />
                            <Flex fd="column">
                                <AgreementLabel
                                    pep_label={localize(
                                        'I declare that I am not a politically exposed person.',
                                    )}
                                    isChecked={is_pep_checked}
                                    handleChangeCheckbox={handlePepChange}
                                />
                                <AgreementLabel
                                    isChecked={is_terms_checked}
                                    handleChangeCheckbox={handleTermsChange}
                                />
                            </Flex>
                            <SignupButton
                                id="dm-new-signup"
                                secondary
                                type="submit"
                                disabled={!isValid || !dirty || !checksSelected()}
                            >
                                {localize('Signup')}
                            </SignupButton>
                        </AffiliateForm>
                    )
                }}
            </Formik>
            <LoginText>
                {localize('Already have an account?')}
                <StyledLinkText
                    id="dm-new-login-button"
                    ml="0.4rem"
                    size="16px"
                    color="red"
                    onClick={handleLogin}
                >
                    {localize('Log in')}
                </StyledLinkText>
            </LoginText>
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
