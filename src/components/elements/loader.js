import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
    width: 100%;
    background: var(--color-grey-1);
    position: relative;
    height: 3px;
    border-radius: 6px;
`

const LoaderProgress = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-green);
    width: ${props => props.progress || 0}%;
    border-radius: 6px;
    transition: width 0.25s;
`

const Loader = ({ progress }) => (
    <LoaderWrapper>
        <LoaderProgress progress={progress} />
    </LoaderWrapper>
)

Loader.propTypes = {
    progress: PropTypes.number,
}

export default Loader
