import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import LowIcon from 'images/svg/security/low.svg'
import MediumIcon from 'images/svg/security/medium.svg'
import HighIcon from 'images/svg/security/high.svg'
import CriticalIcon from 'images/svg/security/critical.svg'
import device from 'themes/device'

const Card = styled(Flex)`
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 8px;
    width: 282px;
    height: 362px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 24px;
    background-color: var(--color-white);
    margin: 0 12px;

    @media ${device.laptopM} {
        min-width: 282px;
    }
`

const CardWrapper = styled(Flex)`
    margin-top: 40px;
    flex-direction: row;

    @media ${device.laptopM} {
        overflow-x: scroll;
        position: relative;
        justify-content: flex-start;
    }
`

const Title = styled(Header)`
    font-weight: normal;
    text-align: center;
`

const Subtitle = styled(Header)`
    margin-bottom: 16px;

    :last-child {
        margin-bottom: 0;
    }
`
const ItemsWrapper = styled(Flex)`
    width: 100%;

    @media ${device.laptopM} {
        width: auto;
    }
`

const card_content = [
    {
        icon: CriticalIcon,
        header: 'Critical',
        title_1: 'Important business',
        sub_title_1: 'Up to $10,000',
        title_2: 'General business',
        sub_title_2: 'Up to $5,000',
        title_3: 'Edge business',
        sub_title_3: 'Up to $2,500',
    },
    {
        icon: HighIcon,
        header: 'High',
        title_1: 'Important business',
        sub_title_1: 'Up to $5,000',
        title_2: 'General business',
        sub_title_2: 'Up to $2,500',
        title_3: 'Edge business',
        sub_title_3: 'Up to $1,000',
    },
    {
        icon: MediumIcon,
        header: 'Medium',
        title_1: 'Important business',
        sub_title_1: 'Up to $500',
        title_2: 'General business',
        sub_title_2: 'Up to $250',
        title_3: 'Edge business',
        sub_title_3: 'Up to $100',
    },
    {
        icon: LowIcon,
        header: 'Low',
        title_1:
            'We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis. ',
        type: 'short',
    },
]

const Rewards = () => {
    return (
        <SectionContainer>
            <Container fd="column">
                <Header type="heading-2" align="center">
                    {localize('Rewards')}
                </Header>
                <Header type="paragraph-1" align="center" weight="400">
                    {localize(
                        'Your bug reports are reviewed and rewarded based on impact and severity.',
                    )}
                </Header>
                <CardWrapper>
                    <ItemsWrapper>
                        {card_content.map((item, idx) => {
                            return (
                                <Card key={idx}>
                                    <img src={item.icon} />
                                    <Header mt="8px" mb="16px" align="center" type="subtitle-2">
                                        {item.header}
                                    </Header>
                                    <Title type="paragraph-1">
                                        <Localize
                                            translate_text={item.title_1}
                                            components={[<strong key={0} />]}
                                        />
                                    </Title>
                                    {item.type !== 'short' && (
                                        <>
                                            <Subtitle type="subtitle-1" align="center">
                                                {item.sub_title_1}
                                            </Subtitle>
                                            <Title type="paragraph-1">{item.title_2}</Title>
                                            <Subtitle type="subtitle-1" align="center">
                                                {item.sub_title_2}
                                            </Subtitle>
                                            <Title type="paragraph-1">{item.title_3}</Title>
                                            <Subtitle type="subtitle-1" align="center">
                                                {item.sub_title_3}
                                            </Subtitle>
                                        </>
                                    )}
                                </Card>
                            )
                        })}
                    </ItemsWrapper>
                </CardWrapper>
            </Container>
        </SectionContainer>
    )
}

export default Rewards
