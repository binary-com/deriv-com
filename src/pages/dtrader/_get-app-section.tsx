import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import derivTraderLogo from '../../images/common/dtrader/dtrader.svg'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { Container, SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'
import Shape from 'components/custom/_hero-shape'

const SectionContainerGetApp = styled.div`
    min-height: 400px;
    display: flex;
    align-items: center;
    background-color: #4c515c;
`
const HeadingWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
`
const ShapeWrapper = styled.div`
    display: flex;
    gap: 28px;
`

const DtraderGetApp = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()

    return (
        <SectionContainerGetApp>
            <Container justify="center" ai="flex-start">
                <HeadingWrapper>
                    <img src={derivTraderLogo} alt="dtrader logo" />
                    <CommonHeaderSection
                        title="_t_Get into the Deriv Trader experience_t_"
                        title_font_size="64px"
                        align_title="left"
                        width="100%"
                        font_weight_title="300"
                        font_family_title="Ubuntu"
                        color="#fff"
                    />
                </HeadingWrapper>
                <Shape angle={is_mobile ? 101 : 193}>wefg</Shape>
            </Container>
        </SectionContainerGetApp>
    )
}

export default DtraderGetApp
