import React from 'react'
import styled from 'styled-components'
import { principles } from './_data'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements'
import { SEO, Container, Flex, SectionContainer } from 'components/containers'
import { Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import { TGatsbyHead } from 'features/types'

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

const OurPrinciples = () => {
    return (
        <Layout>
            <TitleSection padding="120px 0 24px 10rem">
                <StyledContainer>
                    <Header as="h1" type="hero" align="start" mb="24px">
                        <Localize translate_text="_t_Our principles_t_" />
                    </Header>
                    <StyledMainText>
                        <Localize translate_text="_t_We are honoured to serve everyone who relies on our products and services, and we only want to offer the best. That’s why our principles and values are so important in defining who we are, why we do what we do, and how we treat our clients and each other. Across our international offices, we are committed to the following principles in everything that we do._t_" />
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
                                    <Localize translate_text={principle.title} />
                                </ColorHeader>
                                {principle.description.map((description) => (
                                    <Flex key={description.title} fd="column">
                                        <Header as="h3" type="subtitle-1">
                                            <Localize translate_text={description.title} />
                                        </Header>
                                        <StyledText>
                                            <Localize translate_text={description.text} />
                                        </StyledText>
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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO title="_t_Our principles | Deriv_t_" pageContext={pageContext} />
)
