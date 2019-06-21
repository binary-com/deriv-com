import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import Image from '../elements/image';

const StyledHeader = styled.header`
    background-color: var(--background-color);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
`

const NavLeft = styled.div`
    width: 25%;
    text-align: left;
`;

const NavCenter = styled.div`
    width: 50%;
    text-align: center;
`;

const NavRight = styled.div`
    width: 25%;
    text-align: right;
`;


const LogoWrapper = styled.div`
    max-width: 50px;

`;

const StyledLink = styled((props) => <Link {...props}/>)`
    color: var(--white-color);
    text-decoration: none;
    padding: ${rem('12px')};
`;

const NavButton = styled.button`
    border: 1px solid var(--main-color);
    color: var(--main-color);
    background-color: transparent;

    &:active,
    &:focus {
        background-color: var(--main-color);
        color: var(--white-color);
    }
`

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <Wrapper>
            <NavLeft>
                <Link to='/'>
                    <LogoWrapper>
                        <Image img_name='gatsby-icon.png' alt='Deriv.com' />
                    </LogoWrapper>
                </Link>
            </NavLeft>
            <NavCenter>
                <StyledLink to='/'>
                    Home
                </StyledLink>
                <StyledLink to='/about/'>
                    about
                </StyledLink>
                <StyledLink to='/contact'>
                    contact
                </StyledLink>
                <StyledLink to='/terms-and-conditions/'>
                    terms and conditions
                </StyledLink>
            </NavCenter>
            <NavRight>
                <NavButton>Login</NavButton>
            </NavRight>
        </Wrapper>
    </StyledHeader>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
