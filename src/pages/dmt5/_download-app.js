import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, SectionContainer, Box } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import AppStore from 'images/svg/app-store.svg'
import GooglePlay from 'images/svg/google-play.svg'
import Linux from 'images/svg/linux.svg'
import MoreInfo from 'images/svg/more-info.svg'
import Windows from 'images/svg/windows.svg'
import device from 'themes/device'

const query = graphql`
    query {
        mobile_phone: file(relativePath: { eq: "mobile-phone.png" }) {
            ...fadeIn
        }
    }
`
const Section = styled(SectionContainer)`
    display: flex;
    height: 30rem;
    padding: 0 12rem 0;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-grey-25);

    @media ${device.laptopL} {
        padding: 0 1rem 0;
    }
    @media ${device.tabletL} {
        padding: 40px 0 0;
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`
const Separator = styled.div`
    width: 2px;
    height: 100%;
    background-color: rgba(133, 147, 164, 0.16);

    @media ${device.tabletL} {
        width: 100%;
        height: 1px;
        margin-top: 40px;
    }
`
const ImageWrapper = styled.div`
    margin-top: 4rem;
    width: 38.4rem;
    position: relative;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const StyledInfo = styled(MoreInfo)`
    margin-top: 0.5rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 20px;
    }
`

const DownloadApp = () => {
    const data = useStaticQuery(query)

    return (
        <Section>
            <Flex
                jc="flex-start"
                tablet_jc="center"
                fd="column"
                width="100%"
                max_width="38.2rem"
                mt="4rem"
                height="auto"
                tabletL={{ mt: '0', pl: '10px', pr: '10px' }}
            >
                <StyledHeader as="h4">{localize('Desktop')}</StyledHeader>
                <Flex mt="0.8rem" jc="flex-start" height="auto">
                    <Box mr="0.8rem">
                        <Windows />
                    </Box>
                    <Linux />
                </Flex>

                <StyledHeader mt="2.4rem" as="h4">
                    {localize('Mobile')}
                </StyledHeader>
                <Flex mt="0.8rem" jc="flex-start">
                    <Box mr="0.8rem">
                        <AppStore />
                    </Box>
                    <GooglePlay />
                </Flex>
            </Flex>

            <Separator />

            <Flex
                height="auto"
                ml="5.6rem"
                max_width="31rem"
                mt="10.8rem"
                mr="5.6rem"
                tabletL={{ max_width: '290px', mt: '40px' }}
                laptopM={{ mr: '2px', ml: '2px' }}
            >
                <StyledInfo />
                <Text width="100%" ml="1.6rem" size="var(--text-size-m)">
                    <Localize
                        translate_text="For mobile app sign-ups, set the broker code to <0>Deriv Limited</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </Flex>
            <ImageWrapper mt="4rem">
                <QueryImage data={data['mobile_phone']} alt="mobile phone" />
            </ImageWrapper>
        </Section>
    )
}

export default DownloadApp
