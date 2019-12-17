import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
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

const GridCol = styled(CssGridColumn)`
    width: 100%;

    ${Text} {
        margin-top: 1.8rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
        @media ${device.tabletS} {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        text-align: center;
    }
`

const Col = ({ Icon, content }) => (
    <GridCol>
        <Icon />
        <Text lh="1.55">
            {content}
        </Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.elementType,
}

export const SecurityIconGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(4, 1fr)"
            columngap="3rem"
            rowgap="4rem"
            tabletcolumns="repeat(2, 1fr)"
            mobilecolumns="1fr"
            mobilerowgap="6rem"
            margin="1rem 0 0"
        >
        <Col
            Icon={Two}
            content={localize('Enable two-factor authentication on your account.')}
        />
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
        </CssGrid>
    </GridContainer>
)
