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
const Icons = props =>
    props.iconsArray.map(Element => (
        <CarouselWrapper key={Element.key}>
            <Element.Component />
        </CarouselWrapper>
    ))

class AutoCarousel extends React.Component {
    intervalRef = undefined
    timeoutRef = undefined
    MyRef = React.createRef()
    state = {
        position: 0,
        transition: true,
    }
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.intervalRef = window.setInterval(
                    this.handleInterval,
                    this.props.transition_delay,
                )
            } else {
                window.clearTimeout(this.timeoutRef)
                window.clearInterval(this.intervalRef)
            }
        }
    }

    handleInterval = () => {
        this.setState({
            transition: true,
            position: this.state.position - 12.8,
        })
        this.timeoutRef = setTimeout(() => {
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
        const node = this.MyRef.current
        let observer = new IntersectionObserver(this.handler)
        observer.observe(node)
    }
    render() {
        return (
            <CarouselContainer
                ref={this.MyRef}
                transition={this.state.transition}
                position={this.state.position}
            >
                <Icons iconsArray={this.props.components} />
            </CarouselContainer>
        )
    }
}

AutoCarousel.propTypes = {
    components: PropTypes.array,
    onChange: PropTypes.func,
    transition_delay: PropTypes.number,
}

export default AutoCarousel
