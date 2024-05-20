import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { ContentType } from 'pages/landing/_types'
import { Localize, localize } from 'components/localization'

type TDerivGoContent = {
    P2P: ContentType[]
    reverse: boolean
}

const query = graphql`
    query {
        multiply_profit: file(relativePath: { eq: "deriv-go/multiply-profit.png" }) {
            ...fadeIn
        }
        forex: file(relativePath: { eq: "deriv-go/forex.png" }) {
            ...fadeIn
        }
        synthetic_indices: file(relativePath: { eq: "deriv-go/synthetic-indices.png" }) {
            ...fadeIn
        }
        better_risk: file(relativePath: { eq: "deriv-go/better-risk.png" }) {
            ...fadeIn
        }
        exponential_growth_rate: file(relativePath: { eq: "deriv-go/exponential-growth.png" }) {
            ...fadeIn
        }
        
    }
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    max-width: 996px;
    @media ${device.tabletL} {
        max-width: 360px;
    }
`
const Content = styled(Flex)<{ margin_right: string }>`
    width: 100%;
    max-width: 38.4rem;
    flex-direction: column;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-size: 2.4rem;
        margin-top: 0.8rem;
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledText = styled(Text)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        text-align: center;
        font-size: 18px;
    }
`
const Row = styled(Flex)<{ margin_right: string }>`
    align-items: center;

    & .content-wrapper {
        width: 100%;
        margin-right: ${(props) => props.margin_right};
        @media ${device.tabletL} {
            margin: 2rem auto;
        }
    }
    @media ${device.tabletL} {
        flex-direction: column-reverse;
    }
`

const DerivGoContent = ({ P2P, reverse }: TDerivGoContent) => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer p="8.9rem 0 8rem 0" tabletL={{ pt: '40px' }}>
            <StyledContainer>
                {P2P.map(({ title, subtitle, image_name, image_alt }, index) => {
                    const is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row
                            fd={!is_even ? 'row' : 'row-reverse'}
                            key={index}
                            margin_right={!is_even ? '0' : '12.6rem'}
                        >
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <StyledHeader as="h4" type="heading-3">
                                    <Localize translate_text={title} />
                                </StyledHeader>
                                <StyledText>
                                    <Localize translate_text={subtitle} />
                                </StyledText>
                            </Content>
                            <QueryImage
                                data={data[image_name]}
                                alt={localize(image_alt)}
                                width="100%"
                                className="content-wrapper"
                            />
                        </Row>
                    )
                })}
            </StyledContainer>
        </SectionContainer>
    )
}

export default DerivGoContent
