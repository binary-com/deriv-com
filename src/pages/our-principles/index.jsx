import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements'
import { SEO, Container, Flex, SectionContainer } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Reliable from 'images/svg/principles/reliable.svg'
import Fair from 'images/svg/principles/fare.svg'
import Transparent from 'images/svg/principles/transparent.svg'
import Responsible from 'images/svg/principles/responsible.svg'
import device from 'themes/device'

const data = [
    {
        title: 'Be reliable',
        description: [
            {
                title: localize('Settle all contracts fairly, accurately, and promptly'),
                text: localize(
                    'We will price and settle all contracts accurately and fairly, based on reliable data feeds and without undue delay, so that customers can trust our prices throughout the website.',
                ),
            },
            {
                title: localize('Process all deposits and withdrawals quickly and accurately'),
                text: localize(
                    'We will design our cashier systems to work as seamlessly as possible, processing deposits and withdrawals efficiently and promptly. As far as possible, we will minimise delays imposed by any AML or anti-fraud requirements.',
                ),
            },
            {
                title: localize(
                    'Provide reliable online trading with high uptime, good security, and low latency',
                ),
                text: localize(
                    'We aim to provide our customers with reliable systems that have high uptime and low latency, even on low-speed mobile data networks. We provide good security and cross-device compatibility for all major desktop and mobile devices.',
                ),
            },
            {
                title: localize('Provide helpful customer support to all customers'),
                text: localize(
                    'We will strive to offer 24/7 live chat services to make agents available for any customer who requests a chat. Agents will be trained to answer relevant questions about the service.',
                ),
            },
        ],
        img: Reliable,
        separator: '#85BDB140',
        color: '#85BDB1',
    },
    {
        title: 'Be fair',
        description: [
            {
                title: localize('Treat all customers equitably'),
                text: localize(
                    'We will treat all customers equally, regardless of where they’re from or the size of their accounts.',
                ),
            },
            {
                title: localize('Handle all complaints with integrity'),
                text: localize(
                    'In the event of any complaint, we aim to resolve the issue with speed and integrity.',
                ),
            },
            {
                title: localize('Offer competitive prices on all our products'),
                text: localize(
                    'We aim to be competitive on pricing for all our products and services.',
                ),
            },
            {
                title: localize('No hidden costs'),
                text: localize('We will be clear about all fees and charges.'),
            },
            {
                title: localize('No artificial barriers to customer withdrawals'),
                text: localize(
                    'If a customer is fairly entitled to winnings or balances, and there are no fraud concerns or AML requirements, they should be able to withdraw those funds at will.',
                ),
            },
        ],
        img: Fair,
        separator: '#FFC35940',
        color: '#FFC359',
    },
    {
        title: 'Be transparent',
        description: [
            {
                title: localize('Speak simply and plainly, and not hide behind ambiguity'),
                text: localize(
                    'We will use straightforward language in all our products, services, and communications.',
                ),
            },
            {
                title: localize('Disclose the terms of all contracts'),
                text: localize(
                    'We will be transparent about the terms of all contracts so that customers can make informed choices.',
                ),
            },
            {
                title: localize(
                    'Prominently and intelligibly disclose the risks involved in trading',
                ),
                text: localize(
                    'We will be transparent about all the risks involved in trading because we want our customers to make informed choices according to their risk appetite.',
                ),
            },
            {
                title: localize('Disclose how we make money'),
                text: localize(
                    'We will be transparent about how we make money, including when we are a trade counterparty or acting as a broker.',
                ),
            },
            {
                title: localize('Provide a representative demo experience'),
                text: localize(
                    'Our demo trading experience will represent real-money trading, especially with contract pricing and trading restrictions.',
                ),
            },
        ],
        img: Transparent,
        separator: '#9685BD40',
        color: '#9685BD',
    },
    {
        title: 'Be responsible',
        description: [
            {
                title: localize('No hard-selling'),
                text: localize(
                    'We will be honest in our advertising. We will not use implausible images of financial success in our marketing materials.',
                ),
            },
            {
                title: localize('No financial or trading advice'),
                text: localize(
                    'We will not give any opinion on market direction or the suitability of any particular trade.',
                ),
            },
            {
                title: localize('No promises of guaranteed returns'),
                text: localize(
                    'We will not imply that trading solves one’s financial worries or can generate a reliable income. We will be clear that there are no guaranteed or risk-free returns from trading.',
                ),
            },
            {
                title: localize('Implement policies to prevent vulnerable persons from trading'),
                text: localize(
                    'We will refuse underage persons’ access and implement processes to identify customers who are trading beyond their financial capacity.',
                ),
            },
            {
                title: localize('Implement controls to prevent unlawful activity'),
                text: localize(
                    'We will implement know-your-customer (KYC) controls and prevent money laundering and other unlawful activities on our platforms.',
                ),
            },
        ],
        img: Responsible,
        separator: '#77A0C640',
        color: '#77A0C6',
    },
]

