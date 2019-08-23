import React from 'react'
import Country from './country'
import Responsive from './responsive.js'
import { size } from 'themes/device'

export const Eu = props => <Country {...props} to="eu" />

export const NonEu = props => <Country {...props} to="non-eu" />

export const Mobile = props => (
    <Responsive {...props} min={`${size.tabletL}px`} />
)

export const Desktop = props => (
    <Responsive {...props} max={`${size.tabletL}px`} />
)

export default {
    Eu,
    NonEu,
    Mobile,
    Desktop,
}
