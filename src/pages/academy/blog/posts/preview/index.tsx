import React, { useCallback, useEffect, useState } from 'react'
import {
    ArticleTitle,
    Background,
    HeroContainer,
    BreadcrumbsWrapper,
    HeroLeftWrapper,
    HeroRightWrapper,
    HeroImageContainer,
    InfoText,
    WriterImage,
    WrittenbyText,
    BodyContainer,
    LeftBodyContainerWrapper,
    RightBodyContainerWrapper,
    SideBarContainer,
    Tag,
    PreviewContainer,
    DesktopWrapper,
    MobileWrapper,
    StickyBreadCrumbsWrapper,
    StyledImg,
    StyledBreadcrumbsLink,
    StyledBreadcrumbsTitle,
} from '../_style'
import Banner from '../../../components/_banner'
import SocialSharing from '../../../components/_social-sharing'
import SideSubscriptionBanner from '../../../components/_side-subscription-banner'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Desktop, Mobile, Box, Flex, SectionContainer } from 'components/containers'
import { convertDate, isBrowser, getMinRead, truncateString } from 'common/utility'
import { handleTag } from 'pages/academy/components/_utility'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { cms_assets_end_point, cms_end_point } from 'common/constants'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useWindowSize } from 'components/hooks/use-window-size'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

export const useTruncateLength = () => {
    const size = useWindowSize()
    if (size.width < 400) return 15
    else if (size.width < 475) return 30
    else return 60
}

const BlogPreview = () => {
    const [is_mobile] = useBrowserResize(972)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded()
    const [data, setData] = useState(null)
    const [id, setId] = useState(null)
    const end_point_url = `${cms_end_point}/items/blog/`

    useEffect(() => {
        if (is_mounted) {
            window.scrollTo(0, 0)
            handleScroll()
        }
    }, [is_mounted])

    const truncateLength = useTruncateLength()

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY
        setPrevScrollPos(currentScrollPos)
        setVisible(currentScrollPos > 72)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    useEffect(() => {
        const getPreviewId = () => {
            if (isBrowser()) {
                const query_string = window.location.search
                const url_params = new URLSearchParams(query_string)
                const params = url_params.get('id')
                if (params) {
                    setId(params)
                }
            }
        }

        const fetchBlogPreview = async () => {
            const url = `${end_point_url}${id}?access_token=${process.env.GATSBY_DIRECTUS_AUTH_TOKEN}&fields=*.*.*.*.*`
            const res = await fetch(url, { cache: 'no-store' })
            return await res.json()
        }

        const getPreviews = async () => {
            const dataFromServer = await fetchBlogPreview()
            setData(dataFromServer)
            if (dataFromServer) {
                window.scrollTo(0, 0)
            }
        }

        getPreviewId()
        if (id) {
            getPreviews()
        }
    }, [id])

    const post_data = data?.data
    const article_title = post_data?.blog_title
    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: true,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.id,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: true,
        redirectLink: footer_banner_data?.cta_url,
        imgSrcDesktop: footer_banner_data?.desktop_banner_image?.id,
        imgSrcMobile: footer_banner_data?.mobile_banner_image?.id,
    }

    return (
        <Layout type="academy" margin_top={'14.4'}>
            <div>abar</div>
        </Layout>
    )
}

export default WithIntl()(BlogPreview)
