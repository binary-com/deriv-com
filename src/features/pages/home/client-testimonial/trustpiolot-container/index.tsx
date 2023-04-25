import React, { useEffect, useRef } from 'react'
import { Script } from 'gatsby'
import Flex from 'features/components/atoms/flex-box'

const TrustpilotContainer = () => {
    const ref = useRef()

    useEffect(() => {
        window?.Trustpilot?.loadFromElement(ref.current, true)
    }, [])

    return (
        <Flex.Box direction="col" justify="center" align="start" gap={'20x'} md={{ basis: '6-12' }}>
            <Script
                key="trustpilot-widget"
                type="text/javascript"
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                strategy="idle"
                async={true}
                onLoad={() => console.log('widget loaded')}
            />
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="5ed4c8a9f74f310001f51bf7"
                data-style-height="115px"
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
        </Flex.Box>
    )
}

export default TrustpilotContainer
