import React from 'react'
import ReactLottie from 'react-lottie'
import PropTypes from 'prop-types'

export const Lottie = ({
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
        <ReactLottie
            options={default_options}
            height={height}
            width={width}
            eventListeners={eventListeners}
        />
    )
}

Lottie.propTypes = {
    animationData: PropTypes.object.isRequired,
    autoplay: PropTypes.bool,
    height: PropTypes.number,
    loop: PropTypes.bool,
    onAnimationComplete: PropTypes.func,
    width: PropTypes.number,
}
