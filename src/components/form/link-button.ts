import styled from 'styled-components'
import { SharedButtonStyle } from './button'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { PaddingMixin } from 'themes/mixins'

type LinkButtonProps = {
    hero?: string
}

const LinkButton = styled(LocalizedLink)<LinkButtonProps>`
    ${SharedButtonStyle}
    text-align: center;
    text-decoration: none;
    ${(props) => PaddingMixin({ all: props.hero && '17px 24px' })}

    @media ${device.tabletL} {
        font-size: 14px;
        ${(props) => PaddingMixin({ all: props.hero && '10px 16px' })}
    }
`

export default LinkButton
