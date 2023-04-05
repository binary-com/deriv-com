import React from 'react'
import { risk_warning_container } from './disclaimer.module.scss'
import { disclaimerContent, riskWarningContent } from './data'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useNewContent from 'components/hooks/use-new-content'
import Container from 'features/components/atoms/container'

const Disclaimer = () => {
    // // remove after approve
    // const { is_eu, is_non_eu, is_cpa_plan } = useRegion()
    //
    // const visibility_config: DisclaimerParagraphConfig = useMemo(() => {
    //     return {
    //         is_cpa_plan,
    //         is_eu,
    //         is_non_eu,
    //         is_non_eu_or_cpa_plan: is_non_eu || is_cpa_plan,
    //     }
    // }, [is_cpa_plan, is_eu, is_non_eu])
    //
    // console.log('old approach: ', visibility_config)
    //
    // const visible_disclaimer_content = useVisibleContent({
    //     content: disclaimerContent,
    //     config: visibility_config,
    // })
    //
    // const visible_risk_content = useVisibleContent({
    //     content: riskWarningContent,
    //     config: visibility_config,
    // })
    // //

    const visible_disclaimer_content = useNewContent(disclaimerContent, [
        'is_cpa_plan',
        'is_eu',
        'is_non_eu',
        'is_non_eu_or_cpa_plan',
    ])

    const visible_risk_content = useNewContent(riskWarningContent, [
        'is_cpa_plan',
        'is_eu',
        'is_non_eu',
        'is_non_eu_or_cpa_plan',
    ])

    return (
        <Container.Fixed margin_block="10x">
            {visible_disclaimer_content.map((item) => (
                <Typography.Paragraph key={item.id} size={'medium'} mb="10x">
                    <Localize translate_text={item.data.text} components={item.data.components} />
                </Typography.Paragraph>
            ))}
            <Container.Fixed className={risk_warning_container} bgcolor="tertiary" padding="10x">
                {visible_risk_content.map((item, index) => {
                    const not_last_item =
                        index !== visible_risk_content.length - 1 ? 'small' : undefined
                    return (
                        <Typography.Paragraph key={item.id} mb={not_last_item ? '10x' : undefined}>
                            <Localize
                                translate_text={item.data.text}
                                components={item.data.components}
                            />
                        </Typography.Paragraph>
                    )
                })}
            </Container.Fixed>
        </Container.Fixed>
    )
}

export default Disclaimer
