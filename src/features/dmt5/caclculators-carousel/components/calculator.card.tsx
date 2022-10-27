import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { TCalculator } from '../types'
import device from 'themes/device'
import { Header, QueryImage } from 'components/elements'
import { Flex, Desktop, Mobile } from 'components/containers'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'

type TCalculatorCardProps = {
    item: TCalculator
}

const StyledCardContainer = styled(Flex)`
    width: 100%;
    height: 684px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media ${device.tabletL} {
        height: auto;
        min-height: 480px;
        justify-content: flex-start;
    }
`

const SubHeader = styled(Header)`
    font-size: 24px;
    color: var(--color-black-3);
    @media ${device.tabletL} {
        font-size: 20px;
        margin-bottom: 8px;
    }
`

const CardText = styled(Header)`
    width: unset;
    margin: 0.8rem 4rem 2.4rem;

    @media ${device.tabletL} {
        margin: 0 0 24px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    width: 392px;
    height: 386px;
    object-fit: contain;
    margin-bottom: 2.4rem;

    @media ${device.tabletL} {
        align-items: center;
        justify-content: center;
        width: 232px;
        height: 229px;

        div {
            max-width: 232px;
            width: 100%;
            height: auto;
        }
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1rem 1.6rem;
    font-size: 14px;
    height: 40px;
    width: auto;
    min-width: 210px;
    @media ${device.tabletL} {
        padding: 10px 15px;
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

const CalculatorCard = ({ item }: TCalculatorCardProps) => {
    const { button_text, image_alt_name, image_name, link, name, text } = item
    const data = useStaticQuery(query)
    return (
        <StyledCardContainer>
            <SubHeader as="h3" align="center">
                <Localize translate_text={name} />
            </SubHeader>
            <CardText type={'main-paragraph'} as={'p'} weight={'normal'} align="center">
                <Localize translate_text={text} />
            </CardText>
            <ImageWrapper>
                <Desktop>
                    <QueryImage data={data[image_name]} alt={localize(image_alt_name)} />
                </Desktop>
                <Mobile>
                    <QueryImage
                        data={data[image_name + '_mobile']}
                        alt={localize(image_alt_name)}
                    />
                </Mobile>
            </ImageWrapper>
            <StyledLinkButton tertiary to={link}>
                <Localize translate_text={button_text} />
            </StyledLinkButton>
        </StyledCardContainer>
    )
}

export default CalculatorCard

const query = graphql`
    query {
        margin_calculator: file(relativePath: { eq: "dmt5/dmt5-margin-calculator.png" }) {
            ...fadeIn
        }
        margin_calculator_mobile: file(
            relativePath: { eq: "dmt5/dmt5-margin-calculator-mobile.png" }
        ) {
            ...fadeIn
        }
        swap_calculator: file(relativePath: { eq: "dmt5/dmt5-swap-calculator.png" }) {
            ...fadeIn
        }
        swap_calculator_mobile: file(relativePath: { eq: "dmt5/dmt5-swap-calculator-mobile.png" }) {
            ...fadeIn
        }
    }
`
