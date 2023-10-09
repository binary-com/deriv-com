import React from 'react'
import styled from 'styled-components'
import RevenueShare from './_revenue-share'
import Turnover from './_turnover'
import CpaEuOnlyCard from './_cpa-eu-only-card'
import { Card, CardWrapper } from './_partner-card'
import { Table, TRAP, TRAPREVERSE, TC } from './_table'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { Localize } from 'components/localization'
import { LinkButton, Button } from 'components/form'
import { affiliate_signup_url } from 'common/constants'
import device from 'themes/device'
import { TString } from 'types/generics'
import useRegion from 'components/hooks/use-region'
import { Li, Ul } from 'components/elements'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

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

const StyledText = styled(Text)`
    font-size: 1.4rem;
    line-height: 1.5;
    text-align: center;
    @media ${device.tabletL} {
        font-size: 14px;
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

const CPAContent = styled.div`
    ${Text} {
        margin-top: 2.4rem;
    }
`

const StyledCard = styled(Card)`
    min-width: calc((100% - 4.8rem) / 3);
    width: calc((100% - 4.8rem) / 3);
    border-radius: 8px;

    :nth-child(2) {
        margin: 1.6rem 2.8rem 0 2rem;

        @media ${device.tabletL} {
            margin: 20px 0 11px;
        }
    }

    @media (max-width: 1313px) {
        min-height: 63rem;
    }

    @media ${device.laptopM} {
        min-width: 38.4rem;
        width: 38.4rem;
    }

    @media ${device.tabletL} {
        min-width: unset;
        padding: 24px 16px;
        min-height: auto;
        ${(props) => props.tabletHeight && 'height:' + props.tabletHeight};

        :first-child {
            margin-top: 16px;
        }
        :last-child {
            margin-top: 0;
        }
    }

    @media ${device.mobileM} {
        min-width: unset;
        width: 100%;
    }
`
const StyledTrap = styled(TRAP)`
    background-color: var(--color-grey-39);
    padding: 1rem 0.8rem;
    height: 40px;
    border-bottom: none;
`

const StyledSignupBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

const StyledCalculatedButton = styled(Button)`
    display: block;
    width: 100%;
    border-radius: 4px;
    margin-block-start: 24px;
    padding-block: 7px;

    @media ${device.tabletL} {
        height: 40px;
        margin-top: 40px;
    }
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
                                <RevenueShare />
                                <Turnover />
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
