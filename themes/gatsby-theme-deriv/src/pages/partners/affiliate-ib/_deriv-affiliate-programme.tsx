import React from 'react'
import styled from 'styled-components'
import RevenueShareCard from './revenue-share/_index'
import TurnoverCard from './turnover/_index'
import CpaEuForRow from './cpa-eu-for-row/_index'
import MasterAffilateCard from './master-affiliate/_index'
import CpaEuCard from './cpa-eu/_index'
import { StyledCardWrapper } from './_style'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import device from 'themes/device'
import useBuildVariant from 'features/hooks/use-build-variant'

type ApplyNowProps = {
    mt_mobile?: string
    id?: string
}
const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
    background-color: var(--color-grey-39);
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const ContentContainer = styled(Container)`
    @media ${device.tabletL} {
        padding: 0 16px;
        width: 100%;
    }
`

const TitleWrapper = styled.section`
    max-width: 99.6rem;

    h1:first-child {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        ${Header} {
            font-size: 24px;
        }
    }
`

const SubtitleHeader = styled(Header)`
    width: 792px;
    max-width: 792px;
    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        font-size: 16px !important;
    }
`

const ComissionPlanContainer = styled(SectionContainer)`
    padding: 4rem 0 8rem 0;
    @media ${device.tabletL} {
        padding: 16px 0 0 0;
    }
    @media ${device.mobileM} {
        width: unset;
    }
`

const StyledHeader = styled(Header)`
    @media (max-width: 1524px) {
        text-align: start;
    }
    @media ${device.laptopM} {
        text-align: center;
    }
    @media ${device.mobileM} {
        text-align: center;
        inline-size: 38rem;
    }
`

const ApplyNow = styled(LinkButton)<ApplyNowProps>`
    display: block;
    width: 100%;
    border-radius: 4px;
    margin-block-start: 40px;
    max-inline-size: 336px;

    @media ${device.tabletL} {
        height: 40px;
        margin-top: ${(props) => props.mt_mobile || '0'};
    }
`

const StyledSignupBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

const DerivAffiliateProgramme = () => {
    const { region } = useBuildVariant()
    const { affiliate_signup_link } = useAffiliateSignupLink()

    return (
        <StyledSection id="deriv-affiliate">
            <ContentContainer direction="column">
                <TitleWrapper>
                    <Header size="4.8rem" align="center" as="h2" mb="1.2rem">
                        <Localize translate_text="_t_Deriv Affiliate Programme_t_" />
                    </Header>
                    <SubtitleHeader as="p" type="sub-section-title" align="center" weight="normal">
                        {region === "eu" ? (
                            <Localize translate_text="_t_Partner with us as an affiliate. Earn commission from your referred client’s deposits._t_" />
                        ) : (
                            <Localize translate_text="_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on Deriv Trader, Deriv Bot, and SmartTrader._t_" />
                        )}
                    </SubtitleHeader>
                </TitleWrapper>
                <ComissionPlanContainer>
                    {region !== "eu" && (
                        <StyledHeader as="h3" type="main-paragraph">
                            <Localize translate_text="_t_Choose a commission plan:_t_" />
                        </StyledHeader>
                    )}
                    <StyledCardWrapper>
                        {region !== "eu" && (
                            <>
                                <RevenueShareCard />
                                <TurnoverCard />
                                <CpaEuForRow />
                                <MasterAffilateCard />
                            </>
                        )}
                        {region === "eu" && <CpaEuCard />}
                    </StyledCardWrapper>
                    <StyledSignupBtnWrap>
                        <ApplyNow
                            secondary
                            to={affiliate_signup_link}
                            external
                            target="_blank"
                            // type="affiliate_sign_up"
                            mt_mobile="32px"
                        >
                            <Localize translate_text="_t_Sign up_t_" />
                        </ApplyNow>
                    </StyledSignupBtnWrap>
                </ComissionPlanContainer>
            </ContentContainer>
        </StyledSection>
    )
}

export default DerivAffiliateProgramme
