import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { smarttrader_url } from '../../../../common/constants'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import DBot from 'images/svg/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import SmartTrader from 'images/svg/smarttrader.svg'

const PlatformsContainer = styled(Flex)`
    justify-content: space-around;
    width: unset;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    img {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;
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

    @media ${device.tabletL} {
        font-size: 16px;
        margin-right: 1rem;
    }
    @media ${device.tablet} {
        margin-bottom: ${(props) => (props.tablet_direction === 'column' ? '1.6rem' : 'unset')};
    }
    @media ${device.mobileL} {
        width: unset;
        margin-right: 0;
        font-size: 14px;
    }
`
const StyledFlex = styled(Flex)`
    background: var(--color-grey-4);
    padding: 0.8rem;

    ${Text} {
        font-size: 14px;
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
                            <img src={DMT5} alt="dmt5 icon" width="32" height="32" />
                            <Text ml="0.4rem">{localize('Deriv MT5 (DMT5)')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DTrader} alt="dtrader icon" width="32" height="32" />
                            <Text ml="0.4rem">{localize('DTrader')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DBot} alt="dbot icon" width="32" height="32" />
                            <Text ml="0.4rem">{localize('DBot')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a href={smarttrader_url} target="_blank" rel="noopener noreferrer">
                        <StyledFlex direction="row" ai="center">
                            <img src={SmartTrader} alt="smarttrader" width="32" height="32" />
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
