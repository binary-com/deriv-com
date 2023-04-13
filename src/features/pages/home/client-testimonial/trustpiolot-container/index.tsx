import React, { useEffect, useRef } from 'react'
import { trustpilot_container } from './styles.module.scss'
import Box from 'features/components/atoms/box'

const TrustpilotContainer = () => {
    const ref = useRef()

    useEffect(() => {
        window?.Trustpilot?.loadFromElement(ref.current, true)
    }, [])

    return (
        <Box className={trustpilot_container}>
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="5ed4c8a9f74f310001f51bf7"
                data-style-height="150px"
                data-style-width="100%"
                data-style-padding="0"
                data-theme="light"
            >
                <a
                    href="https://www.trustpilot.com/review/deriv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Trustpilot
                </a>
            </div>
        </Box>
    )
}

export default TrustpilotContainer
