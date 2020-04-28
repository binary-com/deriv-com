import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import SmartTrader from 'images/svg/smarttrader.svg'

const PlatformsContainer = styled(Flex)`
    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    svg {
        width: 24px;
        height: 24px;
        margin-left: 0.3rem;
    }
    a:last-child {
        margin-right: 0;
    }
`
const AvailablePlatforms = ({ dmt5, dtrader, dbot, smarttrader }) => {
    return (
        <PlatformsContainer ai="center" mt="1.6rem">
            <Text mr="1.6rem">{localize('Available on')}</Text>
            {dmt5 && (
                <LocalizedLink to="/dmt5/">
                    <Flex background="var(--color-grey-4)" direction="row" ai="center" p="0.8rem">
                        <DMT5 />
                        <Text>{localize('MetaTrader5 (DMT5)')}</Text>
                    </Flex>
                </LocalizedLink>
            )}
            {dtrader && (
                <LocalizedLink to="/dtrader/">
                    <Flex background="var(--color-grey-4)" direction="row" ai="center" p="0.8rem">
                        <DTrader />
                        <Text>{localize('DTrader')}</Text>
                    </Flex>
                </LocalizedLink>
            )}
            {dbot && (
                <LocalizedLink to="/dbot/">
                    <Flex background="var(--color-grey-4)" direction="row" ai="center" p="0.8rem">
                        <DBot />
                        <Text>{localize('DBot')}</Text>
                    </Flex>
                </LocalizedLink>
            )}
            {smarttrader && (
                <a href="https://smarttrader.deriv.app/" target="_blank" rel="noopener noreferrer">
                    <Flex background="var(--color-grey-4)" direction="row" ai="center" p="0.8rem">
                        <SmartTrader />
                        <Text>{localize('SmartTrader')}</Text>
                    </Flex>
                </a>
            )}
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
