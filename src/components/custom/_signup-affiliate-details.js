import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DropdownSearch } from '../elements'
import { useResidenceList } from '../hooks/use-residence-list'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, Text, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const SignupContent = styled.div`
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.tablet} {
        width: 53rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        padding: 6rem 2rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`

const SubTitle = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`
const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const StyledText = styled(Text)`
    @media ${(props) => device.tabletL && props.notedBox} {
        width: 13rem;
    }
    @media (max-width: 340px) {
        width: 17rem;
    }
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
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
const EmailButton = styled(Button)`
    width: 100%;
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
const SignupWithContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-top: 4rem;
    }
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
        margin-top: 3.75rem;
    }
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`

const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`
const SignupAffiliateDetails = ({
    autofocus,
    clearEmail,
    email,
    first_name,
    last_name,
    date,
    country,
    address,
    mobile_number,
    password,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleValidation,
    is_submitting,
}) => {
    const [is_checked, setChecked] = useState(false)
    const residence_list = useResidenceList()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const form_inputs = [
        {
            id: 'dm-first-name-input',
            name: 'first_name',
            type: 'text',
            error: null,
            value: first_name,
            label: 'First Name',
            placeholder: 'First Name',
            handleError: clearEmail,
            required: true,
        },
        {
            id: 'dm-last-name-input',
            name: 'last_name',
            type: 'text',
            error: null,
            value: last_name,
            label: 'Last Name',
            placeholder: 'Last Name',
            handleError: () => true,
            required: true,
        },
        {
            id: 'dm-date-input',
            name: 'date',
            type: 'date',
            error: null,
            value: date,
            label: 'Date of Birth',
            placeholder: 'Date of Birth',
            handleError: () => true,
            required: true,
        },
        {
            id: 'dm-country-select',
            name: 'country',
            type: 'select',
            error: null,
            value: country,
            label: 'Country of residence',
            placeholder: 'Country of residence',
            handleError: () => true,
            required: true,
        },
        {
            id: 'dm-address',
            name: 'address',
            type: 'text',
            error: null,
            value: address,
            label: 'Address',
            placeholder: 'Address',
            handleError: () => true,
            required: true,
        },
        {
            id: 'dm-mobile-number',
            name: 'mobile-number',
            type: 'tel',
            error: null,
            value: mobile_number,
            label: 'Mobile number',
            placeholder: 'Mobile number',
            handleError: () => true,
            required: true,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            error: null,
            value: password,
            label: 'Password',
            placeholder: 'Password',
            handleError: () => true,
            required: true,
        },
    ]

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                {localize('We’re glad you’re here')}
            </StyledHeader>
            <SubTitle>
                {localize('Complete this form to sign up for our partnership programme.')}
            </SubTitle>
            <InputGroup>
                {form_inputs.map((item) => {
                    return item.name === 'country' ? (
                        <DropdownSearch
                            id={item.id}
                            key={item.id}
                            // contractSize={values.contractSize}
                            default_item={''}
                            // error={item.error}
                            items={residence_list}
                            label={localize('Country of residence')}
                            onChange={(value) => {
                                console.log(value)
                            }}
                            // selected_item={values.symbol}
                            // onBlur={handleBlur}
                            // bottomLabel
                        />
                    ) : (
                        <Input
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            border="solid 1px var(--color-grey-7)"
                            labelColor="grey-5"
                            labelHoverColor="grey-5"
                            background="white"
                            error={item.error}
                            value={item.value}
                            label={localize(item.label)}
                            placeholder={item.placeholder}
                            handleError={item.handleError}
                            onChange={handleInputChange}
                            onBlur={handleValidation}
                            autoFocus={autofocus}
                            autoComplete="off"
                            required={item.required}
                        />
                    )
                })}
            </InputGroup>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                    {localize('Choose a plan')}
                </StyledText>
                <Line />
            </SignupWithContainer>
            {/*handle Change for two types of checkbox*/}
            <AgreementLabel
                pepLabel={localize('I declare that I am not a politically exposed person.')}
                isChecked={is_checked}
                handleChangeCheckbox={handleChange}
            />
            <AgreementLabel isChecked={is_checked} handleChangeCheckbox={handleChange} />
            <EmailButton
                isChecked={is_checked}
                type="submit"
                secondary="true"
                disabled={is_submitting || !is_checked || email_error_msg || !email}
                id="dm-new-signup"
            >
                {localize('Signup')}
            </EmailButton>
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
        </SignupContent>
    )
}

SignupAffiliateDetails.propTypes = {
    address: PropTypes.bool,
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
