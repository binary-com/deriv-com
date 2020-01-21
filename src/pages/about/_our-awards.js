import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
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

const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    margin-bottom: 1.6rem;
`
const StyledText = styled(Text)`
    font-size: var(--text-size-m);
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
            <StyledHeader align="center">{localize('Our awards')}</StyledHeader>
            <StyledText align="center" weight="500">
                {localize(
                    'The Binary Group has 20 years of experience in providing excellent trading services. We’re proud that our dedication has led to a number of prestigious awards over the years.',
                )}
            </StyledText>
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
