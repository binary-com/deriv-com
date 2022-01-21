import React from 'react'
import styled from 'styled-components'
import { principles } from './_data'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements'
import { SEO, Container, Flex, SectionContainer } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'

type SeparatorInterface = {
    background: string
}

const Separator = styled.div<SeparatorInterface>`
    margin-top: 16px;
    margin-bottom: 40px;
    max-width: 1098px;
    width: 100%;
    height: 6px;
    background: ${(props) => (props.background ? props.background : '')};
`

const ColorHeader = styled(Header)`
    padding-bottom: 40px;
    font-size: 48px;
    color: ${(props) => (props.color ? props.color : '')};

    @media ${device.tablet} {
        padding-top: 24px;
        padding-bottom: 16px;
        font-size: 28px;
        line-height: 34px;
    }
`

const StyledMainText = styled(Text)`
    font-size: 24px;
    font-weight: 400;

    @media ${device.mobileM} {
        font-size: 18px;
        line-height: 26px;
    }
`

const StyledText = styled(Text)`
    max-width: 792px;
    padding: 0 0 24px 0;
    line-height: 24px;
    font-weight: 400;

    @media ${device.mobileM} {
        font-size: 14px;
        line-height: 20px;
    }
`

const StyledContainer = styled(Container)`
    max-width: 1098px;
    flex-direction: column;
`
const TitleSection = styled(SectionContainer)`
    padding: ${(props) => (props.padding ? props.padding : '120px 0 24px 10rem')};

    @media ${device.tablet} {
        padding: 40px 0 24px 0;
    }
`

const PrinciplesSection = styled(SectionContainer)`
    padding: ${(props) => (props.padding ? props.padding : '120px 0 24px 10rem')};

    @media ${device.tablet} {
        padding: 40px 0 24px 0;
    }
    @media ${device.mobileM} {
        padding: 0 0 24px 0;
    }
`

const StyledImg = styled.img`
    @media ${device.tablet} {
        width: 104px;
    }
`

const StyledFlex = styled(Flex)`
    align-self: baseline;

    @media ${device.tablet} {
        width: 104px;
    }
`

const OurPrinciples = (): React.ReactNode => {
    return (
        <Layout>
            <SEO title={localize('Our principles | Deriv')} />
            <TitleSection padding="120px 0 24px 10rem">
                <StyledContainer>
                    <Header as="h1" type="hero" align="left" mb="24px">
                        {localize('Our principles')}
                    </Header>
                    <StyledMainText>
                        {localize(
                            'We are honoured to serve everyone who relies on our products and services, and we only want to offer the best. That’s why our principles and values are so important in defining who we are, why we do what we do, and how we treat our clients and each other. Across our international offices, we are committed to the following principles in everything that we do.',
                        )}
                    </StyledMainText>
                </StyledContainer>
            </TitleSection>
            <PrinciplesSection padding="0 0 96px 10rem">
                {principles.map((principle, index) => (
                    <StyledContainer key={index}>
                        <Separator background={principle.separator} />
                        <Flex jc="space-between" tablet={{ fd: 'column' }} mobileM={{ m: '0 0' }}>
                            <StyledFlex max_width="180px" m="10px">
                                <StyledImg src={principle.img} />
                            </StyledFlex>
                            <Flex fd="column" max_width="792px">
                                <ColorHeader as="h2" color={principle.color}>
                                    {principle.title}
                                </ColorHeader>
                                {principle.description.map((description, key) => (
                                    <Flex key={key} fd="column">
                                        <Header as="h3" type="subtitle-1">
                                            {description.title}
                                        </Header>
                                        <StyledText>{description.text} </StyledText>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </StyledContainer>
                ))}
            </PrinciplesSection>
        </Layout>
    )
}

export default WithIntl()(OurPrinciples)
