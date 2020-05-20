import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import SmartTrader from 'images/svg/smarttrader.svg'

const PlatformsContainer = styled(Flex)`
    margin-top: 1.6rem;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    svg {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;

        @media ${device.tabletL} {
            margin: 0 4px 0 0;
        }
    }
    a:last-child {
        margin-right: 0;
    }

    @media ${device.tabletL} {
        justify-content: flex-start;
        margin-top: 3rem;
        flex-direction: column;
    }
`
const PlatformsWrapper = styled(Flex)`
    width: auto;

    @media ${device.tabletL} {
        margin-top: 1rem;
    }
`
const StyledText = styled(Text)`
    margin-right: 1.6rem;

    @media ${device.tabletL} {
        font-size: 1.75rem;
        margin-right: 1rem;
    }
`
const StyledFlex = styled(Flex)`
    background: var(--color-grey-4);
    padding: 0.8rem;

    @media ${device.tabletL} {
        padding: 1rem;

        ${Text} {
            font-size: 1.75rem;
        }
    }
`
const AvailablePlatforms = ({ dmt5, dtrader, dbot, smarttrader }) => {
    return (
        <PlatformsContainer ai="center">
            <div>
                <StyledText>{localize('Available on')}</StyledText>
            </div>
            <PlatformsWrapper>
                {dmt5 && (
                    <LocalizedLink to="/dmt5/">
                        <StyledFlex direction="row" ai="center">
                            <DMT5 />
                            <Text ml="0.8rem">{localize('MetaTrader5 (DMT5)')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <DTrader />
                            <Text>{localize('DTrader')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <DBot />
                            <Text>{localize('DBot')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a
                        href="https://smarttrader.deriv.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledFlex direction="row" ai="center">
                            <SmartTrader />
                            <Text>{localize('SmartTrader')}</Text>
                        </StyledFlex>
                    </a>
                )}
            </PlatformsWrapper>
        </PlatformsContainer>
    )
}

AvailablePlatforms.propTypes = {
    dbot: PropTypes.bool,
    dmt5: PropTypes.bool,
    dtrader: PropTypes.bool,
    smarttrader: PropTypes.bool,
}
export default AvailablePlatforms
