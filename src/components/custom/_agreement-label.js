import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText, Header } from 'components/elements'
import { Localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device.js'

const StyledLocalizedLinkText = styled(LocalizedLinkText)`
    font-size: 14px;

    @media ${device.tabletL} {
        font-size: 12px;
    }
`

const AgreementLabel = ({
    handleChangeCheckbox,
    color,
    isTnc,
    isChecked,
    link_text = 'I agree to the',
}) => {
    const [is_mounted] = usePageLoaded()

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
                display: 'flex',
                alignItems: 'center',
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
            <Header as="span" type="paragraph-2" weight="regular" color={color}>
                <Localize translate_text={link_text} />{' '}
                {is_mounted && isTnc && (
                    <StyledLocalizedLinkText
                        type="terms_and_conditions/#clients"
                        external="true"
                        rel="noopener noreferrer"
                        color="red"
                    >
                        terms and conditions
                    </StyledLocalizedLinkText>
                )}
            </Header>
        </label>
    )
}

AgreementLabel.propTypes = {
    color: PropTypes.string,
    handleChangeCheckbox: PropTypes.func,
    isChecked: PropTypes.bool,
    isTnc: PropTypes.bool,
    link_text: PropTypes.string,
}

export default AgreementLabel
