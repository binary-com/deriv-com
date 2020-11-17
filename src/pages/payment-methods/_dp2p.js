import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device, { size } from 'themes/device'
import { Text, Header, QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import { Button, LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import { isBrowser, deriv_dp2p_app_url, dp2p_google_play_url } from 'common/utility'
import Checkmark from 'images/svg/checkmark.svg'

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
        margin: 0.8rem auto 3.2rem;
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
    height: 4rem;
    @media ${device.mobileL} {
        margin-bottom: 1.6rem;
        width: 100%;
    }
`

const ButtonDp2p = styled(Button)`
    margin-left: 1.6rem;
    height: 4rem;
    @media ${device.mobileL} {
        margin-left: 0;
        width: 100%;
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
        const link = is_mobile ? dp2p_google_play_url : deriv_dp2p_app_url
        window.open(link, '_blank')
    }

    const data = useStaticQuery(query)
    const dp2p_checklist = [
        {
            title: <Localize translate_text="Make speedy deposits and withdrawals" />,
            subtitle: (
                <Localize translate_text="On DP2P, all exchanges are completed within 2 hours." />
            ),
        },
        {
            title: <Localize translate_text="Choose the best rates" />,
            subtitle: (
                <Localize translate_text="Exchange your local currency at your preferred rate." />
            ),
        },
        {
            title: <Localize translate_text="Exchange with trusted traders" />,
            subtitle: (
                <Localize translate_text="Traders are rated based on their completion rate and speed of exchanges." />
            ),
        },
        {
            title: <Localize translate_text="Communicate in real-time" />,
            subtitle: (
                <Localize translate_text="Chat in-app with your chosen trader for faster exchanges." />
            ),
        },
        {
            title: <Localize translate_text="Get our help" />,
            subtitle: (
                <Localize translate_text="Our support team is always ready to help resolve any disputes." />
            ),
        },
    ]
    return (
        <Fragment>
            <Header as="h2" size="var(--text-size-xl)" align="center" mb="1.2rem" lh="1.25">
                {localize('Deriv peer-to-peer (DP2P)')}
            </Header>
            {is_mobile ? (
                <Text align="center" size="var(--text-size-sm)">
                    {localize(
                        'A fast and secure peer-to-peer deposit and withdrawal service. Easily exchange with fellow traders to move funds in and out of your Deriv account.',
                    )}
                </Text>
            ) : (
                <Fragment>
                    <Text align="center" size="var(--text-size-m)">
                        {localize('A fast and secure peer-to-peer deposit and withdrawal service.')}
                    </Text>
                    <Text align="center" size="var(--text-size-m)">
                        {localize(
                            'Easily exchange with fellow traders to move funds in and out of your Deriv account.',
                        )}
                    </Text>
                </Fragment>
            )}
            <StyledContainer>
                <ContentLeft>
                    {dp2p_checklist.map((item, index) => (
                        <div style={{ marginBottom: '1.6rem' }} key={index}>
                            <ItemTitle>
                                <img src={Checkmark} />
                                <Text
                                    size={is_mobile ? 'var(--text-size-sm)' : 'var(--text-size-m)'}
                                    weight="bold"
                                >
                                    {item.title}
                                </Text>
                            </ItemTitle>
                            <Text
                                size={is_mobile ? 'var(--text-size-sm)' : 'var(--text-size-s)'}
                                mt="0.8rem"
                                ml="3.2rem"
                            >
                                {item.subtitle}
                            </Text>
                        </div>
                    ))}
                </ContentLeft>
                <ContentRight>
                    <ImageWrapper ai="center">
                        <QueryImage
                            data={data['dp2p_platform']}
                            alt={localize('DP2P Platform')}
                            width="100%"
                        />
                    </ImageWrapper>
                    <ButtonWrapper>
                        <ButtonLearnMore tertiary to="/p2p/v1">
                            {localize('Learn more')}
                        </ButtonLearnMore>
                        <ButtonDp2p secondary="true" onClick={handleExternalLink} target="_blank">
                            {localize('Take me to DP2P')}
                        </ButtonDp2p>
                    </ButtonWrapper>
                </ContentRight>
            </StyledContainer>
        </Fragment>
    )
}

export default Dp2p
