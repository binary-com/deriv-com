import React from 'react'
import styled from 'styled-components'
import { WithIntl } from 'components/localization'

const StyledDiv = styled.div`
    font-size: 330%;
    background-color: white;
`

const AboutUs = () => {
    return <StyledDiv>About Us new page</StyledDiv>
}

AboutUs.propTypes = {
    // data: PropTypes.object,
}

export default WithIntl()(AboutUs)
