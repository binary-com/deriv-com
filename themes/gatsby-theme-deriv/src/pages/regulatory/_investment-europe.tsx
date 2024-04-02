import React, { useEffect, useState } from 'react'
import EUgrid from './_eu-grid'
import DocumentAccordion from './_document_accordion'
import { Box, Europe, StyledHeader, StyledLinkText } from './_style'
import { Header } from 'components/elements'
import {
    CssGrid,
    CssGridColumn,
    GridContainer,
    SectionContainer,
    SmallContainer,
} from 'components/containers'
import { Localize } from 'components/localization'
// Icons
import EU from 'images/svg/regulatory/europe-map.svg'
import useBuildVariant from 'features/hooks/use-build-variant'
import useRegion from 'components/hooks/use-region'
import InitialLoader from 'components/elements/dot-loader'

const InvestmentEurope = ({ language }: { language: string }) => {
    const {region} = useBuildVariant()
    const { is_cpa_plan, is_region_loading } = useRegion()
    const [is_row_cpa, setIsRowCpa] = useState(true)

    useEffect(() => {
        if (region === "row" || is_cpa_plan) {
            setIsRowCpa(false)
        } else {
            setIsRowCpa(true)
        }
    }, [region, is_cpa_plan])

    if(is_region_loading) <InitialLoader/>

    if(!is_row_cpa) return null;

    return (
        <>
            <SectionContainer padding="8rem 0 0">
                <SmallContainer fd="column">
                    <StyledHeader as="h2" type="section-title" align="center" mb="4rem" lh="4rem">
                        <Localize translate_text="_t_Deriv Investments (Europe) Limited_t_" />
                    </StyledHeader>
                    <Box padding="16px 0" maxwidth="792px">
                        <Header as="h3" type="paragraph-1" align="start" weight="normal">
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
                        <Header as="h3" type="paragraph-1" align="start" weight="normal" mt="2rem">
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
                    <DocumentAccordion language={language} />
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default InvestmentEurope
