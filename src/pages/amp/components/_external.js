import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
    height: 1px;
    width: 1px;
`

const External = () => {
    return (
        <Container>
            <amp-iframe
                width="1px"
                height="1px"
                sandbox="allow-scripts allow-same-origin"
                layout="responsive"
                frameborder="0"
                src="https://admaxium.com/safeframe/"
            ></amp-iframe>
        </Container>
    )
}

External.propTypes = {
    children: PropTypes.nodes,
}

export default External
