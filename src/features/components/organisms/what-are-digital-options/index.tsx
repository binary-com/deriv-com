import React from 'react'
import { Hero } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { v4 as uuidv4 } from 'uuid'
import { Text, Heading, Button } from '@deriv/quill-design'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import Label from 'features/components/atoms/label'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'
import FloatingCta from 'features/pages/home/hero/floating-cta'

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
    const clickToScrollHandler = useScrollToElement('faqs', -100)
    const uniq = `navbuttons_uniq_class_${uuidv4()}`
    const { ctaBottom, visibilityPercentage, entryRef } = useFloatingCtaContext()

    return (
        <>
            <Hero.ContentLess
                className="px-800"
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
                        <TradersHubCtaButton
                            ref={entryRef}
                            className="w-full md:!w-auto"
                            size="lg"
                        />
                        <Button
                            size="lg"
                            variant="secondary"
                            colorStyle="black"
                            className="w-full md:!w-auto hover:!bg-solid-slate-50 sm:hover:!bg-opacity-black-100"
                            onClick={clickToScrollHandler}
                        >
                            <Localize translate_text="_t_Read FAQs_t_" />
                        </Button>
                    </div>
                )}
            </Hero.ContentLess>
            <FloatingCta
                style={{
                    transform: `translateY(${visibilityPercentage - 100}%)`,
                    bottom: `${-68 + ctaBottom}px`,
                }}
            />
        </>
    )
}

export default WhatAreDigitalOptions
