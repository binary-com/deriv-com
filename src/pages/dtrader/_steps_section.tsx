import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import StepperView from 'components/custom/_stepper_view'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { Container, SectionContainer } from 'components/containers'
import Button from 'components/custom/_button'
import CommonHeaderSection from 'components/elements/common-header-section'

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

const DtraderEasySteps = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()

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
                title: 'Select an asset',
                image: data[is_row ? 'step_1' : 'step_1_eu'],
                alt: <Localize translate_text="Select an asset" />,
            },
            {
                title: 'Monitor the chart',
                image: data[is_row ? 'step_2' : 'step_2_eu'],
                alt: <Localize translate_text="Monitor the chart" />,
            },
            {
                title: 'Place a trade',
                image: data[is_row ? 'step_3' : 'step_3_eu'],
                alt: <Localize translate_text="Place a trade" />,
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
                    title_font_size="24px"
                    subtitle_font_size="48px"
                    bgcolor="white"
                    margin_subtitle="1.5rem 0 3rem 0"
                    align_title="center"
                    align_subtitle="center"
                    width="100%"
                    font_weight_title="300"
                    font_weight_subtitle="bold"
                    font_family_title="IBM Plex Sans ,sans-serif"
                    font_family_subtitle="Ubuntu"
                />
                <StepperView
                    items={stepsData}
                    renderFooter={() => (
                        <Button
                            primary
                            label="_t_Go to live demo_t_"
                            onClick={() => {
                                const link = 'https://www.google.com'
                                window.location = link
                            }}
                        />
                    )}
                />
            </Container>
        </SectionContainer>
    )
}

export default DtraderEasySteps
