import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import Demo from 'images/svg/free-demo.svg'
import Trade from 'images/svg/money-to-lose.svg'
import Borrowed from 'images/svg/borrowed-money.svg'
import Limit from 'images/svg/set-limit-losses.svg'
import Judgement from 'images/svg/bad-judgement.svg'
import Winnings from 'images/svg/portion-of-winnings.svg'

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

export const IconGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(3, 1fr)"
            column_gap="15rem"
            row_gap="4rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="6rem"
            margin="1rem 0 0"
        >
            <Col
                Icon={Demo}
                content={localize('Hone your skills with a free demo account.')}
            />
            <Col
                Icon={Trade}
                content={localize(
                    'Only trade with money you can afford to lose.',
                )}
            />
            <Col
                Icon={Borrowed}
                content={localize(
                    'Do not trade with borrowed money.',
                )}
            />
            <Col
                Icon={Limit}
                content={localize(
                    'Set a limit for your losses and stick to it.',
                )}
            />
            <Col
                Icon={Judgement}
                content={localize(
                    "Avoid trading when you’re prone to bad judgement.",
                )}
            />
            <Col
                Icon={Winnings}
                content={localize(
                    'Put aside a portion of your winnings to avoid losing it all.',
                )}
            />
        </CssGrid>
    </GridContainer>
)
