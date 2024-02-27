import React from 'react'
import { Hero } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { LabelPairedGrid2CaptionBoldIcon } from '@deriv/quill-icons/LabelPaired'
import { v4 as uuidv4 } from 'uuid'
import { Text, Heading, Button } from '@deriv/quill-design'
import { Localize } from 'components/localization'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import { TString } from 'types/generics'
import usePpc from 'features/hooks/use-ppc'
import useAuthCheck from 'components/hooks/use-auth-check'
import { isBrowser } from 'common/utility'
import useHandleSignup from 'components/hooks/use-handle-signup'
import Label from 'features/components/atoms/label'
import useScrollToElement from 'features/hooks/use-scroll-to-element'

interface WhatAreDigitalOptionsProps {
    heading: TString
    description: TString
    is_coming_soon: boolean
    has_content_block: boolean
}

const WhatAreDigitalOptions = ({
    heading,
    description,
    is_coming_soon,
    has_content_block,
}: WhatAreDigitalOptionsProps) => {
    const { is_ppc_redirect } = usePpc()
    const clickToScrollHandler = useScrollToElement('faqs', -100)
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup(is_ppc_redirect)
    const isRealDevice = isBrowser()
    const renderSignupButton = isRealDevice && !is_logged_in
    const renderTradershubButton = isRealDevice && is_logged_in
    const uniq = `navbuttons_uniq_class_${uuidv4()}`

    return (
        <div className="max-w-[816px] mx-auto px-800">
            <Hero.ContentLess
                description={
                    <Text className="leading-6">
                        <Localize translate_text={description} />
                    </Text>
                }
                title={
                    <Heading>
                        <Localize translate_text={heading} />
                    </Heading>
                }
            >
                {is_coming_soon && (
                    <Label text="_t_Available on Demo accounts only_t_" bgcolor="blue" />
                )}
                {has_content_block && (
                    <div
                        className="flex flex-col items-center gap-400 md:!flex-row md:justify-center"
                        id={uniq}
                    >
                        <Button
                            size="lg"
                            onClick={handleRedirectToTradersHub}
                            icon={LabelPairedGrid2CaptionBoldIcon}
                            iconPosition="start"
                            className={`navbuttons_tradershub ${uniq} ${
                                renderTradershubButton ? '' : 'navbuttons_tradershub--hidden'
                            }`}
                        >
                            {`Trader's Hub`}
                        </Button>

                        <Button
                            size="lg"
                            onClick={handleSignup}
                            className={`w-full md:!w-auto navbuttons_login ${uniq} ${
                                renderSignupButton ? '' : 'navbuttons_login--hidden'
                            }`}
                        >
                            <Localize translate_text="_t_Open demo account_t_" />
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            colorStyle="black"
                            className="w-full md:!w-auto"
                            onClick={clickToScrollHandler}
                        >
                            Read FAQs
                        </Button>
                    </div>
                )}
            </Hero.ContentLess>
        </div>
    )
}

export default WhatAreDigitalOptions
