import React from 'react'
import styled from 'styled-components'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import FinancialCommission from './_financial_commission'
import useRegion from 'components/hooks/use-region'
import Layout from 'components/layout/layout'
import { Divider, Header, LinkText, Text } from 'components/elements'
import {
    CssGrid,
    CssGridColumn,
    Desktop,
    GridContainer,
    Mobile,
    SectionContainer,
    SEO,
    SmallContainer,
} from 'components/containers'
import { Localize, WithIntl } from 'components/localization'
// Icons
import EU from 'images/svg/regulatory/europe-map.svg'
import Vanuatu from 'images/common/regulatory/vanuatu.svg'
import VanuatuFMA from 'images/common/regulatory/vanuatu-fma.svg'
import FSC from 'images/common/regulatory/bvi.svg'
import Labuan from 'images/common/regulatory/labuan.svg'
import LabuanFintech from 'images/common/regulatory/labuan-fintech.svg'
import Deriv from 'images/common/regulatory/deriv.svg'
import TFC from 'images/common/regulatory/tfc.svg'
import SVG from 'images/svg/regulatory/svg.svg'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TGatsbyHead } from 'features/types'
import InitialLoader from 'components/elements/dot-loader'

type BoxProps = {
    padding?: string
    maxwidth?: string
}

type RegulatoryProps = {
    language: string
}

const Img = styled.img`
    display: flex;
    width: 16rem;
    height: 8rem;
`

const ImgFintech = styled.img`
    display: flex;
    width: 160px;
    height: 38.8px;
`

const StyledHeader = styled(Header)<{ maxwidth?: string }>`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;

    @media ${device.tabletS} {
        text-align: center;
        margin-bottom: 1.6rem;
    }
`

const MobileWrapper = styled(Mobile)`
    display: flex;
`

const DesktopWrapper = styled(Desktop)`
    display: flex;
`
const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.padding || '4rem 0 0'};
    max-width: ${(props) => props.maxwidth || '100%'};

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

const StyledLinkText = styled(LinkText)`
    font-weight: bold;
`

