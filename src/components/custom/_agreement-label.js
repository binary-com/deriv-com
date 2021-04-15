import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkText, Checkbox } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device.js'

const CheckboxSpan = styled.span`
    font-size: var(--text-size-xs);

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const AgreementLabel = ({handleChangeCheckbox, isChecked}) => {
    const [language_code, setLanguageCode] = useState('en')

    useEffect(() => {
        setLanguageCode(localStorage.getItem('i18n'))
    }, [])

    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }

    const url = `/${language_code}/terms-and-conditions/`

    return (
         <label>
                <Checkbox
                    class="signup_agree_tnc"
                    secondary
                    onChange={handleChange}
                    checked={isChecked}
                />
                <CheckboxSpan>
                    <Localize
                        fontSize="var(--text-size-xs)"
                        translate_text="I agree to the <0>terms and conditions</0>"
                        components={[
                            <LinkText
                                href={url}
                                target="_blank"
                                size="14px"
                                color="red"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </CheckboxSpan>
            </label>
    )
}

AgreementLabel.propTypes = {
    handleChangeCheckbox: PropTypes.func,
    isChecked: PropTypes.bool,
}

export default AgreementLabel
