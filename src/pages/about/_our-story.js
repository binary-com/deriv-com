import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import OurNumbers from './_our-numbers'
import { OurOffices } from './_our-offices'
import { OurHistory } from './_our-history'
import OurValues from './_our-values'

export const OurStory = (props) => (
    <Fragment>
        <OurNumbers />
        <OurHistory is_mobile_menu={props.is_mobile_menu} />
        <OurValues />
        <OurOffices />
    </Fragment>
)
OurStory.propTypes = {
    is_mobile_menu: PropTypes.bool,
}
