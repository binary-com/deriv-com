import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { OurHistory } from './_our-history'
const OurOffices = Loadable(() => import('./_our-offices'))
const OurNumbers = Loadable(() => import('./_our-numbers'))

export const OurStory = (props) => (
    <Fragment>
        <OurHistory is_mobile_menu={props.is_mobile_menu} />
        <OurNumbers />
        <OurOffices />
    </Fragment>
)
OurStory.propTypes = {
    is_mobile_menu: PropTypes.bool,
}
