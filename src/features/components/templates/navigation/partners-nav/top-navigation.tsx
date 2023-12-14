import React from 'react'
import { CustomLink } from '@deriv-com/components'

export const TopNavigation = () => {
    return (
        <div className="flex gap-gap-xl py-general-sm">
            <CustomLink href="/" className="text-body-sm text-solid-coral-700">
                Deriv website
            </CustomLink>
            <CustomLink
                href="/who-we-are"
                className="text-body-sm hover:text-typography-prominent hover:no-underline"
            >
                Who we are
            </CustomLink>
            <CustomLink
                href="/contact_us"
                className="text-body-sm hover:text-typography-prominent hover:no-underline"
            >
                Contact us
            </CustomLink>
        </div>
    )
}

export default TopNavigation
