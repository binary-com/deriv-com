import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import derivTraderLogo from '../../images/common/dtrader/dtrader.svg'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { Container, SectionContainer } from 'components/containers'
import Button from 'components/custom/_button'
import CommonHeaderSection from 'components/elements/common-header-section'

const HeadingWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
`
const ShapeWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
`

const DtraderGetApp = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()

    return (
        <SectionContainer background="#4C515C">
            <Container justify="center" direction="column" ai="flex-start">
                <HeadingWrapper>
                    <img src={derivTraderLogo} alt="dtrader logo" />
                    <CommonHeaderSection
                        title="_t_Get into the Deriv Trader experience_t_"
                        title_font_size="64px"
                        align_title="left"
                        width="100%"
                        font_weight_title="300"
                        font_family_title="Ubantu"
                    />
                </HeadingWrapper>
                <ShapeWrapper>wefg</ShapeWrapper>
            </Container>
        </SectionContainer>
    )
}

export default DtraderGetApp
