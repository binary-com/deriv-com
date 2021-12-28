import styled, { css } from 'styled-components'
import { Box, Flex, Container } from 'components/containers'
import { LocalizedLinkText, Header, Text } from 'components/elements'
import device from 'themes/device'

export const Background = styled.div`
    background: var(--color-grey-8);
    width: 100%;
    height: 100%;

    @media ${device.laptop} {
        background-image: linear-gradient(var(--color-grey-8) 84%, var(--color-white) 20%);
    }
`
export const HeroContainer = styled(Container)`
    height: auto;
    min-height: 525px;
    padding: 76px 0 40px;
    align-items: flex-start;

    @media (max-width: 1300px) {
        min-height: 600px;
    }

    @media ${device.laptopM} {
        padding-top: 65px;
        min-height: 500px;
    }
    @media ${device.laptop} {
        width: 100%;
        max-width: 58.8rem;
        padding: 36px 16px 0;
        flex-direction: column;
    }
`
export const BreadcrumbsWrapper = styled(Container)`
    padding: 24px 0;

    @media ${device.desktopS} {
        max-width: 1200px;
        margin: 0 auto;
    }

    @media ${device.laptop} {
        width: 100%;
        max-width: 58.8rem;
        padding: 20px 16px;
        flex-direction: column;
    }
`
export const ArticleTitle = styled(Header)`
    @media ${device.desktopS} {
        font-size: 48px;
    }
`
export const HeroLeftWrapper = styled(Box)`
    max-width: 384px;
    margin-right: 24px;

    @media (max-width: 1300px) {
        max-width: 360px;
        margin-right: 16px;
    }

    @media ${device.laptop} {
        max-width: 100%;
        margin-right: 0;
    }
`
export const HeroRightWrapper = styled.div`
    position: relative;
    max-width: 792px;
    max-height: 532px;
    width: 100%;

    @media (max-width: 1300px) {
        max-width: 100%;
        max-height: 460px;
        overflow: hidden;
    }
`
export const HeroImageContainer = styled(Box)`
    position: absolute;
    top: 10%;
    right: 0%;
    overflow: hidden;
    width: 100%;

    ::before {
        content: '';
        float: left;
        padding-bottom: 60%; /* aspect-ratio 5:3 */
    }
    .standard-query-img {
        width: 100%;
        height: auto;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
    @media (max-width: 1300px) {
        position: relative;
        top: unset;
        right: unset;
        max-height: 460px;
    }

    @media ${device.laptop} {
        margin: auto;
    }

    > img {
        max-width: 100%;
        height: auto;
    }
`
export const InfoText = styled(Text)`
    @media ${device.laptop} {
        font-size: 12px;
    }
`
export const WriterImage = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    margin-right: 8px;
    overflow: hidden;

    @media ${device.laptop} {
        width: 40px;
        height: 40px;

        > img {
            max-width: 100%;
            height: auto;
        }
    }
`
export const WrittenbyText = styled(Text)`
    @media ${device.laptop} {
        font-size: 10px;
    }
`
export const BodyContainer = styled(Container)`
    align-items: flex-start;
    padding: 8rem 0 40px;

    @media ${device.laptopL} {
        padding: 4rem 0 40px;
    }

    @media ${device.laptop} {
        flex-direction: column;
        padding: 0 0 40px;
        margin-top: 24px;
        max-width: 58.8rem;
    }
`
export const LeftBodyContainerWrapper = styled(Flex)`
    max-width: 384px;
    margin-right: 24px;
    justify-content: flex-start;
`
export const RightBodyContainerWrapper = styled(Flex)`
    position: relative;
    max-width: 792px;
    width: 100%;

    @media ${device.laptop} {
        margin-top: 40px;
    }
`
export const SideBarContainer = styled(Flex)`
    max-width: 282px;

    @media ${device.laptop} {
        margin: 24px 0 32px;
    }
`
export const Tag = styled(Flex)`
    height: 22px;
    width: auto;
    color: var(--color-blue-9);
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    padding: 1px 8px 0;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 16px;
    @media ${device.laptop} {
        height: 20px;
        margin-right: 8px;
        font-size: 12px;
    }
`
const SharedHeadingStyles = css`
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 8px;
    font-weight: bold;

    > span {
        font-weight: bold !important;
    }
