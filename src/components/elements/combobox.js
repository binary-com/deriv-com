import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import Chevron from 'images/svg/chevron.svg'

const StyledMenu = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-red);
    display: flex;
    justify-content: space-between;
    font-size: var(--text-size-sm);
    color: var(--color-red);

    & > p,
    a {
        color: var(--color-red);
    }
`
let chevronClass = 'chevron-down'
let has_hash_routing

const ChevronWrapper = styled(Chevron)`
    &.chevron-up {
        transform: rotate(0deg);
    }
    &.chevron-down {
        transform: rotate(180deg);
    }
`
class Dropdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayMenu: false,
            activeMenuText: this.props.activeMenu(),
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this)
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
        has_hash_routing = this.props.has_hash_routing
    }

    showDropdownMenu(event) {
        event.preventDefault()
        this.setState({ displayMenu: true, activeMenuText: '-' }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })

        chevronClass = 'chevron-up'
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        })

        chevronClass = 'chevron-down'
    }

    handleClick(label) {
        this.setState({
            displayMenu: false,
            activeMenuText: label,
        })
        if (has_hash_routing) navigate(`#${label}`)
    }

    render() {
        return (
            <div>
                <StyledMenu onClick={this.showDropdownMenu}>
                    {this.state.activeMenuText}
                    <ChevronWrapper className={chevronClass} />
                </StyledMenu>

                {this.state.displayMenu ? (
                    <ul>
                        {this.props.children.map((child, idx) => {
                            return (
                                <StyledMenu
                                    key={idx}
                                    onClick={() =>
                                        this.handleClick(child.props.label)
                                    }
                                >
                                    {child}
                                </StyledMenu>
                            )
                        })}
                    </ul>
                ) : null}
            </div>
        )
    }
}
Dropdown.propTypes = {
    activeMenu: PropTypes.func,
    children: PropTypes.instanceOf(Array).isRequired,
    has_hash_routing: PropTypes.bool,
}
export default Dropdown
