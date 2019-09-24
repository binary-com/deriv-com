import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalWrapper = styled.article`
    background-color: var(--color-grey-1);
    box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22);
    max-width: 60.2rem;
    border-radius: 6px;
    overflow: auto;
    padding: 5.6rem 6rem;
`

const BasicModal = ({ children }) => <ModalWrapper>{children}</ModalWrapper>

BasicModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default BasicModal
