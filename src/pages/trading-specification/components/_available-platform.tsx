import React from 'react'
import styled from 'styled-components'
import useRegion from 'components/hooks/use-region'
import { Flex } from 'components/containers'
import DerivMT5 from 'images/svg/trading-specification/deriv-mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
import DerivEZ from 'images/svg/trading-specification/deriv-ez.svg'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'

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
    width: 108px;

    @media ${device.tablet} {
        flex-direction: row;
        width: auto;
    }
`
const StyledFlex = styled(Flex)`
    padding: 20px;
`
const AvailablePlatform = () => {
    const { is_row } = useRegion()
    return (
        <>
            <StyledFlex wrap="nowrap" ai="center">
                <PlatformsContainer ai="center">
                    <FlexContainer>
                        <Header type="paragraph-1" weight="normal" width="auto" as="p">
                            <Localize translate_text="Available on" />
                        </Header>
                    </FlexContainer>

                    {is_row ? (
                        <>
                            <FlexContainer>
                                <StyledLocalizedLink to="/dmt5/">
                                    <Flex direction="row">
                                        <img src={DerivMT5} alt="Deriv X" width="24" height="24" />
                                        <Header type="paragraph-1" weight="normal" as="p">
                                            <Localize translate_text="Deriv MT5" />
                                        </Header>
                                    </Flex>
                                </StyledLocalizedLink>
                                <StyledLocalizedLink to="/derivx/">
                                    <Flex direction="row">
                                        <img src={DerivX} alt="Deriv X" width="24" height="24" />
                                        <Header type="paragraph-1" weight="normal" as="p">
                                            <Localize translate_text="Deriv X" />
                                        </Header>
                                    </Flex>
                                </StyledLocalizedLink>
                                <StyledLocalizedLink to="/dmt5/">
                                    <Flex direction="row">
                                        <img src={DerivEZ} alt="Deriv X" width="24" height="24" />
                                        <Header type="paragraph-1" weight="normal" as="p">
                                            <Localize translate_text="Deriv EZ" />
                                        </Header>
                                    </Flex>
                                </StyledLocalizedLink>
                            </FlexContainer>
                        </>
                    ) : (
                        <FlexContainer>
                            <StyledLocalizedLink to="/derivx/">
                                <Flex direction="row">
                                    <img src={DerivX} alt="Deriv X" width="24" height="24" />
                                    <Header type="paragraph-1" weight="normal" as="p">
                                        <Localize translate_text="Deriv X" />
                                    </Header>
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
