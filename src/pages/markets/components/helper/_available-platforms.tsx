import React from 'react'
import styled from 'styled-components'
import { smarttrader_url } from 'common/constants'
import { Flex } from 'components/containers'
import { TString } from 'types/generics'
import { Text, Header } from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
import device from 'themes/device'
import DBot from 'images/svg/dbot/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import SmartTrader from 'images/svg/custom/smarttrader.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import DerivGo from 'images/svg/custom/deriv-go.svg'
import useRegion from 'components/hooks/use-region'

type AvailablePlatformsProps = {
    dmt5?: boolean
    deriv_go?: boolean
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
    background: var(--color-grey-4);
    padding: 0.8rem;

    ${Text} {
        font-size: 14px;
    }
`
const deriv_go_text: TString = '_t_Deriv Go_t_'
const AvailablePlatforms = ({
    dmt5,
    deriv_go,
    dtrader,
    dbot,
    smarttrader,
    derivx,
    flex_direction,
    tablet_direction,
    m_top,
}: AvailablePlatformsProps) => {
    const { is_eu } = useRegion()

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
                width={tablet_direction === 'column' ? '100%' : 'unset'}
                ai="center"
            >
                {dmt5 && (
                    <LocalizedLink to="/dmt5/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DMT5} alt="Deriv MT5 (DMT5)" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv MT5_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DTrader} alt="DTrader" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_DTrader_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DBot} alt="DBot" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_DBot_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a href={smarttrader_url} target="_blank" rel="noopener noreferrer">
                        <StyledFlex direction="row" ai="center">
                            <img src={SmartTrader} alt="SmartTrader" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_SmartTrader_t_" />
                            </Text>
                        </StyledFlex>
                    </a>
                )}
                {derivx && !is_eu && (
                    <LocalizedLink to="/derivx/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DerivX} alt="Deriv X" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text="_t_Deriv X_t_" />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {deriv_go && (
                    <LocalizedLink to="/deriv-go/">
                        <StyledFlex direction="row" ai="center">
                            <img src={DerivGo} alt="Deriv go" width="32" height="32" />
                            <Text ml="0.4rem">
                                <Localize translate_text={deriv_go_text} />
                            </Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
            </PlatformsContainer>
        </Flex>
    )
}

export default AvailablePlatforms
