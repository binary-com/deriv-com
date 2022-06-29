import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import Input from '../input'
import { Dropdown } from 'components/elements'

const StyledDropdown = styled(Dropdown)`
    margin-bottom: 2.5rem;
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

const FormAddressDetails = () => {
    const country_of_residence_list = [
        { name: 'US', display_name: 'United States', key: '1', icon: '' },
        { name: 'UK', display_name: 'United Kingdom', key: '2', icon: '' },
    ]

    return (
        <div>
            <Formik
                initialValues={{
                    country_of_residence: '',
                    state: '',
                    city: '',
                    street: '',
                    zip_code: null,
                }}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values)
                }}
            >
                {({ errors, values, touched, handleBlur, handleChange, setFieldValue }) => (
                    <Form>
                        <InputGroup>
                            <StyledDropdown
                                option_list={country_of_residence_list}
                                id="Country of residence"
                                label="Country of residence"
                                default_option=""
                                selected_option={values.country_of_residence}
                                onChange={(value) => {
                                    setFieldValue('country_of_residence', value)
                                }}
                                onBlur={handleBlur}
                                autoComplete="off"
                                data-lpignore="true"
                            />
                            <Input
                                name="state"
                                error={errors.state}
                                value={values.state}
                                handleError={() => setFieldValue('state', '')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                label="State/province"
                                background="white"
                            />
                            <Input
                                name="city"
                                error={errors.city}
                                value={values.city}
                                handleError={() => setFieldValue('city', '')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                label="Town/city"
                                background="white"
                            />
                            <Input
                                name="street"
                                error={errors.street}
                                value={values.street}
                                handleError={() => setFieldValue('street', '')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                label="Street"
                                background="white"
                            />
                            <Input
                                name="zip_code"
                                error={errors.zip_code}
                                value={values.zip_code}
                                handleError={() => setFieldValue('zip_code', '')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="number"
                                label="Postal/Zip code"
                                background="white"
                            />
                        </InputGroup>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormAddressDetails
