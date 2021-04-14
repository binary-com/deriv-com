import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import FinancialCommission from './_financial_commission'
import Layout from 'components/layout/layout'
import { Header, Text, LinkText, Divider } from 'components/elements'
import {
    SEO,
    SectionContainer,
    GridContainer,
    CssGrid,
    CssGridColumn,
    SmallContainer,
    Show,
} from 'components/containers'
import { localize, WithIntl, Localize, LocalizedLink } from 'components/localization'
// Icons
import EU from 'images/svg/europe-map.svg'
import Vanuatu from 'images/common/regulatory/vanuatu.png'
import VanuatuFMA from 'images/common/regulatory/vanuatu-fma.png'
import FSC from 'images/common/regulatory/bvi.png'
import Labuan from 'images/common/regulatory/labuan.png'
import Deriv from 'images/common/regulatory/deriv.png'
import TFC from 'images/common/regulatory/tfc.png'
import MGA from 'images/common/regulatory/mga.png'
import IOM from 'images/common/regulatory/iom.png'
import SVG from 'images/svg/regulatory/svg.svg'
import device from 'themes/device.js'

const Img = styled.img`
    display: flex;
    width: 16rem;
    height: 8rem;
`

const StyledHeader = styled(Header)`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;

    @media ${device.tabletS} {
        text-align: center;
        margin-bottom: 1.6rem;
    }
`

const Mobile = styled(Show.Mobile)`
    display: flex;
`

const Desktop = styled(Show.Desktop)`
    display: flex;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.padding || '4rem 0 0'};

    ${Text} {
        @media ${device.tabletS} {
            text-align: center;
        }
    }

    @media ${device.tabletS} {
        text-align: center;
    }
`
const Europe = styled.img`
    max-width: 69rem;
    max-height: 63rem;
    width: 100%;
    height: 100%;
    margin: 0;
`
const ResponsiveGrid = styled(CssGridColumn)`
    @media ${device.tabletL} {
        justify-self: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const ExternalBoldLink = styled(LocalizedLink)`
    font-weight: bold;
    color: ${(props) => (props.color ? `var(--color-${props.color})` : '')};
    text-decoration: none;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`

const Content = styled.div`
    display: contents;
`
const Regulatory = (locale) => {
    return (
        <Layout>
            <SEO
                title={localize('License and regulation information | Deriv')}
                description={localize(
                    'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
                )}
            />
            <SectionContainer>
                <GridContainer>
                    <ResponsiveHeader as="h1" type="display-title" align="center">
                        {localize('Regulatory information')}
                    </ResponsiveHeader>
                    <StyledHeader
                        as="h5"
                        type="main-paragraph"
                        align="center"
                        weight="normal"
                        padding="1.6rem 0 2rem"
                    >
                        {localize(
                            'The services offered on Deriv.com and Binary.com are provided by the Deriv Group. The group has several subsidiary companies that are licensed to operate Deriv.com and Binary.com in their registered jurisdictions.',
                        )}
                    </StyledHeader>
                    <StyledHeader as="h5" type="main-paragraph" align="center" weight="normal">
                        {localize(
                            'Since 1999, the group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements.',
                        )}
                    </StyledHeader>
                </GridContainer>
            </SectionContainer>
            <Divider />
            <SectionContainer padding="8rem 0 0">
                <SmallContainer fd="column">
                    <StyledHeader as="h3" type="section-title" align="center" mb="4rem" lh="4rem">
                        {localize('Deriv Investments (Europe) Limited')}
                    </StyledHeader>
                    <Box>
                        <Text>
                            <Localize
                                translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed in Malta (<0>licence no. IS/70156</0>) and authorised by the Malta Financial Services Authority under the Investments Services Act to provide investment services in the European Union."
                                components={[
                                    <LinkText
                                        key={0}
                                        weight="bold"
                                        target="_blank"
                                        href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text mt="2rem">
                            {localize(
                                'It is also authorised and subject to limited regulation by the Financial Conduct Authority in the UK. Details about the extent of our authorisation and regulation by the Financial Conduct Authority are available from us on request.',
                            )}
                        </Text>
                        <Text mt="2rem">
                            {localize(
                                'Clients in the European Union who wish to trade investment products can have accounts under Deriv Investments (Europe) Limited.',
                            )}
                        </Text>
                    </Box>
                </SmallContainer>
            </SectionContainer>
            <SectionContainer padding="2.4rem 0 0">
                <GridContainer>
                    <CssGrid
                        columns="minmax(10rem, 69rem) minmax(45rem, 1fr)"
                        column_gap="2.4rem"
                        tablet_columns="1fr 1fr"
                        mobile_columns="1fr"
                        mobile_row_gap="2rem"
                    >
                        <CssGridColumn>
                            <Europe src={EU} alt="europe" />
                        </CssGridColumn>
                        <CssGridColumn padding="0.8rem 0 0">
                            <EUgrid />
                        </CssGridColumn>
                    </CssGrid>
                </GridContainer>
            </SectionContainer>
            <SectionContainer padding="2.4rem 0 0">
                <SmallContainer fd="column">
                    <Box padding="0 0 4rem">
                        <Text lh="1.55" max_width="79.2rem">
                            {localize(
                                'Deriv Investments (Europe) Limited is entitled to provide services in another EU Member State through EU passporting rights. Above is a list of EU countries that have access to Deriv.com via EU passporting rights.',
                            )}
                        </Text>
                    </Box>
                </SmallContainer>
            </SectionContainer>
            <SectionContainer padding="0 0 4rem">
                <SmallContainer fd="column">
                    <DocumentAccordion locale={locale} />
                </SmallContainer>
            </SectionContainer>
            <SectionContainer padding="0 0 4rem">
                <SmallContainer>
                    <CssGrid
                        height="auto"
                        columns="15.4rem 1fr"
                        column_gap="3.2rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr"
                    >
                        <Content>
                            <ResponsiveGrid align="flex-start">
                                <Mobile>
                                    <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                        {localize('Deriv (Europe) Limited')}
                                    </StyledHeader>
                                </Mobile>
                                <Img src={MGA} alt="MGA" />
                            </ResponsiveGrid>
                            <CssGridColumn>
                                <Desktop>
                                    <StyledHeader as="h4" type="sub-section-title">
                                        {localize('Deriv (Europe) Limited')}
                                    </StyledHeader>
                                </Desktop>
                                <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                    <Localize
                                        translate_text="Deriv (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed and regulated for synthetic indices by the Malta Gaming Authority (<0>licence no. MGA/B2C/102/2000</0>), by the Gambling Commission for clients in Great Britain under <1>account no. 39495</1>, and by the Revenue Commissioners for clients in Ireland (licence no. 1010285)."
                                        components={[
                                            <LinkText
                                                key={0}
                                                weight="bold"
                                                target="_blank"
                                                href="/regulatory/Deriv_(Europe)_Limited.pdf"
                                                rel="noopener noreferrer"
                                            />,
                                            <ExternalBoldLink
                                                external="true"
                                                key={1}
                                                weight="bold"
                                                color="black-3"
                                                target="_blank"
                                                to="https://beta.gamblingcommission.gov.uk/public-register/business/detail/39495"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text max_width="58.8rem">
                                    {localize(
                                        'Clients in the European Union who wish to trade gambling products can have accounts under Deriv (Europe) Limited.',
                                    )}
                                </Text>
                            </CssGridColumn>
                            <ResponsiveGrid align="flex-start">
                                <Mobile>
                                    <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                        {localize('Deriv (MX) Ltd')}
                                    </StyledHeader>
                                </Mobile>
                                <Img src={IOM} alt="Isle Of Man" />
                            </ResponsiveGrid>
                            <CssGridColumn>
                                <Desktop>
                                    <StyledHeader as="h4" type="sub-section-title">
                                        {localize('Deriv (MX) Ltd')}
                                    </StyledHeader>
                                </Desktop>
                                <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                    <Localize
                                        translate_text="Deriv (MX) Ltd, Millennium House, Level 1, Victoria Road, Douglas IM2 4RW, Isle of Man, is licensed and regulated in Great Britain by the Gambling Commission under <1>account no. 39172</1> and by the Gambling Supervision Commission in the Isle of Man (<0>view licence</0>)."
                                        components={[
                                            <LinkText
                                                key={0}
                                                weight="bold"
                                                target="_blank"
                                                href="/regulatory/Deriv_(MX)_Ltd.pdf"
                                                rel="noopener noreferrer"
                                            />,
                                            <ExternalBoldLink
                                                external="true"
                                                key={1}
                                                weight="bold"
                                                color="black-3"
                                                target="_blank"
                                                to="https://beta.gamblingcommission.gov.uk/public-register/business/detail/39172"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </Text>
                                <Text max_width="58.8rem">
                                    {localize(
                                        'Clients in the Isle of Man and the UK who wish to trade gambling products can have accounts under Deriv (MX) Ltd.',
                                    )}
                                </Text>
                            </CssGridColumn>
                        </Content>

                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('Deriv (FX) Ltd')}
                                </StyledHeader>
                            </Mobile>
                            <Img src={Labuan} alt="Labuan" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('Deriv (FX) Ltd')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem" max_width="58.8rem">
                                <Localize
                                    translate_text="Deriv (FX) Ltd, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, Labuan 87000, Malaysia, is licensed by Labuan Financial Services Authority (<0>licence no. MB/18/0024</0>)."
                                    components={[
                                        <LinkText
                                            key={0}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text mt="2rem" max_width="58.8rem">
                                {localize(
                                    'Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on forex and cryptocurrencies can have DMT5 Financial STP accounts under Deriv (FX) Ltd.',
                                )}
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('Deriv (BVI) Ltd')}
                                </StyledHeader>
                            </Mobile>
                            <Img src={FSC} alt="FSC" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('Deriv (BVI) Ltd')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                <Localize
                                    translate_text="Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, is licensed by the British Virgin Islands Financial Services Commission (<0>licence no. SIBA/L/18/1114</0>)."
                                    components={[
                                        <LinkText
                                            key={0}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text max_width="58.8rem">
                                {localize(
                                    'Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments and cryptocurrencies can have DMT5 Financial STP accounts under Deriv (BVI) Ltd.',
                                )}
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('Deriv (V) Ltd and Champion Group Ltd')}
                                </StyledHeader>
                            </Mobile>
                            <Img src={Vanuatu} alt="Vanuatu" />
                            <Img
                                src={VanuatuFMA}
                                alt="Vanuatu Financial Markets Association"
                                style={{ marginTop: '8px' }}
                            />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('Deriv (V) Ltd and Champion Group Ltd')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                <Localize
                                    translate_text="Deriv (V) Ltd (<0>view licence</0>) and Champion Group Ltd (<1>view licence</1>), 1276, Kumul Highway, Port Vila, Vanuatu are licensed by Vanuatu Financial Services Commission, and are members of the <2>Financial Markets Association<2/>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <LinkText
                                            key={1}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Champion_Group_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <LinkText
                                            key={2}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text max_width="58.8rem">
                                {localize(
                                    'Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments can have DMT5 Financial accounts and Deriv X Financial accounts under Deriv (V) Ltd and Champion Group Ltd. These companies do not offer CFDs on cryptocurrencies.',
                                )}
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('Deriv (SVG) LLC')}
                                </StyledHeader>
                            </Mobile>
                            <img src={SVG} alt="svg" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('Deriv (SVG) LLC')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                {localize(
                                    'Deriv (SVG) LLC is located in Hinds Buildings, Kingstown, St. Vincent and the Grenadines (company no. 273 LLC 2020).',
                                )}
                            </Text>
                            <Text max_width="58.8rem">
                                {localize(
                                    'Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) can have accounts under Deriv (SVG) LLC.',
                                )}
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('Deriv Limited')}
                                </StyledHeader>
                            </Mobile>
                            <Img src={Deriv} alt="Deriv" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('Deriv Limited')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem">
                                {localize(
                                    'Deriv Limited, 47 Esplanade, St Helier, Jersey JE1 0BD, Channel Islands, is the holding company for the above subsidiaries.',
                                )}
                            </Text>
                        </CssGridColumn>
                    </CssGrid>
                </SmallContainer>
            </SectionContainer>
            <Divider />
            <SectionContainer padding="4rem 0 8rem">
                <SmallContainer>
                    <CssGrid
                        height="auto"
                        columns="15.4rem 1fr"
                        column_gap="3.2rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr"
                    >
                        <ResponsiveGrid align="flex-start">
                            <Mobile>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    {localize('The Financial Commission')}
                                </StyledHeader>
                            </Mobile>
                            <Img src={TFC} alt="TFC" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <Desktop>
                                <StyledHeader as="h4" type="sub-section-title">
                                    {localize('The Financial Commission')}
                                </StyledHeader>
                            </Desktop>
                            <Text mt="0.8rem" max_width="58.8rem">
                                <Localize
                                    translate_text="We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)."
                                    components={[
                                        <LinkText
                                            key={0}
                                            weight="bold"
                                            target="_blank"
                                            href="/regulatory/Deriv_Ltd_membership.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <FinancialCommission />
                        </CssGridColumn>
                    </CssGrid>
                </SmallContainer>
            </SectionContainer>
        </Layout>
    )
}

Regulatory.propTypes = {
    locale: PropTypes.object,
}

export default WithIntl()(Regulatory)
