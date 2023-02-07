import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { LinkButton } from 'components/form'
import Button from 'components/custom/_button'
import { SectionContainer, Desktop, Mobile } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        margin_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
        margin_mobile_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-mobile-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-bottom: 0;
    }
`

const StyledButton = styled(LinkButton)`
    margin-top: 2.4rem;
    margin-bottom: 2rem;
    @media ${device.tabletL} {
        margin-top: 0.8rem;
        margin-bottom: 1.6rem;
    }
`
const MindWhenTrading = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2rem">
                    {localize('Things to keep in mind when trading CFDs')}
                </Header>
                <Text as="h4" size="var(--text-size-m)" weight="bold" mb="0.8rem">
                    {localize('CFDs are traded on margin')}
                </Text>
                <Text mb="3.2rem">
                    {localize(
                        'The term ‘margin’ refers to the deposit needed to open a leveraged position, which is a position larger than your capital investment and leads to increased market exposure.',
                    )}
                </Text>
            </SmallContainer>
            <Desktop breakpoint={'bp680'}>
                <SmallContainer direction="column" ai="flex-start">
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_relationship_piechart']}
                            alt="Pie chart explaining relation between margin and leverage"
                        />
                    </ImageWrapper>
                </SmallContainer>
            </Desktop>
            <Mobile breakpoint={'bp680'}>
                <ImageWrapper>
                    <QueryImage
                        data={data['margin_mobile_relationship_piechart']}
                        alt="Trade types margin market"
                    />
                </ImageWrapper>
            </Mobile>
            <SmallContainer direction="column" ai="flex-start">
                <Text mt="3.2rem">
                    {localize(
                        'Use our margin calculator to calculate the margin required to increase your market exposure (the market value of your position) on Deriv’s CFD trading platforms.',
                    )}
                </Text>
                <StyledButton to="/trader-tools/margin-calculator/">
                    <Button label="Margin Calculator" primary />
                </StyledButton>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default MindWhenTrading
