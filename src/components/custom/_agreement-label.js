import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkText, Checkbox } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device.js'

const CheckboxSpan = styled.span`
    font-size: var(--text-size-xs);
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const AgreementLabel = ({ handleChangeCheckbox, isChecked, color }) => {
    const [language_code, setLanguageCode] = useState('en')

    useEffect(() => {
        setLanguageCode(localStorage.getItem('i18n'))
    }, [])

    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }

    const url = `/${language_code}/terms-and-conditions/`

    return (
        <label
            style={{
                fontWeight: 'normal',
                lineHeight: '1px',
                marginTop: '5px',
                marginBottom: '20px',
            }}
        >
            <Checkbox
                style={{
                    border: '0',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    position: 'absolute',
                }}
                className="signup_agree_tnc"
                secondary
                onChange={handleChange}
                checked={isChecked}
            />
            <CheckboxSpan color={color}>
                <Localize
                    fontSize="var(--text-size-xs)"
                    translate_text="I agree to the <0>terms and conditions</0>"
                    components={[
                        <LinkText
                            key={0}
                            href={url}
                            target="_blank"
                            size="14px"
                            color="red"
                            rel="noopener noreferrer"
                        />,
                    ]}
                />
            </CheckboxSpan>
        </label>
    )
}

AgreementLabel.propTypes = {
    color: PropTypes.string,
    handleChangeCheckbox: PropTypes.func,
    isChecked: PropTypes.bool,
}

export default AgreementLabel
