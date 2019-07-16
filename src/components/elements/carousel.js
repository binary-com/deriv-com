import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 5.4rem 0 5.8rem 8.7rem;
    background-color: var(--color-white);

    .bullet-area {
        padding-top: 5.6rem;
    }
`

class Carousel extends React.Component {
    state = {
        active_slide: this.props.slides[0],
    }
    slidesClicked = e => {
        this.setState({
            active_slide: this.props.slides[e.target.name],
        })
    }

    render() {
        const ActiveSlide = this.state.active_slide
        return (
            <Wrapper className='carousel-container'>
                <ActiveSlide />
                <div className="bullet-area">
                    {this.props.slides.map((Slide, index) => (
                        <button
                            name={index}
                            key={index}
                            onClick={e => this.slidesClicked(e)}
                        />
                    ))}
                </div>
            </Wrapper>
        )
    }
}

Carousel.propTypes = {
    slides: PropTypes.array,
}
export default Carousel
