import React from 'react'
import styled from 'styled-components'
import useRegion from 'components/hooks/use-region'
import { Flex } from 'components/containers'
import DerivMT5 from 'images/common/markets/mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
import DerivEZ from 'images/svg/dtrader/ez-icon.svg'
import { Localize, LocalizedLink, localize } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'
import { TString } from 'types/generics'

type AvailablePlatformProps = {
    selected_market: string
}

const StyledHeader = styled(Header)`
    font-family: 'Ubuntu';
    font-weight: bold;
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
    @media ${device.mobileM} {
        gap: 0px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    width: 133px;

    @media ${device.tablet} {
        flex-direction: row;
        width: max-content;
    }
`
const StyledFlex = styled(Flex)`
    padding: 20px;
`
const available_on: TString = '_t_Available on_t_'
const deriv_mt5: TString = '_t_Deriv MT5_t_'
const deriv_x: TString = '_t_Deriv X_t_'
const deriv_ez: TString = '_t_Deriv EZ_t_'

const AvailablePlatform = ({ selected_market }: AvailablePlatformProps) => {
    const { is_row } = useRegion()
    const selectedEtfsTab = selected_market === 'etfs'

    return (
        <>
            <StyledFlex wrap="nowrap" ai="center">
                <PlatformsContainer ai="center">
                    <FlexContainer>
                        <Header type="paragraph-1" weight="normal" width="auto" as="h2">
                            <Localize translate_text={available_on} />
                        </Header>
                    </FlexContainer>

                    {is_row ? (
                        <>
                            <FlexContainer>
                                <StyledLocalizedLink to="/dmt5/">
                                    <Flex direction="row">
                                        <img src={DerivMT5} alt={localize('_t_Deriv MT5_t_')} />
                                        <StyledHeader type="paragraph-1" as="h2" width="auto">
                                            <Localize translate_text={deriv_mt5} />
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                                <StyledLocalizedLink to="/derivx/">
                                    <Flex direction="row">
                                        <img
                                            src={DerivX}
                                            alt={localize('_t_Deriv X_t_')}
                                            width="24"
                                            height="24"
                                        />
                                        <StyledHeader type="paragraph-1" as="h2" width="auto">
                                            <Localize translate_text={deriv_x} />
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                                {!selectedEtfsTab ? (
                                    <StyledLocalizedLink to="/deriv-ez/">
                                        <Flex direction="row">
                                            <img
                                                src={DerivEZ}
                                                alt={localize('_t_Deriv EZ_t_')}
                                                width="24"
                                                height="24"
                                            />
                                            <StyledHeader type="paragraph-1" as="h2" width="auto">
                                                <Localize translate_text={deriv_ez} />
                                            </StyledHeader>
                                        </Flex>
                                    </StyledLocalizedLink>
                                ) : null}
                            </FlexContainer>
                        </>
                    ) : (
                        <FlexContainer>
                            <StyledLocalizedLink to="/dmt5/">
                                <Flex direction="row">
                                    <img
                                        src={DerivMT5}
                                        alt={localize('_t_Deriv MT5_t_')}
                                        width="24"
                                        height="24"
                                    />
                                    <StyledHeader
                                        weight="bold"
                                        type="paragraph-1"
                                        as="h2"
                                        width="auto"
                                    >
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
