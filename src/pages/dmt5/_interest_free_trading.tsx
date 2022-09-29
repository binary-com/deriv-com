import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { CardStyle, Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import Checkmark from 'images/svg/dmt5/checkmark.svg'
import ZeroPercent from 'images/svg/dmt5/zero_percent.svg'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

type CheckedTextProps = {
    children: string
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
        width: 328px;
        height: 373px;
        margin: 24px 0;
    }
`

const InterestText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const StyledContainer = styled(Flex)`
    width: 100%;
    height: 552px;
    background-color: var(--color-grey-25);
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
        min-width: 328px;
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
`

const StyledRightText = styled(Text)`
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

const CheckedText = ({ children }: CheckedTextProps) => (
    <>
        <Flex jc="flex-start" ai="center">
            <StyledImg src={Checkmark} alt="Check mark" width="24" height="24" />
            <StyledText size="16px" weight="bold">
                <Localize translate_text={children} />
            </StyledText>
        </Flex>
        <Separator />
    </>
)

const InterestFreeTrading = () => {
    const { is_uk } = useCountryRule()

    return (
        <StyledContainer>
            <InterestCardFlex fd="column" ai="center" jc="center">
                <ImageWrapper>
                    <ImageTag src={ZeroPercent} alt="Zero percent interest" />
                </ImageWrapper>
                <InterestText size="32px">
                    <Localize translate_text="interest" />
                </InterestText>
                <TextWrapperFlex fd="column" jc="flex-start" ai="flex-start">
                    <CheckedText>Forex</CheckedText>
                    <CheckedText>Derived</CheckedText>
                    <CheckedText>Stocks & indices</CheckedText>
                    {!is_uk && <CheckedText>Cryptocurrencies</CheckedText>}
                    <CheckedText>Commodities</CheckedText>
                </TextWrapperFlex>
            </InterestCardFlex>
            <StyledFlex fd="column" jc="flex-start" height="100%" width="51.4rem">
                <StyledHeader as="h2" lh="1.25">
                    <Localize translate_text="Trade on the world markets without commission" />
                </StyledHeader>
                <StyledRightText>
                    <Localize translate_text="Enjoy zero commission trading on all assets. Plus, pay no swap charges on overnight positions for selected forex pairs." />
                </StyledRightText>
                <StyledLinkButton secondary external type="mt5" target="_blank">
                    <Localize translate_text="Trade without commission" />
                </StyledLinkButton>
            </StyledFlex>
        </StyledContainer>
    )
}

export default InterestFreeTrading
