import React from 'react'
import styled from 'styled-components'
import BgMobile from 'images/common/about-us/about-us-banner-mobile.jpg'
import Bg from 'images/common/about-us/about-us-banner.jpg'
import { localize } from 'components/localization'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import { zoho_url } from 'common/constants'
import { LinkButton } from 'components/form'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    flex-wrap: nowrap;
    @media ${device.tablet} {
        padding: 0 40px;
    }
    @media ${device.mobileL} {
        padding: 0 16px;
    }
`

const StyledFlex = styled(Flex)`
    background-image: url(${Bg});
    background-position: center;
    @media ${device.laptopM} {
        width: 100%;
    }
    @media (max-width: 610px) {
        background-image: url(${BgMobile});
        background-position-x: unset;
        background-position: left;
        height: 546px;
    }
    @media (max-width: 359px) {
        background-position-x: -40px;
    }
`

const PictureFlex = styled(Flex)`
    width: 373px;
    margin: 32px 0 0 100px;
    flex-direction: 'column';
    @media ${device.laptop} {
        margin: 32px 0 0 50px;
    }
    @media ${device.tablet} {
        margin: 40px 0 0 29px;
        width: 250px;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    margin-bottom: 16px;
`
const Styledtext = styled(Text)`
    color: var(--color-white);
    margin-bottom: 24px;
`

const AboutUsBanner = () => {
    return (
        <StyledSectionContainer>
            <StyledFlex direction="column" height="288px" width="1200px">
                <PictureFlex jc="start" ai="start" direction="column">
                    <StyledHeader width="100%" type="section-title" as="h2">
                        {localize('We have a huge mission, an incredible team, and rapid growth.')}
                    </StyledHeader>
                    <Styledtext width="100%" type="paragraph-2" as="p">
                        {localize('Join and grow with us.')}
                    </Styledtext>
                    <LinkButton
                        secondary="true"
                        to={zoho_url}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('See our open positions')}
                    </LinkButton>
                </PictureFlex>
            </StyledFlex>
        </StyledSectionContainer>
    )
}

export default AboutUsBanner
