import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device.js'

const StyledLabel = styled.label`
    display: flex;
    font-weight: normal;
    line-height: 20px;
    margin-top: 5px;
    margin-bottom: 0;
    @media ${device.tabletL} {
        line-height: 18px;
    }
`
const CheckboxSpan = styled.div`
    font-size: 1.4rem;
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 12px;
    }
`

const AgreementLabel = ({
    handleChangeCheckbox,
    is_checked,
    is_affiliate,
    color,
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
        <StyledLabel>
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
                    translate_text={link_text}
                    components={[
                        <LocalizedLinkText
                            key={0}
                            type={type}
                            size="1.5rem"
                            external="true"
                            rel="noopener noreferrer"
                            color="red"
                            target="__blank"
                        />,
                    ]}
                />
                {children}
            </CheckboxSpan>
        </StyledLabel>
    ) : (
        <></>
    )
}

AgreementLabel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    color: PropTypes.string,
    handleChangeCheckbox: PropTypes.func,
    is_affiliate: PropTypes.bool,
    is_checked: PropTypes.bool,
    link_text: PropTypes.string,
}

export default AgreementLabel
