import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { BackgroundImage, Header, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'
import { Flex, Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        africa_award_background: file(relativePath: { eq: "choose-us/africa_award_bg.png" }) {
            ...fadeIn
        }
        africa_award_background_mobile: file(
            relativePath: { eq: "choose-us/africa_award_bg_mobile.png" }
        ) {
            ...fadeIn
        }
        africa_award: file(relativePath: { eq: "choose-us/africa_award.png" }) {
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
    max-width: 414px;
    background: #ffffff;
    box-shadow: 0px 32px 64px -12px rgba(14, 14, 14, 0.14);
    border-radius: 8px;
    @media (max-width: 1400px) {
        max-width: 35%;
        margin-right: -6%;
    }

    @media (max-width: 1300px) {
        margin-right: -3%;
    }
    @media (max-width: 1200px) {
        padding: 19px 31px;
        margin-right: 1%;
    }

    @media (max-width: 1100px) {
        margin-right: 1%;
        margin-top: 1%;
    }
`
const AwardImageWrapperMobile = styled.div`
    z-index: 2;
    padding: 36px 18px;
    max-width: 305px;
    margin-top: -2rem;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 25.3563px 50.7126px -9.50862px rgba(14, 14, 14, 0.14);
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
    word-break: break-word;
    margin-top: 25%;
    padding: 0 7rem;
`

const AfricaAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <StyledFlex>
                    <BackgroundImage
                        data={data.africa_award_background}
                        style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            width: '100%',
                            maxWidth: '1200px',
                            backgroundColor: 'white',
                        }}
                    >
                        <Flex style={{ maxHeight: '360px' }} ai="center" jc="space-evenly">
                            <StyledHeader type="heading-2" align="left" color="white">
                                {<Localize translate_text="Best Forex Broker Africa" />}
                            </StyledHeader>
                            <AwardImageWrapper>
                                <QueryImage
                                    data={data.africa_award}
                                    alt={'Africa Forex Award'}
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
                        data={data.africa_award_background_mobile}
                        style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            width: '315px',
                            height: '325px',
                            maxWidth: '450px',
                            backgroundColor: 'white',
                            margin: ' 0 1rem',
                        }}
                    >
                        <StyledHeaderMobile type="heading-2" align="center" color="white">
                            {<Localize translate_text="Best Forex Broker Africa" />}
                        </StyledHeaderMobile>
                        <Header as="h2" width="50%"></Header>
                    </BackgroundImage>
                    <AwardImageWrapperMobile>
                        <QueryImage
                            data={data.africa_award}
                            alt={'Africa Forex Award'}
                            width="auto"
                            height="100%"
                        />
                    </AwardImageWrapperMobile>
                </Flex>
            </Mobile>
        </>
    )
}

export default AfricaAward
