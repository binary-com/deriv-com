import React from 'react'
import Layout from 'features/components/templates/layout'
import { CtraderManageProps } from './ctrader-manage-data'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { BuildVariantType } from 'features/types'

type CtraderManagePageProps =  CtraderManageProps & BuildVariantType

const CtraderManage = ({
    title,
    image_url,
    image_url_mobile,
    steps,
    paragraph,
    button_url,
    button_text,
    region
}: CtraderManagePageProps) => {
    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                <Flex.Box
                    gap="10x"
                    md={{ gap: '15x' }}
                    direction="col"
                    justify="center"
                    align="center"
                >
                    <Typography.Heading size="small" align="center">
                        <Localize translate_text={title} />
                    </Typography.Heading>
                    {steps && (
                        <Flex.Box direction="row" gap={'15x'} padding="10x" align="center">
                            <div className="at-visible-phone-only">{image_url_mobile}</div>
                            <div className="at-visible-larger-than-phone">{image_url}</div>
                            <Flex.Box gap={'5x'} direction="col" justify="center">
                                {steps.map((step) => (
                                    <Typography.Paragraph key={step.id}>
                                        <Localize
                                            translate_text={step.text}
                                            components={step.components}
                                        />
                                    </Typography.Paragraph>
                                ))}
                            </Flex.Box>
                        </Flex.Box>
                    )}
                    <Typography.Paragraph align="center">
                        <Localize
                            translate_text={paragraph.text}
                            components={paragraph.components}
                        />
                    </Typography.Paragraph>
                    <LinkButton.Primary url={button_url}>
                        <Localize translate_text={button_text} />
                    </LinkButton.Primary>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderManage
