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

const query = graphql`
    query {
        step_1: file(relativePath: { eq: "dbot/step_image_1.png" }) {
            ...fadeIn
        }
        step_2: file(relativePath: { eq: "dbot/step_image_2.png" }) {
            ...fadeIn
        }
        step_3: file(relativePath: { eq: "dbot/step_image_3.png" }) {
            ...fadeIn
        }
        step_4: file(relativePath: { eq: "dbot/step_image_4.png" }) {
            ...fadeIn
        }
        step_5: file(relativePath: { eq: "dbot/step_image_5.png" }) {
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

const DBotEasySteps = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const data = useStaticQuery(query)

    const stepsData: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: 'Select an asset',
                image: data['step_1'],
                alt: <Localize translate_text="Select an asset" />,
            },
            {
                title: 'Set the purchase conditions',
                image: data['step_2'],
                alt: <Localize translate_text="purchase conditions" />,
            },
            {
                title: 'Set the restart conditions',
                image: data['step_3'],
                alt: <Localize translate_text="restart conditions" />,
            },
            {
                title: 'Run the bot',
                image: data['step_4'],
                alt: <Localize translate_text="Run the bot" />,
            },
            {
                title: 'Check the profit',
                image: data['step_5'],
                alt: <Localize translate_text="Check the profit" />,
            },
        ],
        [data],
    )
    return (
        <SectionContainer>
            <Container justify="center" direction="column" ai="flex-start">
                <CommonHeaderSection
                    title="_t_How it works_t_"
                    subtitle="_t_Build a trading robot in 5 easy steps_t_"
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
                    color="var(--color-black-9)"
                />
                <StepperView
                    items={stepsData}
                    contentWidth="384px"
                    renderFooter={() => (
                        <GotoLiveWrapper>
                            <GoToLiveDemo
                                secondary
                                external
                                type="dbot"
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

export default DBotEasySteps
