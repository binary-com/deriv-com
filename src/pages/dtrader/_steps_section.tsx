import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import StepperView from 'components/custom/_stepper_view'
import device, { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { Container, SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'
import { LinkButton } from 'components/form'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { QueryImage } from 'components/elements'

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
const GoToLiveDemo = styled(LinkButton)`
    border: 2px solid var(--color-red);
    font-weight: bold;
    line-height: 1.43;
    width: fit-content;
    border-radius: 16px;

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
    const [is_mobile, setMobile] = useState(false)
    const { is_row } = useRegion()
    const { is_mobile_or_tablet } = useBreakpoints()

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    const data = useStaticQuery(query)

    const stepsData: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () => <Localize translate_text="Select an asset" />,
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'step_1' : 'step_1_eu']}
                        alt={<Localize translate_text="Select an asset" />}
                    />
                ),
            },
            {
                title: () => <Localize translate_text="Monitor the chart" />,
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'step_2' : 'step_2_eu']}
                        alt={<Localize translate_text="Monitor the chart" />}
                    />
                ),
            },
            {
                title: () => <Localize translate_text="Place a trade" />,
                image: () => (
                    <QueryImage
                        data={data[is_mobile_or_tablet ? 'step_3' : 'step_3_eu']}
                        alt={<Localize translate_text="Place a trade" />}
                    />
                ),
            },
        ],
        [data, is_mobile],
    )
    return (
        <SectionContainer>
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
                    font_weight_title="300"
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
                                type="deriv_app"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                {localize('Go to live demo')}
                            </GoToLiveDemo>
                        </GotoLiveWrapper>
                    )}
                />
            </Container>
        </SectionContainer>
    )
}

export default DtraderEasySteps
