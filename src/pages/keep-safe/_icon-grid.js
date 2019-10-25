import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import Two from 'images/svg/two-factor.svg'
import DifferentPassword from 'images/svg/different-password.svg'
import Cashier from 'images/svg/cashier-lock.svg'
import Browser from 'images/svg/browser-up-to-date.svg'
import Configure from 'images/svg/configure-pc.svg'
import DontShare from 'images/svg/share-deriv.svg'
import Monitor from 'images/svg/monitor-logins.svg'
import Antivirus from 'images/svg/install-antivirus.svg'
import Container from 'components/containers/container'

const IconGrid = styled(Container)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5rem;
    grid-row-gap: 2.4rem;
    grid-template-areas:
        'Two DifferentPassword Cashier Browser'
        'Configure DontShare Monitor Antivirus';

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        grid-template-areas:
            'Two Monitor'
            'Cashier Browser'
            'Configure DontShare'
            'DifferentPassword Antivirus';
    }
`
const GridCol = styled.article`
    height: 100%;
    grid-area: ${props => props.grid_name};

    ${Text} {
        margin-top: 0.8rem;
        font-size: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
    }
`

const Col = ({ Icon, content, grid_name }) => (
    <GridCol grid_name={grid_name}>
        <Icon />
        <Text color="black-3" lh="1.55">
            {content}
        </Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    grid_name: PropTypes.string,
    Icon: PropTypes.func,
}

export const SecurityIconGrid = () => (
    <IconGrid>
        <Col
            grid_name="Two"
            Icon={Two}
            content={localize(
                'Enable two-factor authentication on your account.',
            )}
        />
        <Col
            grid_name="DifferentPassword"
            Icon={DifferentPassword}
            content={localize(
                'Use different passwords for your email and Deriv.com account and set a strong password.',
            )}
        />
        <Col
            grid_name="Cashier"
            Icon={Cashier}
            content={localize(
                'Set a cashier lock password to prevent unauthorised access to your cashier.',
            )}
        />
        <Col
            grid_name="Browser"
            Icon={Browser}
            content={localize(
                'Always keep your web browser up-to-date. We recommend using the latest version of Google Chrome.',
            )}
        />
        <Col
            grid_name="Configure"
            Icon={Configure}
            content={localize(
                'Configure your PC and mobile phone to use the Cloudflare DNS by following the instructions on our website.',
            )}
        />
        <Col
            grid_name="DontShare"
            Icon={DontShare}
            content={localize(
                "Don't share your Deriv.com account or payment methods with any other person.",
            )}
        />
        <Col
            grid_name="Monitor"
            Icon={Monitor}
            content={localize(
                'Monitor recent logins to your account using the login history facility.',
            )}
        />
        <Col
            grid_name="Antivirus"
            Icon={Antivirus}
            content={localize(
                'Install antivirus software (such as Avast Free Antivirus for Windows and Mac) on your computer.',
            )}
        />
    </IconGrid>
)
