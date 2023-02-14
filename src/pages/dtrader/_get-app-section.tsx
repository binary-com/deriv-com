import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import derivTraderLogo from '../../images/common/dtrader/dtrader.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { Container, SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'

const SectionContainerGetApp = styled.div`
    min-height: 400px;
    display: flex;
    align-items: center;
    background-color: #4c515c;
    position: relative;

    &::after {
        content: '';
        background: url(${GrayAngle30});
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 445px;
        background-repeat: no-repeat;
        z-index: ;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
    z-index: 2;
`
const DownloadAppsWrapper = styled.div`
    display: flex;
    flex: 1;
`
const DtraderGetApp = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()

    return (
        <SectionContainerGetApp>
            <Container justify="center" ai="flex-start">
                <ContentWrapper>
                    <img src={derivTraderLogo} alt="dtrader logo" />
                    <CommonHeaderSection
                        title="_t_Get into the Deriv Trader experience_t_"
                        title_font_size="64px"
                        align_title="left"
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                    />
                </ContentWrapper>
            </Container>
        </SectionContainerGetApp>
    )
}

export default DtraderGetApp
