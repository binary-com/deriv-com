import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'components/containers/container'

const CarouselContainer = styled(Container)`
    overflow: hidden;
    justify-content: space-between;

    div {
        transition: transform ${props => (props.transition ? '1s' : '0')};
        transform: translate(${props => props.position}rem);
    }
`
const CarouselWrapper = styled.div`
    max-width: 9.6rem;
    margin-right: 3.2rem;
`
const Icons = ({ icon_array }) =>
    icon_array.map(Element => (
        <CarouselWrapper key={Element.key}>
            <Element.Component />
        </CarouselWrapper>
    ))

class AutoCarousel extends React.Component {
    interval_ref = undefined
    timeout_ref = undefined
    my_ref = React.createRef()
    state = {
        position: 0,
        transition: true,
    }
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.interval_ref = window.setInterval(
                    this.handleInterval,
                    this.props.transition_delay,
                )
            } else {
                window.clearTimeout(this.timeout_ref)
                window.clearInterval(this.interval_ref)
            }
        }
    }

    handleInterval = () => {
        this.setState({
            transition: true,
            position: this.state.position - this.props.icon_width,
        })
        this.timeout_ref = setTimeout(() => {
            const newArray = this.props.components
            const newArrayIcon = newArray.shift()
            newArray.push(newArrayIcon)
            this.setState(
                {
                    transition: false,
                    position: 0,
                },
                this.props.onChange(newArray),
            )
        }, this.props.transition_delay - 100)
    }
    componentDidMount() {
        const node = this.my_ref.current
        let observer = new IntersectionObserver(this.handler)
        observer.observe(node)
    }
    render() {
        return (
            <CarouselContainer
                ref={this.my_ref}
                transition={this.state.transition}
                position={this.state.position}
            >
                <Icons icon_array={this.props.components} />
            </CarouselContainer>
        )
    }
}

AutoCarousel.propTypes = {
    components: PropTypes.array,
    icon_width: PropTypes.number,
    onChange: PropTypes.func,
    transition_delay: PropTypes.number,
}

export default AutoCarousel
