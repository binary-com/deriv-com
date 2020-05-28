import React from 'react'
import styled from 'styled-components'
import util from './_util'
import { Container, Box, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import { Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import HeroImg from 'images/common/hero-image.jpg'
import HeroPlatform from 'images/common/hero-platform.png'
import CheckIcon from 'images/svg/checklist.svg'

const BigButton = styled(LinkButton)`
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    position: relative;
    font-weight: normal;
    letter-spacing: 0.1rem;
    margin: 2rem auto 0;
`

const HandleAmp = styled(Box)`
    background: url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    height: 100vh;
    padding: 14rem 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
    }
    ${Header} {
        color: var(--color-white);
    }
    ${Text} {
        color: var(--color-white);
    }
`

const FullWidth = styled(Container)`
    width: 100%;
    margin-bottom: 2.4rem;
    position: relative;

    & > * {
        margin: 1rem;
    }
    & > amp-img {
        margin-top: 5rem;
        @media ${device.tabletS} {
            display: none;
        }
    }
`

const Hero = () => {
    return (
        <HandleAmp bg="var(--color-black)" p="12rem 0">
            <FullWidth jc="center" ai="center" fd="row" fw="wrap-reverse">
                <Box mt="3.2rem">
                    <Header as="h1" mb="2.4rem" size="var(--text-size-xl)" lh="1.25">
                        {localize('Simple. Flexible. Reliable.')}
                    </Header>
                    <Header as="h2" size="var(--text-size-m)" weight="300" mb="1.4rem">
                        <Localize
                            translate_text="Trade <0>forex</0>, <0>commodities</0>, <0>stock</0> and <0>synthetic indices</0>"
                            components={[<strong key={0} />]}
                        />
                    </Header>
                    <Flex ai="center" jc="flex-start" mb="0.8rem">
                        <CheckIcon width="18" height="18" />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            {localize('Built upon 20+ years of experience')}
                        </Text>
                    </Flex>
                    <Flex ai="center" jc="flex-start" mb="0.8rem">
                        <CheckIcon width="18" height="18" />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            {localize('100+ tradable assets')}
                        </Text>
                    </Flex>
                    <Flex ai="center" jc="flex-start" mb="0.8rem">
                        <CheckIcon width="18" height="18" />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            {localize('24x7 trading, sharp prices, tight spreads')}
                        </Text>
                    </Flex>
                </Box>
                <amp-img src={HeroPlatform} width="540" height="345" />
            </FullWidth>
            <BigButton secondary to={util.getSignupUrl()} target="_blank">
                {localize('Create free demo account')}
            </BigButton>
        </HandleAmp>
    )
}

export default Hero
