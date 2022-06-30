import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { Flex } from '../containers'
import { resetSignupAffiliateDetails } from '../../pages/signup-affiliates-details/common/_utility'
import { DropdownSearch } from '../elements'
import { useResidenceList } from '../hooks/use-residence-list'
import { useAffiliateData } from '../hooks/use-affiliate-data'
import CurrencySelect from '../form/currency-select'
import AgreementLabel from './_agreement-label'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
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
    margin-bottom: -16px;
`
const CodeWrapper = styled.div`
    width: 20%;
    border: var(--color-grey-7) 1px solid;
    height: 40px;
    font-size: var(--text-size-xs);
    background: none;
    color: var(--color-black);
    border-radius: 4px;
    text-align: center;
`
const MobileInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const SignupAffiliateDetails = ({ autofocus, handleLogin, setUserData }) => {
    const [non_pep_declaration, setNonPepDeclaration] = useState(0)
    const [tnc_accepted, setTncAccepted] = useState(0)
    const [is_eu_checked, setEuChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const residence_list = useResidenceList()
    const [is_checked, setChecked] = useState(false)
    const [website_status] = useWebsiteStatus()
    const user_ip_country = website_status?.clients_country || ''
    const [phone_code, setPhoneCode] = useState('')
    const [default_residence, setDefaultResidence] = useState(null)

    useEffect(() => {
        if (residence_list.length > 0) {
            setDisabled(false)
            const current_country = residence_list.find(({ value }) => value === user_ip_country)
            setDefaultResidence(current_country)
        }
    }, [residence_list])

    const {
        first_name,
        last_name,
        date_of_birth,
        country,
        address_line_1,
        address_city,
        address_state,
        address_postcode,
        phone,
    } = useAffiliateData()
    const handleCheckChange = (event, func) => func(event.currentTarget.checked ? 1 : 0)

    return (
        <StyledContentFlex jc="flex-start" fd="column" p="40px">
            <Formik
                enableReinitialize
                initialValues={{
                    first_name: first_name || '',
                    last_name: last_name || '',
                    date: date_of_birth || '',
                    country: country || null,
                    residence_list: residence_list,
                    address_line_1: address_line_1 || '',
                    address_city: address_city || '',
                    address_state: address_state || '',
                    address_postcode: address_postcode || '',
                    phone: phone || '',
                    password: '',
                    currency: '',
                }}
                validateOnBlur={false}
                validate={(values) => resetSignupAffiliateDetails(values)}
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
                        !(non_pep_declaration && tnc_accepted && is_checked) || !isValid || !dirty

                    if (!values.country && default_residence) {
                        setFieldValue('country', default_residence)
                        setFieldValue(phone_code, setPhoneCode(default_residence.country_code))
                    }

                    const form_inputs = [
                        {
                            id: 'dm-first-name-input',
                            name: 'first_name',
                            type: 'text',
                            error: errors.first_name,
                            value: values.first_name,
                            touch: touched.first_name,
                            label: localize('First name'),
                            placeholder: 'First name',
                            required: true,
                        },
                        {
                            id: 'dm-last-name-input',
                            name: 'last_name',
                            type: 'text',
                            error: errors.last_name,
                            value: values.last_name,
                            touch: touched.last_name,
                            label: localize('Last name'),
                            placeholder: 'Last name',
                            required: true,
                        },
                        {
                            id: 'dm-date-input',
                            name: 'date',
                            type: 'text',
                            error: errors.date,
                            value: values.date,
                            touch: touched.date,
                            label: localize('Date of birth'),
                            placeholder: 'Date of birth',
                            required: true,
                        },
                        {
                            id: 'dm-country-select',
                            name: 'country',
                            type: 'select',
                            error: errors.country,
                            touch: touched.selected_dropdown,
                            list: values.residence_list,
                            label: localize('Country of residence'),
                            placeholder: 'Country of residence',
                            required: true,
                        },

                        {
                            id: 'dm-address_line_1',
                            name: 'address_line_1',
                            type: 'text',
                            error: errors.address_line_1,
                            value: values.address_line_1,
                            touch: touched.address_line_1,
                            label: localize('Address line1'),
                            placeholder: 'Address line1',
                            required: true,
                        },
                        {
                            id: 'dm-address_line_2',
                            name: 'address_line_2',
                            type: 'text',
                            value: values.address_line_2,
                            label: localize('Address line2'),
                            placeholder: 'Address line2',
                        },
                        {
                            id: 'dm-address_city',
                            name: 'address_city',
                            type: 'text',
                            error: errors.address_city,
                            value: values.address_city,
                            touch: touched.address_city,
                            label: localize('City'),
                            placeholder: 'City',
                            required: true,
                        },
                        {
                            id: 'dm-address_state',
                            name: 'address_state',
                            type: 'text',
                            error: errors.address_state,
                            value: values.address_state,
                            touch: touched.address_state,
                            label: localize('State'),
                            placeholder: 'State',
                            required: true,
                        },
                        {
                            id: 'dm-address_postcode',
                            name: 'address_postcode',
                            type: 'text',
                            error: errors.address_postcode,
                            value: values.address_postcode,
                            touch: touched.address_postcode,
                            label: localize('Postcode'),
                            placeholder: 'Postcode',
                            required: true,
                        },
                        {
                            id: 'dm-mobile-number',
                            name: 'phone',
                            type: 'tel',
                            error: errors.phone,
                            value: values.phone,
                            touch: touched.phone,
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
                        <div style={{ display: 'block' }}>
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
                                    if (item.name === 'country') {
                                        return (
                                            <DropdownSearchWrapper key={item.id}>
                                                <DropdownSearch
                                                    id={item.id}
                                                    label_position={0.8}
                                                    selected_item={values.country}
                                                    default_item={''}
                                                    error={item.touch && item.error}
                                                    items={item.list}
                                                    label={localize('Country of residence')}
                                                    onChange={(value) => {
                                                        setFieldValue('country', value)
                                                        setFieldValue(
                                                            phone_code,
                                                            setPhoneCode(value.country_code),
                                                        )
                                                    }}
                                                    onBlur={handleBlur}
                                                    disabled={disabled}
                                                />
                                            </DropdownSearchWrapper>
                                        )
                                    }
                                    if (item.name === 'phone') {
                                        return (
                                            <MobileInputWrapper>
                                                <CodeWrapper>
                                                    <div style={{ marginTop: '15px' }}>
                                                        {phone_code && (
                                                            <span>{`+${phone_code}`}</span>
                                                        )}
                                                    </div>
                                                </CodeWrapper>
                                                <div style={{ width: '80%', paddingLeft: '10px' }}>
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
                                                                error_shift="0.8rem"
                                                                type={item.type}
                                                                border="solid 1px var(--color-grey-7)"
                                                                label_focus_color="green"
                                                                background="white"
                                                                error={item.touch && item.error}
                                                                label={localize(item.label)}
                                                                placeholder={item.placeholder}
                                                                password_icon={
                                                                    item.name === 'password'
                                                                }
                                                                handleError={(current_input) => {
                                                                    setFieldValue(
                                                                        item.name,
                                                                        '',
                                                                        false,
                                                                    )
                                                                    setFieldError(item.name, '')
                                                                    setFieldTouched(
                                                                        item.name,
                                                                        false,
                                                                        false,
                                                                    )
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
                                                </div>
                                            </MobileInputWrapper>
                                        )
                                    } else {
                                        return (
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
                                                        error_shift="0.8rem"
                                                        type={item.type}
                                                        border="solid 1px var(--color-grey-7)"
                                                        label_focus_color="green"
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
                                    }
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
                                    is_checked={non_pep_declaration}
                                    handleChangeCheckbox={(e) =>
                                        handleCheckChange(e, setNonPepDeclaration)
                                    }
                                    link_text={localize(
                                        'I declare that I am not a politically exposed person.',
                                    )}
                                ></AgreementLabel>
                                <AgreementLabel
                                    is_affiliate
                                    is_checked={tnc_accepted}
                                    handleChangeCheckbox={(e) =>
                                        handleCheckChange(e, setTncAccepted)
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
                                <div>
                                    <SignupButton
                                        id="dm-new-signup"
                                        secondary
                                        type="submit"
                                        disabled={fieldsSelected()}
                                        onClick={() => {
                                            /*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
                                            const { residence_list, ...user_data } = values
                                            setUserData({
                                                ...user_data,
                                                phone_code,
                                                non_pep_declaration,
                                                tnc_accepted,
                                            })
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
                        </div>
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
    password: PropTypes.string,
    phone: PropTypes.number,
    setErrorMessage: PropTypes.func,
    setUserData: PropTypes.func,
    showModal: PropTypes.func,
}

export default SignupAffiliateDetails
