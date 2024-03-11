import React from 'react'
import { CustomLink } from '@deriv-com/components'
import clsx from 'clsx'

export const TopNavigation = () => {
    const sharedClasses = 'text-body-sm hover:text-typography-prominent hover:no-underline'
    return (
        <div className="flex gap-gap-xl py-general-sm">
            <CustomLink href="/" className={clsx(sharedClasses)}>
                Deriv website
            </CustomLink>
            <CustomLink href="/who-we-are" className={clsx(sharedClasses)}>
                Who we are
            </CustomLink>
            <CustomLink href="/contact-us" className={clsx(sharedClasses)}>
                Contact us
            </CustomLink>
        </div>
    )
}

export default TopNavigation
