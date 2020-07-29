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
    justify-content: space-around;
    width: unset;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    svg {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;

        @media ${device.tabletL} {
            margin: 0;
            width: 32px;
            height: 32px;
        }
    }
    a:last-child {
        margin-right: 0;
    }
    @media ${device.tablet} {
        width: ${(props) => props.width};
    }
`
const StyledText = styled(Text)`
    margin-right: 1.6rem;
    width: 102px;

    @media ${device.tabletL} {
        font-size: 1.75rem;
        margin-right: 1rem;
    }
    @media ${device.tablet} {
        margin-bottom: ${(props) => (props.tablet_direction === 'column' ? '1.6rem' : 'unset')};
    }
    @media ${device.mobileL} {
        width: 121px;
    }
`
const StyledFlex = styled(Flex)`
    background: var(--color-grey-4);
    padding: 0.8rem;

    @media ${device.tabletL} {
        background: unset;
        padding: 0;
    }
`
const AvailablePlatforms = ({
    dmt5,
    dtrader,
    dbot,
    smarttrader,
    flex_direction,
    tablet_direction,
}) => {
    return (
        <Flex
            fd={flex_direction}
            mobileL={{ mt: '16px' }}
            mt="2.4rem"
            tablet_direction={tablet_direction}
            ai="center"
        >
            <StyledText tablet_direction={tablet_direction}>{localize('Available on')}</StyledText>
            <PlatformsContainer
                width={tablet_direction === 'column' ? '100%' : 'unset'}
                ai="center"
            >
                {dmt5 && (
                    <LocalizedLink to="/dmt5/">
                        <StyledFlex direction="row" ai="center">
                            <DMT5 />
                            <Text ml="0.4rem">{localize('MetaTrader5 (DMT5)')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <DTrader />
                            <Text ml="0.4rem">{localize('DTrader')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <DBot />
                            <Text ml="0.4rem">{localize('DBot')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a
                        href="https://smarttrader.deriv.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledFlex direction="row" ai="center">
                            <SmartTrader />
                            <Text ml="0.4rem">{localize('SmartTrader')}</Text>
                        </StyledFlex>
                    </a>
                )}
            </PlatformsContainer>
        </Flex>
    )
}

AvailablePlatforms.propTypes = {
    dbot: PropTypes.bool,
    dmt5: PropTypes.bool,
    dtrader: PropTypes.bool,
    flex_direction: PropTypes.string,
    smarttrader: PropTypes.bool,
    tablet_direction: PropTypes.string,
    tablet_jc: PropTypes.string,
}
export default AvailablePlatforms
