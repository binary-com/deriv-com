import styled from 'styled-components'
import { SharedButtonStyleProps, SharedButtonStyle } from './button'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

type LinkButtonProps = SharedButtonStyleProps & {
    hero?: boolean
    id?: string
}

const LinkButton = styled(LocalizedLink)<LinkButtonProps>`
    ${SharedButtonStyle}
    text-align: center;
    text-decoration: none;
    padding: ${({ hero }) => hero && '17px 24px'};

    @media ${device.tabletL} {
        font-size: 14px;
        padding: ${({ hero }) => hero && '10px 16px'};
    }
`

export default LinkButton
