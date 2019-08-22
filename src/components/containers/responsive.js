import React from 'react'
import MediaQuery from 'react-responsive'
import { size } from 'themes/device'

// TODO: use hooks when `react-responsive` 8.0.0 release stable
export const Desktop = props => (
    <MediaQuery {...props} minWidth={size.tabletL} />
)

export const Mobile = props => <MediaQuery {...props} maxWidth={size.tabletL} />

export default {
    Desktop,
    Mobile,
}
