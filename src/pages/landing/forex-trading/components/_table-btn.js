import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MarketInstruments from '../../../markets/components/sections/_market_instruments.js'
import { SwapFreePairs } from '../../../markets/instruments/_submarkets.js'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 30px;
    }
`

const TryButton = styled(LinkButton)`
    @media ${device.mobileL} {
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileL} {
        margin-top: 24px 0 40px;
    }
`

const Tablebtn = ({ btnlabel, text }) => {
    const swap_free_pairs = {
        markets_list: {
            col: 4,
            tablet_col: 3,
            mobile_col: 2,
        },
        content: [
            {
                title: <Localize translate_text="Swap-free pairs" />,
                component: <SwapFreePairs />,
            },
        ],
    }

    return (
        <StyledSection background="var(--color-grey-30)" padding="3rem 0">
            <StyledContainer direction="column">
                <StyledText width="100%" size="1.7rem">
                    {text}
                </StyledText>
                <MarketInstruments
                    market_content={swap_free_pairs}
                    background="var(--color-white)"
                />
                <TryButton
                    m="4.2rem 0 40px"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    type="submit"
                    secondary="true"
                    to={'/signup/'}
                >
                    {btnlabel}
                </TryButton>
            </StyledContainer>
        </StyledSection>
    )
}

Tablebtn.propTypes = {
    btnlabel: PropTypes.string,
    text: PropTypes.string,
}

export default Tablebtn
