import React from 'react'
import styled from 'styled-components'
import useRegion from 'components/hooks/use-region'
import { Flex } from 'components/containers'
import DerivMT5 from 'images/svg/trading-specification/deriv-mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
import DerivEZ from 'images/svg/trading-specification/deriv-ez.svg'
import Ctrader from 'images/svg/trading-specification/deriv-ctrader.svg'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'
import { TString } from 'types/generics'

type AvailablePlatformProps = {
    selected_market: string
}

const StyledHeader = styled(Header)`
    font-family: 'Ubuntu';
    font-size: 14px;
    font-weight: normal;
`

const PlatformsContainer = styled(Flex)`
    justify-content: space-around;
    width: unset;
    gap: 20px;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    img {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;
    }
    @media ${device.tablet} {
        width: ${(props) => props.width};
        flex-direction: column;
    }
`
const FlexContainer = styled(Flex)`
    flex-direction: row;

    @media ${device.tablet} {
        gap: 12px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    width: 117px;

    @media ${device.tablet} {
        flex-direction: row;
        width: auto;
    }
`
const StyledFlex = styled(Flex)`
    padding: 20px;
`
const available_on: TString = '_t_Available on_t_'
const deriv_mt5: TString = '_t_deriv MT5_t_'
const deriv_x: TString = '_t_deriv X_t_'
const deriv_ez: TString = '_t_deriv EZ_t_'
const deriv_ctrader: TString = '_t_deriv cTrader_t_'

const AvailablePlatform = ({ selected_market }: AvailablePlatformProps) => {
    const { is_row } = useRegion()
    return (
        <>
            <StyledFlex wrap="nowrap" ai="center">
                <PlatformsContainer ai="center">
                    <FlexContainer>
                        <StyledHeader type="paragraph-1" weight="normal" width="auto" as="p">
                            <Localize translate_text={available_on} />
                        </StyledHeader>
                    </FlexContainer>

                    {is_row ? (
                        <>
                            <FlexContainer>
                                <StyledLocalizedLink to="/dmt5/">
                                    <Flex direction="row">
                                        <img src={DerivMT5} alt="Deriv MT5" />
                                        <StyledHeader type="paragraph-1" as="p" width="auto">
                                            <Localize translate_text={deriv_mt5} />
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                                <StyledLocalizedLink to="/derivx/">
                                    <Flex direction="row">
                                        <img src={DerivX} alt="Deriv X" width="24" height="24" />
                                        <StyledHeader type="paragraph-1" as="p" width="auto">
                                            <Localize translate_text={deriv_x} />
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                                {selected_market !== 'etfs' && (
                                    <StyledLocalizedLink to="/derivez/">
                                        <Flex direction="row">
                                            <img
                                                src={DerivEZ}
                                                alt="Deriv EZ"
                                                width="24"
                                                height="24"
                                            />
                                            <StyledHeader type="paragraph-1" as="p" width="auto">
                                                <Localize translate_text={deriv_ez} />
                                            </StyledHeader>
                                        </Flex>
                                    </StyledLocalizedLink>
                                )}
                                {selected_market === 'etfs' && (
                                    <StyledLocalizedLink to="/deriv-ctrader/">
                                        <Flex direction="row">
                                            <img
                                                src={Ctrader}
                                                alt="Deriv cTrader"
                                                width="24"
                                                height="24"
                                            />
                                            <StyledHeader type="paragraph-1" as="p" width="auto">
                                                <Localize translate_text={deriv_ctrader} />
                                            </StyledHeader>
                                        </Flex>
                                    </StyledLocalizedLink>
                                )}
                            </FlexContainer>
                        </>
                    ) : (
                        <FlexContainer>
                            <StyledLocalizedLink to="/dmt5/">
                                <Flex direction="row">
                                    <img src={DerivMT5} alt="Deriv MT5" width="24" height="24" />
                                    <StyledHeader type="paragraph-1" as="p" width="auto">
                                        <Localize translate_text={deriv_mt5} />
                                    </StyledHeader>
                                </Flex>
                            </StyledLocalizedLink>
                        </FlexContainer>
                    )}
                </PlatformsContainer>
            </StyledFlex>
        </>
    )
}

export default AvailablePlatform
