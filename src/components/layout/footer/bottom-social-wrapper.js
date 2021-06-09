import React from 'react'
import SocialWrapperComponent  from './social-wrapper'
import { Show } from 'components/containers'

const BottomSocialSection = (type) => {

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

export default BottomSocialSection;
