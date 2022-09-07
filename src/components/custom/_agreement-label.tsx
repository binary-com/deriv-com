import React from 'react'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device'

type AgreementLabelProps = {
    color?: string
    handleChangeCheckbox: (event) => void
    isChecked?: boolean
    link_text?: string
}

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
}: AgreementLabelProps) => {
    // the is mounted check is used for making sure the localized link text
    // properly renders the correct domain url
    const [is_mounted] = usePageLoaded()
    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }

    return is_mounted ? (
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
                    translate_text={link_text}
                    components={[
                        <LocalizedLinkText
                            external
                            key={0}
                            to="/terms-and-conditions/#clients"
                            rel="noopener noreferrer"
                            size="14px"
                            color="red"
                            target="__blank"
                        />,
                    ]}
                />
            </CheckboxSpan>
        </label>
    ) : (
        <></>
    )
}

export default AgreementLabel
