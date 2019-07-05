import React, { Component } from 'react'

import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import Modal from '../components/elements/modal'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'

class Home extends Component {
    state = {
        show_modal: false,
    }

    toggleModal = e => {
        e.stopPropagation()
        this.setState({
            show_modal: !this.state.show_modal,
        })
    }

    closeModal = () => {
        this.setState({
            show_modal: false,
        })
    }

    render() {
        return (
            <Layout>
                <SEO title={localize('Home')} />
                <div>
                    <Button onClick={this.toggleModal} secondary>
                        secondary button example
                    </Button>
                </div>
                <Modal
                    toggle={this.toggleModal}
                    is_open={this.state.show_modal}
                    is_blurred={true}
                    closeModal={this.closeModal}
                >
                    <SignupModal />
                </Modal>
            </Layout>
        )
    }
}

export default WithIntl()(Home)
