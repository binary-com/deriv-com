import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Show } from 'components/containers'
import { CardStyle, Header, Text } from 'components/elements'
import Checkmark from 'images/svg/checkmark.svg'
import ZeroPercent from 'images/svg/zero_percent.svg'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'

const ImageWrapper = styled.div`
    max-width: 124px;
    width: 100%;
    object-fit: contain;
    padding: 0;
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
    background-color: var(--color-grey-25);
    margin-bottom: 5.2rem;
`

const StyledHeader = styled(Header)`
    font-size: 48px;
    margin-top: 15.4rem;
    @media ${device.mobileL} {
        font-size: ${(props) => props.mobile_font_size};
        margin: ${(props) => props.mobile_margin};
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1rem 1.6rem;
    font-size: 14px;
    height: 4rem;
    width: 24.1rem;

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

const StyledText = styled(Text)`
    display: flex;
    align-items: center;
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
        <StyledText size="16px" weight="bold">
            <img src={Checkmark} alt="Check mark" width="24" height="24" /> {children}
        </StyledText>
        <Separator />
    </>
)

CheckedText.propTypes = {
    children: Proptypes.string,
}

const InterestFreeTrading = () => {
    return (
        <Show.Desktop>
            <StyledContainer fd="row" width="100%" height="552px" ai="center" jc="center">
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
                        <CheckedText>
                            <Localize translate_text="Forex" />
                        </CheckedText>
                        <CheckedText>
                            <Localize translate_text="Commodities" />
                        </CheckedText>
                        <CheckedText>
                            <Localize translate_text="Cryptocurrencies" />
                        </CheckedText>
                        <CheckedText>
                            <Localize translate_text="Synthetic indices" />
                        </CheckedText>
                    </TextWrapperFlex>
                </InterestCardFlex>
                <Flex fd="column" jc="flex-start" ac="center" width="51.4rem" height="100%">
                    <StyledHeader
                        mobile_font_size="32px"
                        mobile_margin="0 0 24px"
                        type="page-title"
                        mb="1.2rem"
                    >
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
