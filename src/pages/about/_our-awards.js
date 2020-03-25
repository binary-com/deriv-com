import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'

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
    return (
        <AwardContainer>
            <Header align="center" mb="1.6rem" size="var(--text-size-header-1)">
                {localize('Our awards')}
            </Header>
            <Flex>
                <Text align="center" weight="500" mw="98.4rem" size="var(--text-size-m)">
                    {localize(
                        'The Binary Group has 20 years of experience in providing excellent trading services. We’re proud that our dedication has led to a number of prestigious awards over the years.',
                    )}
                </Text>
            </Flex>
            <ImageWrapper>
                <ImageItem>
                    <Image img_name="mena.png" alt={localize('Mena FFXPO')} width="28.5rem" />
                </ImageItem>
                <ImageItem>
                    <Image
                        img_name="wealth.png"
                        alt={localize('Personal Wealth')}
                        width="28.5rem"
                    />
                </ImageItem>
                <ImageItem>
                    <Image img_name="winner.png" alt={localize('Award Winner')} width="28.5rem" />
                </ImageItem>
                <ImageItem>
                    <Image
                        img_name="global-brand.png"
                        alt={localize('Global Brand')}
                        width="28.5rem"
                    />
                </ImageItem>
            </ImageWrapper>
        </AwardContainer>
    )
}
