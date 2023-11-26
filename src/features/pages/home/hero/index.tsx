import React, { ReactNode } from 'react'
import { Button, FluidContainer, Heading, Section, Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { Localize } from 'components/localization'

const Content = () => {
    return (
        <StaticImage
            src="../../../../images/migration/home/home_hero_new.png"
            alt="hero image"
            className="right-50"
        />
    )
}

export interface HomeHeroProps {
    children?: ReactNode
    className?: string
}

// TODO: This whole component needs to be refactored, I just updated some stuff to make it work.
const HomeHero: React.FC<HomeHeroProps> = ({ children, className }) => {
    return (
        <Section
            // todo: we need 72px gap for desktop 48px gap for mobile and tablet
            className={clsx(
                'relative mx-auto flex max-w-[2048px] flex-col items-center justify-center gap-general-4xl pt-general-4xl lg:block lg:min-h-[680px] lg:pt-general-2xl xl:min-h-screen',
                className,
            )}
        >
            <StaticImage
                src="../../../../images/migration/home/home_hero_bg.png"
                alt="hero image"
                className="h-[calc(100vh-96px)] w-full absolute top-0 left-0 z-0 bg-cover bg-no-repeat"
            />
            <FluidContainer className="flex items-center lg:min-h-[680px] xl:min-h-[860px] z-40">
                <div className="flex flex-col gap-gap-3xl lg:max-w-[580px] z-50">
                    <Heading.H1 className="text-solid-slate-50">
                        <Localize translate_text="_t_Trading for anyone.Anywhere. Anytime._t_" />
                    </Heading.H1>
                    <Text size="md" className="text-solid-slate-50">
                        <Localize translate_text="_t_Trade CFDs and Options on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support._t_" />
                    </Text>
                    <div>
                        <Button size="lg" variant="primary" colorStyle="coral">
                            <Localize translate_text="_t_Open demo account_t_" />
                        </Button>
                    </div>
                    {children}
                </div>
            </FluidContainer>
            <div
                className={clsx('relative w-full lg:hidden')}
                data-testid="content-limitless__mobile-big-red"
            >
                <Content />
            </div>
            <div
                className={clsx('absolute right-3000 top-50 hidden h-full w-1/3 lg:block')}
                data-testid="content-limitless__desktop-big-red"
            >
                <div className="absolute bottom-50 w-full">
                    <Content />
                </div>
            </div>
            <div className="bg-solid-slate-1400 w-full z-50 h-[50px] absolute bottom-50"></div>
        </Section>
    )
}

export default HomeHero
