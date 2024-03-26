import React, { useState } from 'react'
import { Text } from '@deriv/quill-design'
import CloseIcon from 'images/svg/trading-specification/close-icon.svg'
import WarningBlackIcon from 'images/svg/warning-icon.svg'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const WarningBanner = () => {
    const is_maintenance_mode = useThirdPartyFlags('maintenance_mode')
    const maintenance_mode_content = useThirdPartyFlags('maintenance_mode_content')
    const [is_close_pressed, setIsClosedPressed] = useState(false)
    if (!is_maintenance_mode || is_close_pressed) return null
    return (
        <div className="flex pointer-events-auto justify-center m-general-md md:m-general-3xl min-h-[60px] animate-fade-out shadow-[0_0_12px_0_rgba(14,_14,_14,_0.16)] ease-in-out duration-200 [transition:opacity,translate] border border-solid-red-100 z-50">
            <div
                className="bg-background-primary-base p-general-sm relative max-w-[720px] flex justify-between items-center rounded-md"
                role="alert"
            >
                <div className="flex gap-gap-md pl-gap-sm items-center">
                    <img className="!h-[24px]" src={WarningBlackIcon} alt="Warning" />
                    <Text size="sm">{maintenance_mode_content}</Text>
                </div>
                <img
                    width="12px"
                    height="12px"
                    className="cursor-pointer"
                    src={CloseIcon}
                    alt="Close"
                    onClick={() => setIsClosedPressed(true)}
                />
            </div>
        </div>
    )
}

export default WarningBanner
