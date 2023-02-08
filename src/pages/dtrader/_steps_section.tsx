import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import StepperView from 'components/custom/_stepper_view'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { Container, SectionContainer } from 'components/containers'

const query = graphql`
    query {
        step_1: file(relativePath: { eq: "dtrader/step_image_1.png" }) {
            ...fadeIn
        }
        step_2: file(relativePath: { eq: "dtrader/dtrader-banner.png" }) {
            ...fadeIn
        }
        step_3: file(relativePath: { eq: "dtrader/dtrader-banner_EU.png" }) {
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
                title: <Localize translate_text="Select an asset" />,
                image: data['step_1'],
                alt: <Localize translate_text="qwerty" />,
            },
            {
                title: <Localize translate_text="Monitor the chart" />,
                image: data['step_2'],
                alt: <Localize translate_text="345trd" />,
            },
            {
                title: <Localize translate_text="Place a trade" />,
                image: data['step_3'],
                alt: <Localize translate_text="w3e4tff" />,
            },
        ],
        [data, is_mobile],
    )
    return (
        <SectionContainer>
            <Container justify="center" direction="column" ai="flex-start">
                <StepperView items={stepsData} />
            </Container>
        </SectionContainer>
    )
}

export default DtraderEasySteps
