import React from 'react'
import { signup_left_gradient, signup_bottom_gradient } from '../signup.module.scss'
import { Box } from 'components/containers'

const BackgroundGradient = () => (
    <>
        <Box className={signup_left_gradient} />
        <Box className={signup_bottom_gradient} />
    </>
)

export default BackgroundGradient
