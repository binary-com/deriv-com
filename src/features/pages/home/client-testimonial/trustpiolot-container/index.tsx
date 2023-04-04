import React, { useEffect, useRef } from 'react'
import { trustpiolot_container } from './styles.module.scss'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const TrustpilotContainer = () => {
    const ref = useRef()

    useEffect(() => {
        window?.Trustpilot?.loadFromElement(ref.current, true)
    }, [])

    return (
        <Flex.Box
            direction="col"
            justify="center"
            align="start"
            gap={'20x'}
            className={trustpiolot_container}
        >
            <Typography.Heading size="medium" as="h3">
                <Localize translate_text="_t_What our clients say about Deriv_t_" />
            </Typography.Heading>
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
        </Flex.Box>
    )
}

export default TrustpilotContainer
