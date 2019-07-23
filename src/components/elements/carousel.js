import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 5.4rem 0 5.8rem 8.7rem;
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
        right: 0;
        bottom: 0;
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
    margin-right: 1.25rem;
    outline: none;
    cursor: pointer;
    padding: 0;
    ${props => {
        return props.is_active === 'active'
            ? `background-color: var(--color-black-4);
            border-color: var(--color-black-4);`
            : `background-color: var(--color-grey-1);
        border-color: var(--color-grey-1);`
    }}
`

class Carousel extends React.Component {
    state = {
        active_slide: this.props.slides[0],
        active_bullet: 'bullet-0',
    }
    handleClick = e => {
        this.setState({
            active_slide: this.props.slides[e.target.name],
            active_bullet: 'bullet-' + e.target.name,
        })
        e.target.add
    }

    render() {
        const ActiveSlide = this.state.active_slide
        const Background = this.props.background
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
                            aria-label='carousel-button'
                        />
                    ))}
                </BulletArea>
                <Background />
            </Wrapper>
        )
    }
}

Carousel.propTypes = {
    background: PropTypes.func,
    slides: PropTypes.array,
}
export default Carousel
