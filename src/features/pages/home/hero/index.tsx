import React, { ReactNode } from 'react'
import { Button, FluidContainer, Heading, Section, Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import {
    hero_content,
    hero_content_btn,
    hero_content_award_img,
    hero_content_gradient,
} from './styles.module.scss'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

export interface HomeHeroProps {
    children?: ReactNode
    className?: string
}

const HomeHero: React.FC<HomeHeroProps> = () => {
    const { is_eu } = useRegion()

    return (
        <Section className="h-[700px] md:h-[880px] relative isolate overflow-hidden">
            {is_eu ? (
                <StaticImage
                    src="../../../../images/migration/home/home_hero_bg_eu.png"
                    alt="hero image"
                    className="w-full -z-10"
                    placeholder="none"
                    style={{ position: 'absolute', inset: 0 }}
                />
            ) : (
                <StaticImage
                    src="../../../../images/migration/home/home_hero_bg.png"
                    alt="hero image"
                    className="w-full -z-10"
                    placeholder="none"
                    style={{ position: 'absolute', inset: 0 }}
                />
            )}

            <FluidContainer className="h-full flex flex-col justify-end">
                <div
                    className={clsx(
                        'flex flex-col items-center md:items-start md:w-5/12 md:mt-auto lg:w-1/2',
                        hero_content,
                    )}
                >
                    <Heading.H1 className="text-solid-slate-50 text-500 lg:text-heading-h1">
                        <Localize translate_text="_t_Trading for anyone. Anywhere. Anytime._t_" />
                    </Heading.H1>
                    <Text size="md" className="text-solid-slate-50 mt-general-md">
                        <Localize translate_text="_t_Trade CFDs and Options on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support._t_" />
                    </Text>
                    <Button
                        size="lg"
                        variant="primary"
                        colorStyle="coral"
                        className={clsx('mt-general-2xl', hero_content_btn)}
                    >
                        <Localize translate_text="_t_Open demo account_t_" />
                    </Button>
                </div>
                <div
                    className={clsx(
                        'flex mt-general-2xl md:mt-auto pb-general-xl',
                        hero_content_award_img,
                    )}
                >
                    <StaticImage
                        src="../../../../images/migration/home/award-1.png"
                        alt="award"
                        width={132}
                        height={68}
                        placeholder="none"
                    />
                    <StaticImage
                        src="../../../../images/migration/home/award-2.png"
                        alt="award"
                        width={132}
                        height={68}
                        placeholder="none"
                    />
                    <StaticImage
                        src="../../../../images/migration/home/award-3.png"
                        alt="award"
                        width={132}
                        height={68}
                        placeholder="none"
                    />
                </div>
            </FluidContainer>
            <div className="absolute inset-50 flex items-end -right-3600 -z-10 md:left-auto lg:right-general-5xl">
                {is_eu ? (
                    <StaticImage
                        src="../../../../images/migration/home/home_hero_new_eu.png"
                        alt="hero image"
                        className="w-[439px] h-[610px] md:w-[566px] md:h-[768px]"
                        placeholder="none"
                    />
                ) : (
                    <StaticImage
                        src="../../../../images/migration/home/home_hero_new.png"
                        alt="hero image"
                        className="w-[439px] h-[610px] md:w-[566px] md:h-[768px]"
                        placeholder="none"
                    />
                )}
            </div>
            <div className={clsx('absolute -z-10 inset-50', hero_content_gradient)}></div>
        </Section>
    )
}

export default HomeHero
