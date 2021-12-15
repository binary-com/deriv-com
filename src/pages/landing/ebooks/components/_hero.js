import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GetEbook from './_get-ebook'
import { Flex, Box } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const MainWrapper = styled(Box)`
    background-image: ${(props) => props.bg};

    @media ${device.tablet} {
        background-image: ${(props) => props.bgMobile};
    }
`
const HeaderBody = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
    }
`

const TopHeaderImgWrapper = styled(Flex)`
    @media ${device.tablet} {
        order: 2;
    }
`
const HeaderImage = styled(QueryImage)`
    margin: auto;
    padding: 15px;
`

const AuthorText = styled(Text)`
    font-style: italic;
`

const AuthorNameText = styled(Text).attrs({ as: 'span' })`
    color: ${(props) => props.color};
`

const Hero = ({
    authorDesc,
    authorName,
    bg,
    bgMobile,
    color = 'var(--color-white)',
    ebook_utm_code,
    introMain,
    introSub,
    mainHeaderImage,
}) => {
    const [is_mobile] = useBrowserResize()
    return (
        <MainWrapper width="100%" p="4%" bg={bg} tablet={{ bg: { bgMobile } }}>
            <HeaderBody max_width="1440px" m="0" tablet={{ height: 'auto' }}>
                <Flex width="100%" direction="column">
                    <Box
                        width="100%"
                        m="0"
                        p="10px 30px 0 45px"
                        laptopL={{ pl: '45px', mr: '30px', max_width: '500px' }}
                        laptop={{ p: '10px 30px 0 25px', mr: '5px' }}
                        tabletL={{ pl: '20px' }}
                        tablet={{ max_width: '430px', p: '10px 0', m: '0 auto', jc: 'center' }}
                        mobileM={{ max_width: '300px' }}
                    >
                        <Header
                            as="h2"
                            type="sub-section-title"
                            size="36px"
                            weight="400"
                            color={color}
                            mb="7px"
                        >
                            {introSub}
                        </Header>
                        <Header
                            as="h1"
                            type="page-title"
                            size="48px"
                            mb="10px"
                            lh={1.1}
                            weight="600"
                            max_width="800px"
                            color={color}
                        >
                            {introMain}
                        </Header>
                        {is_mobile && <HeaderImage data={mainHeaderImage} alt="ebook" />}
                        <Header
                            as="h3"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color={color}
                        >
                            {localize('Claim a FREE e-book now!')}
                        </Header>
                        <Header
                            as="h4"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color={color}
                        >
                            {localize('Plus a free demo account to practice.')}
                        </Header>
                        <AuthorText
                            m={0}
                            mt="10px"
                            size="14px"
                            color={color}
                            lh="16px"
                            weight={200}
                            max_width="586px"
                            styled="italic"
                        >
                            {authorDesc}
                            <AuthorNameText size="14px" color={color} weight="bold">
                                {authorName}
                            </AuthorNameText>
                        </AuthorText>
                        <Box m="10px">
                            <GetEbook ebook_utm_code={ebook_utm_code} color="black" />
                        </Box>
                    </Box>
                </Flex>
                {!is_mobile && (
                    <TopHeaderImgWrapper m="0" p="0" jc="flex-start">
                        <HeaderImage data={mainHeaderImage} alt="ebook" />
                    </TopHeaderImgWrapper>
                )}
            </HeaderBody>
        </MainWrapper>
    )
}

Hero.propTypes = {
    authorDesc: PropTypes.string,
    authorName: PropTypes.string,
    bg: PropTypes.any,
    bgMobile: PropTypes.any,
    color: PropTypes.string,
    ebook_utm_code: PropTypes.string,
    introMain: PropTypes.string,
    introSub: PropTypes.string,
    mainHeaderImage: PropTypes.any,
}

export default Hero
