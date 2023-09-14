import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { BackgroundImageWrapper, Header, QueryImage, StaticImageWrapper } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Flex, Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        latam_award: file(relativePath: { eq: "choose-us/latam_award.png" }) {
            ...fadeIn
        }
    }
`

const AwardImageWrapper = styled.div`
    position: relative;
    top: 40px;
    margin-top: 40px;
    margin-right: -100px;
    z-index: 2;
    padding: 38px 62px;
    max-width: 324px;
    background: #ffffff;
    box-shadow: 0 32px 64px -12px rgba(14, 14, 14, 0.14);
    border-radius: 8px;

    @media (max-width: 1300px) {
        margin-right: -3%;
    }

    @media (max-width: 1200px) {
        margin-right: 1%;
        width: 290px;
        margin-top: 1%;
    }
`
const AwardImageWrapperMobile = styled.div`
    z-index: 2;
    padding: 36px 18px;
    max-width: 305px;
    margin-top: -2rem;
    background: #ffffff;
    box-shadow: 0 25.3563px 50.7126px -9.5086px rgba(14, 14, 14, 0.14);
    border-radius: 8px;
`

const StyledFlex = styled(Flex)`
    padding: 80px 120px 160px 120px;

    @media (max-width: 1200px) {
        padding: 0 50px 40px 50px;
    }
`

const StyledHeader = styled(Header)`
    max-width: 462px;

    @media (max-width: 1100px) {
        max-width: 300px;
    }

    @media (max-width: 700px) {
        max-width: 200px;
    }
`

const StyledHeaderMobile = styled(Header)`
    margin-top: 25%;
    padding: 0 7rem;
`

const LatamAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <StyledFlex>
                    <BackgroundImageWrapper
                        overflow="visible"
                        style={{ width: '100%', maxWidth: '1200px' }}
                    >
                        <StaticImageWrapper>
                            <StaticImage
                                src="../../images/common/choose-us/award_bg.png"
                                alt={localize('_t_Latin America Forex Award_t_')}
                                formats={['avif', 'webp', 'auto']}
                                objectFit="contain"
                                loading="eager"
                            />
                        </StaticImageWrapper>
                        <Flex style={{ maxHeight: '360px' }} ai="center" jc="space-evenly">
                            <StyledHeader type="heading-2" align="left" color="white">
                                <Localize translate_text="_t_Best Forex Broker Latin America_t_" />
                            </StyledHeader>
                            <AwardImageWrapper>
                                <QueryImage
                                    data={data.latam_award}
                                    alt={localize('_t_Latin America Forex Award_t_')}
                                    width="auto"
                                    height="100%"
                                />
                            </AwardImageWrapper>
                        </Flex>
                    </BackgroundImageWrapper>
                </StyledFlex>
            </Desktop>
            <Mobile>
                <Flex fd="column" ai="center">
                    <BackgroundImageWrapper
                        style={{
                            width: '315px',
                            height: '325px',
                            maxWidth: '450px',
                            margin: ' 0 1rem',
                        }}
                    >
                        <StaticImageWrapper>
                            <StaticImage
                                src="../../images/common/choose-us/award_bg_mobile.png"
                                alt={localize('_t_Latin America Forex Award_t_')}
                                formats={['avif', 'webp', 'auto']}
                                objectFit="contain"
                                loading="eager"
                            />
                        </StaticImageWrapper>
                        <StyledHeaderMobile type="heading-2" align="center" color="white">
                            <Localize translate_text="_t_Best Forex Broker Latin America_t_" />
                        </StyledHeaderMobile>
                        <Header as="h2" width="50%"></Header>
                    </BackgroundImageWrapper>
                    <AwardImageWrapperMobile>
                        <QueryImage
                            data={data.latam_award}
                            alt={localize('_t_Latin America Forex Award_t_')}
                            width="auto"
                            height="100%"
                        />
                    </AwardImageWrapperMobile>
                </Flex>
            </Mobile>
        </>
    )
}

export default LatamAward
