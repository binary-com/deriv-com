import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'
import Input from './input'

const Row = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    background-color: var(--color-light-grey);
    width: 50vw;
    height: 60vh;
    border-radius: 6px;

    & > div {
        flex: 1;
    }
`

const LeftContent = styled.div`
    background: var(--color-black);
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    padding: 1.4rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`

const RightContent = styled.div`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    flex-direction: column;
`

const CaptionTitle = styled.h3`
    font-size: 2rem;
    line-height: 1.25;
    max-width: 25rem;
`
const CaptionDesc = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 1.6rem;
`

const Title = styled.h2`
    font-weight: bold;
    color: var(--color-black);
    text-align: center;
    font-size: 2.8rem;
`

class Signup extends Component {
    state = {
        email: '',
    }

    handleInputChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    emailSignup = () => {
        // eslint-disable-next-line no-console
        console.log(this.state.email)
    }

    render() {
        return (
            <>
                <Row>
                    <LeftContent>
                        <CaptionTitle>
                            The ultimate trading experience is just a few clicks
                            away.
                        </CaptionTitle>
                        <CaptionDesc>
                            Go ahead, try it for yourself.
                        </CaptionDesc>
                    </LeftContent>
                    <RightContent>
                        <Title>Sign up for free now!</Title>
                        <Input
                            name="email"
                            type="email"
                            value={this.state.email}
                            label="email"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Button onClick={this.emailSignup} type="secondary">
                            Create a free account
                        </Button>
                        <label>Or sign up with</label>
                        <div>
                            <button>Google</button>
                            <button>Facebook</button>
                        </div>

                        <p>
                            Already have an account? <a href="#">Log in.</a>
                        </p>
                    </RightContent>
                </Row>
            </>
        )
    }
}

export default Signup
