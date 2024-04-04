import React from 'react'
import { form_style, paragraph_style } from '../ctrader-signup/ctrader-form.module.scss'
import Layout from 'features/components/templates/layout'
import { Localize } from 'components/localization'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'
import CtraderSuccessImage from 'images/common/ctrader/ctrader-success.png'
import LinkButton from 'features/components/atoms/link-button'
import { BuildVariantType } from 'features/types'

const CtraderLoginSuccess = ({region}: BuildVariantType) => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const token = url_params.get('token')

    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                <Flex.Box
                    as="div"
                    justify="center"
                    align="center"
                    direction="col"
                    gap="12x"
                    className={form_style}
                >
                    <Image
                        src={CtraderSuccessImage}
                        alt="success-image"
                        width="152px"
                        height="128px"
                    />
                    <div>
                        <Typography.Heading pb="2x" as="h3" size="xxs" align="center">
                            <Localize translate_text="_t_Success!_t_" />
                        </Typography.Heading>
                        <Typography.Paragraph className={paragraph_style} align="center">
                            <Localize translate_text="_t_Your demo cTrader account has been created successfully._t_" />
                        </Typography.Paragraph>
                    </div>
                    <LinkButton.Primary
                        url={{
                            type: 'non-company',
                            href: `https://id-ct.deriv.com/brokeroauth/success?token=${token}`,
                        }}
                    >
                        <Localize translate_text="_t_Let's trade_t_" />
                    </LinkButton.Primary>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderLoginSuccess
