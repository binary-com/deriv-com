import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import Two from 'images/svg/two-factor-authentication.svg'
import DifferentPassword from 'images/svg/use-different-password.svg'
import Browser from 'images/svg/keep-browser-up-to-date.svg'
import Configure from 'images/svg/cloudfare-dns.svg'
import DontShare from 'images/svg/don-t-share-payment-methods.svg'
import Monitor from 'images/svg/recent-logins.svg'
import Antivirus from 'images/svg/install-latest-antivirus.svg'
import Container from 'components/containers/container'

const IconGrid = styled(Container)`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 4rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
    }
    @media ${device.tabletS} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 3rem;
        grid-row-gap: 6rem;
        text-align: center;
    }
`
const GridCol = styled.article`
    height: 100%;

    ${Text} {
        margin-top: 1.8rem;
        font-size: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
        @media ${device.tabletS} {
            text-align: center;
        }
    }
`

const Col = ({ Icon, content }) => (
    <GridCol>
        <Icon />
        <Text lh="1.55">{content}</Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export const SecurityIconGrid = () => (
    <IconGrid>
        <Col Icon={Two} content={localize('Enable two-factor authentication on your account.')} />
        <Col
            Icon={DifferentPassword}
            content={localize(
                'Use different passwords for your email and Deriv.com account and set a strong password.',
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
