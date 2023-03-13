import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './hero.button.scss'

const HeroButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'hero')} {...rest} />
}

export default HeroButton
