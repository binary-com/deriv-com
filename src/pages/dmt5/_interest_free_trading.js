import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Show } from 'components/containers'
import { CardStyle, Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import Checkmark from 'images/svg/checkmark.svg'
import ZeroPercent from 'images/svg/zero_percent.svg'
import device from 'themes/device'

const ImageWrapper = styled.div`
    max-width: 124px;
    width: 100%;
    object-fit: contain;
    margin-top: 4rem;
`

const InterestCardFlex = styled(Flex)`
    width: 340px;
    height: 392px;
    border-radius: 8px;
    margin-right: 12.6rem;
    padding: 4rem;
    ${CardStyle}
`

const StyledContainer = styled(Flex)`
    width: 100%;
    height: 552px;
    background-color: var(--color-grey-25);
    margin-bottom: 5.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const StyledHeader = styled(Header)`
    margin: 15.4rem 0 1.2rem;
    @media ${device.tabletL} {
        font-size: 32px;
        margin: 0 0 24px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1rem 1.6rem;
    font-size: 14px;
    height: auto;
    min-height: 4rem;
    width: auto;
    min-width: 24.1rem;

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
`

const TextWrapperFlex = styled(Flex)`
    margin: 2.4rem 4rem 4rem;
`

const CheckedText = ({ children }) => (
    <>
        <Flex jc="flex-start" ai="center">
            <img src={Checkmark} alt="Check mark" width="24" height="24" />
            <Text size="16px" weight="bold">
                <Localize translate_text={children} />
            </Text>
        </Flex>
        <Separator />
    </>
)

CheckedText.propTypes = {
    children: Proptypes.string,
}

const InterestFreeTrading = () => {
    return (
        <Show.Desktop>
            <StyledContainer>
                <InterestCardFlex fd="column" ai="center" jc="center">
                    <ImageWrapper>
                        <img
                            src={ZeroPercent}
                            alt="Zero percent interest"
                            width="124"
                            height="84"
                        />
                    </ImageWrapper>
                    <Text size="32px">
                        <Localize translate_text="interest" />
                    </Text>
                    <TextWrapperFlex fd="column" jc="flex-start" ai="flex-start">
                        <CheckedText>Forex</CheckedText>
                        <CheckedText>Commodities</CheckedText>
                        <CheckedText>Cryptocurrencies</CheckedText>
                        <CheckedText>Synthetic indices</CheckedText>
                    </TextWrapperFlex>
                </InterestCardFlex>
                <Flex fd="column" jc="flex-start" ac="center" width="51.4rem" height="100%">
                    <StyledHeader as="h2" lh="1.25">
                        <Localize translate_text="Access markets with swap-free trading" />
                    </StyledHeader>
                    <StyledRightText>
                        <Localize translate_text="Enjoy interest-free trading with no swap charges on overnight positions for forex, commodities, cryptocurrencies, and synthetic indices." />
                    </StyledRightText>
                    <StyledLinkButton secondary="true" to="" external="true" target="_blank">
                        <Localize translate_text="Choose swap-free trading now" />
                    </StyledLinkButton>
                </Flex>
            </StyledContainer>
        </Show.Desktop>
    )
}

export default InterestFreeTrading
