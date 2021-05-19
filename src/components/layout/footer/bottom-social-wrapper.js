import React from 'react'
import SocialWrapperComponent  from './social-wrapper'
import { Show } from 'components/containers'

const BottomSocialWrapper = (type) => {

    return (
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
}

export default BottomSocialWrapper;
