import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device'
import TradingIcon from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import LeverageIcon from 'images/svg/jump-indices/jump-indices-high-leverage.svg'
import { ContentType } from 'pages/landing/_types'

const MainWrapper = styled(Flex)`
    background: var(--color-white);
    margin: 0 auto;
    padding: 0 120px;
    flex-direction: column;

    @media ${device.tabletL} {
        margin: 0 auto;
        padding: 0 16px;
    }
`
const ParentWrapper = styled(Flex)`
    align-items: flex-start;
    max-width: 1200px;
    padding-bottom: 80px;
    margin: 0 auto;
    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
    }
`
const EachWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    flex-direction: column;

    :first-child {
        margin-right: 24px;
    }

    @media ${device.tabletL} {
        max-width: 58.8rem;
        width: 100%;

        :first-child {
            margin-right: 0;
            margin-bottom: 40px;
        }
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    text-align: center;
`
const StyledHeaderSmall = styled(Header)`
    text-align: center;
    line-height: 36px;

    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
    }
`
const ImgWrapper = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
    @media ${device.tabletL} {
        margin-bottom: 16px;
    }
`
const BtnWrapper = styled(Flex)`
    padding-bottom: 80px;
    @media ${device.tabletL} {
        padding-bottom: 40px;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 11px 16px;
`

const content: ContentType[] = [
    {
        imgsrc: TradingIcon,
        header: <Localize translate_text="Available 24/7" />,
        title: (
            <Localize translate_text="As jump indices are synthetics, you can trade them 24/7, 365 days of the year." />
        ),
    },
    {
        imgsrc: LeverageIcon,
        header: <Localize translate_text="High leverage" />,
        title: (
            <Localize translate_text="Trade with high leverage ratios to have even more opportunities to increase your position size." />
        ),
    },
]
const Leverages = () => {
    // the is mounted check is used for making sure the localized link text
    // properly renders the correct domain url
    const [is_mounted] = usePageLoaded()

    return (
        <MainWrapper>
            <ParentWrapper>
                {content.map((item, index) => (
                    <EachWrapper key={`key-${index}`}>
                        <ImgWrapper src={item.imgsrc} />
                        <StyledHeader type="section-title">{item.header}</StyledHeader>
                        <StyledHeaderSmall type="sub-section-title" weight="normal">
                            {item.title}
                        </StyledHeaderSmall>
                    </EachWrapper>
                ))}
            </ParentWrapper>
            <BtnWrapper>
                {is_mounted && (
                    <StyledLinkButton
                        secondary
                        external
                        type="deriv_app"
                        to="/mt5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Start trading')}
                    </StyledLinkButton>
                )}
            </BtnWrapper>
        </MainWrapper>
    )
}

export default Leverages
