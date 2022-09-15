import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer, Desktop, Mobile } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { LinkButton, Button } from 'components/form'
import device from 'themes/device'
import { mobileOSDetect } from 'common/os-detect'
import { p2p_playstore_url, p2p_applestore_url } from 'common/constants'

const content = [
    {
        header: <Localize translate_text="21,000+" />,
        text: <Localize translate_text="active users" />,
    },
    {
        header: <Localize translate_text="12M+ USD" />,
        text: <Localize translate_text="exchanged to date" />,
    },
]

const Section = styled(SectionContainer)`
    display: flex;
    padding: 8rem 12rem;
    margin-top: 20rem;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color-grey-30);

    @media ${device.tabletL} {
        padding: 6.4rem 7.2rem;
    }
    @media ${device.tablet} {
        margin-top: 40px;
        padding: 40px 16px;
    }
`

const ClientCard = styled.article`
    margin-left: 2.4rem;
    margin-top: -20rem;
    background-color: var(--color-white);
    border-radius: 10px;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
    width: 38.4rem;
    height: unset;
    padding: 5.2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    :first-child {
        margin: -20rem 0 0 0;
    }
    @media ${device.laptopM} {
        min-height: 22rem;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;
        max-height: unset;
        width: 328px;
        padding: 46px 44px;

        :first-child {
            margin: 0 0 24px 0;
        }
        :last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileM} {
        max-width: 290px;
    }
`
const ButtonDerivP2P = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    padding: 1.5rem 1.6rem;
    height: 40px;
    margin: auto;
    width: 50%;
    white-space: nowrap;
`

const StyledLinkButton = styled(LinkButton)`
    padding: 24px;
    font-size: 20px;
    font-weight: 700;
    border: unset;
    height: 64px;
    margin: 20px auto;
    width: 220px;
    white-space: nowrap;
    margin-top: 40px;
    @media ${device.mobileL} {
        padding: 14px;
        font-size: 14px;
        height: 40px;
        width: 153px;
    }
    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 48px;

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 16px;
    }
`
const StyledText = styled(Text)`
    font-size: 24px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 20px;
        line-height: 25px;
    }
`

const Numbers = () => {
    const handleExternalLink = () => {
        let link = ''
        if (mobileOSDetect() === 'Android') {
            link = p2p_playstore_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = p2p_applestore_url
        }

        window.open(link, '_blank')
    }
    return (
        <>
            <Section>
                <Flex tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                    {content.map((item, idx) => {
                        return (
                            <ClientCard key={idx}>
                                <Flex height="unset" ai="center" mobileL={{ mb: '8px' }}>
                                    <StyledHeader
                                        mobile_margin="unset"
                                        mobile_font_size="20px"
                                        mb="0.8rem"
                                        as="p"
                                    >
                                        {item.header}
                                    </StyledHeader>
                                </Flex>
                                <StyledText>{item.text}</StyledText>
                            </ClientCard>
                        )
                    })}
                </Flex>
                <StyledLinkButton
                    secondary
                    external
                    to="/cashier/p2p"
                    type="deriv_app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {localize('Try Deriv P2P now')}
                </StyledLinkButton>
            </Section>
        </>
    )
}

export default Numbers
