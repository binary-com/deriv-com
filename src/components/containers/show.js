import React from 'react'
import Location from './location'
import Responsive from './responsive.js'
import { size } from 'themes/device'

export const Eu = props => <Location {...props} to="eu" />

export const NonEu = props => <Location {...props} to="non-eu" />

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
