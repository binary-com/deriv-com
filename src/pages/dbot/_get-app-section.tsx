import React from 'react'
import styled from 'styled-components'
import derivBotLogo from '../../images/svg/dbot/dbot_icon.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import GetAppMobileBG from '../../images/common/dtrader/getAppMobileBG.jpg'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import Button from 'components/custom/_button'
import device from 'themes/device'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import useBreakpoints from 'components/hooks/use-breakpoints'

const ContentWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
    z-index: 2;
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const CreateAccountButton = styled(Button)`
    @media ${device.tablet} {
        max-width: 100%;
        width: 100%;
    }
`
const TextAndButtonWrapper = styled.div`
    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const DBotGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()

    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="70%"
            secondColumnWidth="30%"
            mobileBackgroundImage={GetAppMobileBG}
        >
            <ContentWrapper>
                <img src={derivBotLogo} alt="dtrader logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get into the Deriv Bot experience_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                    {is_logged_in ? (
                        <CreateAccountButton
                            onClick={handleGetTrading}
                            label="_t_Create free demo account_t_"
                            primary
                        />
                    ) : (
                        <CreateAccountButton
                            onClick={handleSignup}
                            label="_t_Create free demo account_t_"
                            primary
                        />
                    )}
                </TextAndButtonWrapper>
            </ContentWrapper>
            <div></div>
        </MultiWidthColumn>
    )
}

export default DBotGetApp
