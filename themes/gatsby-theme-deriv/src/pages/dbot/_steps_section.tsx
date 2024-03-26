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
                title: () => '_t_Select an asset_t_',
                image: () => (
                    <QueryImage data={data['step_1']} alt={localize('_t_Select an asset_t_')} />
                ),
            },
            {
                title: () => '_t_Set the purchase conditions_t_',
                image: () => (
                    <QueryImage data={data['step_2']} alt={localize('_t_purchase conditions_t_')} />
                ),
            },
            {
                title: () => '_t_Set the restart conditions_t_',
                image: () => (
                    <QueryImage data={data['step_3']} alt={localize('_t_restart conditions_t_')} />
                ),
            },
            {
                title: () => '_t_Run the bot_t_',
                image: () => (
                    <QueryImage data={data['step_4']} alt={localize('_t_Run the bot_t_')} />
                ),
            },
            {
                title: () => '_t_Check the profit_t_',
                image: () => (
                    <QueryImage data={data['step_5']} alt={localize('_t_Check the profit_t_')} />
                ),
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
                                <Localize translate_text="_t_Go to live demo_t_" />
                            </GoToLiveDemo>
                        </GotoLiveWrapper>
                    )}
                />
            </Container>
        </SectionContainer>
    )
}

export default DBotEasySteps
