import React from 'react'
import PropTypes from 'prop-types'
import Dbanner from './_DBanner'
// import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'
// import { WithIntl } from 'components/localization'

const DVideoBanner = ({ video_list_data }) => {
    return (
        <Flex>
            {video_list_data && video_list_data.length && <Dbanner video_list={video_list_data} />}
        </Flex>
    )
}

DVideoBanner.propTypes = {
    video_list_data: PropTypes.array,
}

export default DVideoBanner
