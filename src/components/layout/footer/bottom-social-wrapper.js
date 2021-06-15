import React from 'react'
import PropTypes from 'prop-types'
import SocialWrapperComponent  from './social-wrapper'
import { Show } from 'components/containers'

const BottomSocialSection = ({ type }) => (
    <>
        <Show.NonEU>
            <SocialWrapperComponent is_career_page={type === 'careers'} />
        </Show.NonEU>

        <Show.Eu>
            <Show.Mobile>
                <SocialWrapperComponent is_career_page={type === 'careers'} />
            </Show.Mobile>
        </Show.Eu>
    </>
)

BottomSocialSection.propTypes = {
    type: PropTypes.string,
}

export default BottomSocialSection;
