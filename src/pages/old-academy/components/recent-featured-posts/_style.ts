import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Text, Tabs, Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { LinkButton } from 'components/form'

export const StyledContainer = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }

    @media ${device.laptopM} {
        max-width: 58.8rem;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`

export const StyledTabs = styled(Tabs)`
    width: unset;
`

export const ArticleContentWrapper = styled(Container)`
    margin-top: 24px;
    color: var(--color-white);
    width: 100%;

    @media ${device.laptopM} {
        flex-direction: column;
        width: 100%;
    }

    @media ${device.mobileL} {
        margin: 24px auto 0;
        padding: 0 16px 0 18px;
    }
`

export const LeftContent = styled(Flex)`
    justify-content: start;
    margin-right: 10px;
    @media ${device.laptopM} {
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const RightContent = styled(Flex)`
    flex-direction: column;
    justify-content: start;
    max-height: 464px;
    padding-right: 8px;
    overflow: hidden scroll;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background: var(--color-white);
    }
    &::-webkit-scrollbar-thumb {
        background: var(--color-grey-7);
        border-radius: 4px;
    }

    @media ${device.desktopL} {
        max-height: 600px;
    }
    @media (max-width: 1280px) {
        max-height: 432px;
    }
`

export const MainArticle = styled(Flex)`
    position: relative;
    background-size: cover;
    max-height: 464px;
    width: 792px;
    align-items: flex-end;
    cursor: pointer;
    transition: transform 0.3s;
    border-radius: 8px;
    overflow: hidden;
    transform: translateZ(0);

    ::before {
        content: '';
        float: left;
        padding-bottom: 60%; /* aspect-ratio 5:3 */
    }
    &:hover {
        transform: scale(1.02);
    }

    @media ${device.desktopL} {
        width: 1000px;
        max-height: 600px;
    }

    @media (max-width: 1280px) {
        width: 720px;
    }

    @media ${device.laptopM} {
        max-width: 58.8rem;
        width: 90vw;
        padding: 0;
        background-size: cover;
        justify-content: flex-end;

        ::before {
            padding-bottom: 166%; /* aspect-ratio 3:5 */
        }
    }

    @media ${device.tablet} {
        min-width: 270px;
    }
`

export const BackgroundImageWrapper = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    z-index: 1;
`
export const BackgroundImageContainer = styled(Flex)`
    & > div {
        width: 100%;
    }
`
export const GradientWrapper = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(
        251.14deg,
        rgba(14, 14, 14, 0.5632) 29.18%,
        rgba(7, 6, 6, 0.88) 85.14%
    );
    z-index: 2;

    @media ${device.tabletL} {
        background: linear-gradient(
            251.14deg,
            rgba(14, 14, 14, 0.5632) 29.18%,
            rgba(7, 6, 6, 0.88) 85.14%
        );
    }
`

export const Description = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 24px 40px 0 40px;
    margin-bottom: 80px;
    z-index: 3;

    @media ${device.laptopM} {
        padding: 30px;
        margin-bottom: 0;
    }
`

export const TagParentWrapper = styled(Flex)`
    height: 22px;
    justify-content: flex-start;
    margin-bottom: 10px;
    @media ${device.laptopM} {
        margin-bottom: 8px;
    }
`
export const TagWrapper = styled(Flex)`
    width: auto;
    padding: 1px 8px;
    border-radius: 8px;
    align-items: center;
`

export const StyledCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-yellow-2);
    color: var(--color-yellow-3);
    padding: 2px 8px 0;
    margin: 0 8px 8px -10px;
`

export const BottomDescription = styled(Flex)`
    position: absolute;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 40px;
    height: 66px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: rgba(14, 14, 14, 0.6);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    flex: none;
    order: 1;
    flex-grow: 0;
    color: var(--color-white);
    z-index: 3;

    @media ${device.laptopM} {
        display: none;
    }
`

export const SmallArticle = styled(Flex)`
    font-size: 16px;
    margin-bottom: 22px;
    cursor: pointer;
    transition: transform 0.3s;
    min-width: 328px;
    justify-content: unset;

    &:hover {
        transform: scale(1.02);
    }

    @media ${device.laptopM} {
        height: auto;
        margin-bottom: 16px;
        min-width: unset;
    }
`

export const SmallArticleImageWrapper = styled.div`
    height: 102px;
    width: 104px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media ${device.laptopM} {
        height: 78px;
    }

    &.small-article-bg {
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        object-fit: cover;
        opacity: 0.8;
    }
`

export const SmallArticleCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 2px 8px 0;
    margin: 0 8px 8px -4px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
    display: inline-block;

    @media ${device.laptopM} {
        position: static;
        height: 18px;
        padding: 0 8px 0;
        font-size: 10px;
    }
`

export const SmallArticleBottomContent = styled.div`
    color: var(--color-grey-5);
    margin-top: 18px;
    width: 100%;
    font-size: 12px;
`

export const SmallArticleLeftContent = styled(Flex)`
    margin-left: 15px;
    margin-right: 10px;
    align-items: flex-start;
    width: unset;

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

export const SmallArticleRightContent = styled(Flex)`
    margin-left: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${device.laptopM} {
        justify-content: flex-start;
        /* stylelint-disable */
        -webkit-justify-content: flex-start;
        /* stylelint-enable */
    }

    @media (max-width: 425px) {
        margin-left: 0;
    }
`
export const AllArticleButton = styled(LinkButton)`
    margin-top: 40px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.laptopM} {
        width: 100%;
    }

    @media ${device.mobileL} {
        width: 90%;
        margin-top: 24px;
    }
`

export const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index: 1;
`
export const ClockIcon = styled.img`
    margin: 0 5px 2px 18px;
    color: var(--color-white);
`

export const DotIcon = styled.img`
    margin: 2px 4px;
    color: var(--color-white);
`

export const MobileDotIcon = styled(DotIcon)`
    height: 5px;
`

export const SmallArticleTopContent = styled(Flex)`
    color: black;
    flex-direction: column;
    height: auto;

    @media ${device.tabletL} {
        flex: 0;
    }

    @media ${device.laptopM} {
        flex-direction: row;
    }
`

export const SmallArticleCategoryWrapper = styled(Flex)`
    justify-content: start;
    @media ${device.laptopM} {
        flex-direction: row;
    }
`

export const SmallArticleDateTimeMobile = styled(Flex)`
    color: var(--color-grey-5);
    width: 100%;
    height: 20px;
    font-size: 12px;
    margin-top: 6px;
    display: none;
    @media ${device.laptopM} {
        margin-left: 5px;
        display: flex;
        font-size: 10px;
        justify-content: flex-end;
        white-space: nowrap;
    }
`

export const SmallArticleDateTimeDesktop = styled.div`
    color: var(--color-grey-5);
    margin-top: 12px;
    width: 100%;
    font-size: 12px;
`

export const MobileHeader = styled(Header)`
    display: none;
    @media ${device.laptopM} {
        display: inline;
    }
`
