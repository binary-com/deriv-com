import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { BackgroundImage, Header, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'
import { Flex, Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        latam_award_background: file(relativePath: { eq: "choose-us/latam_award_bg.png" }) {
            ...fadeIn
        }
        latam_award_background_mobile: file(
            relativePath: { eq: "choose-us/latam_award_bg_mobile.png" }
        ) {
            ...fadeIn
        }
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
                    <BackgroundImage
                        data={data.latam_award_background}
                        alt="latam forex"
                        child_style={{
                            maxWidth: '1200px',
                            backgroundColor: 'white',
                            width: '100%',
                        }}
                        objectFit="contain"
                    >
                        <Flex style={{ maxHeight: '360px' }} ai="center" jc="space-evenly">
                            <StyledHeader type="heading-2" align="left" color="white">
                                {<Localize translate_text="Best Forex Broker Latin America" />}
                            </StyledHeader>
                            <AwardImageWrapper>
                                <QueryImage
                                    data={data.latam_award}
                                    alt={'Latin America Forex Award'}
                                    width="auto"
                                    height="100%"
                                />
                            </AwardImageWrapper>
                        </Flex>
                    </BackgroundImage>
                </StyledFlex>
            </Desktop>
            <Mobile>
                <Flex fd="column" ai="center">
                    <BackgroundImage
                        data={data.latam_award_background_mobile}
                        alt="latam forex"
                        child_style={{
                            width: '315px',
                            height: '325px',
                            maxWidth: '450px',
                            margin: ' 0 1rem',
                            backgroundColor: 'white',
                        }}
                        objectFit="contain"
                    >
                        <StyledHeaderMobile type="heading-2" align="center" color="white">
                            {<Localize translate_text="Best Forex Broker Latin America" />}
                        </StyledHeaderMobile>
                        <Header as="h2" width="50%"></Header>
                    </BackgroundImage>
                    <AwardImageWrapperMobile>
                        <QueryImage
                            data={data.latam_award}
                            alt={'Latin America Forex Award'}
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
