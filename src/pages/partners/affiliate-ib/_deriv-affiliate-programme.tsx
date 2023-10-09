import React from 'react'
import styled from 'styled-components'
import RevenueShareCard from './_revenue-share-card'
import TurnoverCard from './_turnover-card'
import CpaEuOnlyCard from './_cpa-eu-only-card'
import { CardWrapper } from './_partner-card'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/constants'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

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
    const { is_eu } = useRegion()
    return (
        <StyledSection>
            <ContentContainer direction="column">
                <TitleWrapper>
                    <Header size="4.8rem" align="center" as="h2" mb="1.2rem">
                        <Localize translate_text="_t_Deriv Affiliate Programme_t_" />
                    </Header>
                    <SubtitleHeader as="p" type="sub-section-title" align="center" weight="normal">
                        {is_eu ? (
                            <Localize translate_text="_t_Partner with us as an affiliate. Earn commission from your referred client’s deposits._t_" />
                        ) : (
                            <Localize translate_text="_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on Deriv Trader and Deriv Bot._t_" />
                        )}
                    </SubtitleHeader>
                </TitleWrapper>
                <ComissionPlanContainer>
                    {!is_eu && (
                        <StyledHeader as="h3" type="main-paragraph">
                            <Localize translate_text="_t_Choose a commission plan:_t_" />
                        </StyledHeader>
                    )}
                    <CardWrapper>
                        {!is_eu && (
                            <>
                                <RevenueShareCard />
                                <TurnoverCard />
                            </>
                        )}
                        <CpaEuOnlyCard />
                    </CardWrapper>
                    <StyledSignupBtnWrap>
                        <ApplyNow
                            secondary
                            to={affiliate_signup_url}
                            external
                            target="_blank"
                            type="affiliate_sign_up"
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
