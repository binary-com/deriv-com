import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device, { size } from 'themes/device'
import { Text, Header, QueryImage } from 'components/elements'
import { Flex, Desktop, Mobile } from 'components/containers'
import { Button, LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import { deriv_dp2p_app_url, dp2p_google_play_url } from 'common/constants'
import { isBrowser } from 'common/utility'
import { mobileOSDetect } from 'common/os-detect'
import Checkmark from 'images/svg/dmt5/checkmark.svg'
import { TString } from 'types/generics'

const query = graphql`
    query {
        dp2p_platform: file(relativePath: { eq: "dp2p_platform.png" }) {
            ...fadeIn
        }
    }
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4rem;

    @media ${device.tabletS} {
        flex-direction: column;
    }
`

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 58.8rem;
`

const ContentRight = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 3.2rem;

    @media ${device.tabletS} {
        margin-left: 0;
    }
`

const ItemTitle = styled.div`
    display: flex;

    img {
        flex-shrink: 0;
        width: 2.4rem;
        height: 2.4rem;
        margin: 0.6rem 0.8rem 0 0;
        object-fit: contain;
    }
`

const ImageWrapper = styled(Flex)`
    max-width: 58.8rem;
    width: 100%;
    height: auto;
    margin: 0.8rem 0 2.4rem;

    div {
        width: 100%;
    }

    @media ${device.tabletS} {
        margin: 8px auto 32px;
    }

    @media ${device.mobileL} {
        width: 100%;
        height: 100%;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
        flex-direction: column;

        button {
            width: 100%;
        }
    }
`

const ButtonLearnMore = styled(LinkButton)`
    height: 4.2rem;
    line-height: 1.25;
    @media ${device.mobileL} {
        height: auto;
        width: 100%;
        margin-bottom: 16px;
        font-size: 14px;
        padding: 12px 16px;
    }
`

const ButtonDp2p = styled(Button)`
    margin-left: 1.6rem;
    @media ${device.mobileL} {
        margin-left: 0;
        width: 100%;
        font-size: 14px;
        padding: 12px 16px;
    }
`

const Dp2p = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
    }
    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    const handleExternalLink = () => {
        let link = deriv_dp2p_app_url
        if (is_mobile) {
            // TODO handle IOS case once the app is ready
            if (mobileOSDetect() === 'Android') {
                link = dp2p_google_play_url
            }
        }
        window.open(link, '_blank')
    }

    const data = useStaticQuery(query)

    type TDP2PCheckist = {
        title: TString
        subtitle: TString
    }

    const dp2p_checklist: TDP2PCheckist[] = [
        {
            title: '_t_Make speedy deposits and withdrawals_t_',
            subtitle: '_t_On DP2P, all exchanges are completed within 2 hours._t_',
        },
        {
            title: '_t_Choose the best rates_t_',
            subtitle: '_t_Exchange your local currency at your preferred rate._t_',
        },
        {
            title: '_t_Exchange with trusted traders_t_',
            subtitle:
                '_t_Traders are rated based on their completion rate and speed of exchanges._t_',
        },
        {
            title: '_t_Communicate in real-time_t_',
            subtitle: '_t_Chat in-app with your chosen trader for faster exchanges._t_',
        },
        {
            title: '_t_Get our help_t_',
            subtitle: '_t_Our support team is always ready to help resolve any disputes._t_',
        },
    ]
    return (
        <Fragment>
            <Header as="h2" size="var(--text-size-xl)" align="center" mb="1.2rem" lh="1.25">
                <Localize translate_text="_t_Deriv peer-to-peer (DP2P)_t_" />
            </Header>
            <Mobile>
                <Text align="center" size="var(--text-size-sm)">
                    <Localize translate_text="_t_A fast and secure peer-to-peer deposit and withdrawal service. Easily exchange with fellow traders to move funds in and out of your Deriv account._t_" />
                </Text>
            </Mobile>
            <Desktop>
                <Text align="center" size="var(--text-size-m)">
                    <Localize translate_text="_t_A fast and secure peer-to-peer deposit and withdrawal service._t_" />
                </Text>
                <Text align="center" size="var(--text-size-m)">
                    <Localize translate_text="_t_Easily exchange with fellow traders to move funds in and out of your Deriv account._t_" />
                </Text>
            </Desktop>
            <StyledContainer>
                <ContentLeft>
                    {dp2p_checklist.map((item, index) => (
                        <div style={{ marginBottom: '1.6rem' }} key={index}>
                            <ItemTitle>
                                <img src={Checkmark} alt="check mark" />
                                <Text
                                    size={is_mobile ? 'var(--text-size-sm)' : 'var(--text-size-m)'}
                                    weight="bold"
                                >
                                    <Localize translate_text={item.title} />
                                </Text>
                            </ItemTitle>
                            <Text
                                size={is_mobile ? 'var(--text-size-sm)' : 'var(--text-size-s)'}
                                mt="0.8rem"
                                ml="3.2rem"
                            >
                                <Localize translate_text={item.subtitle} />
                            </Text>
                        </div>
                    ))}
                </ContentLeft>
                <ContentRight>
                    <ImageWrapper ai="center">
                        <QueryImage
                            data={data['dp2p_platform']}
                            alt={localize('_t_DP2P Platform_t_')}
                            width="100%"
                        />
                    </ImageWrapper>
                    <ButtonWrapper>
                        <ButtonLearnMore tertiary to="/p2p/">
                            <Localize translate_text="_t_Learn more_t_" />
                        </ButtonLearnMore>
                        <ButtonDp2p secondary onClick={handleExternalLink}>
                            <Localize translate_text="_t_Take me to DP2P_t_" />
                        </ButtonDp2p>
                    </ButtonWrapper>
                </ContentRight>
            </StyledContainer>
        </Fragment>
    )
}

export default Dp2p
