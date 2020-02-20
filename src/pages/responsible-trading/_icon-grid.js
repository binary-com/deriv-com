import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import UseDifferentPassword from 'images/svg/use-different-password.svg'
import BrowserUpToDate from 'images/svg/keep-browser-up-to-date.svg'
import DontShare from 'images/svg/don-t-share-payment-methods.svg'
import Antivirus from 'images/svg/install-latest-antivirus.svg'
import DontBorrow from 'images/svg/dont-borrow.svg'
import FreeDemo from 'images/svg/free-demo.svg'
import SetLimitChart from 'images/svg/set-limit-chart.svg'
import BadJudgement from 'images/svg/bad-judgement.svg'

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
        <Text lh="1.55">{content}</Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.elementType,
}

export const SecureGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(4, 1fr)"
            column_gap="2.4rem"
            row_gap="4rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="6rem"
        >
            <Col
                Icon={UseDifferentPassword}
                content={localize(
                    'Use strong and varied passwords for your Deriv account, email, online banking, e-wallets, etc. Make it as difficult as possible for anyone to guess your passwords.',
                )}
            />
            <Col
                Icon={BrowserUpToDate}
                content={localize(
                    'Use a secure web browser such as Google Chrome and always ensure it’s up-to-date. Security patches are included in the software updates of your browser.',
                )}
            />
            <Col
                Icon={DontShare}
                content={localize(
                    'To prevent unauthorised usage of your account, don’t share your login details with anyone. Keep your username, passwords, and PINs secure.',
                )}
            />
            <Col
                Icon={Antivirus}
                content={localize(
                    'Install security apps such as antivirus and firewalls on your devices. Leading security apps are available in desktop and mobile versions.',
                )}
            />
        </CssGrid>
    </GridContainer>
)

export const ResponsibleGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(4, 1fr)"
            column_gap="2.4rem"
            row_gap="4rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="6rem"
        >
            <Col
                Icon={DontBorrow}
                content={localize(
                    'Understand the risks of online trading. Never trade using borrowed money, or money you can’t afford to lose.',
                )}
            />
            <Col
                Icon={FreeDemo}
                content={localize(
                    'Use our demo account and trade with unlimited virtual funds. It’s the easiest way to learn how to use our products.',
                )}
            />
            <Col
                Icon={SetLimitChart}
                content={localize(
                    'Set a limit for your losses and stick to it. Put aside some of your winnings to avoid losing all your money.',
                )}
            />
            <Col
                Icon={BadJudgement}
                content={localize(
                    'Trade wisely and don’t let your emotions influence your decisions. Don’t trade when you’re prone to bad judgement.',
                )}
            />
        </CssGrid>
    </GridContainer>
)
