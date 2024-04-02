import React, { useEffect, useState } from 'react'
import {
    DesktopWrapper,
    MobileWrapper,
    ResponsiveGrid,
    StyledHeader,
    StyledLinkText,
} from './_style'
import { Localize } from 'components/localization'
import { CssGridColumn } from 'components/containers'
import { Text } from 'components/elements'
import useBuildVariant from 'features/hooks/use-build-variant'
import useRegion from 'components/hooks/use-region'

const InfoRowCpa = () => {
    const {region} = useBuildVariant()
    const { is_cpa_plan } = useRegion()
    const [is_row_cpa, setIsRowCpa] = useState(true)

    useEffect(() => {
        if (region === "row" || is_cpa_plan) {
            setIsRowCpa(false)
        } else {
            setIsRowCpa(true)
        }
    }, [region, is_cpa_plan])

    if(is_row_cpa) return null;
    
    return (
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
    )
}

export default InfoRowCpa
