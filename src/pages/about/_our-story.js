import React, { Fragment } from 'react'
import OurNumbers from './_our-numbers'
import { OurOffices } from './_our-offices'
import { OurHistory } from './_our-history'

export const OurStory = () => (
    <Fragment>
        <OurHistory />
        <OurNumbers />
        <OurOffices />
    </Fragment>
)