const Separator = styled.div`
    margin-top: 16px;
    margin-bottom: 40px;
    max-width: 1098px;
    width: 100%;
    height: 6px;
    background: ${(props) => (props.background ? props.background : '')};
`

const ColorHeader = styled(Header)`
    padding-bottom: 40px;
    font-size: 48px;
    color: ${(props) => (props.color ? props.color : '')};

    @media ${device.mobileM} {
        padding-top: 24px;
        padding-bottom: 16px;
        font-size: 28px;
        line-height: 34px;
    }
`

const MainHeader = styled(Header)`
    padding-bottom: 24px;

    @media ${device.mobileM} {
        padding-bottom: 24px;
        font-size: 40px;
        line-height: 50px;
    }
`

const StyledMainText = styled(Text)`
    font-size: 24px;
    font-weight: 400;

    @media ${device.mobileM} {
        font-size: 18px;
        line-height: 26px;
    }
`

const StyledText = styled(Text)`
    max-width: 792px;
    padding: 0 0 24px 0;
    line-height: 24px;
    font-weight: 400;

    @media ${device.mobileM} {
        font-size: 14px;
        line-height: 20px;
    }
`

const StyledHeader = styled(Header)`
    padding-bottom: 8px;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;

    @media ${device.mobileM} {
        font-size: 18px;
        line-height: 26px;
    }
`

const StyledContainer = styled(Container)`
    max-width: 1098px;
    flex-direction: column;
`
const TitleSection = styled(SectionContainer)`
    padding: ${(props) => (props.padding ? props.padding : '120px 0 24px 10rem')};
    @media ${device.tablet} {
        padding: 40px 0 24px 0rem;
    }
`

const PrinciplesSection = styled(SectionContainer)`
    padding: ${(props) => (props.padding ? props.padding : '120px 0 24px 10rem')};
    @media ${device.tablet} {
        padding: 40px 0 24px 0rem;
    }

    @media ${device.mobileM} {
        padding: 0px 0 24px 0rem;
    }
`

const StyledCardContainer = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.mobileM} {
        margin: 0px 0px;
    }
`

const StyledFlex = styled(Flex)`
    align-self: baseline;

    img {
        @media ${device.mobileM} {
            width: 104px;
        }
    }

    @media ${device.mobileM} {
            width: 104px;
    }

}
`

const OurPrinciples = () => {
    return (
        <Layout>
            <SEO title={localize('Our principles | Deriv')} />
            <TitleSection padding="120px 0 24px 10rem">
                <StyledContainer>
                    <MainHeader
                        as="h1"
                        type="display-title"
                        color="black"
                        weight="700"
                        align="left"
                    >
                        {localize('Our principles')}
                    </MainHeader>
                    <StyledMainText>
                        {localize(
                            'We are honoured to serve everyone who relies on our products and services, and we only want to offer the best. That’s why our principles and values are so important in defining who we are, why we do what we do, and how we treat our clients and each other. Across our international offices, we are committed to the following principles in everything that we do.',
                        )}
                    </StyledMainText>
                </StyledContainer>
            </TitleSection>
            <PrinciplesSection padding="0 0 96px 10rem">
                {data.map((principle, index) => (
                    <StyledContainer key={index}>
                        <Separator background={principle.separator} />
                        <StyledCardContainer jc="space-between">
                            <StyledFlex max_width="180px" m="10px">
                                <img src={principle.img} />
                            </StyledFlex>
                            <Flex fd="column" max_width="792px">
                                <ColorHeader as="h2" color={principle.color}>
                                    {principle.title}
                                </ColorHeader>
                                {principle.description.map((description, key) => (
                                    <Flex key={key} fd="column">
                                        <StyledHeader as="h3">{description.title}</StyledHeader>
                                        <StyledText>{description.text} </StyledText>
                                    </Flex>
                                ))}
                            </Flex>
                        </StyledCardContainer>
                    </StyledContainer>
                ))}
            </PrinciplesSection>
        </Layout>
    )
}

export default WithIntl()(OurPrinciples)
