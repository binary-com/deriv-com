import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// icons
import LowIcon from 'images/svg/bug-bounty/low.svg'
import MediumIcon from 'images/svg/bug-bounty/medium.svg'
import HighIcon from 'images/svg/bug-bounty/high.svg'
import CriticalIcon from 'images/svg/bug-bounty/critical.svg'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const Card = styled(Flex)`
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 8px;
    width: 282px;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 24px;
    background-color: var(--color-white);
    margin: 0 12px;

    @media ${device.laptopM} {
        min-width: 284px;
        margin: 12px;
        padding: 24px;
    }
`

const CardWrapper = styled(Flex)`
    margin-top: 40px;
    flex-direction: row;

    @media ${device.laptopM} {
        margin-top: 24px;
        overflow-x: scroll;
        position: relative;
        justify-content: flex-start;
    }
`

const Subtitle = styled(Header)`
    margin-bottom: 16px;

    :last-child {
        margin-bottom: 0;
    }
`

const card_content = [
    {
        icon: CriticalIcon,
        header: localize('Critical'),
        title_1: localize('Important business'),
        sub_title_1: localize('Up to $10,000'),
        title_2: localize('General business'),
        sub_title_2: localize('Up to $5,000'),
        title_3: localize('Edge business'),
        sub_title_3: localize('Up to $2,500'),
    },
    {
        icon: HighIcon,
        header: localize('High'),
        title_1: localize('Important business'),
        sub_title_1: localize('Up to $5,000'),
        title_2: localize('General business'),
        sub_title_2: localize('Up to $2,500'),
        title_3: localize('Edge business'),
        sub_title_3: localize('Up to $1,000'),
    },
    {
        icon: MediumIcon,
        header: localize('Medium'),
        title_1: localize('Important business'),
        sub_title_1: localize('Up to $500'),
        title_2: localize('General business'),
        sub_title_2: localize('Up to $250'),
        title_3: localize('Edge business'),
        sub_title_3: localize('Up to $100'),
    },
    {
        icon: LowIcon,
        header: localize('Low'),
        title_1: (
            <Localize
                translate_text="We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis. "
                components={[<strong key={0} />]}
            />
        ),
        type: 'short',
    },
]

const StyledSectionContainer = styled(SectionContainer)`
    box-shadow: inset 0 -1px 0 var(--color-grey-8);
`

const Rewards = () => {
    return (
        <StyledSectionContainer>
            <Container fd="column">
                <Header as="h2" type="heading-2" align="center" mb="8px">
                    {localize('Rewards')}
                </Header>
                <Header as="p" type="paragraph-1" align="center" weight="400">
                    {localize(
                        'Your bug reports are reviewed and rewarded based on impact and severity.',
                    )}
                </Header>
                <CardWrapper>
                    <Flex laptopM={{ width: 'auto !important' }}>
                        {card_content.map((item, idx) => {
                            return (
                                <Card key={idx}>
                                    <img src={item.icon} />
                                    <Header
                                        as="h3"
                                        mt="8px"
                                        mb="16px"
                                        align="center"
                                        type="subtitle-2"
                                    >
                                        {item.header}
                                    </Header>
                                    <Header
                                        as="p"
                                        align="center"
                                        weight="normal"
                                        type="paragraph-1"
                                    >
                                        {item.title_1}
                                    </Header>
                                    {item.type !== 'short' && (
                                        <>
                                            <Subtitle as="p" type="subtitle-1" align="center">
                                                {item.sub_title_1}
                                            </Subtitle>
                                            <Header
                                                align="center"
                                                weight="normal"
                                                type="paragraph-1"
                                                as="p"
                                            >
                                                {item.title_2}
                                            </Header>
                                            <Subtitle as="p" type="subtitle-1" align="center">
                                                {item.sub_title_2}
                                            </Subtitle>
                                            <Header
                                                align="center"
                                                weight="normal"
                                                type="paragraph-1"
                                                as="p"
                                            >
                                                {item.title_3}
                                            </Header>
                                            <Subtitle as="p" type="subtitle-1" align="center">
                                                {item.sub_title_3}
                                            </Subtitle>
                                        </>
                                    )}
                                </Card>
                            )
                        })}
                    </Flex>
                </CardWrapper>

                <Flex ai="center" mt="16px">
                    <Localize
                        translate_text="<0>See a list of the vulnerability examples</0>"
                        components={[
                            <LocalizedLinkText
                                mr="8px"
                                key={0}
                                to="/bug-bounty/vulnerabilities-types/"
                                color="red"
                            />,
                        ]}
                    />
                    <img src={Arrow} alt="arrow" width="16" height="16" />
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default Rewards
