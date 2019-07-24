import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { Text } from '../../components/elements/typography.js'
import { localize } from '../../components/localization'

import Two from 'images/svg/two-factor.svg'
import DifferentPassword from 'images/svg/different-password.svg'
import Cashier from 'images/svg/cashier-lock.svg'
import Browser from 'images/svg/browser-up-to-date.svg'
import Configure from 'images/svg/configure-pc.svg'
import DontShare from 'images/svg/share-deriv.svg'
import Monitor from 'images/svg/monitor-logins.svg'
import Antivirus from 'images/svg/install-antivirus.svg'

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5rem;
    grid-row-gap: 2.4rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`
const GridCol = styled.article`
    ${Text} {
        margin-top: 0.8rem;
    }
`

const Col = ({ Icon, content }) => (
    <GridCol>
        <Icon />
        <Text color="black-3" lh="1.55">
            {content}
        </Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export const SecurityIconGrid = () => (
    <IconGrid>
        <Col
            Icon={Two}
            content={localize(
                'Enable two-factor authentication on your account.',
            )}
        />
        <Col
            Icon={DifferentPassword}
            content={localize(
                'Use different passwords for your email and Deriv.com account and set a strong password.',
            )}
        />
        <Col
            Icon={Cashier}
            content={localize(
                'Set a cashier lock password to prevent unauthorised access to your cashier.',
            )}
        />
        <Col
            Icon={Browser}
            content={localize(
                'Always keep your web browser up-to-date. We recommend using the latest version of Google Chrome.',
            )}
        />
        <Col
            Icon={Configure}
            content={localize(
                'Configure your PC and mobile phone to use the Cloudflare DNS by following the instructions on our website.',
            )}
        />
        <Col
            Icon={DontShare}
            content={localize(
                "Don't share your Deriv.com account or payment methods with any other person.",
            )}
        />
        <Col
            Icon={Monitor}
            content={localize(
                'Monitor recent logins to your account using the login history facility.',
            )}
        />
        <Col
            Icon={Antivirus}
            content={localize(
                'Install antivirus software (such as Avast Free Antivirus for Windows and Mac) on your computer.',
            )}
        />
    </IconGrid>
)
