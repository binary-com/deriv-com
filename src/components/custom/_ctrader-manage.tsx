import React from 'react'
import { CtraderManageProps } from 'pages/ctrader-manage/_ctrader-manage-data'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Layout from 'features/components/templates/layout'

const CtraderManage = ({
    title,
    image_url,
    image_url_mobile,
    steps,
    paragraph,
    button_url,
    button_text,
}: CtraderManageProps) => {
    const { is_small_mobile } = useBreakpoints()

    return (
        <Layout>
            <CtraderWrapper>
                <Flex.Box
                    gap={is_small_mobile ? '10x' : '15x'}
                    direction="col"
                    justify="center"
                    align="center"
                    pt="20x"
                >
                    <Typography.Heading size="xs" align="center">
                        <Localize translate_text={title} />
                    </Typography.Heading>
                    {steps && (
                        <Flex.Box
                            direction={is_small_mobile ? 'col' : 'row'}
                            gap={'15x'}
                            pt={is_small_mobile ? '5x' : '20x'}
                            pb="12x"
                            align="center"
                        >
                            <Image
                                src={is_small_mobile ? image_url_mobile : image_url}
                                alt="traders-hub"
                                width={is_small_mobile ? 197 : 325}
                            />
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
