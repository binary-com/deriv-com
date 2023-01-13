import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, ImageWithDireciton, LocalizedLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
// icons
import LowIcon from 'images/svg/bug-bounty/low.svg'
import MediumIcon from 'images/svg/bug-bounty/medium.svg'
import HighIcon from 'images/svg/bug-bounty/high.svg'
import CriticalIcon from 'images/svg/bug-bounty/critical.svg'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import { TString } from 'types/generics'

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

type TCardContent = {
    id: number
    icon: string
    alt: string
    header: TString
    title_1: TString | { text: TString; components: React.ReactElement[] }
    sub_title_1?: TString
    title_2?: TString
    sub_title_2?: TString
    title_3?: TString
    sub_title_3?: TString
    type?: string
}[]

const card_content: TCardContent = [
    {
        id: 0,
        icon: CriticalIcon,
        alt: 'Critical impact',
        header: '_t_Critical_t_',
        title_1: '_t_Important business_t_',
        sub_title_1: '_t_Up to $10,000_t_',
        title_2: '_t_General business_t_',
        sub_title_2: '_t_Up to $5,000_t_',
        title_3: '_t_Edge business_t_',
        sub_title_3: '_t_Up to $2,500_t_',
    },
    {
        id: 1,
        icon: HighIcon,
        alt: 'High impact',
        header: '_t_High_t_',
        title_1: '_t_Important business_t_',
        sub_title_1: '_t_Up to $5,000_t_',
        title_2: '_t_General business_t_',
        sub_title_2: '_t_Up to $2,500_t_',
        title_3: '_t_Edge business_t_',
        sub_title_3: '_t_Up to $1,000_t_',
    },
    {
        id: 2,
        icon: MediumIcon,
        alt: 'Medium impact',
        header: '_t_Medium_t_',
        title_1: '_t_Important business_t_',
        sub_title_1: '_t_Up to $500_t_',
        title_2: '_t_General business_t_',
        sub_title_2: '_t_Up to $250_t_',
        title_3: '_t_Edge business_t_',
        sub_title_3: '_t_Up to $100_t_',
    },
    {
        id: 3,
        icon: LowIcon,
        alt: 'Low impact',
        header: '_t_Low_t_',
        title_1: {
            text: '_t_We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis._t_',
            components: [<strong key={0} />],
        },
        type: 'short',
    },
]

const StyledSectionContainer = styled(SectionContainer)`
    box-shadow: inset 0 -1px 0 var(--color-grey-8);
`

const rewards_text: TString = '_t_Rewards_t_'
const bug_reports_text: TString =
    '_t_Your bug reports are reviewed and rewarded based on impact and severity._t_'
const see_list_text: TString = '_t_<0>See a list of the vulnerability examples</0>_t_'

const Rewards = () => (
    <StyledSectionContainer>
        <Container fd="column">
            <Header as="h2" type="heading-2" align="center" mb="8px">
                <Localize translate_text={rewards_text} />
            </Header>
            <Header as="p" type="paragraph-1" align="center" weight="400">
                <Localize translate_text={bug_reports_text} />
            </Header>
            <CardWrapper>
                <Flex laptopM={{ width: 'auto !important' }}>
                    {card_content.map((item) => {
                        return (
                            <Card key={item.id}>
                                <img src={item.icon} alt={item.alt} />
                                <Header as="h3" mt="8px" mb="16px" align="center" type="subtitle-2">
                                    <Localize translate_text={item.header} />
                                </Header>
                                <Header as="p" align="center" weight="normal" type="paragraph-1">
                                    {typeof item.title_1 === 'object' ? (
                                        <Localize
                                            translate_text={item.title_1.text}
                                            components={item.title_1.components}
                                        />
                                    ) : (
                                        <Localize translate_text={item.title_1} />
                                    )}
                                </Header>
                                {item.type !== 'short' && (
                                    <>
                                        <Subtitle as="p" type="subtitle-1" align="center">
                                            <Localize translate_text={item.sub_title_1} />
                                        </Subtitle>
                                        <Header
                                            align="center"
                                            weight="normal"
                                            type="paragraph-1"
                                            as="p"
                                        >
                                            <Localize translate_text={item.title_2} />
                                        </Header>
                                        <Subtitle as="p" type="subtitle-1" align="center">
                                            <Localize translate_text={item.sub_title_2} />
                                        </Subtitle>
                                        <Header
                                            align="center"
                                            weight="normal"
                                            type="paragraph-1"
                                            as="p"
                                        >
                                            <Localize translate_text={item.title_3} />
                                        </Header>
                                        <Subtitle as="p" type="subtitle-1" align="center">
                                            <Localize translate_text={item.sub_title_3} />
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
                    translate_text={see_list_text}
                    components={[
                        <LocalizedLinkText
                            mr="8px"
                            key={0}
                            to="/bug-bounty/vulnerabilities-types/"
                            color="red"
                        />,
                    ]}
                />
                <ImageWithDireciton src={Arrow} alt="arrow" width="16" height="16" />
            </Flex>
        </Container>
    </StyledSectionContainer>
)

export default Rewards
