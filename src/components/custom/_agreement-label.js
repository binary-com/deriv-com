import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
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
    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }

    return (
        <label
            style={{
                fontWeight: 'normal',
                lineHeight: '1px',
                marginTop: '5px',
                marginBottom: '0',
            }}
        >
            <Checkbox
                style={{
                    border: '0',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    position: 'absolute',
                }}
                bg="rgba(255, 255, 255, 0)"
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
                        <LocalizedLinkText
                            key={0}
                            type="terms_and_conditions"
                            external="true"
                            rel="noopener noreferrer"
                            size="14px"
                            color="red"
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
