import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { smarttrader_url } from 'common/constants'
import DerivcTrader from 'images/svg/trading-platforms/ctrader/ctrader-main-logo.svg'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import SmartTrader from 'images/svg/custom/rebranding/smarttrader-icon.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import DBot from 'images/svg/custom/rebranding/deriv-bot-icon.svg'
import DMT5 from 'images/svg/custom/rebranding/dmt5-icon.svg'
import DTrader from 'images/svg/custom/rebranding/dtrader-icon.svg'
import DerivGo from 'images/svg/custom/rebranding/deriv-go-icon.svg'
import useBuildVariant from 'features/hooks/use-build-variant'

type AvailablePlatformsProps = {
    dmt5?: boolean
    deriv_go?: boolean
    dtrader?: boolean
    dbot?: boolean
    smarttrader?: boolean
    deriv_ctrader?: boolean
    derivx?: boolean
    deriv_ez?: boolean
    derivez?: boolean
    flex_direction?: string
    tablet_direction?: string
    m_top?: string
}

const PlatformsContainer = styled.div<AvailablePlatformsProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    img {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;
    }

    @media ${device.mobileL} {
        display: flex;
        width: 90%;
        justify-content: space-around;
        a {
            width: 45%;
        }
    }
`
const StyledText = styled(Header)`
    margin-right: 1.6rem;

    @media ${device.tabletL} {
        font-size: 16px;
        text-align: center;
        margin-bottom: 12px;
    }
    @media ${device.mobileL} {
        margin-right: 0;
        font-size: 14px;
        margin-bottom: 12px;
    }
`
const StyledFlex = styled(Flex)`
    padding: 0.8rem;
    @media ${device.mobileL} {
        justify-content: start;
        padding: 0.9rem;
    }

    ${Text} {
        font-size: 14px;
    }
`

const AvailablePlatforms = ({
    dmt5,
    deriv_go,
    dtrader,
    dbot,
    deriv_ez,
    smarttrader,
    derivx,
    derivez,
    deriv_ctrader,
    flex_direction,
    tablet_direction,
    m_top,
}: AvailablePlatformsProps) => {
    
    const { region } = useBuildVariant()
    const show_derivx = region === 'row' ? true : false

    const deriv_mt5_name = 'Deriv MT5'
    const deriv_go_name = 'Deriv GO'

    return (
        <Flex
            wrap="nowrap"
            fd={flex_direction}
            mobileL={{ mt: '16px' }}
            mt={m_top ? m_top : '2.4rem'}
            tablet_direction="column"
            ai="center"
        >
            <StyledText type="paragraph-1" weight="normal" width="auto">
                <Localize translate_text="_t_Available on_t_" />
            </StyledText>
            <PlatformsContainer
                flex_direction={flex_direction}
                tablet_direction={tablet_direction}
                width={tablet_direction === 'column' ? '100%' : 'unset'}
                ai="center"
            >
                {dmt5 && (
                    <LocalizedLink to="/dmt5/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DMT5} width="24" height="24" />
                            <Text ml="0.4rem">{deriv_mt5_name}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DTrader} width="24" height="24" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv Trader_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DBot} width="24" height="24" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv Bot_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a href={smarttrader_url} target="_blank" rel="noopener noreferrer">
                        <StyledFlex direction="row" ai="center">
                            <embed src={SmartTrader} width="24" height="24" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_SmartTrader_t_" />
                            </Text>
                        </StyledFlex>
                    </a>
                )}
                {derivx && show_derivx && (
                    <LocalizedLink to="/derivx/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivX} width="25" height="25" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv X_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {deriv_go && (
                    <LocalizedLink to="/deriv-go/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivGo} width="24" height="24" />
                            <Text ml="0.4rem">{deriv_go_name}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {deriv_ctrader && (
                    <LocalizedLink to="/deriv-ctrader/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivcTrader} width="24" height="24" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv cTrader_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
            </PlatformsContainer>
        </Flex>
    )
}

export default AvailablePlatforms
