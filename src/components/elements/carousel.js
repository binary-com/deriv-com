import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 4rem 0 4rem 5.6rem;
    background-color: var(--color-white);
    min-height: 41.8rem;
    border-radius: 1rem;
    position: relative;
    height: 41.8rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 79.7rem;

    & > svg {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
    }
`
const BulletArea = styled.div`
    position: absolute;
    bottom: 5.8rem;
`
const Bullet = styled.button`
    margin-top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    border: none;
    margin-right: 1.25rem;
    outline: none;
    cursor: pointer;
    padding: 0;
    background-color: var(--color-black-3);
    ${props => {
        return props.is_active === 'active' ? '' : 'opacity: 0.24;'
    }}
`

class Carousel extends React.Component {
    state = {
        active_slide: this.props.slides[0],
        active_background: this.props.background[0],
        active_bullet: 'bullet-0',
    }
    handleClick = e => {
        this.setState({
            active_slide: this.props.slides[e.target.name],
            active_background: this.props.background[e.target.name],
            active_bullet: 'bullet-' + e.target.name,
        })
        e.target.add
    }

    render() {
        const ActiveSlide = this.state.active_slide
        const Background = this.state.active_background
        return (
            <Wrapper>
                <ActiveSlide />
                <BulletArea>
                    {this.props.slides.map((Slide, index) => (
                        <Bullet
                            name={index}
                            key={index}
                            is_active={
                                this.state.active_bullet === 'bullet-' + index
                                    ? 'active'
                                    : 'not-active'
                            }
                            onClick={e => this.handleClick(e)}
                            aria-label="carousel-button"
                        />
                    ))}
                </BulletArea>
                <Background />
            </Wrapper>
        )
    }
}

Carousel.propTypes = {
    background: PropTypes.array,
    slides: PropTypes.array,
}
export default Carousel
