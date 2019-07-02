import React, { Component } from 'react'
import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    height: 100%;
    width: 100%;

    & > div {
        flex: 1;
    }
`

const LeftContent = styled.div`
    background: var(--color-black);
    justify-content: center;
    align-items: center;
`
const RightContent = styled.div`
    background: var(--color-light-grey);
    justify-content: center;
    align-items: center;
`
class Signup extends Component {
    state = {
        show_modal: false,
    }

    toggleModal = e => {
        e.stopPropagation()
        this.setState({
            show_modal: !this.state.show_modal,
        })
    }

    render() {
        return (
            <>
                <Row>
                    <LeftContent />
                    <RightContent />
                </Row>
            </>
        )
    }
}

export default Signup
