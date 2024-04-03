import React from 'react'
import Layout from 'features/components/templates/layout'
import { form_style, paragraph_style } from './ctrader-form.module.scss'
import { Localize } from 'components/localization'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'
import CtraderAndDerivSuccessImage from 'images/common/ctrader/ctrader-and-deriv-success.png'
import LinkButton from 'features/components/atoms/link-button'
import { BuildVariantType } from 'features/types'

const CtraderSignupSuccess = ({region}: BuildVariantType) => {
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
                    gap="7x"
                    className={form_style}
                >
                    <Image
                        src={CtraderAndDerivSuccessImage}
                        alt="success-image"
                        width="200px"
                        height="106px"
                    />
                    <Typography.Heading as="h3" size="small" align="center">
                        <Localize translate_text="_t_Success!_t_" />
                    </Typography.Heading>
                    <>
                        <Typography.Paragraph className={paragraph_style} align="center">
                            <Localize translate_text="_t_Your demo Deriv and cTrader accounts have been created successfully._t_" />
                        </Typography.Paragraph>
                        <LinkButton.Primary
                            url={{
                                type: 'non-company',
                                href: `https://id-ct.deriv.com/brokeroauth/success?token=${token}`,
                            }}
                        >
                            <Localize translate_text="_t_Let's trade_t_" />
                        </LinkButton.Primary>
                    </>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderSignupSuccess
