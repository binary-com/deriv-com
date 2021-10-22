import styled from 'styled-components'
import { SharedButtonStyle } from './button'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

const LinkButton = styled(LocalizedLink)`
    ${SharedButtonStyle}
    text-align: center;
    text-decoration: none;
    padding: ${(props) => props.hero && '17px 24px'};

    @media ${device.tabletL} {
        font-size: 14px;
        padding: ${(props) => props.hero && '10px 16px'};
    }
`

export default LinkButton
