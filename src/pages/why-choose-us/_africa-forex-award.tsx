import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { BackgroundImage, Header, QueryImage } from 'components/elements'
import { WithIntl } from 'components/localization'
import {
    Flex,
    Show,
    //  GridContainer
} from 'components/containers'

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

    /* right: -5.5%; */
    top: 40px;
    margin-top: 40px;
    margin-right: -100px;
    z-index: 2;
    padding: 38px 62px;
    max-width: 414px;
    background: #ffffff;

    /* box-shadow: 0px 32px 64px -12px rgba(14, 14, 14, 0.14); */
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
    max-width: 328px;
    background: #ffffff;

    /* box-shadow: 0px 32px 64px -12px rgba(14, 14, 14, .14); */

    /* box-shadow: 0px 25px 50px -9.5px rgba(14, 14, 14, 0.14); */
    border-radius: 8px;
`

const StyledFlex = styled(Flex)`
    padding: 80px 120px 160px 120px;

    @media (max-width: 1200px) {
        padding: 0 50px 40px 50px;
    }
`
const StyledFlexMobile = styled(Flex)`
    /* padding: 80px 120px 160px 120px;
    
    @media (max-width: 1200px) {
        padding: 0 50px 40px 50px;
    } */
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
    /* max-width: 462px;

    @media (max-width: 1100px) {
        max-width: 300px;
    }

    @media (max-width: 700px) {
        max-width: 200px;
    } */
`

const AfricaAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Show.Desktop max_width={'tabletS'}>
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
                                Best Forex Broker Africa
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
            </Show.Desktop>
            <Show.Mobile min_width={'tabletS'}>
                <StyledFlexMobile>
                    <Flex
                        // // style={{ maxHeight: '360px' }}
                        // ai="center"
                        // jc="space-evenly"
                        fd="column"
                    >
                        <BackgroundImage
                            data={data.africa_award_background_mobile}
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                width: '100%',
                                height: '100%',
                                maxWidth: '328px',
                                backgroundColor: 'white',
                            }}
                        >
                            <StyledHeaderMobile type="heading-2" align="left" color="white">
                                Best Forex Broker Africa
                            </StyledHeaderMobile>
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
                </StyledFlexMobile>
            </Show.Mobile>
        </>
    )
}

export default WithIntl()(AfricaAward)
