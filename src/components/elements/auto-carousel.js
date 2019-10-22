import React, { createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { isBrowser } from 'common/utility'

const AutoCarouselSection = styled.section`
    width: ${props => props.width};
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
`
const move_items = total_translate => keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-${total_translate}px);
    }
`
const ItemsWrapper = styled.div`
    /* width: TODO: fix this ${props => props.total_translate}px; */
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    animation-name: ${props =>
        props.total_translate !== 0 && props.should_carousel_move
            ? move_items(props.total_translate)
            : ''};
    animation-duration: ${props => props.transition_duration}ms;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.animation_status};
    transform: translateZ(0) scale(1.0, 1.0);
    backface-visibility: hidden;
    cursor: default;
`
class AutoCarousel extends React.PureComponent {
    my_ref = createRef()
    // carousel_width: define carousel's width by percentage
    // items_padding: define items padding by pixle
    // transition_duaration: takes a whole loop, define it by ms
    state = {
        transition: false,
        items: [],
        carousel_width: 0,
        should_carousel_move: false,
        total_translate: 0,
        animation_status: 'running',
    }
    // every time you observe this, the carousel will restart from first child component
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.setState({
                    should_carousel_move: true,
                })
            } else {
                this.setState({
                    should_carousel_move: false,
                })
            }
        }
    }
    observer = isBrowser() && new window.IntersectionObserver(this.handler)
    componentDidMount() {
        this.setState({ total_translate: this.my_ref.current.offsetWidth * 2 })
        this.observer.observe(this.my_ref.current)
    }
    componentWillUnmount() {
        this.observer.disconnect()
    }
    pauseAnimation = () => {
        this.setState({ animation_status: 'paused' })
    }

    playAnimation = () => {
        this.setState({ animation_status: 'running' })
    }

    render() {
        return (
            <>
                <AutoCarouselSection
                    width={this.props.carousel_width}
                    ref={this.my_ref}
                    onMouseEnter={this.pauseAnimation}
                    onMouseLeave={this.playAnimation}
                >
                    {/* We need to render this wrapper two times to fill the empty space at the end of the Carousel's section */}
                    {[0, 1].map(i => (
                        <ItemsWrapper
                            animation_status={this.state.animation_status}
                            transition_duration={this.props.transition_duration}
                            total_translate={this.state.total_translate}
                            key={i}
                            should_carousel_move={
                                this.state.should_carousel_move
                            }
                        >
                            {this.props.children}
                        </ItemsWrapper>
                    ))}
                </AutoCarouselSection>
            </>
        )
    }
}

AutoCarousel.propTypes = {
    carousel_width: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    items_padding: PropTypes.number,
    transition_duration: PropTypes.number,
}
export default AutoCarousel
