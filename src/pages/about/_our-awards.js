import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        mena: file(relativePath: { eq: "mena.png" }) {
            ...fadeIn
        }
        wealth: file(relativePath: { eq: "wealth.png" }) {
            ...fadeIn
        }
        winner: file(relativePath: { eq: "winner.png" }) {
            ...fadeIn
        }
        global_brand: file(relativePath: { eq: "global-brand.png" }) {
            ...fadeIn
        }
    }
`
const AwardContainer = styled.section`
    width: 100%;
    padding: 8rem 22.8rem;
    margin: auto;

    @media ${device.desktop} {
        max-width: 1440px;
    }

    @media ${device.laptopLC} {
        padding: 8rem 6rem;
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 2rem;

    @media ${device.laptop} {
        flex-wrap: wrap;
    }
`
const ImageItem = styled.div`
    margin-right: 1.6rem;
    margin-top: 2rem;
`

export const OurAwards = () => {
    const data = useStaticQuery(query)
    return (
        <AwardContainer>
            <Header align="center" mb="1.6rem" size="var(--text-size-header-1)">
                {localize('Our awards')}
            </Header>
            <Flex>
                <Text align="center" weight="500" max_width="98.4rem" size="var(--text-size-m)">
                    {localize(
                        'The Deriv Group has 20 years of experience in providing excellent trading services. We’re proud that our dedication has led to a number of prestigious awards over the years.',
                    )}
                </Text>
            </Flex>
            <ImageWrapper>
                <ImageItem>
                    <QueryImage data={data['mena']} alt={localize('Mena FFXPO')} width="28.5rem" />
                </ImageItem>
                <ImageItem>
                    <QueryImage
                        data={data['wealth']}
                        alt={localize('Personal Wealth')}
                        width="28.5rem"
                    />
                </ImageItem>
                <ImageItem>
                    <QueryImage
                        data={data['winner']}
                        alt={localize('Award Winner')}
                        width="28.5rem"
                    />
                </ImageItem>
                <ImageItem>
                    <QueryImage
                        data={data['global_brand']}
                        alt={localize('Global Brand')}
                        width="28.5rem"
                    />
                </ImageItem>
            </ImageWrapper>
        </AwardContainer>
    )
}
