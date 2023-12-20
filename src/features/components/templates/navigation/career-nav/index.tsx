import React from 'react'
import { MobileNavToggle, NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivCareersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { CustomLink } from '@deriv-com/components'
import { Button } from '@deriv/quill-design'
import TopNavigation from '../partners-nav/top-navigation'
import { career_nav_items } from './data'
import { Localize } from 'components/localization'

const CareersButtons = () => {
    return (
        <div className="flex items-center gap-gap-md">
            <Button
                className="block lg:hidden"
                variant="secondary"
                colorStyle="black"
                size="lg"
                onClick={() => window.open('https://deriv.zohorecruit.eu/jobs/Careers', '_blank')}
            >
                <Localize translate_text="_t_Explore jobs_t_" />
            </Button>
            <Button
                className="hidden lg:block"
                size="lg"
                onClick={() => window.open('https://deriv.zohorecruit.eu/jobs/Careers', '_blank')}
            >
                <Localize translate_text="_t_Explore jobs_t_" />
            </Button>
            <MobileNavToggle />
        </div>
    )
}

const CareerNav = () => {
    return (
        <NavigationBlock
            topNavigation={TopNavigation}
            renderButtons={CareersButtons}
            renderLogo={() => (
                <CustomLink href={'/careers'}>
                    <SubBrandDerivCareersBrandLightIcon width={133} height={24} />
                </CustomLink>
            )}
            items={career_nav_items}
            hasLanguageSwitch={false}
        />
    )
}

export default CareerNav
