import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Image from 'features/components/atoms/image'
import AddAccountImage from 'images/common/ctrader/add-account.png'
import AddMoreAccountsImage from 'images/common/ctrader/add-more-accounts.png'
import AddAccountMobileImage from 'images/common/ctrader/add-account-mobile.png'

type ParagraphType = {
    id?: number
    text: TString
    components?: React.ReactElement[]
}

type ContentType = {
    title: TString
    paragraph: ParagraphType
    steps?: ParagraphType[]
    image_url?: string
    image_url_mobile?: string
    url: LinkUrlType
    button_text: TString
}

const Title = styled.h2`
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    font-weight: 700;
    padding: 0 8px;
    @media ${device.tablet} {
        font-size: 18px;
    }
`
const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;

    @media ${device.tablet} {
        // Disable line-break in mobile
        br {
            display: none;
        }
    }
`

const Step = styled.p`
    font-size: 12px;
    line-height: 18px;
    width: 192px;

    @media ${device.tablet} {
        text-align: center;
        width: 328px;
    }
`

const data = (page: string): ContentType => {
    if (page === 'add-account') {
        return {
            title: '_t_Creating a live cTrader account_t_',
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/appstore/traders-hub',
            },
            image_url: AddAccountImage,
            image_url_mobile: AddAccountMobileImage,
            steps: [
                {
                    id: 1,
                    text: '_t_1. Go to the Trader’s hub and choose the <0>Real</0> option._t_',
                    components: [<strong key={0} />],
                },
                {
                    id: 2,
                    text: '_t_2. Under CFDs, look for Deriv cTrader and select <0>Get</0>._t_',
                    components: [<strong key={0} />],
                },
            ],
            paragraph: {
                text: '_t_Please click on the button below to proceed. _t_',
            },
            button_text: "_t_Go to Trader's Hub_t_",
        }
    }
    if (page === 'add-more-accounts') {
        return {
            title: '_t_Create more trading accounts_t_',
            image_url: AddMoreAccountsImage,
            image_url_mobile: AddAccountMobileImage,
            steps: [
                {
                    id: 1,
                    text: '_t_1. Go to the Trader’s hub and choose the <0>Real</0> option._t_',
                    components: [<strong key={0} />],
                },
                {
                    id: 2,
                    text: '_t_2. Under Options and Multipliers and CFDs, look for the new trading account you want and select <0>Get</0>._t_',
                    components: [<strong key={0} />],
                },
            ],
            paragraph: {
                text: '_t_Please click on the button below to proceed. _t_',
            },
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/appstore/traders-hub',
            },
            button_text: "_t_Go to Trader's Hub_t_",
        }
    }
    if (page === 'change-password') {
        return {
            title: '_t_Changing your credentials is just a click away_t_',
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/account/passwords',
            },
            paragraph: {
                text: '_t_Your cTrader credentials are the same as your Deriv credentials. <0/>Please click the button to proceed with <1>changing your Deriv credentials</1>._t_',
                components: [<br key={0} />, <strong key={1} />],
            },
            button_text: '_t_Change credentials_t_',
        }
    }
    if (page === 'close-account') {
        return {
            title: '_t_Are you sure you want to delete your account?_t_',
            url: {
                type: 'non-company',
                target: '_blank',
                href: 'https://app.deriv.com/account/cloing-account',
            },
            paragraph: {
                text: '_t_Your cTrader account is linked to your Deriv account. <0/>Please click the button to proceed with <1>deleting your Deriv account</1>._t_',
                components: [<br key={0} />, <strong key={1} />],
            },
            button_text: '_t_Delete account_t_',
        }
    }
}

const CtraderManage = () => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const page = url_params.get('q')
    const { is_mobile } = useBreakpoints()

    const content = data(page)
    const add_account_page = page === 'add-account' || page === 'add-more-accounts'

    return (
        <CtraderWrapper>
            {page && (
                <Flex.Box gap={is_mobile ? '10x' : '15x'} direction="col" align="center" pt="20x">
                    <Title>
                        <Localize translate_text={content.title} />
                    </Title>
                    {add_account_page && (
                        <Flex.Box
                            direction={is_mobile ? 'col' : 'row'}
                            gap={'15x'}
                            pt={is_mobile ? '5x' : '20x'}
                            pb="12x"
                            align="center"
                        >
                            <Image
                                src={is_mobile ? content.image_url_mobile : content.image_url}
                                alt="traders-hub"
                                width={is_mobile ? 197 : 325}
                            />
                            <Flex.Box gap={'5x'} direction="col" justify="center">
                                {content.steps.map((step) => (
                                    <Step key={step.id}>
                                        <Localize
                                            translate_text={step.text}
                                            components={step.components}
                                        />
                                    </Step>
                                ))}
                            </Flex.Box>
                        </Flex.Box>
                    )}
                    <Paragraph>
                        <Localize
                            translate_text={content.paragraph.text}
                            components={content.paragraph.components}
                        />
                    </Paragraph>
                    <LinkButton.Primary url={content.url} style={{ borderRadius: '4px' }}>
                        <Localize translate_text={content.button_text} />
                    </LinkButton.Primary>
                </Flex.Box>
            )}
        </CtraderWrapper>
    )
}

export default CtraderManage
