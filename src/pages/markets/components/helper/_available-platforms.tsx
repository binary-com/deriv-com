import React from 'react'
import styled from 'styled-components'
import { DerivStore } from 'store'
import { smarttrader_url } from 'common/constants'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import DBot from 'images/svg/dbot/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import SmartTrader from 'images/svg/custom/smarttrader.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'

type AvailablePlatformsProps = {
    dmt5?: boolean
    dtrader?: boolean
    dbot?: boolean
    smarttrader?: boolean
    derivx?: boolean
    flex_direction?: string
    tablet_direction?: string
    m_top?: string
}

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
        min-width: 95px;
    }
    @media ${device.tablet} {
        width: ${(props) => props.width};
    }
`
const StyledText = styled(Text)`
    margin-right: 1.6rem;

    @media ${device.tabletL} {
        font-size: 16px;
        text-align: center;
    }
    @media ${device.mobileL} {
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
    derivx,
    flex_direction,
    tablet_direction,
    m_top,
}: AvailablePlatformsProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <Flex
            wrap="wrap"
            fd={flex_direction}
            mobileL={{ mt: '16px' }}
            mt={m_top ? m_top : '2.4rem'}
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
                            <img src={DMT5} alt="" width="32" height="32" />
                            <Text ml="0.4rem">{localize('Deriv MT5 (DMT5)')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DTrader} alt="" width="32" height="32" />
                            <Text ml="0.4rem">{localize('DTrader')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DBot} alt="" width="32" height="32" />
                            <Text ml="0.4rem">{localize('DBot')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a href={smarttrader_url} target="_blank" rel="noopener noreferrer">
                        <StyledFlex direction="row" ai="center">
                            <img src={SmartTrader} alt="" width="32" height="32" />
                            <Text ml="0.4rem">{localize('SmartTrader')}</Text>
                        </StyledFlex>
                    </a>
                )}
                {derivx && !is_eu_country && (
                    <LocalizedLink to="/derivx/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DerivX} alt="" width="32" height="32" />
                            <Text ml="0.4rem">{localize('Deriv X')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
            </PlatformsContainer>
        </Flex>
    )
}

export default AvailablePlatforms
