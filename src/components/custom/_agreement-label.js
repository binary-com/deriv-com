import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device.js'

const CheckboxSpan = styled.span`
    font-size: 14px;
    color: ${(props) => (props.color ? props.color : 'black')};
    line-height: 20px;
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const AgreementLabel = ({
    handleChangeCheckbox,
    is_checked,
    color,
    is_affiliate,
    link_text = localize('I agree to the <0>terms and conditions</0>'),
    children,
}) => {
    const type = is_affiliate
        ? 'terms_and_conditions/#business-partners'
        : 'terms_and_conditions/#clients'

    // the is mounted check is used for making sure the localized link text
    // properly renders the correct domain url
    const [is_mounted] = usePageLoaded()
    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }

    return is_mounted ? (
        <label
            style={{
                display: 'flex',
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
                checked={is_checked}
            />
            <CheckboxSpan color={color}>
                <Localize
                    fontSize="14px"
                    translate_text={link_text}
                    components={[
                        <LocalizedLinkText
                            key={0}
                            type={type}
                            external="true"
                            rel="noopener noreferrer"
                            size="14px"
                            color="red"
                        />,
                    ]}
                />
                {children}
            </CheckboxSpan>
        </label>
    ) : (
        <></>
    )
}

AgreementLabel.propTypes = {
    affiliate_link: PropTypes,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    color: PropTypes.string,
    handleChangeCheckbox: PropTypes.func,
    is_affiliate: PropTypes.bool,
    is_checked: PropTypes.bool,
    link_text: PropTypes.string,
}

export default AgreementLabel
