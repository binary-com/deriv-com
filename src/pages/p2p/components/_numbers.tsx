import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { TString } from 'types/generics'

type TContent = {
    header: TString
    text: TString
}

const content: TContent[] = [
    { header: '_t_21,000+_t_', text: '_t_active users_t_' },
    { header: '_t_12M+ USD_t_', text: '_t_exchanged to date_t_' },
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
        font-size: 28px;
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
    return (
        <>
            <Section>
                <Flex tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                    {content.map(({ header, text }) => {
                        return (
                            <ClientCard key={header}>
                                <Flex height="unset" ai="center" mobileL={{ mb: '8px' }}>
                                    <StyledHeader mb="0.8rem" as="p">
                                        <Localize translate_text={header} />
                                    </StyledHeader>
                                </Flex>
                                <StyledText>
                                    <Localize translate_text={text} />
                                </StyledText>
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
                    <Localize translate_text="_t_Try Deriv P2P now_t_" />
                </StyledLinkButton>
            </Section>
        </>
    )
}

export default Numbers
