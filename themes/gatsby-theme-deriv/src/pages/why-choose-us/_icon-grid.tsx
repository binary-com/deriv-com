import React, { ReactElement } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize, LocalizedLink, localize } from 'components/localization'
import { TString } from 'types/generics'
// Icons
import ProvenTrackRecord from 'images/svg/choose/wd-proven-track-record.svg'
import LicensedRegulated from 'images/svg/choose/wd-licensed-regulated.svg'
import ClientProtection from 'images/svg/choose/wd-client-money-protection.svg'
import Risk from 'images/svg/choose/wd-risk.svg'
import Help from 'images/svg/choose/wd-help.svg'
import Safety from 'images/svg/choose/wd-your-safety.svg'
import CustomerFirst from 'images/svg/choose/wd-customer-first-trading.svg'

type ColProps = {
    Icon: string
    content: TString
    content_components?: ReactElement[]
    title: TString
}

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

const Col = ({ Icon, content, content_components, title }: ColProps) => (
    <GridCol>
        <img src={Icon} alt={localize(title)} />
        <Container>
            <StyledHeader as="h4" type="sub-section-title">
                <Localize translate_text={title} />
            </StyledHeader>
            <Text lh="1.55" mt="1.8rem">
                <Localize translate_text={content} components={content_components} />
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
                title="_t_Proven track record_t_"
                content="_t_Deriv Group has a history that dates back to 1999 when we laid the groundwork for the world’s first fixed-odds trading service. Since then, we have grown from strength to strength, garnering the trust of traders around the world._t_"
            />
            <Col
                Icon={LicensedRegulated}
                title="_t_Licensed and regulated_t_"
                content="_t_Deriv is <0>regulated</0> by several entities including the Malta Financial Services Authority (MFSA), the Labuan Financial Services Authority (Labuan FSA), the Vanuatu Financial Services Commission (VFSC), and the British Virgin Islands Financial Services Commission._t_"
                content_components={[<LocalizedLink key={0} to="/regulatory/" />]}
            />
            <Col
                Icon={ClientProtection}
                title="_t_Client money protection_t_"
                content="_t_Deriv does not use your money for its business interests and you are allowed to withdraw your money at any time. All your money is segregated and held in secure financial institutions. In this way, in the unlikely event of Deriv becoming insolvent, all your money will be returned to you because it is never merged with ours._t_"
            />
            <Col
                Icon={Risk}
                title="_t_Risk awareness and management_t_"
                content="_t_Online trading is exciting but involves risks and can lead to an addiction. At Deriv, we look out for our customers’ best interests and encourage them to practise <0>secure and responsible trading</0>. If you are new to this, you can also practise trading with unlimited virtual funds before you risk your money._t_"
                content_components={[<LocalizedLink key={0} to="/responsible/" />]}
            />
            <Col
                Icon={Help}
                title="_t_Help when you need it_t_"
                content="_t_The Deriv support team is available via live chat 24/7 – even on weekends. You can also find answers at our <0>Help centre</0> and get help from fellow traders in <1>Community</1>._t_"
                content_components={[
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
            <Col
                Icon={CustomerFirst}
                title="_t_Customer-first trading experience_t_"
                content="_t_Deriv makes it easy for anyone to start trading, understand risk, and make better trading decisions. Our tools and platforms have clear and simple instructions and are intuitively easy to navigate. We also regularly provide market news, analysis, webinars, ebooks, video tutorials and help centre articles to help you stay informed and become a better trader._t_"
            />
            <Col
                Icon={Safety}
                title="_t_Your safety, our priority_t_"
                content="_t_At Deriv, we enforce best-in-class security measures such as SSL encryption to protect your account and personal data._t_"
            />
        </GridWrapper>
    </GridContainer>
)
