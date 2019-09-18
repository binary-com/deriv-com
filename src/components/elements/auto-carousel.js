import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const AutoCarouselSection = styled.section`
    width: ${props => props.width};
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    margin: 0 auto;
`
const move_items = count_child => keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-${count_child}%);
    }
`
const ItemContainer = styled.div`
    padding: 0 ${props => props.padding / 2}px;
    animation-name: ${props =>
        props.should_carousel_move ? move_items(props.count_child * 100) : ''};
    animation-duration: ${props => props.transition_duration}ms;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`
class AutoCarousel extends React.PureComponent {
    // carousel_width: define carousel's width by percentage
    // items_padding: define items padding by pixle
    // transition_duaration: takes a whole loop, define it by ms
    my_ref = React.createRef()
    constructor(props) {
        super(props)
        this.state = {
            transition: false,
            items: [],
            carousel_width: 0,
            should_carousel_move: false,
        }
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
    componentDidMount() {
        let observer = new IntersectionObserver(this.handler)
        observer.observe(this.my_ref.current)
    }
    static getDerivedStateFromProps(props, state) {
        if (state.items.length === 0) {
            const newItems = [...props.children, ...props.children].map(
                (item, index) => ({
                    Component: item,
                    key: index,
                }),
            )
            return { items: newItems }
        }
        return null
    }
    render() {
        return (
            <>
                <AutoCarouselSection
                    width={this.props.carousel_width}
                    ref={this.my_ref}
                >
                    {this.state.items !== []
                        ? this.state.items.map(({ Component, key }) => {
                              return (
                                  <ItemContainer
                                      should_carousel_move={
                                          this.state.should_carousel_move
                                      }
                                      key={key}
                                      padding={this.props.items_padding}
                                      transition={this.state.transition}
                                      transition_duration={
                                          this.props.transition_duration
                                      }
                                      count_child={this.props.children.length}
                                  >
                                      {Component}
                                  </ItemContainer>
                              )
                          })
                        : null}
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
