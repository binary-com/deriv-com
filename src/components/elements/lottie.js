import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'

export const LottieWrapper = ({
    animationData,
    autoplay = true,
    height = 40,
    loop = true,
    onAnimationComplete,
    width = 40,
}) => {
    const default_options = {
        loop,
        autoplay,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    const eventListeners = []
    if (onAnimationComplete) {
        eventListeners.push({ eventName: 'complete', callback: onAnimationComplete })
    }

    return (
        <Lottie
            options={default_options}
            height={height}
            width={width}
            eventListeners={eventListeners}
        />
    )
}

LottieWrapper.propTypes = {
    animationData: PropTypes.object.isRequired,
    autoplay: PropTypes.bool,
    height: PropTypes.number,
    loop: PropTypes.bool,
    onAnimationComplete: PropTypes.func,
    width: PropTypes.number,
}
