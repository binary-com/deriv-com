import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Checkbox, LocalizedLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device'

type AgreementLabelProps = {
    color?: string
    handleChangeCheckbox: (event) => void
    is_checked?: boolean
    link_text?: string
    is_affiliate?: boolean
    children?: ReactNode
}

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

const CheckboxSpan = styled.span`
    font-size: 14px;
    color: ${(props) => (props.color ? props.color : 'black')};
    @media ${device.tabletL} {
        font-size: 12px;
    }
`

const AgreementLabel = ({
    handleChangeCheckbox,
    is_checked,
    color,
    is_affiliate,
    link_text,
}: AgreementLabelProps) => {
    // the is mounted check is used for making sure the localized link text
    // properly renders the correct domain url
    const [is_mounted] = usePageLoaded()
    const handleChange = (event) => {
        handleChangeCheckbox(event)
    }
    const type = is_affiliate
        ? '/terms-and-conditions/#business-partners'
        : '/terms-and-conditions/#clients'

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
                            external
                            key={0}
                            to={type}
                            rel="noopener noreferrer"
                            size="14px"
                            color="red"
                            target="__blank"
                        />,
                    ]}
                />
            </CheckboxSpan>
        </StyledLabel>
    ) : (
        <></>
    )
}

export default AgreementLabel
