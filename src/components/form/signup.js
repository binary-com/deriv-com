import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'
import Input from './input'
import Row from '../containers/row'
import Facebook from 'images/svg/facebook.svg'
import Google from 'images/svg/google.svg'

const Title = styled.h2`
    font-weight: bold;
    color: var(--color-black);
    text-align: center;
    font-size: 3.2rem;
    margin: 10rem 0 1.6rem 0;
`

const InputGroup = styled.div`
    width: 85%;
    margin: 2.4rem 0;
`

const EmailButton = styled(Button)`
    width: 87%;
    font-size: 1.6rem;
    margin-bottom: 4rem;
`

const SocialButton = styled(Button)`
    box-shadow: none;
    background: ${props => {
        if (props.provider === 'google') return 'var(--color-white)'
        if (props.provider === 'facebook') return 'var(--color-blue)'
    }};
    padding: 1rem;
    margin: 0 0.5rem;
`

const Text = styled.p`
    text-align: left;
    font-size: 1.6rem;
    color: var(--color-grey);
    margin: 0 2.4rem;
    align-self: start;
`

const SocialWrapper = styled(Row)`
    width: 90%;
    justify-content: space-between;
    margin-top: 1.6rem;
    margin-bottom: 4rem;
`

const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-bottom: 8rem;
`

const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
`

class Signup extends Component {
    state = {
        email: '',
    }

    handleInputChange = e => {
        e.preventDefault()
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleEmailSignup = e => {
        e.preventDefault()
        // eslint-disable-next-line no-console
        console.log(this.state.email)
    }

    handleSocialSignup = e => {
        // eslint-disable-next-line no-console
        console.log(e.target.id)
    }

    handleLogin = () => {
        // eslint-disable-next-line no-console
        console.log('Hi login')
    }

    render() {
        return (
            <form onSubmit={this.handleEmailSignup}>
                <Title>Sign up for free now!</Title>
                <InputGroup>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        label="Email"
                        onChange={this.handleInputChange}
                        required
                    />
                </InputGroup>
                <EmailButton secondary>Create a free account</EmailButton>
                <Text>Or sign up with</Text>
                <SocialWrapper>
                    <SocialButton
                        onClick={this.handleSocialSignup}
                        provider="google"
                        id="google"
                        type="button"
                        secondary
                    >
                        <span>
                            <Google />
                        </span>
                    </SocialButton>
                    <SocialButton
                        onClick={this.handleSocialSignup}
                        provider="facebook"
                        id="facebook"
                        type="button"
                        secondary
                    >
                        <span>
                            <Facebook />
                        </span>
                    </SocialButton>
                </SocialWrapper>
                <LoginText>
                    Already have an account?
                    <LoginLink onClick={this.handleLogin}> Log in.</LoginLink>
                </LoginText>
            </form>
        )
    }
}

export default Signup
