import React from 'react'
import styled from 'styled-components'
import useRegion from 'components/hooks/use-region'
import { Flex } from 'components/containers'
import DerivMT5 from 'images/common/markets/mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
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
const deriv_mt5: String = 'Deriv MT5'
const deriv_x: String = 'Deriv X'

const AvailablePlatform = ({ selected_market }: AvailablePlatformProps) => {
    const { is_row } = useRegion()

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
                                        <img src={DerivMT5} alt={deriv_mt5} />
                                        <StyledHeader type="paragraph-1" as="h2" width="auto">
                                            {deriv_mt5}
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                                <StyledLocalizedLink to="/derivx/">
                                    <Flex direction="row">
                                        <img
                                            src={DerivX}
                                            alt={deriv_x}
                                            width="24"
                                            height="24"
                                        />
                                        <StyledHeader type="paragraph-1" as="h2" width="auto">
                                            {deriv_x}
                                        </StyledHeader>
                                    </Flex>
                                </StyledLocalizedLink>
                            </FlexContainer>
                        </>
                    ) : (
                        <FlexContainer>
                            <StyledLocalizedLink to="/dmt5/">
                                <Flex direction="row">
                                    <img
                                        src={DerivMT5}
                                        alt={deriv_mt5}
                                    />
                                    <StyledHeader
                                        type="paragraph-1"
                                        as="h2"
                                        width="auto"
                                    >
                                        {deriv_mt5}
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