const Regulatory = (locale: RegulatoryProps) => {
    const { is_row, is_cpa_plan, is_region_loading } = useRegion()
    const { is_mobile } = useBreakpoints()

    return (
        <Layout>
            <SectionContainer>
                <GridContainer>
                    <ResponsiveHeader as="h1" type="display-title" align="center">
                        <Localize translate_text="_t_Regulatory information_t_" />
                    </ResponsiveHeader>
                    <StyledHeader
                        as="h5"
                        type="paragraph-1"
                        align="center"
                        weight="normal"
                        padding="1.6rem 0 2rem"
                        maxwidth="792px"
                    >
                        <Localize translate_text="_t_The services offered on Deriv.com are provided by Deriv Group. The Group has several subsidiary companies that are licensed to operate Deriv.com in their registered jurisdictions._t_" />
                    </StyledHeader>
                    <StyledHeader
                        as="h5"
                        type="paragraph-1"
                        align="center"
                        weight="normal"
                        maxwidth="792px"
                    >
                        <Localize translate_text="_t_Since 1999, the Group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements._t_" />
                    </StyledHeader>
                </GridContainer>
            </SectionContainer>
            {!is_region_loading ? (
                is_row || is_cpa_plan ? null : (
                    <>
                        <SectionContainer padding="8rem 0 0">
                            <SmallContainer fd="column">
                                <StyledHeader
                                    as="h2"
                                    type="section-title"
                                    align="center"
                                    mb="4rem"
                                    lh="4rem"
                                >
                                    <Localize translate_text="_t_Deriv Investments (Europe) Limited_t_" />
                                </StyledHeader>
                                <Box padding="16px 0" maxwidth="792px">
                                    <Header
                                        as="h3"
                                        type="paragraph-1"
                                        align="start"
                                        weight="normal"
                                    >
                                        <Localize
                                            translate_text="_t_Deriv Investments (Europe) Limited (Company No. C 70156), incorporated on the 22nd April 2015, is registered in Malta with its registered office located at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, Malta. Deriv Investments (Europe) Ltd is licensed in Malta and regulated by the Malta Financial Services Authority under the Investments Services Act <0>(view licence)</0> to provide investment services._t_"
                                            components={[
                                                <StyledLinkText
                                                    key={0}
                                                    target="_blank"
                                                    href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                                    rel="noopener noreferrer"
                                                />,
                                            ]}
                                        />
                                    </Header>
                                    <Header
                                        as="h3"
                                        type="paragraph-1"
                                        align="start"
                                        weight="normal"
                                        mt="2rem"
                                    >
                                        <Localize translate_text="_t_Clients in the European Union who wish to trade financial instruments can have accounts under Deriv Investments (Europe) Limited._t_" />
                                    </Header>
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
                                        <Europe src={EU} alt="Europe map" />
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
                                    <StyledHeader
                                        as="h5"
                                        type="paragraph-1"
                                        align="start"
                                        weight="normal"
                                        maxwidth="792px"
                                    >
                                        <Localize translate_text="_t_Deriv Investments (Europe) Limited is entitled to provide services in any other EU member state through EU passporting rights. Above is a list of the EU countries that have access to Deriv.com via EU passporting rights._t_" />
                                    </StyledHeader>
                                </Box>
                            </SmallContainer>
                        </SectionContainer>
                        <SectionContainer padding="0 0 4rem">
                            <SmallContainer fd="column" id="regulatory-list">
                                <DocumentAccordion locale={locale} />
                            </SmallContainer>
                        </SectionContainer>
                    </>
                )
            ) : (
                <InitialLoader />
            )}

            <SectionContainer padding="0 0 4rem" mt={is_mobile ? '0' : '8rem'}>
                <SmallContainer>
                    <CssGrid
                        height="auto"
                        columns="15.4rem 1fr"
                        column_gap="3.2rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr"
                    >
                        {is_row || is_cpa_plan ? (
                            <>
                                <ResponsiveGrid align="flex-start">
                                    <MobileWrapper>
                                        <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                            <Localize translate_text="_t_Deriv Investments (Europe) Limited_t_" />
                                        </StyledHeader>
                                    </MobileWrapper>
                                </ResponsiveGrid>
                                <CssGridColumn>
                                    <DesktopWrapper>
                                        <StyledHeader as="h2" type="sub-section-title">
                                            <Localize translate_text="_t_Deriv Investments (Europe) Limited_t_" />
                                        </StyledHeader>
                                    </DesktopWrapper>
                                    <Text mt="0.8rem" max_width="58.8rem">
                                        <Localize
                                            translate_text="_t_Deriv Investments (Europe) Limited (Company No. C 70156), incorporated on the 22nd April 2015, is registered in Malta with its registered office located at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, Malta. Deriv Investments (Europe) Ltd is licensed in Malta and regulated by the Malta Financial Services Authority under the Investments Services Act <0>(view licence)</0> to provide investment services._t_"
                                            components={[
                                                <StyledLinkText
                                                    key={0}
                                                    target="_blank"
                                                    href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                                    rel="noopener noreferrer"
                                                />,
                                            ]}
                                        />
                                    </Text>
                                </CssGridColumn>
                            </>
                        ) : null}

                        <ResponsiveGrid align="flex-start">
                            <MobileWrapper>
                                <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_Deriv (FX) Ltd_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <Img src={Labuan} alt="Labuan Financial Services Authority " />
                            <ImgFintech src={LabuanFintech} alt="Labuan Fintech Association " />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h2" type="sub-section-title">
                                    <Localize translate_text="_t_Deriv (FX) Ltd_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem" max_width="58.8rem">
                                <Localize
                                    translate_text="_t_Deriv (FX) Ltd (Company No. LL13394), incorporated on the 18th January 2017, is registered in the Federal Territory of Labuan (Malaysia) with its registered office located at Unit No. 3A-16, Level 3A, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Labuan, Malaysia. Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority <0>(view licence)</0> and is a member of the <1>Labuan Fintech Association</1>._t_"
                                    components={[
                                        <StyledLinkText
                                            key={0}
                                            target="_blank"
                                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <StyledLinkText
                                            key={1}
                                            target="_blank"
                                            href="https://www.labuanfintech.org/"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text mt="2rem" max_width="58.8rem">
                                <Localize translate_text="_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on forex and cryptocurrencies can have MT5 Financial STP accounts under Deriv (FX) Ltd._t_" />
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <MobileWrapper>
                                <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_Deriv (BVI) Ltd_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <Img
                                src={FSC}
                                alt="British Virgin Islands Financial Services Commission"
                            />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h2" type="sub-section-title">
                                    <Localize translate_text="_t_Deriv (BVI) Ltd_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                <Localize
                                    translate_text="_t_Deriv (BVI) Limited (Company No. 1841206), incorporated on the 15th September 2014, is registered in the British Virgin Islands with its registered office located at Kingston Chambers, P.O. Box 173, Road Town, Tortola British Virgin Islands. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission <0>(view licence)</0>._t_"
                                    components={[
                                        <StyledLinkText
                                            key={0}
                                            target="_blank"
                                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text max_width="58.8rem">
                                <Localize translate_text="_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 accounts under Deriv (BVI) Ltd._t_" />
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <MobileWrapper>
                                <StyledHeader as="h4" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_Deriv (V) Ltd_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <Img src={Vanuatu} alt="Vanuata Financial Services Commission" />
                            <Img
                                src={VanuatuFMA}
                                alt="Vanuatu Financial Markets Association"
                                style={{ marginTop: '8px' }}
                            />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h4" type="sub-section-title">
                                    <Localize translate_text="_t_Deriv (V) Ltd_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                <Localize
                                    translate_text="_t_Deriv (V) Ltd (Company No. 014556), incorporated on the 17th February 2016, is registered in the Republic of Vanuatu with its registered office located at 1276, Govant Building, Kumul Highway, Port Vila, Republic of Vanuatu. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission <0>(view licence)</0> and is a member of the <1>Financial Markets Association</1>._t_"
                                    components={[
                                        <StyledLinkText
                                            key={0}
                                            target="_blank"
                                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <StyledLinkText
                                            key={1}
                                            target="_blank"
                                            href="/regulatory/Financial_Markets_Association_Cert.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text max_width="58.8rem">
                                <Localize translate_text="_t_Clients in the rest of the world (except for certain countries such as the USA, Canada, and Hong Kong) who wish to trade CFDs on financial instruments (via MT5 Financial accounts) and derived indices (via MT5 Derived accounts) can have Deriv MT5 and Deriv X accounts under Deriv (V) Ltd._t_" />
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <MobileWrapper>
                                <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_Deriv (SVG) LLC_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <img src={SVG} alt="Deriv SVG" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h2" type="sub-section-title">
                                    <Localize translate_text="_t_Deriv (SVG) LLC_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem" mb="1.6rem" max_width="58.8rem">
                                <Localize translate_text="_t_Deriv (SVG) LLC (Company No. 273 LLC 2020), incorporated on the 12th February 2019, is registered in Saint Vincent and the Grenadines with its registered office located at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
                            </Text>
                            <Text max_width="58.8rem">
                                <Localize translate_text="_t_Clients in the rest of the world (except for restricted countries such as the USA, Canada, and Hong Kong) can have accounts under Deriv (SVG) LLC._t_" />
                            </Text>
                        </CssGridColumn>

                        <ResponsiveGrid align="flex-start">
                            <MobileWrapper>
                                <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_Deriv.com Limited_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <Img src={Deriv} alt="Deriv Limited" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h2" type="sub-section-title">
                                    <Localize translate_text="_t_Deriv.com Limited_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem">
                                <Localize translate_text="_t_Deriv.com Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_" />
                            </Text>
                        </CssGridColumn>
                    </CssGrid>
                </SmallContainer>
            </SectionContainer>
            <Divider />

            <SectionContainer padding="0 0 4rem" mt="4rem">
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
                            <MobileWrapper>
                                <StyledHeader as="h2" type="sub-section-title" mb="1.6rem">
                                    <Localize translate_text="_t_The Financial Commission_t_" />
                                </StyledHeader>
                            </MobileWrapper>
                            <Img src={TFC} alt="The Financial Commission" />
                        </ResponsiveGrid>
                        <CssGridColumn>
                            <DesktopWrapper>
                                <StyledHeader as="h2" type="sub-section-title">
                                    <Localize translate_text="_t_The Financial Commission_t_" />
                                </StyledHeader>
                            </DesktopWrapper>
                            <Text mt="0.8rem">
                                <Localize
                                    translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                                    components={[
                                        <StyledLinkText
                                            key={0}
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

export default WithIntl()(Regulatory)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Licence and regulatory information | Deriv_t_"
        description="_t_Deriv operates and offers its products and services under the Deriv Group, which has several subsidiary companies licensed in their respective jurisdictions._t_"
        pageContext={pageContext}
    />
)
