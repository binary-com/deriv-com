import React from 'react'
import ReactLottie from 'react-lottie'
import PropTypes from 'prop-types'

export const Lottie = ({ animationData, autoplay = true, loop = true, onAnimationComplete }) => {
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
        <ReactLottie
            options={default_options}
            eventListeners={eventListeners}
            isClickToPauseDisabled
        />
    )
}

Lottie.propTypes = {
    animationData: PropTypes.object.isRequired,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    onAnimationComplete: PropTypes.func,
}
