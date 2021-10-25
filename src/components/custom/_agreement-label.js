import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device.js'

const CheckboxSpan = styled.span`
    font-size: 14px;
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const AgreementLabel = ({
    handleChangeCheckbox,
    isChecked,
    color,
    link_text = localize('I agree to the <0>terms and conditions</0>'),
}) => {
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
                    fontSize="14px"
                    translate_text={link_text}
                    components={[
                        <LocalizedLinkText
                            key={0}
                            type="terms_and_conditions/#clients"
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
    link_text: PropTypes.string,
}

export default AgreementLabel
