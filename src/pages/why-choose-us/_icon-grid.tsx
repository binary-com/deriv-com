import React, { ReactElement } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
// Icons
import ProvenTrackRecord from 'images/svg/choose/wd-proven-track-record.svg'
import LicensedRegulated from 'images/svg/choose/wd-licensed-regulated.svg'
import ClientProtection from 'images/svg/choose/wd-client-money-protection.svg'
import Risk from 'images/svg/choose/wd-risk.svg'
import Help from 'images/svg/choose/wd-help.svg'
import Safety from 'images/svg/choose/wd-your-safety.svg'
import CustomerFirst from 'images/svg/choose/wd-customer-first-trading.svg'

const GridCol = styled(CssGridColumn)`
    width: 100%;

    a {
        color: var(--color-red);
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
    ${Text} {
        @media ${device.tabletL} {
            font-size: 2rem;
        }
        @media ${device.tabletS} {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        text-align: center;
    }

    * {
        max-width: 100%;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        text-align: center;
    }
`
const Container = styled.div`
    padding: 0 2rem;

    ${Text} {
        width: 28.1rem;

        @media ${device.tablet} {
            width: 100%;
        }
    }
`
type ColProps = {
    Icon: string
    content: string | ReactElement
    title: string
}

const Col = ({ Icon, content, title }: ColProps) => (
    <GridCol>
        <img src={Icon} />
        <Container>
            <StyledHeader as="h4" type="sub-section-title">
                {title}
            </StyledHeader>
            <Text lh="1.55" mt="1.8rem">
                {content}
            </Text>
        </Container>
    </GridCol>
)
const GridWrapper = styled(CssGrid)`
    @media (max-width: 1400px) {
        grid-column-gap: 5rem;
        grid-row-gap: 5rem;
    }
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.tablet} {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 10rem;

        ${GridCol} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

export const IconGrid = () => (
    <GridContainer>
        <GridWrapper columns="repeat(3, 1fr)" column_gap="13rem" row_gap="10rem">
            <Col
                Icon={ProvenTrackRecord}
                title={localize('Proven track record')}
                content={localize(
                    'Deriv Group – the owners of the Deriv and Binary.com brands – has a history that dates back to 1999 when we laid the groundwork for the world’s first fixed-odds trading service. Since then, we have grown from strength to strength, garnering the trust of traders around the world.',
                )}
            />
            <Col
                Icon={LicensedRegulated}
                title={localize('Licensed and regulated')}
                content={
                    <Localize
                        translate_text="Deriv is <0>regulated</0> by several entities including the Malta Financial Services Authority (MFSA), the Labuan Financial Services Authority (Labuan FSA), the Vanuatu Financial Services Commission (VFSC), and the British Virgin Islands Financial Services Commission."
                        components={[<LocalizedLink key={0} to="/regulatory/" />]}
                    />
                }
            />
            <Col
                Icon={ClientProtection}
                title={localize('Client money protection')}
                content={localize(
                    'Deriv does not use your money for its business interests and you are allowed to withdraw your money at any time. All your money is segregated and held in secure financial institutions. In this way, in the unlikely event of Deriv becoming insolvent, all your money will be returned to you because it is never merged with ours.',
                )}
            />
            <Col
                Icon={Risk}
                title={localize('Risk awareness and management')}
                content={
                    <Localize
                        translate_text="Online trading is exciting but involves risks and can lead to an addiction. At Deriv, we look out for our customers’ best interests and encourage them to practise <0>secure and responsible trading</0>. If you are new to this, you can also practise trading with unlimited virtual funds before you risk your money."
                        components={[<LocalizedLink key={0} to="/responsible/" />]}
                    />
                }
            />
            <Col
                Icon={Help}
                title={localize('Help when you need it')}
                content={
                    <Localize
                        translate_text="The Deriv support team is available via live chat 24/7 – even on weekends. You can also find answers at our <0>Help centre</0> and get help from fellow traders in <1>Community</1>."
                        components={[
                            <LocalizedLink key={0} to="/help-centre/" />,
                            <LocalizedLink
                                key={1}
                                to=""
                                type="community"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                }
            />
            <Col
                Icon={CustomerFirst}
                title={localize('Customer-first trading experience')}
                content={localize(
                    'Deriv makes it easy for anyone to start trading, understand risk, and make better trading decisions. Our tools and platforms have clear and simple instructions and are intuitively easy to navigate. We also regularly provide market news, analysis, webinars, ebooks, video tutorials and help centre articles to help you stay informed and become a better trader.',
                )}
            />
            <Col
                Icon={Safety}
                title={localize('Your safety, our priority')}
                content={localize(
                    'At Deriv, we enforce best-in-class security measures such as SSL encryption to protect your account and personal data.',
                )}
            />
        </GridWrapper>
    </GridContainer>
)
