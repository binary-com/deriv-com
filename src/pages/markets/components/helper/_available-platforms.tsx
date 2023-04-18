import React from 'react'
import styled from 'styled-components'
import { smarttrader_url } from 'common/constants'
import { Flex } from 'components/containers'
import { TString } from 'types/generics'
import { Text, Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import SmartTrader from 'images/svg/custom/smarttrader.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import DBot from 'images/svg/dbot/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import DerivGo from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivEZ from 'images/svg/trading-specification/deriv-ez.svg'
import useRegion from 'components/hooks/use-region'

type AvailablePlatformsProps = {
    dmt5?: boolean
    deriv_go?: boolean
    dtrader?: boolean
    dbot?: boolean
    smarttrader?: boolean
    derivx?: boolean
    deriv_ez?: boolean
    flex_direction?: string
    tablet_direction?: string
    m_top?: string
}

const PlatformsContainer = styled.div<AvailablePlatformsProps>`
    display: flex;
    flex-wrap: wrap;
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
    @media ${device.mobileL} {
        display: ${(props) => (props.tablet_direction ? 'grid' : 'flex')};
        grid-template-columns: ${(props) => (props.tablet_direction ? 'repeat(2, 1fr)' : 'auto')};
        grid-template-rows: ${(props) => (props.tablet_direction ? 'auto auto' : 'auto')};
        grid-gap: ${(props) => (props.tablet_direction ? '1rem' : 'unset')};

        ${(props) =>
            props.tablet_direction &&
            `
          a:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
          }
          a:nth-child(2) {
            grid-column: 2 / span 1;
            grid-row: 1 / span 1;
          }
          a:nth-child(3) {
            grid-column: 1 / span 2;
            grid-row: 2 / span 1;
            text-align: center;
          }
        `}
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

    img {
        -webkit-transform: translate3d(0, 0, 0);
    }
    ${Text} {
        font-size: 14px;
    }
`
const deriv_go_text: TString = '_t_Deriv GO_t_'
const AvailablePlatforms = ({
    dmt5,
    deriv_go,
    dtrader,
    dbot,
    deriv_ez,
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
                {localize('Available on')}
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
                            <Text ml="0.4rem">{localize('Deriv MT5')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dtrader && (
                    <LocalizedLink to="/dtrader/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DTrader} width="24" height="24" />
                            <Text ml="0.4rem">{localize('Deriv Trader')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {dbot && (
                    <LocalizedLink to="/dbot/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DBot} width="24" height="24" />
                            <Text ml="0.4rem">{localize('Deriv Bot')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {smarttrader && (
                    <a href={smarttrader_url} target="_blank" rel="noopener noreferrer">
                        <StyledFlex direction="row" ai="center">
                            <embed src={SmartTrader} width="24" height="24" />
                            <Text ml="0.4rem">{localize('SmartTrader')}</Text>
                        </StyledFlex>
                    </a>
                )}
                {derivx && !is_eu && (
                    <LocalizedLink to="/derivx/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivX} width="24" height="24" />
                            <Text ml="0.4rem">{localize('Deriv X')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {deriv_go && (
                    <LocalizedLink to="/deriv-go/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivGo} width="24" height="24" />
                            <Text ml="0.4rem">{localize(deriv_go_text)}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
                {deriv_ez && (
                    <LocalizedLink to="/derivez/">
                        <StyledFlex direction="row" ai="center">
                            <embed src={DerivEZ} width="24" height="24" />
                            <Text ml="0.4rem">{localize('Deriv EZ')}</Text>
                        </StyledFlex>
                    </LocalizedLink>
                )}
            </PlatformsContainer>
        </Flex>
    )
}

export default AvailablePlatforms