`
const SharedMobileHeadingStyles = css`
    font-size: 14px;
    line-height: 20px;
`

export const PreviewContainer = styled(Box)`
    font-size: 16px;
    max-width: 792px;
    width: 100%;

    & br {
        display: none;
    }
    & p {
        margin-bottom: 16px;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-left: 16px;
        margin-bottom: 16px;
        list-style-type: disc;
        margin-block-start: 10px;
        margin-block-end: 10px;

        > li {
            margin-bottom: 8px;
            padding: 0;
            line-height: 24px;
            font-size: 16px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    li > strong {
        display: inline-block;
        margin: 0 0 0 8px;
        padding: 0;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
    }
    & a {
        font-size: 16px;
        color: var(--color-red);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    & img {
        max-width: 610px;
        width: 100%;
        height: auto;
        display: block;
        margin: 16px auto;
    }
    & img[width='full'] {
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 100vw;
    }
    & h1 {
        font-size: 64px;
        line-height: 80px;
        margin-top: 32px;
        margin-bottom: 8px;
        font-weight: bold;
    }
    & h2 {
        font-size: 24px;
        line-height: 36px;
        margin-top: 40px;
        margin-bottom: 8px;
        font-weight: bold;

        > span {
            font-weight: bold !important; /* needed for overriding the default inline styles */
        }
    }
    & h3 {
        font-size: 20px;
        line-height: 30px;
        margin-top: 24px;
        margin-bottom: 8px;
        font-weight: bold;

        > span {
            font-weight: bold !important; /* needed for overriding the default inline styles */
        }
    }
    & h4 {
        ${SharedHeadingStyles}
    }
    & h5 {
        ${SharedHeadingStyles}
    }
    & h6 {
        ${SharedHeadingStyles}
    }
    & em {
        font-style: italic;
    }
    & table {
        display: block;
        margin: 0 auto 16px auto;
        height: 100%;
        max-width: fit-content;
        overflow-x: auto;
    }
    & td {
        min-width: 85px;
        padding: 6px;
    }
    @media ${device.laptop} {
        max-width: none;

        & p {
            font-size: 14px;
        }
        & ul {
            > li {
                font-size: 14px;
                line-height: 20px;
            }
        }
        & h1 {
            font-size: 32px;
            line-height: 40px;
        }
        & h2 {
            font-size: 18px;
            line-height: 26px;
        }
        & h3 {
            font-size: 16px;
            line-height: 24px;
        }
        & h4 {
            ${SharedMobileHeadingStyles}
        }
        & h5 {
            ${SharedMobileHeadingStyles}
        }
        & h6 {
            ${SharedMobileHeadingStyles}
        }
        & table {
            font-size: 12px;
        }
    }
`
export const SocialComponentsWrapper = styled(Flex)`
    justify-content: space-between;
    border-top: 1px solid var(--color-grey-6);
    padding-top: 24px;
    margin: 40px 0;
`
export const LeftSocialComponents = styled.div`
    width: 10px;
`
export const RightSocialComponents = styled.div`
    width: auto;
`
export const DesktopWrapper = styled(Flex)`
    @media ${device.laptop} {
        display: none;
    }
`
export const MobileWrapper = styled.div`
    display: none;

    @media ${device.laptop} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`
export const StyledImg = styled.img`
    margin: 0 8px;
`
export const DesktopBreadcrumbsWrapper = styled(Flex)`
    width: auto;
    @media ${device.laptop} {
        display: none;
    }
`
export const MobileBreadcrumbsWrapper = styled.div`
    display: none;

    @media ${device.laptop} {
        display: flex;
        width: 100%;
    }
`
export const StyledBreadcrumbsLink = styled(LocalizedLinkText)`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-grey-5);
`
export const StyledBreadcrumbsTitle = styled(Text)`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black-3);
`

export const Scrollbar = styled.div`
    position: fixed;
    top: 7.2rem;
    width: 100%;
    background: var(--color-grey-8);
    z-index: 100;
    @media ${device.laptop} {
        top: 67px;
    }

    @media ${device.tabletL} {
        top: 58px;
    }
`

export const ProgressContainer = styled.div`
    height: 4px;
    width: 100%;
    background: var(--color-grey-2);
`
export const ProgressBar = styled.div`
    height: 4px;
    background: var(--color-red);
    width: 0%;
`
