import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/containers'
import ModalMessage from '../../components/form/modal-message'
import NewEmail from '../../images/svg/signup-affiliate-details/new-email.svg'
import ErrorEmail from '../../images/svg/signup-affiliate-details/error.svg'
import Benefits from './_benefits'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import Map from 'images/svg/landing/map.svg'

const StyledFlex = styled(Flex)`
    height: 70vh;
    background-color: rgba(200, 214, 215, 0.22);
`
const StyledDiv = styled.div`
    padding-top: 20rem;
    background-color: rgba(200, 214, 215, 0.22);
    @media ${device.mobileL} {
        padding-top: 40rem;
    }
`
const StyledMap = styled.img`
    width: 100%;
    overflow: initial;
`

const Overlay = styled.div`
    opacity: ${({ is_popup_shown }) => (is_popup_shown ? 0.4 : 1)};
`

const affiliateSignupDetails = () => {
    const [is_popup_shown, setPopupShown] = useState(false)
    const [error_message, setErrorMessage] = useState('')
    const showModal = (status) => setPopupShown(status)

    return (
        <>
            <Overlay is_popup_shown={is_popup_shown}>
                <Layout type="static" margin_top={'0'} nav_label="Partners">
                    <SEO
                        title={localize('Easy And Free Sign Up | Online Trading | Deriv.com')}
                        description={localize(
                            'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                        )}
                    />
                    <StyledFlex jc="center" fd="row" ai="flex-start">
                        <Benefits />
                        <Signup
                            appearance={Appearances.affiliateSignupDetails}
                            bgColor="grey-14"
                            autofocus={true}
                            showModal={showModal}
                            setErrorMessage={setErrorMessage}
                        />
                    </StyledFlex>
                    <StyledDiv>
                        <StyledMap src={Map} alt="map" />
                    </StyledDiv>
                </Layout>
            </Overlay>
            {is_popup_shown &&
                (error_message ? (
                    <ModalMessage
                        showModal={showModal}
                        src={ErrorEmail}
                        title={localize('Sorry, an error occured')}
                        message={error_message}
                    />
                ) : (
                    <ModalMessage
                        showModal={showModal}
                        src={NewEmail}
                        title={localize('')}
                        message={localize(
                            'Please check your inbox. We’ve sent you an email with the details you need.',
                        )}
                    />
                ))}
        </>
    )
}

export default WithIntl()(affiliateSignupDetails)
