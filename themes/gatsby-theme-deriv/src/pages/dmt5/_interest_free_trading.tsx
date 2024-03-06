import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { CardStyle, Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import Checkmark from 'images/svg/dmt5/checkmark.svg'
import ZeroPercent from 'images/svg/dmt5/zero_percent.svg'
import device from 'themes/device'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type CheckedTextProps = {
    content: TString
}

const ImageWrapper = styled.div`
    width: 124px;
    height: 100px;
    object-fit: contain;
    margin-top: 4rem;
    @media ${device.tabletL} {
        margin-top: 60px;
        height: 100px;
        width: 132px;
    }
`
const ImageTag = styled.img`
    width: 100%;
    height: 100%;
`

const InterestCardFlex = styled(Flex)`
    width: 340px;
    height: 482px;
    border-radius: 8px;
    margin-right: 12.6rem;
    padding: 4rem;
    ${CardStyle}

    @media ${device.tabletL} {
        font-size: 14px;
        max-width: 328px;
        width: 100%;
        height: 373px;
        margin: 24px 0;
    }
`

const InterestText = styled(Text)`
    color: var(--color-black-9);
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const StyledContainer = styled(Flex)`
    width: 100%;
    height: 552px;
    margin-bottom: 5.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        flex-direction: column;
        height: unset;
    }
`

const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    margin: 13.4rem 0 1.2rem;
    font-size: 48px;
    @media ${device.tabletL} {
        font-size: 28px;
        margin: 0 0 8px;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tabletL} {
        width: 100%;
        max-width: 328px;
        padding: 16px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    font-size: 14px;
    height: auto;
    min-height: 4rem;
    width: 230px;

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const StyledRightText = styled(Text)`
    color: var(--color-black-9);
    margin-bottom: 3.2rem;
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    margin: 0.4rem 0 1.6rem;
    background-color: var(--color-grey-21);
    opacity: 0.48;
`

const TextWrapperFlex = styled(Flex)`
    margin: 2.4rem 4rem 4rem;
`

const StyledText = styled(Text)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const StyledImg = styled.img`
    margin-right: 8px;

    @media ${device.tabletL} {
        width: 16px;
        height: 16px;
    }
`

const CheckedText = ({ content }: CheckedTextProps) => (
    <>
        <Flex jc="flex-start" ai="center">
            <StyledImg src={Checkmark} alt="Check mark" width="24" height="24" />
            <StyledText size="16px" weight="bold">
                <Localize translate_text={content} />
            </StyledText>
        </Flex>
        <Separator />
    </>
)

const InterestFreeTrading = () => {
    const { region } = useBuildVariant()
    const commission = region === "eu"
        ? '_t_Enjoy zero commission trading on all assets._t_'
        : '_t_Enjoy zero commission trading on all assets. Plus, pay no swap charges on overnight positions for selected derived indices and financial assets._t_'

    return (
        <StyledContainer>
            <InterestCardFlex fd="column" ai="center" jc="center">
                <ImageWrapper>
                    <ImageTag src={ZeroPercent} alt={localize('_t_Zero percent interest_t_')} />
                </ImageWrapper>
                <InterestText size="32px">
                    <Localize translate_text="_t_Commission_t_" />
                </InterestText>
                <TextWrapperFlex fd="column" jc="flex-start" ai="flex-start">
                    <CheckedText content="_t_Forex_t_" />
                    <CheckedText content="_t_Derived indices_t_" />
                    <CheckedText content="_t_Stocks & indices_t_" />
                    <CheckedText content="_t_Cryptocurrencies_t_" />
                    <CheckedText content="_t_Commodities_t_" />
                </TextWrapperFlex>
            </InterestCardFlex>
            <StyledFlex fd="column" jc="flex-start" height="100%" width="51.4rem">
                <StyledHeader as="h2" lh="1.25">
                    <Localize translate_text="_t_Trade on the world markets without commission_t_" />
                </StyledHeader>
                <StyledRightText>
                    <Localize translate_text={commission} />
                </StyledRightText>
                <StyledLinkButton secondary external type="mt5" target="_blank">
                    <Localize translate_text="_t_Trade without commission_t_" />
                </StyledLinkButton>
            </StyledFlex>
        </StyledContainer>
    )
}

export default InterestFreeTrading
