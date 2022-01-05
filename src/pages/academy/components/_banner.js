import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { cms_assets_end_point } from 'common/constants'
import device from 'themes/device'

const ParentWrapper = styled(Flex)`
    max-width: ${(props) => (props.max_w ? props.max_w : '792px')};
    margin: 0 auto;

    img {
        width: 100%;
    }

    @media ${device.laptop} {
        max-width: ${(props) => (props.max_w_tablet ? props.max_w_tablet : '100%')};
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.laptop} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;

    @media ${device.laptop} {
        display: flex;
    }
`

const Banner = ({ detailsObj, detailsPreviewObj }) => {
    return detailsObj ? (
        <ParentWrapper max_w={detailsObj.max_w_value} max_w_tablet={detailsObj.max_w_tablet}>
            <LocalizedLink
                external={detailsObj.isExternal}
                to={detailsObj.redirectLink || ''}
                rel="noopener noreferrer"
                target="_blank"
            >
                {detailsObj.imgSrcDesktop && !detailsObj.imgSrcMobile && (
                    <>
                        <QueryImage
                            data={detailsObj.imgSrcDesktop}
                            alt={detailsObj.imgAltDesktop || ''}
                        />
                    </>
                )}
                {detailsObj.imgSrcDesktop && detailsObj.imgSrcMobile && (
                    <>
                        <DesktopWrapper>
                            <QueryImage
                                data={detailsObj.imgSrcDesktop}
                                alt={detailsObj.imgAltDesktop || ''}
                            />
                        </DesktopWrapper>
                        <MobileWrapper>
                            <QueryImage
                                data={detailsObj.imgSrcMobile}
                                alt={detailsObj.imgAltMobile}
                            />
                        </MobileWrapper>
                    </>
                )}
            </LocalizedLink>
        </ParentWrapper>
    ) : (
        <ParentWrapper
            max_w={detailsPreviewObj.max_w_value}
            max_w_tablet={detailsPreviewObj.max_w_tablet}
        >
            <LocalizedLink
                external={detailsPreviewObj.isExternal}
                to={detailsPreviewObj.redirectLink}
                rel="noopener noreferrer"
                target="_blank"
            >
                {detailsPreviewObj.imgSrcDesktop && !detailsPreviewObj.imgSrcMobile && (
                    <>
                        <img
                            src={`${cms_assets_end_point}${detailsPreviewObj.imgSrcDesktop}`}
                            alt={detailsPreviewObj.imgAltDesktop || ''}
                        />
                    </>
                )}
                {detailsPreviewObj.imgSrcDesktop && detailsPreviewObj.imgSrcMobile && (
                    <>
                        <DesktopWrapper>
                            <img
                                src={`${cms_assets_end_point}${detailsPreviewObj.imgSrcDesktop}`}
                                alt={detailsPreviewObj.imgAltDesktop || ''}
                            />
                        </DesktopWrapper>
                        <MobileWrapper>
                            <img
                                src={`${cms_assets_end_point}${detailsPreviewObj.imgSrcMobile}`}
                                alt={detailsPreviewObj.imgAltMobile}
                            />
                        </MobileWrapper>
                    </>
                )}
            </LocalizedLink>
        </ParentWrapper>
    )
}

Banner.propTypes = {
    detailsObj: PropTypes.object,
    detailsPreviewObj: PropTypes.object,
}

export default Banner
