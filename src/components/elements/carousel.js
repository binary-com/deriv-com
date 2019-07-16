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

    .bullet-area {
        position: absolute;
        bottom: 5.8rem;
        
        button {
            margin-top: 0;
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            margin-right: 1.25rem;
            outline: none;
        }
    }
    .background {
        position: absolute;
        right: 0;
        bottom: 0;
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
        const ActiveSlide = this.state.active_slide;
        const Background = this.props.background;
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
                <Background className='background'/>
            </Wrapper>
        )
    }
}

Carousel.propTypes = {
    background: PropTypes.func,
    slides: PropTypes.array,
}
export default Carousel
