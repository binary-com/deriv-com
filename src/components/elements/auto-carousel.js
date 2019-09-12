import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AutoCarouselSection = styled.section`
    width: ${props => props.width};
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`
const ItemContainer = styled.div`
    padding: 0 ${props => props.padding / 2}px;
    transition: transform
        ${props => (props.transition ? props.transition_duration : '0')}ms
        ${props => props.transition_timing_function};
    transform: translate(-${props => props.movable_item_width}px);
`
class AutoCarousel extends React.Component {
    interval_ref = undefined
    timeout_ref = undefined
    total_delay =
        this.props.transition_duration + this.props.transition_delay + 100
    my_ref = React.createRef()
    constructor(props) {
        super(props)
        this.state = {
            transition: false,
            items: [],
            movable_item_width: 0,
        }
    }
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.interval_ref = window.setInterval(
                    this.handleInterval,
                    this.total_delay,
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
            movable_item_width: this.my_ref.current.firstChild.offsetWidth,
        })
        this.timeout_ref = setTimeout(() => {
            const newItems = this.state.items
            newItems.push(newItems.shift())
            this.setState({
                transition: false,
                items: newItems,
                movable_item_width: 0,
            })
        }, this.total_delay - 100)
    }
    componentDidMount() {
        let observer = new IntersectionObserver(this.handler)
        observer.observe(this.my_ref.current)
    }
    static getDerivedStateFromProps(props, state) {
        if (state.items.length === 0) {
            const newItems = props.items.map((item, index) => ({
                Component: item,
                key: index,
            }))
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
                        ? this.state.items.map(({ Component, key }) => (
                              <ItemContainer
                                  key={key}
                                  padding={this.props.items_padding}
                                  movable_item_width={
                                      this.state.movable_item_width
                                  }
                                  transition={this.state.transition}
                                  transition_duration={
                                      this.props.transition_duration
                                  }
                                  transition_timing_function={
                                      this.props.transition_timing_function
                                  }
                              >
                                      <Component />
                              </ItemContainer>
                          ))
                        : null}
                </AutoCarouselSection>
            </>
        )
    }
}
AutoCarousel.propTypes = {
    carousel_width: PropTypes.string,
    items: PropTypes.Array,
    items_padding: PropTypes.number,
    transition_delay:PropTypes.number,
    transition_duration: PropTypes.number,
    transition_timing_function: PropTypes.string,
}
export default AutoCarousel