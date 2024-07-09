import React, { useMemo } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize, localize } from 'components/localization'
import StepperView from 'components/custom/_stepper_view'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'
import { LinkButton } from 'components/form'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { QueryImage } from 'components/elements'
import useBuildVariant from 'features/hooks/use-build-variant'
import { dtrader_url } from 'common/constants'
import { getLanguage } from 'common/utility'

const query = graphql`
    query {
        step_1: file(relativePath: { eq: "dtrader/step_image_1.png" }) {
            ...fadeIn
        }
        step_2: file(relativePath: { eq: "dtrader/step_image_2.png" }) {
            ...fadeIn
        }
        step_3: file(relativePath: { eq: "dtrader/step_image_3.png" }) {
            ...fadeIn
        }
        step_1_eu: file(relativePath: { eq: "dtrader/step_image_1_eu.png" }) {
            ...fadeIn
        }
        step_2_eu: file(relativePath: { eq: "dtrader/step_image_2_eu.png" }) {
            ...fadeIn
        }
        step_3_eu: file(relativePath: { eq: "dtrader/step_image_3_eu.png" }) {
            ...fadeIn
        }
    }
`

const StyledSection = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-block-start: 5rem;
        padding-block-end: 1.7rem;
    }
`
const GoToLiveDemo = styled(LinkButton)`
    border: 2px solid var(--color-red);
    font-weight: bold;
    line-height: 1.43;
    width: fit-content;
    border-radius: 16px;
    display: inline-block;

    @media ${device.tabletL} {
        max-width: 100%;
        font-size: 1.75rem;
    }
`
const GotoLiveWrapper = styled.div`
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin: 4rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const DtraderEasySteps = () => {
    const { region } = useBuildVariant()
    const { is_mobile_or_tablet } = useBreakpoints()

    const data = useStaticQuery(query)

    const stepsData: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => '_t_Select an asset_t_',
                image: () => (
                    <QueryImage
                        data={data[region === "row" ? 'step_1' : 'step_1_eu']}
                        alt={localize('_t_Select an asset_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Monitor the chart_t_',
                image: () => (
                    <QueryImage
                        data={data[region === "row" ? 'step_2' : 'step_2_eu']}
                        alt={localize('_t_Monitor the chart_t_')}
                    />
                ),
            },
            {
                title: () => '_t_Place a trade_t_',
                image: () => (
                    <QueryImage
                        data={data[region === "row" ? 'step_3' : 'step_3_eu']}
                        alt={localize('_t_Place a trade_t_')}
                    />
                ),
            },
        ],
        [data, region],
    )

    return (
        <StyledSection>
            <Container justify="center" direction="column" ai="flex-start">
                <CommonHeaderSection
                    title="_t_How it works_t_"
                    subtitle="_t_Make a trade in 3 easy steps_t_"
                    title_font_size={is_mobile_or_tablet ? '18px' : '24px'}
                    subtitle_font_size={is_mobile_or_tablet ? '28px' : '48px'}
                    bgcolor="white"
                    margin_subtitle="1.5rem 0 3rem 0"
                    align_title="center"
                    align_subtitle="center"
                    width="100%"
                    font_weight_subtitle="bold"
                    font_family_title="Ubuntu"
                    font_family_subtitle="Ubuntu"
                />
                <StepperView
                    items={stepsData}
                    renderFooter={() => (
                        <GotoLiveWrapper>
                            <GoToLiveDemo
                               secondary
                               external
                               to={`https://app.deriv.com/dtrader?lang=${getLanguage()}`}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <Localize translate_text="_t_Go to live demo_t_" />
                            </GoToLiveDemo>
                        </GotoLiveWrapper>
                    )}
                />
            </Container>
        </StyledSection>
    )
}

export default DtraderEasySteps
