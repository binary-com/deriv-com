import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Text, Tabs } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { LinkButton } from 'components/form'

export const StyledContainer = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
`

export const StyledTabs = styled(Tabs)`
    width: unset;
`

export const ArticleContentWrapper = styled(Container)`
    margin-top: 24px;
    color: var(--color-white);
    @media ${device.laptopM} {
        flex-direction: column;
        width: 100%;
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
    justify-content: start;
    @media ${device.laptopM} {
        flex-direction: column;
    }
`

export const MainArticle = styled(Flex)`
    /* prettier-ignore */
    background: ${(props) =>
        props.image
            ? `linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(${props.image}) no-repeat top left`
            : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
    position: relative;
    background-size: cover;
    min-height: 464px;
    width: 792px;
    max-height: 300px;
    align-items: flex-end;
    padding-bottom: 80px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.02);
    }
    @media ${device.laptopM} {
        /* prettier-ignore */
        min-width: 328px;
        width: unset;
        padding: 0;
        background: ${(props) =>
            props.image
                ? `linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%),url(${props.image}) no-repeat top right 46.5%`
                : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
        background-size: cover;
        justify-content: flex-end;
    }

    @media ${device.tablet} {
        width: 100%;
        min-width: 270px;
    }
`

export const Description = styled.div`
    padding: 24px 40px 0 40px;

    @media ${device.laptopM} {
        padding: 30px;
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

    @media ${device.laptopM} {
        display: none;
    }
`

export const SmallArticle = styled(Flex)`
    font-size: 16px;
    height: 110px;
    margin-bottom: 22px;
    justify-content: start;
    cursor: pointer;
    transition: transform 0.3s;
    min-width: 328px;

    &:hover {
        transform: scale(1.02);
    }

    @media ${device.laptopM} {
        width: 328px;
        height: 82px;
        margin-bottom: 16px;
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
`

export const SmallArticleImage = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    object-fit: cover;
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

    @media ${device.laptopM} {
        position: static;
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
    width: unset;

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

export const SmallArticleRightContent = styled(Flex)`
    margin-left: 10px;
    flex-direction: column;
    justify-content: start;

    @media ${device.laptopM} {
        width: 185px;
        margin-left: 0;
    }
`
export const AllArticleButton = styled(LinkButton)`
    margin-top: 40px;
    margin-bottom: 80px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.laptopM} {
        width: 100%;
    }
`

export const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index: 1;
`
export const ClockIcon = styled.img`
    margin: 0 5px;
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
    height: 30px;
    justify-content: flex-start;
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
        justify-content: flex-start;
    }
`

export const SmallArticleDateTimeDesktop = styled.div`
    color: var(--color-grey-5);
    margin-top: 12px;
    width: 100%;
    font-size: 12px;
    @media ${device.laptopM} {
        display: none;
    }
`
