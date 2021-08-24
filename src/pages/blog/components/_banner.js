import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

const ParentWrapper = styled(Flex)`
    max-width: ${(props) => (props.max_w ? props.max_w : '792px')};
    margin: 0 auto;

    @media ${device.tabletS} {
        max-width: ${(props) => (props.max_w_tablet ? props.max_w_tablet : '100%')};
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.tabletS} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletS} {
        display: flex;
    }
`

const Banner = ({ detailsObj }) => {
    return (
        <ParentWrapper max_w={detailsObj.max_w_value} max_w_tablet={detailsObj.max_w_tablet}>
            <LocalizedLink
                external={detailsObj.isExternal}
                to={detailsObj.redirectLink}
                rel="noopener noreferrer"
                target="_blank"
            >
                {detailsObj.imgSrcDesktop && !detailsObj.imgSrcMobile && (
                    <>
                        <QueryImage
                            data={detailsObj.imgSrcDesktop}
                            alt={detailsObj.imgAltDesktop}
                        />
                    </>
                )}
                {detailsObj.imgSrcDesktop && detailsObj.imgSrcMobile && (
                    <>
                        <DesktopWrapper>
                            <QueryImage
                                data={detailsObj.imgSrcDesktop}
                                alt={detailsObj.imgAltDesktop}
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
    )
}

Banner.propTypes = {
    detailsObj: PropTypes.object,
}

export default Banner
